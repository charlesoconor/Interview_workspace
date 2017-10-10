/*
 * lru_cache.h
 * Copyright (C) 2017-10-06 14:21 charlesoconor <coconor@umich.edu>
 *
 */

#ifndef LRU_CACHE_H
#define LRU_CACHE_H

#include <map>
#include <cassert>

#include <iostream>

class LRUCache {
  private:
    struct Node {
      Node* next = nullptr;
      Node* prev = nullptr;
      int key = 0;
      int data = 0;
    };

  public:
    LRUCache(const int capacityIn): capacity(capacityIn) {
      Node* head = new Node();
      Node* curNode = head;

      for (size_t i = 1; i < capacity; ++i) {
        Node* nextNode = new Node();
        curNode->next = nextNode;
        nextNode->prev = curNode;
        curNode = nextNode;
      }

      head->prev = curNode;
      curNode->next = head;
      toEvict = head;
    }

    ~LRUCache() {
      toEvict->prev->next = nullptr;

      while (toEvict) {
        Node* const next = toEvict->next;
        delete toEvict;
        toEvict = next;
      }
    }

    int get(const int key) {
      auto nodeIt = lookup.find(key);

      if (nodeIt == lookup.end()) return -1;

      makeMostResentlyUsed(nodeIt->second);
      return nodeIt->second->data;
    }

    void put(const int key, const int value) {
      auto nodeIt = lookup.find(key);

      if (nodeIt != lookup.end()) {
        Node* const node = nodeIt->second;
        assert(key == node->key);
        node->data = value;
        makeMostResentlyUsed(node);
      } else {
        if (lookup.size() >= capacity)
          lookup.erase(toEvict->key);

        toEvict->key = key;
        toEvict->data = value;
        lookup[key] = toEvict;
        toEvict = toEvict->next;
      }
    }

  private:
    int makeMostResentlyUsed(Node* const node) {
      if (toEvict->prev == node)
        return 1;

      if (node == toEvict) {
        toEvict = toEvict->next;
        return 0;
      }

      node->prev->next = node->next;
      node->next->prev = node->prev;

      toEvict->prev->next = node;
      node->prev = toEvict->prev;
      node->next = toEvict;
      toEvict->prev = node;
      return -1;
    }

    void printChain() {
      const Node* curNode = toEvict;
      do {
        std::cout << "k: " << curNode->key << " d:" << curNode->data << " | ";
        curNode = curNode->next;
      } while (curNode != toEvict);

      std::cout << std::endl;
    }

    const size_t capacity;
    Node* toEvict;
    std::map<int, Node*> lookup;
};

#endif /* !LRU_CACHE_H */

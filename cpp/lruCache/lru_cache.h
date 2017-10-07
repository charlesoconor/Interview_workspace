/*
 * lru_cache.h
 * Copyright (C) 2017-10-06 14:21 charlesoconor <coconor@umich.edu>
 *
 */

#ifndef LRU_CACHE_H
#define LRU_CACHE_H

#include <map>
#include <cassert>

class LRUCache {
  private:
    struct Node {
      Node* next;
      Node* prev;
      int key;
      int data;
    };

  public:
    LRUCache(const int capacity) {
      Node* head = new Node();
      Node* curNode = head;

      for (int i = 1; i < capacity; ++i) {
        Node* nextNode = new Node();
        curNode->next = nextNode;
        nextNode->prev = curNode;
      }

      head->prev = curNode;
      toEvict = head;
    }

    ~LRUCache() {
      toEvict->prev = nullptr;

      while (toEvict) {
        Node* const next = toEvict->next;
        delete toEvict;
        toEvict = next;
      }
    }

    int get(const int key) {
      Node* const node = lookup[key];

      if (!node) return -1;
      makeMostResentlyUsed(node);

      return node->data;
    }

    void put(const int key, const int value) {
      Node* const node = lookup[key];
      if (node) {
        assert(key == node->key);
        node->data = value;
        makeMostResentlyUsed(node);
      } else {
        lookup.erase(toEvict->key);
        toEvict->key = key;
        toEvict->data = value;
        lookup[key] = toEvict;
        toEvict = toEvict->next;
      }
    }

  private:
    int makeMostResentlyUsed(Node* const node) {
      if (node == toEvict) return 0;

      node->prev->next = node->next;
      node->next->prev = node->prev;

      toEvict->prev->next = node;
      node->prev = toEvict->prev;
      node->next = toEvict;
      toEvict->prev = node;
      return -1;
    }

    Node* toEvict;
    std::map<int, Node*> lookup;
};

#endif /* !LRU_CACHE_H */

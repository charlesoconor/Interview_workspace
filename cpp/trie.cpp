/*
 * main.cpp
 * Copyright (C) 2017-10-02 12:16 charlesoconor <coconor@umich.edu>
 *
 *
 */

#include <iostream>
#include <array>
#include <list>

using namespace std;

const unsigned int ALPHABET_SIZE = 26;

class Trie {
  class TrieNode;

  public:
    void insert(string value) {
    }

  private:
    void insertInteral(char* value, TrieNode* node) {
    }

    class TrieNode {
      public:
        TrieNode(char _value, bool _isEndWord): value(_value), isEndWord(_isEndWord) {}

        void setEndWord() { isEndWord = true; }
        bool getEndOfWord() const { return isEndWord; }

        const array<TrieNode*, ALPHABET_SIZE>& getChildren() const {
          return children;
        }

        char getValue() const { return value; }

      private:
        array<TrieNode*, ALPHABET_SIZE> children;
        const char value;
        bool isEndWord;
    };

    TrieNode root = TrieNode('\0', false);
};

int main( int argc, char** argv ){

   return 0;
}

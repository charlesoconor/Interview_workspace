/*
 * main.cpp
 * Copyright (C) 2017-10-06 13:05 charlesoconor <coconor@umich.edu>
 *
 *
 */

#include <iostream>
#include <cassert>

#include "lru_cache.h"

using namespace std;

int main(/* int argc, char** argv */){

  LRUCache cache = LRUCache(2);
  int output = -2;
  auto check = [output](const int toCheck) {
    assert(output == toCheck);
  };

  cache.put(1, 1);
  cache.put(2, 2);
  output = cache.get(1);       // returns 1
  check(1);
  cache.put(3, 3);    // evicts key 2
  output = cache.get(2);       // returns -1 (not found)
  check(-1);
  cache.put(4, 4);    // evicts key 1
  output = cache.get(1);       // returns -1 (not found)
  check(-1);
  output = cache.get(3);       // returns 3
  check(3);
  output = cache.get(4);       // returns 4
  check(4);

  return 0;
}

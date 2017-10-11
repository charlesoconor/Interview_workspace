/*
 * main.cpp
 * Copyright (C) 2017-10-10 15:53 charlesoconor <coconor@umich.edu>
 *
 *
 */

#include <iostream>
#include <cassert>
#include <exception>
#include <vector>
#include <algorithm>    // std::max

using namespace std;

int findLongestParethasise(const string& str) {
  int numOpen = 0;
  int numClose = 0;
  int max = 0;

  vector<int> prevMaxs(str.size(), 0);

  /* for (char c : str) { */
  for (size_t i = 0; i < str.size(); ++i) {
    switch (str[i]) {
      case '(':
        ++numOpen;
        break;
      case ')':
        ++numClose;

        if (numClose > numOpen)  {
          numClose = 0;
          numOpen = 0;
        } else if (numClose == numOpen) {
          max = std::max(numClose * 2, max);
        }

        break;
      default:
        throw runtime_error("invalid char give ");
    }
  }

  return max;
}

int main(int argc, char** argv) {
  int output = -1;

  output = findLongestParethasise("(()()");
  assert(output == 4);

  output = findLongestParethasise(")()())");
  assert(output == 4);

  output = findLongestParethasise("(()");
  assert(output == 2);

  output = findLongestParethasise("()(()");
  assert(output == 2);

  output = findLongestParethasise("()(())");
  assert(output == 6);

  output = findLongestParethasise("(()(()))");
  assert(output == 8);

  return 0;
}

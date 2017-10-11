/*
 * main.cpp
 * Copyright (C) 2017-10-10 14:14 charlesoconor <coconor@umich.edu>
 *
 *
 */

#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <pair>
#include <cassert>

using namespace std;

typedef const string& strRef;

bool isOnDifferent(strRef str1, strRef str2) {
  if (str1.size() != str2.size()) return false;

  bool oneDiffSoFar = false;
  for (int i = 0; i < str1.size(); ++i) {
    if (str1[i] != str2[i]) {

      if (oneDiffSoFar)
        return false;

      oneDiffSoFar = true;
    }
  }

  return true;
}

vector<vector<string>> buildOutput(strRef beginWord, strRef endWord, const unordered_set<pair<strRef, unsigned int>& costs) {
  auto recurse = [&](strRef nextString) {
    if (nextString == beginWord)
      return {{ nextString }};
  };

  vector<vector<string> output = recurse(beginWord);

  return
}

vector<vector<string>> findLadders(strRef beginWord, strRef endWord, const vector<string>& wordList) {
  unordered_map<strRef str, pair<strRef, unsigned int>> costs;
  costs[beginWord] = make_pair({}, 0);

  unordered_set<strRef> toVist(v.begin(), v.end());
  toVist.erase(beginWord);

  unordered_set<strRef> justAdded = { beginWord };

  while (costs.find(endWord) == costs.end()) {
    unordered_set<strRef> adding;

    for (strRef curStr : justAdded) {
      auto curIt = costs.find(curStr);
      assert(curIt != costs.end());

      const pair<vector<strRef>, unsigned int>& cur = *curIt;
      for (strRef next : toVist) {
        if (isOnDifferent(curStr, toVist)) {
          adding.insert(toVist);
          auto costIt = costs.find(toVist);

          if (costIt == cost.end())
            cost[toVist] = make_pair({ curStr }, cur.second + 1)
          else
            it->second->first.push(curStr);
        }
      }
    }

    for (strRef curStr : adding)
      toVist.erase(curStr);

    toVist = move(adding);
  }

  return buildOutput(beginWord, endWord, costs);
}

int main( int argc, char** argv ){
  vector<string> input = {"hot","dot","dog","lot","log","cog"};

  vector<vector<string>> output = {
    {"hit","hot","dot","dog","cog"},
    {"hit","hot","lot","log","cog"}
  };

  return 0;
}

/*
 * main.cpp
 * Copyright (C) 2017-10-05 14:41 charlesoconor <coconor@umich.edu>
 *
 *
 */

#include <iostream>
#include <vector>
#include <map>

using namespace std;


vector<int> findTwoSum(const vector<int>& nums, int target) {
  map<int, int> numSeen;
  for (int num : nums) {
    int opposite = target - num;

    if (numSeen.find(opposite) != numSeen.end())
      return { num, opposite };

    numSeen[num] ;
  }

  return {};
}

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
      return findTwoSum(nums, target);
    }
};

int main(int argc, char** argv){

  return 0;
}

/*
 * main.cpp
 * Copyright (C) 2017-10-04 17:11 charlesoconor <coconor@umich.edu>
 *
 *
 */

// description: https://leetcode.com/problems/the-skyline-problem/description/

#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>    // std::sort
#include <queue>        // std::priority_queue
#include <utility>      // std::pair, std::make_pair

using namespace std;
// start, e, height
typedef tuple<int, int, int> building_t;

struct Building {
  int start;
  int end;
  int height;

  Building(): start(0), end(0), height(0)  {}
  Building(const building_t& b): start(get<0>(b)), end(get<1>(b)), height(get<2>(b))  {}
  Building(const vector<int>& v): start(v[0]), end(v[1]), height(v[2])  {}

  bool operator<(const Building& b) const {
    return height < b.height;
  }

  void print() const {
    printf("start: %d, end: %d, height: %d\n", start, end, height);
  }
};

void printBuilds(const vector<Building>& buildings) {
  for (const Building& b : buildings)
    b.print();
}

struct Point {
  int x;
  int y;

  Point(int xIn, int yIn): x(xIn), y(yIn) {}

  void print() const {
    printf("x: %d, y: %d\n", x, y);
  }

  pair<int, int> toPair() const {
    return make_pair(x, y);
  }
};

void printPoints(const vector<Point>& points) {
  for (const Point& p : points)
    p.print();
}

static vector<Point> findSkyLine(vector<Building> buildings) {
  priority_queue<Building> currentBuildingsByHeight;
  vector<Point> output;

  sort(buildings.begin(), buildings.end(), [](const Building& b1, const Building& b2) {
      return b1.start != b2.start ?
        b1.start < b2.start :
        b1.height > b2.height;
    });

  int lastHeight = 0;
  auto it = buildings.cbegin();

  while (it != buildings.cend()) {
    const Building& b = *it;

    do {
      currentBuildingsByHeight.push(*it);
    } while (++it != buildings.cend() && b.start == it->start);

    while (!currentBuildingsByHeight.empty() && currentBuildingsByHeight.top().end <= b.start) {
      const Building oldTop = currentBuildingsByHeight.top();

      do {
        currentBuildingsByHeight.pop();
      } while (currentBuildingsByHeight.top().end < oldTop.end);

      if (currentBuildingsByHeight.top().end < b.start) {
        const int x = currentBuildingsByHeight.top().end;
        output.push_back(Point(x, lastHeight));
        output.push_back(Point(x, 0));
      }
    }

    int newHeight = currentBuildingsByHeight.top().height;

    if (newHeight != lastHeight) {
      const int x = b.start;
      output.push_back(Point(x, lastHeight));
      output.push_back(Point(x, newHeight));
    }

    lastHeight = newHeight;
  }

  // clear the queue
  while (!currentBuildingsByHeight.empty()) {
    Building oldBuilding = currentBuildingsByHeight.top();

    do {
      currentBuildingsByHeight.pop();
    } while (!currentBuildingsByHeight.empty() && currentBuildingsByHeight.top().end <= oldBuilding.end);

    int newHeight = !currentBuildingsByHeight.empty() ? currentBuildingsByHeight.top().height : 0;

    output.push_back(Point(oldBuilding.end, oldBuilding.height));
    output.push_back(Point(oldBuilding.end, newHeight));
  }

  return output;
}

class Solution {
  public:
    vector<pair<int, int>> getSkyline(vector<vector<int>>& buildingsIn) {
      vector<Building> buildings(buildingsIn.size());
      transform(buildingsIn.begin(), buildingsIn.end(), buildings.begin(), [](const vector<int>& b) { return Building(b); });

      vector<Point> points = findSkyLine(buildings);
      vector<pair<int, int>> pairs(points.size());

      transform(points.begin(), points.end(), pairs.begin(), [](const Point& p) { return p.toPair(); });

      return pairs;
    }
};

int main(/* int argc, char** argv */) {
  /* vector<building_t> tupleB = { */
  /*   /1* {1, 1, 1}, *1/ */
  /*   /1* {1, 2, 2} *1/ */
  /*   {3, 4, 1}, */
  /*   {1, 3, 5}, */
  /*   {2, 5, 9}, */
  /*   {4, 6, 3} */
  /* }; */
  vector<building_t> tupleB = {
    {2,9,10},
    {3,7,15},
    {5,12,12},
    {15,20,10},
    {19,24,8}
  };

  vector<Building> buildings(tupleB.size());
  transform(tupleB.begin(), tupleB.end(), buildings.begin(), [](building_t b) { return Building(b); });

  vector<Point> skyline = findSkyLine(buildings);

  printPoints(skyline);

  return 0;
}

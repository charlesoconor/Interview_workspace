/*
 * main.cpp
 * Copyright (C) 2017-10-04 17:11 charlesoconor <coconor@umicheight.edu>
 *
 *
 */

// description: https://leetcode.com/problems/the-skyline-problem/description/

#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>    // std::sort
#include <queue>        // std::priority_queue

using namespace std;
// start, e, height
typedef tuple<int, int, int> building_t;

struct Building {
  int start;
  int end;
  int height;

  Building(): start(0), end(0), height(0)  {}
  Building(const building_t& b): start(get<0>(b)), end(get<1>(b)), height(get<2>(b))  {}

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
};

void printPoints(const vector<Point>& points) {
  for (const Point& p : points)
    p.print();
}

static vector<Point> findSkyLine(vector<Building> buildings) {

  sort(buildings.begin(), buildings.end(), [](Building b1, Building b2) {
      return b1.start != b2.start ?
        b1.start < b2.start :
        b1.height > b2.height;
    });

  priority_queue<Building> currentBuildingsByHeight;
  vector<Point> output;

  int lastHeight = 0;
  auto it = buildings.cbegin();

  while (it != buildings.cend()) {
    const Building& b = *it;

    do {
      it->print();
      currentBuildingsByHeight.push(*it);
    } while (++it != buildings.cend() && b.start == it->start);

    while (!currentBuildingsByHeight.empty()
        && currentBuildingsByHeight.top().end <= b.start)
      currentBuildingsByHeight.pop();

    int newHeight = currentBuildingsByHeight.top().height;

    if (newHeight != lastHeight) {
      const int x = b.start;
      output.push_back(Point(x, lastHeight));
      output.push_back(Point(x, newHeight));
    }

    lastHeight = newHeight;
  }

  int curEnd = currentBuildingsByHeight.top().end;
  // clear the queue
  while (!currentBuildingsByHeight.empty()) {
    const Building& oldBuilding = currentBuildingsByHeight.top();
    currentBuildingsByHeight.pop();

    int newHeight = !currentBuildingsByHeight.empty() ? currentBuildingsByHeight.top().height : 0;

    output.push_back(Point(oldBuilding.end, oldBuilding.height));
    output.push_back(Point(oldBuilding.end, newHeight));
  }

  return output;
}

int main(/* int argc, char** argv */) {
  vector<building_t> tupleB = {
    /* {1, 1, 1}, */
    /* {1, 2, 2} */
    {3, 4, 1},
    {1, 3, 5},
    {2, 5, 9},
    {4, 6, 3}
  };

  vector<Building> buildings(tupleB.size());
  transform(tupleB.begin(), tupleB.end(), buildings.begin(), [](building_t b) { return Building(b); });

  /* printBuilds(buildings); */

  vector<Point> skyline = findSkyLine(buildings);

  printPoints(skyline);

  return 0;
}

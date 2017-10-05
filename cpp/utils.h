/*
 * utils.h
 * Copyright (C) 2017-10-05 10:08 charlesoconor <coconor@umich.edu>
 *
 */

#ifndef UTILS_H
#define UTILS_H

#include <tuple>
#include <vector>

using std::tuple;
using std::get;
using std::vector;

/* void printBuilding(const building& b) { */
/*   printf("s: %d, e: %d, h: %d\n", get<0>(b), get<1>(b), get<2>(b)); */
/* } */

/* void printBuilds(const vector<building>& buildings) { */
/*   for (building b : buildings) */
/*     printf("s: %d, e: %d, h: %d\n", get<0>(b), get<1>(b), get<2>(b)); */
/* } */



/* struct isBuildingTaller { */
/*   bool operator()(const building& b1, const building& b2) const { */
/*     return get<2>(b1) > get<2>(b2); */
/*   } */
/* }; */


#endif /* !UTILS_H */

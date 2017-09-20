
import _ from 'lodash'

type Point = {
  x: number,
  y: number
}

const pow2 = n => {
  const out = Math.pow(n, 2)
  if (_.isNaN(out))
    throw new Error('output is Nan: ' + n)

  return out
}

function distanceBettweenPoints(p1: Point, p2: Point): number {
  try {
    return Math.sqrt(pow2(p1.x - p2.x) + pow2(p1.y - p2.y))
  } catch(e) {
    console.log('p1:', p1)
    console.log('p2:', p2)
    console.log(e.stack)
    throw e
  }
}

// Gives the distance between the closets two points. If 1 or no points given return Infinity
export function findClosetDistanceBetween(points: Array<Point>) {
  console.log(points)

  function findCloset(points: Array<Point>) {
    if (points.length <= 1)
      return Infinity

    if (points.length === 2)
      return distanceBettweenPoints(... points)

    const mid = Math.floor(points.length / 2)
    const midP = points[mid]

    const curMin = Math.min(
      findCloset(points.slice(mid)),
      findCloset(points.slice(0, mid)))

    // find any points in the splits that might have a smaller value
    const toZip = _(points)
      .filter(p => _.inRange(p.x - midP.x, -curMin, curMin))
      .sortBy('y')
      .value()

    if (toZip.length < 2)
      return curMin

    const newMins = []
    for (let i = 1; i < toZip.length; ++i) {
      const curPoint = toZip[i]

      for (let j = i - 1; j >= 0; --j) {
        const compPoint = toZip[j]

        // only loop over points that could possible by in there
        // this could only be a max of 5 but will normally be much smaller
        if (curPoint.y - compPoint.y > curMin) break

        newMins.push(findClosetDistanceBetween(compPoint, curPoint))
      }
    }

    return Math.min(curMin, ... newMins)
  }

  return findCloset(_.sortBy(points, 'x'))
}

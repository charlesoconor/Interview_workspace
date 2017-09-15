/*
 * projectPicker.js
 * Copyright (C) 2017-09-15 13:52 charlesoconor <coconor@umich.edu>
 *
 */

import _ from 'lodash'

type Project = {
  startDate: number,
  endDate: number,
  value: number
}
export function pickProjects(projects: Array<Project>): { value: number, Array<string> } {
  const sortedProjects = _.sortBy(projects, 'startDate')

  const cachedValues = []

  function getValueAfterDate(after: number, startIdx: ?number) {
    if (cachedValues[after]) return cachedValues[after]

    const returnValue = (() => {
      const afterIdx = _.findIndex(sortedProjects, project => project.startDate > after, startIdx)

      if (afterIdx < 0) return 0

      const curProj = sortedProjects[afterIdx]
      const alternavives = [curProj.value + getValueAfterDate(curProj.endDate, afterIdx + 1)]

       if (afterIdx >= sortedProjects.length - 1)
        return alternavives[0]

      for (let i = afterIdx + 1; i < sortedProjects.length; ++i) {
        const altProj = sortedProjects[i]
        if (altProj.startDate > curProj.endDate) break

        alternavives.push(getValueAfterDate(-Infinity, i))
      }

      return Math.max(... alternavives)
    })()


    cachedValues[after] = Math.max(cachedValues[after] || 0, returnValue)
    return returnValue
  }

  return getValueAfterDate(-Infinity)
}


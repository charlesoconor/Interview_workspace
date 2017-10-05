/*
 * compressString.js
 * Copyright (C) 2017-10-03 12:35 charlesoconor <coconor@umich.edu>
 *
 */

export function compressString(str: string): string {
  const newStr = str.split('').reduce((acc: Array<string>, cur: string) => {
    if (acc.length && acc[acc.length - 2] === cur) {
      ++acc[acc.length - 1]
    } else {
      acc.push(cur, 1)
    }

    return acc
  }, []).join('')

  return newStr.length < str.length ?
    newStr :
    str
}

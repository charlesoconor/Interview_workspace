/*
 * readWriteLock.h
 * Copyright (C) 2017-11-06 13:17 charlesoconor <coconor@umich.edu>
 *
 */

#ifndef READWRITELOCK_H
#define READWRITELOCK_H

#include <mutex>
#include <condition_variable>
#include <set>
#include <thread>

class ReadWriteLock {
  public:
    void readLock() {
      std::unique_lock<std::mutex> lck(mtx);

      while (writeLocked) cv.wait(lck);
      numReaders++;
    }

    void unlockReader() {
      std::unique_lock<std::mutex> lck(mtx);
      --numReaders;

      if (numReaders == 0) cv.notify_all();
    }

    void unLockWriter() {
      std::unique_lock<std::mutex> lck(mtx);
      writeLocked = false;
      cv.notify_all();
    }

    void lockWriter() {
      std::unique_lock<std::mutex> lck(mtx);
      while (writeLocked || numReaders) cv.wait(lck);

      writeLocked = true;
    }

  private:
    std::mutex mtx;
    std::condition_variable cv;
    bool writeLocked = false;
    int numReaders = 0;
};

#endif /* !READWRITELOCK_H */

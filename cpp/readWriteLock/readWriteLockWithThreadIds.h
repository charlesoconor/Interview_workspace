/*
 * readWriteLock.h
 * Copyright (C) 2017-11-06 13:17 charlesoconor <coconor@umich.edu>
 *
 */

#ifndef READWRITELOCK_H
#define READWRITELOCK_H

#include <mutex>
#include <thread>
#include <condition_variable>
#include <set>

class ReadWriteLock {
  public:
    void readLock() {
      std::unique_lock<std::mutex> lck(mtx);

      while (writeLocked) cv.wait(lck);

      activeReaders.insert(
    }

    void unlockReader() {
      std::unique_lock<std::mutex> lck(mtx);
    }

    void unLockWriter() {
      std::unique_lock<std::mutex> lck(mtx);
      writeLocked = false;
      cv.notify_all();
    }

    void lockWriter() {
      std::unique_lock<std::mutex> lck(mtx);

      while (!activeReaders.empty()) cv.wait(lck);

    }

  private:
    std::mutex mtx;
    std::condition_variable cv;
    std::thread::id writerThreadId;
    bool writeLocked = false;
    std::set<std::thread::id> activeReaders;
};

#endif /* !READWRITELOCK_H */

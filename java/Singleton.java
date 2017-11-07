/*
 * Singleton.java
 * Copyright (C) 2017-11-07 10:42 charlesoconor <coconor@umich.edu>
 *
 */

public class Singleton
{
	private Singleton() {
    if (instance) {
      System.out.println("test");
    }
	}

  private Singleton instance = null;
}


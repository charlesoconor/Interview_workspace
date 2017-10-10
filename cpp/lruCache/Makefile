#
# Makefile
# charlesoconor, 2017-10-07 14:35
#
#
#
CC=c++
CFLAGS=-std=c++11 -g

all: main

main: main.cpp lru_cache.h
	$(CC) $(CFLAGS) main.cpp -o main.exe

.PHONY: clean
clean:
	rm *.o temp *.out *.exe


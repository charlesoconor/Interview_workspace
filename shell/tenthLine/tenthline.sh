#!/usr/bin/env bash
#
# tenthline.sh
# Copyright (C) 2017-10-06 12:48 charlesoconor <coconor@umich.edu>
#
#

head -n 10 ${1:file.txt} <(echo -e '\n') | tail -n 1

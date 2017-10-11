#!/usr/bin/env bash
#
# run.sh
# Copyright (C) 2017-10-06 12:53 charlesoconor <coconor@umich.edu>
#
#

# ggrep '^\d\d\d-\d\d\d-\d\d\d\d$' "${1:-file.txt}"
ggrep '\d\{3\}' "${1:-file.txt}"


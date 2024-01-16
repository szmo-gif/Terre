#!/bin/bash

function File {
    for arg in "$@"; do
        echo "$arg"
    done
}

if [ ! $# -lt 1 ]; then
    File "$@"
    exit 0
fi

bash terre02-sh.sh je suis solide
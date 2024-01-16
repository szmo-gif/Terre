#!/bin/bash

function File {
    echo "$@"
}


if [ ! $# -lt 1 ]; then
    File "$@"
    exit 0
fi


bash terre02-sh.sh Shell is fun

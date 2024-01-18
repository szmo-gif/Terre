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

read -p "entrer une phrase: " nouvelle_phrase
bash terre02-sh.sh "$nouvelle_phrase"

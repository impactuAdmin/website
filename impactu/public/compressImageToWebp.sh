#!/bin/bash

FILENAME_WITH_EXTENSION=$(basename $1);
FILENAME=$(echo "${FILENAME_WITH_EXTENSION%%.*}")

cwebp -q 90 $1 -o ./$FILENAME.webp -mt -progress -short

rm $1


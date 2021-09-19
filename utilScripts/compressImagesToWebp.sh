#!/bin/bash

for FILE in assets/img/*;
do 
    FILENAME_WITH_EXTENSION=$(basename $FILE);
    FILENAME=$(echo "${FILENAME_WITH_EXTENSION%%.*}")
    cwebp -q 90 $FILE -o impactu/public/$FILENAME.webp -mt -progress -short
done
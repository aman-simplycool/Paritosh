#!/bin/bash
DIR="build"
# check if build directory exists
if [ -d $DIR ]; then
    # delete it
    rm -rf $DIR
    echo "Deleted old build directory"
fi
echo "\nCreating new build directory"
mkdir -p $DIR

echo "\nCopying files to build directory"
echo "building..."
babel config --out-dir build/config --extensions ".ts"
babel models --out-dir build/models --extensions ".ts"
babel routes --out-dir build/routes --extensions ".ts"
babel services --out-dir build/services --extensions ".ts"
babel app --out-dir build/app --extensions ".ts"
# babel tests --out-dir build/test

echo "Copying public files to build directory"
cp -r public build/public

echo "\nBuild successful!"

# Typescript Template
# Template for typescript modules
# Github: https://github.com/awesomelewis2007/typescript_template
# By: 0x4248

tsc = tsc

node = node

all: build test

build:
	$(tsc)

clean:
	rm -rf lib

test:
	$(node) test/test.js
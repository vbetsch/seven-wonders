# Requirements
node_modules:
	npm install

# Commands
start: node_modules
	npm run start

tests: node_modules
	npm test

lint: node_modules
	npm run lint:strict

format: node_modules
	npm run format

build: node_modules
	npm run build

cov: node_modules
	npm run test:cov

.PHONY: start tests lint format build cov

# Aliases
test: tests
ci: lint cov build
.PHONY: test ci

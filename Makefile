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

coverage: node_modules
	npm run test:cov

.PHONY: start tests lint format build coverage

# Aliases
test: tests
ci: lint coverage
ci_build: ci build
.PHONY: test ci ci_build

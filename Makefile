# Requirements
node_modules:
	npm install

# Commands
dev: node_modules
	npm run start:dev

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

.PHONY: dev tests lint format build cov

# Aliases
test: tests
ci: lint cov build
.PHONY: test ci

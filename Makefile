clean:
	rm -rf node_modules
	rm -rf dist

build: clean
	npm install
	npm run build
	cd dist && zip auth.zip auth.js && cd ..

test: build
	npm run test

deploy: test
	npm publish
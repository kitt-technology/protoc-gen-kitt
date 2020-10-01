GO_IMPORT := google/protobuf/descriptor.proto=github.com/golang/protobuf/protoc-gen-go/descriptor

.PHONE: all
all: test

.PHONY: deps
deps:
	@go mod download

.PHONY: build
build:
	@go install .

.PHONY: publish
publish:
	@go install .
	npm i
	export PATH=$PATH:`pwd`/node_modules/.bin
	PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts" protoc \
		--proto_path ./pagination \
		-I=./pagination \
		./pagination/pagination.proto \
		--go_out=./pagination/ \
		--js_out="import_style=commonjs,binary:./pagination" \
		--ts_out="./pagination"

.PHONY: test
test:
	protoc \
		--proto_path ./auth \
		-I=./auth \
		./auth/auth.proto \
		--go_out=./auth/
	rm -rf tests/out || true
	mkdir tests/out
	@go install .
	protoc \
		--proto_path tests/cases \
		-I=. \
		./tests/cases/messages.proto \
		--go_out=./tests/out \
		--auth_out="lang=go:./tests/out"
	go run tests/run.go

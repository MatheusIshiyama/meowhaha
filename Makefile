APP=meowhaha                # Name of your app
MAIN=./cmd/meowhaha         # Entry point
BIN=bin/$($(APP).exe)               # Output binary
GO=go                        # Go command

# Default target
default: run

## 🔹 Build the project
build:
	$(GO) build -o $(BIN) $(MAIN)

## 🔹 Run the project (like npm run dev)
run:
	$(GO) run $(MAIN)

## 🔹 Run tests
test:
	$(GO) test ./...

## 🔹 Format code
fmt:
	$(GO) fmt ./...

## 🔹 Clean build artifacts (Windows + Linux compatible)
clean:
	-@if [ -f "$(BIN)" ]; then rm -f $(BIN); fi
	-@if exist "$(BIN).exe" del /Q $(BIN).exe

## 🔹 Install dependencies
deps:
	$(GO) mod tidy

## 🔹 Development mode with live reload (requires air)
dev:
	air

.PHONY: build run test fmt clean deps dev

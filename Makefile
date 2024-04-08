NODE_MODULES_DIR=./node_modules
BUILD_DIR=./dist

all: $(NODE_MODULES_DIR)
	@echo "Building..."
	@npm run build

$(BUILD_DIR): $(NODE_MODULES_DIR)
	@echo "Building..."
	@npm run build

$(NODE_MODULES_DIR):
	@echo "Installing dependencies..."
	@npm install

deploy: $(BUILD_DIR)
	@echo "Deploying..."
	@npm run deploy

run: $(NODE_MODULES_DIR)
	@echo "Running..."
	@npm run start

clean:
	@echo "Cleaning..."
	@rm -rf $(BUILD_DIR)

fclean: clean
	@echo "Cleaning dependencies..."
	@rm -rf $(NODE_MODULES_DIR)
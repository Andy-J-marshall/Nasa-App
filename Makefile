file := .env
variable := $(shell cat ${file})
API_KEY := $(subst API_KEY=,,${variable})

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup_local_infra: debug ## Run API and UI apps in docker
	@API_KEY="${API_KEY}" npm run start-app

debug: ## Print out API_KEY warning
	@echo Ensure you have set an API_KEY for the NASA API in the .env file
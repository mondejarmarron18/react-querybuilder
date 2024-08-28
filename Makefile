dev:
	@echo "Starting development server..."
	docker compose -p rqb-dev -f docker/development/docker-compose.yml up --build

prod:
	@echo "Starting production server..."
	docker compose -p rqb -f docker/production/docker-compose.yml up --build -d

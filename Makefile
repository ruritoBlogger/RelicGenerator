build:
	docker-compose build && yarn install

start:
	docker-compose up -d && yarn dev

stop:
	docker-compose stop

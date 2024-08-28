# React Query Builder with PostgREST

**Tech Used:**

- NextJS
- PostgreSQL
- PostgREST
- React Query Builder
- Docker
- SASS/TaiwindCSS
- `make` utility

## Getting Started

First, to run the development server, you need to install docker and docker compose. Then run it with the following command:

```bash
#docker compose
docker compose -p rqb-dev -f docker/development/docker-compose.yml up --build
#or using make utility
make dev
```

## Creating a database

You can create a database using a pgadmin UI. To access it you need to open [http://localhost:4000](http://localhost:4000).

Use this login credentials:

- **Email:** `rqb@gmail.com`
- **Password:** `rqb_password`

Create a database named `user`

### Add the following columns:

- firstName
- lastName
- age
- address
- phone
- email
- isDev
  - _Type:_ Boolean

After creating a database, table and columns, start adding values.

## Result

Open [http://localhost:3000](http://localhost:3000) to access the result.

## API

To access the API, open [http://localhost:5000](http://localhost:5000) followed by table name `/user`

Endpoint for user table
[http://localhost:5000/user](http://localhost:5000/user)

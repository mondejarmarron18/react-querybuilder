# React Query Builder with PostgREST

**Tech Used:**

- NextJS
- PostgreSQL
- PostgREST
- React Query Builder
- Docker
- SASS/TaiwindCSS
- Prisma
- `make` utility

## Getting Started

Setting Up:

- Download Docker
- Download `Node v20.12`
- Download `make` utility (optional)
- Download `yarn` (optional)

Create an `.env` file inside the root directory of the project and paste the following credentials

```bash
#Prisma Config
DATABASE_URL=postgres://rqb_user:rqb_password@localhost:5432/rqb_db

#API Config
PGRST_DB_URI=postgres://rqb_user:rqb_password@db:5432/rqb_db
PGRST_DB_SCHEMA=public
PGRST_DB_ANON_ROLE=rqb_user
PGRST_OPENAPI_SERVER_PROXY_URI=http://app:3000

#DB Config
POSTGRES_PASSWORD=rqb_password
POSTGRES_USER=rqb_user
POSTGRES_DB=rqb_db

#PGAdmin Config
PGADMIN_DEFAULT_EMAIL=rqb@gmail.com
PGADMIN_DEFAULT_PASSWORD=rqb_password
```

**Note:** `.env` is required, the credentials provided is just for testing purposes.

## Booting Up

To run the development server, you need to install docker and docker compose. Then run it with the following command:

```bash
#docker compose
docker compose -p rqb-dev -f docker/development/docker-compose.yml up --build
#or using make utility
make dev
```

## Creating a database

Install all the dependencies: `yarn install` or `npm install`

Run the following commands to create database columns and populate the database with dummy data.

**Option 1:** using yarn

```bash
yarn prisma generate #It will generate a typescript types
yarn prisma db push #It will create database columns
yarn prisma db seed #It will populate the database with dummy data
```

**Option 2:** using npx

```bash
npx prisma generate #It will generate a typescript types
npx prisma db push #It will create database columns
npx prisma db seed #It will populate the database with dummy data
```

## Result

Open [http://localhost:3000](http://localhost:3000) to access the result.

## API

To access the API, open [http://localhost:5000](http://localhost:5000) followed by table name `/users`

Endpoint for user table
[http://localhost:5000/users](http://localhost:5000/users)

## IMPORTANT NOTE

Filtering data will not work in a complex filtering like adding a new group, as `postREST` don't support complex queries that provided by `react-querybuilder`

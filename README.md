This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
_Email:_ `rqb@gmail.com`
_Password:_ `rqb_password`

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

Open [http://localhost:5000](http://localhost:5000) followed by table name `/user`

<br/>

Endpoint for user table
[http://localhost:5000/user](http://localhost:5000/user)

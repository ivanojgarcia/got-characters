# GOT - CHaracters
# Application for show the character of Game oif Throne.

The present project consists of the consumption a content from the REST API of GOT

The technology for endpoint manipulation of data is TypeORM with typescript

Likewise, the Server responsible for raising the application from the backend is Express

The technologies used to develop it were:.

  - Express
  - NodeJS
  - Typescript
  - NextJS
  - Tailwind

# Get started

Clone the repository
```sh
https://github.com/ivanojgarcia/got-characters.git
```
Install developer dependencies (installation of dependencies from the package-json)

- First we must to configure our database, for that, is nescesary configure the .env file with the data of the database
- Exist a endpoint that can use for add the data from the API-GOT `/api/character/sync`
- For init The server, we will do the following:

```sh
$ cd backend
$ npm install
$ npm start:dev or npm start:test or npm start
```
If is necesary can you delete the package-lock.json

### Installation of client

To start the client we just have to install the dependencies

```sh
$ cd client
$ yarn install
$ yarn dev
```
The server run on http://localhost:3001/ , if is the test stage the applications is ready.

## Endpoints List

 - http://127.0.0.1:3001/api/characters/{page}/{limit}?filter={filter} [GET] (Get All Character)
 - http://127.0.0.1:3001/api/character/id/{id} [GET] (Get Character by ID)
 - http://127.0.0.1:3001/api/character/sync [GET] (Sync the characters)

License
----

MIT


**Thanks!**



module.exports = {
   "type": `${process.env.DATABASE_CONNECTION}`, 
   "host": `${process.env.DATABASE_HOST}`, 
   "port": `${process.env.DATABASE_PORT}`,
   "username": `${process.env.DATABASE_USERNAME}`, 
   "password": `${process.env.DATABASE_PASSWORD}`, 
   "database": `${process.env.DATABASE}`, 
   "synchronize": true,
   "logging": false,
   "entities": [
      "dist/src/entity/*.js"
   ],
   "migrations": [
      "dist/src/migration/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration"
   }
}
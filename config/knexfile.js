var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

<<<<<<< HEAD

=======
// const pg = require('pg');
// pg.defaults.ssl = {
//   rejectUnauthorized: false,
// };
>>>>>>> 1e03e26f1e369d82b1ec55ddec29593d59d6fe2b

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    ssl: { rejectUnauthorized: false },
  },
};

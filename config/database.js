const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    // client: "postgres",
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      // host: config.host || '127.0.0.1',
      // port: config.port || 27017,
      // database: config.database,
      // user: config.user,
      // password: config.password,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
    // debug: false,
    useNullAsDefault: true,
  },
});

// {
//   "development": {
//     "username": "sesac",
//     "password": "0401",
//     "database": "newLeaf",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql",
};

module.exports = { development };
//중괄호 필수

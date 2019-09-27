const env = require("./enviroments");
if (process.env.NODE_ENV != env.PRODUCTION) {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT || 3000,
  APPLICATION_NAME: process.env.APPLICATION_NAME
};

const Sequelize = require("sequelize");
const Subscription = require("./subscription");  // 1

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Subscription = Subscription;  // 2 


Subscription.init(sequelize);  // 3


Subscription.associate(db);  // 4


module.exports = db;
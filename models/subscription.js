const { Sequelize } = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productName: {
          type: Sequelize.STRING(100),
        },
        expireDate: {
          type: Sequelize.STRING(500),
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Subscription",
        tableName: "Subscriptions",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {}
};
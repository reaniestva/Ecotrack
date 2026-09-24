const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.WasteReport, {
        foreignKey: "user_id",
        as: "wasteReports",
      });

      User.hasMany(models.RewardRedemption, {
        foreignKey: "user_id",
        as: "redemptions",
      });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
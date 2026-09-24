const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    static associate(models) {
      Reward.hasMany(models.RewardRedemption, {
        foreignKey: "reward_id",
        as: "redemptions",
      });
    }
  }

  Reward.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      points_required: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reward",
    }
  );

  return Reward;
};
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RewardRedemption extends Model {
    static associate(models) {
      RewardRedemption.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

      RewardRedemption.belongsTo(models.Reward, {
        foreignKey: "reward_id",
        as: "reward",
      });
    }
  }

  RewardRedemption.init(
    {
      user_id: DataTypes.INTEGER,
      reward_id: DataTypes.INTEGER,
      points_used: DataTypes.INTEGER,
      status: DataTypes.STRING,
      redeemed_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RewardRedemption",
    }
  );

  return RewardRedemption;
};
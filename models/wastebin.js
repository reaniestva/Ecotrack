const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WasteBin extends Model {
    static associate(models) {
      WasteBin.belongsTo(models.WasteCategory, {
        foreignKey: "category_id",
        as: "category",
      });
    }
  }

  WasteBin.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WasteBin",
    }
  );

  return WasteBin;
};
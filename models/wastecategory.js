const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WasteCategory extends Model {
    static associate(models) {
      WasteCategory.hasMany(models.WasteReport, {
        foreignKey: "category_id",
        as: "wasteReports",
      });

      WasteCategory.hasMany(models.WasteBin, {
        foreignKey: "category_id",
        as: "wasteBins",
      });
    }
  }

  WasteCategory.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      points_per_kg: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "WasteCategory",
    }
  );

  return WasteCategory;
};
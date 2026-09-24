const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WasteReport extends Model {
    static associate(models) {
      WasteReport.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

      WasteReport.belongsTo(models.WasteCategory, {
        foreignKey: "category_id",
        as: "category",
      });
    }
  }

  WasteReport.init(
    {
      user_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      waste_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      weight: DataTypes.DECIMAL,
      points: DataTypes.INTEGER,
      recommendation: DataTypes.TEXT,
      report_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "WasteReport",
    }
  );

  return WasteReport;
};
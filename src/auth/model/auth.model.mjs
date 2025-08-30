import { DataTypes, Model } from "sequelize";
import { initModel } from "../../utils/initModel.mjs";
import { Owner } from "../../owners/model/owners.model.mjs";

export class Auth extends Model {}

initModel(
  Auth,
  {
    access_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Owner,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  "auth"
);

Auth.belongsTo(Owner, { foreignKey: "owner_id" });
Owner.hasMany(Auth, { foreignKey: "owner_id" });

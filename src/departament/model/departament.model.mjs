import { DataTypes, Model } from "sequelize";
import { initModel } from "../../utils/initModel.mjs";

export class Departament extends Model {
  id;
  name;
  is_active;
  created_at;
  updated_at;
  deleted_at;
}

initModel(
  Departament,
  {
  
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  "departaments" // 👈 tabla en plural, snake_case
);

import { DataTypes, Model } from "sequelize";
import { Owner } from "../../owners/model/owners.model.mjs";
import {initModel} from "../../utils/initModel.mjs"

export class Store extends Model {
  id;
  name;
  description;
  is_active;
  created_at;
  updated_at;
  deleted_at;
  owner_id;
}

initModel(
  Store,
  {
   
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    owner_id: {
      type: DataTypes.BIGINT,
      allowNull: true, // 👈 puede ser nulo
      references: {
        model: "owners", // 👈 plural, snake_case
        key: "id",
      },
    },
  },
  "stores" // 👈 plural, snake_case
);

// 🔗 Relaciones
Store.belongsTo(Owner, {
  foreignKey: "owner_id",
  as: "owner",
});

Owner.hasMany(Store, {
  foreignKey: "owner_id",
  as: "stores",
});

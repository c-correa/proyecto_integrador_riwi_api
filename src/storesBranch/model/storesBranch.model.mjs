import { DataTypes, Model } from "sequelize";
import { initModel } from "../../utils/initModel.mjs";
import { Store } from "../../stores/model/stores.model.mjs";

export class StoreBranch extends Model {
  id;
  name;
  description;
  address;
  phone;
  is_active;
  created_at;
  updated_at;
  deleted_at;
  store_id;
}

initModel(
  StoreBranch,
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    store_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "stores", // 👈 tabla correcta
        key: "id",
      },
    },
  },
  "stores_branch" // 👈 tabla en snake_case
);

// 🔗 Relaciones
StoreBranch.belongsTo(Store, {
  foreignKey: "store_id",
  as: "store",
});

Store.hasMany(StoreBranch, {
  foreignKey: "store_id",
  as: "branches",
});

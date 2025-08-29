import { DataTypes, Model } from "sequelize";
import { initModel } from "../../utils/initModel.mjs";
import { StoreBranch } from "../../storesBranch/model/storesBranch.model.mjs";

export class Publication extends Model {
  id;
  name;
  description;
  price;
  stock;
  is_active;
  created_at;
  updated_at;
  deleted_at;
  store_branch_id;
}

initModel(
  Publication,
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // 👈 siempre activo por defecto
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
    store_branch_id: {
      type: DataTypes.BIGINT,
      allowNull: true, // 👈 relación opcional
      references: {
        model: "stores_branch", // 👈 plural, snake_case
        key: "id",
      },
    },
  },
  "publications" // 👈 tabla plural, snake_case
);

// 🔗 Relaciones
Publication.belongsTo(StoreBranch, {
  foreignKey: "store_branch_id",
  as: "store_branch",
});

StoreBranch.hasMany(Publication, {
  foreignKey: "store_branch_id",
  as: "publications",
});

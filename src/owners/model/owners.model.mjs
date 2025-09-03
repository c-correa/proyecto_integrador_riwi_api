import { DataTypes, Model } from "sequelize";
import { initModel } from "../../utils/initModel.mjs";
import { Departament } from "../../departament/model/departament.model.mjs";

export class Owner extends Model {}

// Inicialización del modelo
initModel(
  Owner,
  {
    full_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    password: {
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
    departament_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "departaments", // 👈 nombre de la tabla referenciada
        key: "id",
      },
    },
  },
  "owners" // 👈 nombre de la tabla
);

// 🔗 Relaciones
Owner.belongsTo(Departament, {
  foreignKey: "departament_id",
  as: "departament",
});

Departament.hasMany(Owner, {
  foreignKey: "departament_id",
  as: "owners",
});

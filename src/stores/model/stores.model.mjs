import { DataTypes, Model } from "sequelize";
import { Owner } from "../../owners/model/owners.model.mjs";
import { initModel } from "../../utils/initModel.mjs";
import { Departament } from "../../departament/model/departament.model.mjs";

export class Store extends Model {
  id;
  name;
  description;
  is_active;
  created_at;
  updated_at;
  deleted_at;
  owner_id;

  // Nuevos campos
  business_name;
  tax_id;
  business_license;
  main_address;
  official_phone;
  official_email;
}

initModel(
  Store,
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
    owner_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "owners",
        key: "id",
      },
    },
    tax_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    business_license: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    main_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    official_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    official_email: {
      type: DataTypes.STRING(150),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
  },
  "stores"
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

// 🔗 Relaciones
Store.belongsTo(Departament, {
  foreignKey: "department_id",
  as: "department",
});

Departament.hasMany(Store, {
  foreignKey: "department_id",
  as: "stores",
});


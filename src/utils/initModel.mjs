import { DataTypes } from "sequelize";
import sequelize from "./config.mjs";

export function initModel(
    model,
    attributes,
    tableName
) {
    model.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        deleted_at: {
            type: DataTypes.DATE,
            defaultValue: null,
            allowNull: true,
        },
        ...attributes,
    }, {
        sequelize,
        tableName,
            timestamps: true, // Sequelize crea y maneja created_at / updated_at
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
    });
}
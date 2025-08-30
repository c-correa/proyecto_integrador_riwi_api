import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    // logging: console.log, // cámbialo a false en prod
    dialectOptions: {
      ssl: {
        require: true,  
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;

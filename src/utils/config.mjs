import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
'pets',
'postgres',
'123456789',
  {
    host: "localhost",
    dialect: 'postgres',
    port:  5432,
    logging: console.log,  
  }
);

export default sequelize;
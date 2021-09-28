import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('logindb', 'postgres', 'Pakistan316', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    define: {
        timestamps: false
    } 
});

export default sequelize;
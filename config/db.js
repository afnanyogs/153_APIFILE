const db = require('sequelize');

async function connectDB() {
    try {
        await db.Sequelize.authenticate();
        console.log('Database connected successfully.');

        await db.Sequelize.sync({alter : true});
        console.log('Database synchronized successfully.');

    } catch (err) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
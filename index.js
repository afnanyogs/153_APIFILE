const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const e = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', apiRoutes);

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀Server is running at https://localhost:${PORT}`);
    });

}

startServer();
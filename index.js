const express = require('express')
require('dotenv').config();
const app = express();

app.get('/health-check', (req, res) => {
    return res.json({ message: "ok" });
});

//workflow is working

module.exports = app;


const app = require('./index');

const express = require('express');
require('dotenv').config();


app.listen(process.env.PORT|| 3000, ()=>{
console.log("server started at",process.env.PORT )
});


const express = require('express');
const app = express();
const path=require('path');

const port = 3000

const main = require('./routers/main.js')



app.use("/", main)
app.use('/about', main)



app.listen(port, () => console.log ('Sevidor 3000 en funcinamiento'));

app.use(express.static("public"));
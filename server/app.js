const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
//const csv = require('./log.csv')
const bodyParser = require('body-parser');
const PORT = 3000;



const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(morgan('combined'));


app.use((req, res, next) => {
// logging code here
   // console.log("this method", req.method);
    next();
});

app.get('/', (req, res) => {
    //res.sendFile('.server/welcome.html');
    //console.log("this is log" , fs.readFile('./log.csv', sendFile(file){
    //    console.log("file is logged");
    //}))

});

app.get('/logs', (req, res) => {
//return a json object containing the log data here

});

module.exports = app;

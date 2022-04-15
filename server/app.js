const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

//const csv = require('./log.csv')
//const bodyParser = require('body-parser');
//const PORT = 3000;

//app.use(bodyParser.json())
//app.use(express.static('public'))
//This is used to give morgan a custom logging format 
//app.use(morgan.token("custom", ":user-agent :date[iso] :method :url HTTP/:http-version :status"));
//app.use(morgan('custom'));


app.use((req, res, next) => {
    // logging code here
    let time = new Date;
    let method = req.method;
    let resource = req.originalUrl;
    let version = "HTTP/" + req.httpVersion;
    let agent = req.headers['user-agent'];
    let status = res.statusCode;
    
    
    

    console.log(time, method, resource, version, "header:", agent, status)

     // console.log("this method", req.method);    next();
});


app.get('/', (req, res) => {
    res.status(200).send("OK");
    console.log("Hello");
});

app.get('/logs', (req, res) => {
//return a json object containing the log data here
console.log("Hello")
});

module.exports = app;

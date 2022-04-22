const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const csvtojson = require('csvtojson');


const app = express();
app.use(morgan('dev'));

app.set("json spaces", 2);

//This is commented unused code 
//const csv = require('./log.csv')
//const bodyParser = require('body-parser');
//const PORT = 3000;

//app.use(bodyParser.json())
//app.use(express.static('public'))
//This is used to give morgan a custom logging format 
//app.use(morgan.token("custom", ":user-agent :date[iso] :method :url HTTP/:http-version :status"));
//app.use(morgan('custom'));


//Within this app.use will be all my logging code 

//Get method for default backslash "/" or native resource that will send the message "OK" to browser
app.get('/', (req, res) => {
    let agent = req.headers['user-agent'].replace(/,/g, "");
    let time = new Date().toISOString();
    let method = req.method;
    let resource = req.originalUrl;
    let version = "HTTP/" + req.httpVersion;
    let status = res.statusCode;
    let fullData= agent + "," + time + "," + method + "," + resource + "," + version + "," + status;

         console.log(fullData)

        fs.appendFile('./server/log.csv', '\n' + fullData, function(file){
            console.log("Successful append to log.csv");
            
        });
        res.sendStatus(200);


});

//Get method for "/logs" that should send the updated json file and a status code of 200
app.get('/logs', (req, res) => {
    //return a json object containing the log data here
    csvtojson()
    .fromFile("./server/log.csv")
    .then((jsonObj)=>{
    console.log(jsonObj);
    res.json(jsonObj)
})
    
    });

  



app.get('*', (req, res) => {
    res.sendStatus(404);
    res.send("ERROR 404 - REQUESTED RESOURCE NOT FOUND")
})

module.exports = app;

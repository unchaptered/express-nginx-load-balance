const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

app.all('*', (req, res) => res.json('Hello, World'));

const options = {
    cert: fs.readFileSync('PUBLIC 키 경로'),
    key: fs.readFileSync('PRIVATE 키 경로')
};

https.createServer(options, app).listen(3000, 'EC2 Instance Private IPv4',  console.log("Secure server running on port 3000"));
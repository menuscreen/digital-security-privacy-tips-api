const express = require('express'); // ES6: import express from 'express';
const app = express();
const MongoClient = require('mongodb').MongoClient
const PORT = 3000;
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'digital-security-privacy-tips';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} database.`);
        db = client.db(dbName);
    });

    
// extended allows you to create nested objects within your query strings, by surrounding the name of sub-keys with square brackets
app.use(express.urlencoded({ extended: true })) 

// Response serving html landing page (used for api documentation)
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
// serving up json
app.get('/api/:queryParameter', (req, res) => {
    const queryParameter = req.params.queryParameter
    if (database[queryParameter]) {
        res.json(database[queryParameter])
    } else {
        res.json('404')
    }
})
// process.env.PORT used for Heroku
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

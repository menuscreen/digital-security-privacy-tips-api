const express = require('express'); // ES6: import express from 'express';
const app = express();
const PORT = 3000;


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'digital-security-privacy-tips';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} database.`);
        db = client.db(dbName);
    });

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

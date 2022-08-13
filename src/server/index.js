require("dotenv").config();
const express = require("express");
const path = require("path");
const model = require('./model.js');
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/cube', (req, response) => {
  model.postRequestHappened(req.body, (err, result) => {
    if (err) {
      console.error('error in post server side');
      response.send(err);
    } else {
      response.send(201).end();
    }
  })
})

app.get('/cube', (req, response) => {
  model.getAll((err, result) => {
    if (err) {
      console.error('error in get server side');
      response.send(err);
    } else {
      response.json(result);
    }
  })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

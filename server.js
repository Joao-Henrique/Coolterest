const express = require('express');
const routes = require('./Routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();
const port = process.env.PORT || 5000;

// connect to mongo db
mongoose.connect('mongodb://pipetest:1234567890@pipecluster0-shard-00-00-dgn30.mongodb.net:27017,pipecluster0-shard-00-01-dgn30.mongodb.net:27017,pipecluster0-shard-00-02-dgn30.mongodb.net:27017/test?ssl=true&replicaSet=PipeCluster0-shard-0&authSource=admin');

// serve static files
app.use(express.static('./Client/public'));

// body parser middleware
app.use(bodyParser.json())

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
})


// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
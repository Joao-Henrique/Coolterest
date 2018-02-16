const express = require('express');
const routes = require('./Routes/api');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use('/api', routes);

/* app.get('/api/message', (req, res) => {
  res.send({ express: 'Hello From Express' });
}); */

app.listen(port, () => console.log(`Listening on port ${port}`));
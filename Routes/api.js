const express = require('express');
const router = express.Router();

// get a list of stored images from the db
router.get('/storedImages', function (req, res) {
  res.send({ type: 'GET' });
});

// add a new image to the db
router.post('/storedImages', function (req, res) {
  res.send({ type: 'POST' });
});

// update a image to the db
router.put('/storedImages/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

// delete a image from the db
router.delete('/storedImages/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

module.exports = router;
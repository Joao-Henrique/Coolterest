const express = require('express');
const router = express.Router();
const ImageCardModel = require('../Models/imageCardModel');

// get a list of stored images from the db
router.get('/storedImages', function (req, res, next) {
  res.send({ type: 'GET' });
});

// add a new image to the db
router.post('/storedImages', function (req, res, next) {
  ImageCardModel.create(req.body).then(function (imageCard) {
    res.send(imageCard);
  }).catch(next);
});

// update a image to the db
router.put('/storedImages/:id', function (req, res, next) {
  res.send({ type: 'PUT' });
});

// delete a image from the db
router.delete('/storedImages/:id', function (req, res, next) {
  res.send({ type: 'DELETE' });
});

module.exports = router;
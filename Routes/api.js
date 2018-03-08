const express = require('express');
const router = express.Router();
const ImageCardModel = require('../Models/ImageCardModel');

// get a list of stored images from the db
router.get('/storedImages', function (req, res, next) {
  ImageCardModel.find({}).then(function (imageCard) {
    res.send(imageCard);
  })
});

// get a list of specific user stored images from the db
router.get('/storedImages/:id', function (req, res, next) {
  ImageCardModel.find({ _id: req.params.user }).then(function (imageCard) {
    res.send(imageCard);
  })
});

// add a new image to the db
router.post('/storedImages', function (req, res, next) {
  ImageCardModel.create(req.body).then(function (imageCard) {
    res.send(imageCard);
  }).catch(next);
});

// update a image to the db
router.put('/storedImages/:id', function (req, res, next) {
  ImageCardModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    ImageCardModel.findOne({ _id: req.params.id }).then(function (imageCard) {
      res.send(imageCard);
    });
  });
});

// delete a image from the db
router.delete('/storedImages/:id', function (req, res, next) {
  ImageCardModel.findByIdAndRemove({ _id: req.params.id }).then(function (imageCard) {
    res.send(imageCard);
  });
});

module.exports = router;
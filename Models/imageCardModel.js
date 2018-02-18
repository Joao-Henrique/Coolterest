const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageCardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  url: {
    type: String,
    required: [true, 'url field is required']
  }
}
);

const ImageCardModel = mongoose.model('imageCard', imageCardSchema);

module.exports = ImageCardModel;
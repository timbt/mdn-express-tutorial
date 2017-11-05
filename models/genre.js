var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema(
  {
    name: {type: String, required: true, min: 3, max: 100},
  }
)

//Virtual for the genre's URL
GenreSchema.Virtual('url').get(function(){
  return '/catalog/genre';
});

module.exports = mongoose.model('Genre', GenreSchema);

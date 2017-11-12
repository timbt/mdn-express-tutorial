var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

//Virtual for the author's full name
AuthorSchema.virtual('name').get(function(){
  return this.family_name + ', ' + this.first_name;
});

//Virtual for the author's URL
AuthorSchema.virtual('url').get(function(){
  return '/catalog/author/' + this._id;
});

AuthorSchema.virtual("pretty_date_of_birth").get(function(){
  return this.date_of_birth ?
  moment(this.date_of_birth).format('YYYY-MM-DD') : '';
});

AuthorSchema.virtual("pretty_date_of_death").get(function(){
  return this.date_of_death ?
  moment(this.date_of_death).format('YYYY-MM-DD') : '';
});

module.exports = mongoose.model('Author', AuthorSchema);

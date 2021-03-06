/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  photoes: [String],
  balance: Number,
});

countrySchema.statics.getAllCountries = function (err, cb) {
  return this.find(cb);
};

module.exports = mongoose.model('Country', countrySchema);

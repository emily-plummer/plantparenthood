var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlantSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the plant'
  },
  quantity: {
    type: String
  },
  seeds_ordered: {
    type: Number
  },
  type: {
    type: String
  },
  provider: {
    type: String
  },
  days_to_germ: {
    type: Number
  },
  spacing: {
    type: Number
  },
  weeks_to_transplant: {
    type: Number
  },
  days_to_harvest: {
    type: Number
  },
  sow: {
    type: Number
  },
  direct_seed: {
    type: String
  },
  notes: {
    type: String
  },
  harvest: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Plants', PlantSchema);

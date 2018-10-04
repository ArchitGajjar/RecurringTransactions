/**
 * @author architgajjar1992@gmail.com
 * @file
 * @description transactions schema design.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  trans_id: {type: String, unique: true},
  user_id: {type: String},
  name: {type: String}, 
  amount: {type: String},
  date: {type: String}
});

const transactions = mongoose.model('transaction_schema', transactionSchema);
module.exports = transactions;
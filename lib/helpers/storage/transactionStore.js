/**
 * @author architgajjar1992@gmail.com
 * @file
 * @description storing recurring transactions.
 */

const mongoose = require('mongoose');
const conn = mongoose.connection;
const Transaction = require('../schema/transactionSchema');
const successResponse = require('../response/response');
const errorResponse = require('../../errors/errorResponse');
const _recurring = require('../analytics/analytics');

module.exports = (docs)=>{
  console.log('Input : ', docs);
  let transactionStore = new Transaction();
  return transactionStore.collection
  .insertMany(docs)
  .then((response)=>{
    successResponse.data =  _recurring(response.ops)
    successResponse.status = 200
    return successResponse;
  })
  .catch((err)=>{
    console.log('ERROR is : ', err);
    if(err.code === 11000){
      errorResponse.status = 400;
      errorResponse.errors = 'MongoDB Error: Duplicate key found'
    }
    return Promise.reject(errorResponse);
  })
}
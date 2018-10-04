/**
 * @author architgajjar1992@gmail.com
 * @file
 * @description MongoDB connectivity.
 */

'use strict'
let mongoose = require('mongoose');
const errorList = require('../../errors/errors');
let errResponse = require('../../errors/errorResponse');
require('dotenv').config();

module.exports = (config)=>{
  let dbURI;
  if(process.env.dbENV === 'prd'){
    dbURI= config.prd.dbURI; 
    console.log('DBURI is : ', dbURI);
  } else{
    dbURI = config.dev.dbURI;
  }
  return mongoose.connect(dbURI, (err, resp)=>{
    if(err){
      console.log('ERROR : ', err);
      return Promise.reject(err);
    }else{
      console.log('CONNECTED!', dbURI);
      return Promise.resolve('success');
    }
  })
};

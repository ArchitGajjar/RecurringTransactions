/**
 * @author architgajjar1992@gmail.com
 * @file
 * @module component
 * @description describe design flow of service.
 */

const transactionStore = require('./helpers/storage/transactionStore');
const transactionRetrieve = require('./helpers/storage/transactionsRetrieve');
const config = require('./helpers/config/config');
const mongooseConfig = require('./helpers/config/mongoose.config');
/**
 * Clerkie POST service component
 * @param {any} initialPayload intial payload
 * @returns {Promise<object>} returns Promise object resolve
 * for success and reject for invalid response.
 */
const Postcomponent = (initialPayload)=>{
  return mongooseConfig(config)
    .then((results)=>transactionStore(initialPayload))
    .then((storedTransactionsRecord)=> Promise.resolve(storedTransactionsRecord))
    .catch((err)=>Promise.reject(err))
}


/**
 * Clerkie GET service component
 * @param {any} initialPayload intial payload
 * @returns {Promise<object>} returns Promise object resolve
 * for success and reject for invalid response.
 */
const Getcomponent = ()=>{
  return mongooseConfig(config)
    .then((results)=>transactionRetrieve())
    .then((recurringResults)=> Promise.resolve(recurringResults))
    .catch((err)=>Promise.reject(err))
}

module.exports = {
  Postcomponent,
  Getcomponent
}
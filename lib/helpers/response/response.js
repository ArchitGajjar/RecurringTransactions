/**
 * @file
 * @module helpers/response
 * @description success response structure.
 */

 /**
  * Error response object and format
  * @param {object} none
  * @returns {JSON<Object>} returns JSON object.
  */
  module.exports = {
    data: undefined,
    meta: {
      copyright: 'Copyright '+ new Date().getFullYear()+ ' Clerkie, Inc',
      contact: 'information@clerkie.com'
    },
    status: undefined
  }
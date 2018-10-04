/**
 * @author architgajjar1992@gmail.com
 * @file
 * @description MongoDB dev and prod configuration.
 */

module.exports = {
    prd : {
      dbURI:'mongodb://'+process.env.dbUser+':'+process.env.dbPassword+'@ds0'+process.env.dbPort+'.mlab.com:'+process.env.dbPort+'/'+process.env.dbName
    },
    dev: {
      dbURI: 'mongodb://localhost:27017/transactionsdata'
    }
  }
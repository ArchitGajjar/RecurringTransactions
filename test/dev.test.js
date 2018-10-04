/**
 * @author: architgajjar1992@gmail.com
 * @description end to end test case for Clerkie, Inc.
 */


// Make sure your server is running on port 1984.
describe.skip('Clerkie GET end to end testing', ()=>{
  it('- should get all sorted recurring transactions', (done)=>{
    const postData = require('./testdata').data;
    const request = require('request');

    request('http://localhost:1984/', (err,resp)=> {
      if(err) console.log('Error : ', err);
      console.log('response : ', resp.body);
      done();
    })
  })
})

// Plese remove all the entries from collection before running this test case.
describe.skip('Clerkie POST end to end testing', ()=>{
  it('- should get all sorted recurring transactions', (done)=>{
    const postData = require('./testdata').data;
    const request = require('request');

    request({
      method: 'POST',
      uri: 'http://localhost:1984/',
      multipart: [{
        'content-type': 'application/json',
         body: JSON.stringify({postData})
      }]
    }, (err, resp)=> {
      if(err) => console.log('Error : ', err);
      console.log('response : ', resp)
    })
  })
})
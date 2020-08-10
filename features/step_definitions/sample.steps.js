const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');
const got = require('got');
const assert = require('assert');
//const httpStatusCodes = require('http-status-codes');
//const expect = require('unexpected');
//const requester = require('requester');
const fetch = require('node-fetch');
const buildUrl = require('build-url');


  
  Given('User try to test API', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'true';
  });

  When('User call {string} for test', async function (url) {

    let res = await got.get(url);
    let json = JSON.parse(res.body);  
    
  

  });
  Then('User got author: from server {string}  = {string}', async function (url, author) {
    // Write code here that turns the phrase above into concrete 
    let res = await got.get(url);
    let json = JSON.parse(res.body);
    //console.log(json.data[1].id);
    return assert.equal(json.data[1].id, author);
  });

  When('User call {string} for test and data is', async function (url, docString) {
  console.log(docString);
  /*
  var data = {
    headers: { 'Content-Type': 'application/json' },
    json: true,
    body: docString
};
console.log(data);
*/
  test = await got.post(url, docString);
  let statusCodeResponse = JSON.parse(test.body);
  console.log(statusCodeResponse);
  //assert.equal("200", statusCodeResponse);

  });

  Then('User got name: from server {string}  name  {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'true';
    
  });



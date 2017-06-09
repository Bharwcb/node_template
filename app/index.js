// const express = require('express');
// const app = express();
// const request = require('request');

// request('http://www.google.com', function (err, res, body) {
//   console.log('error:', error);
//   console.log("res: ", res);
//   console.log("res.statusCode", res.statusCode);
//   // console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

const calc = require('./calc');

const numbersToAdd = [1,2,3,4];

const result = calc.sum(numbersToAdd);
console.log(result);
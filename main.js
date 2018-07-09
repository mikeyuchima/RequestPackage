var request = require('request');
var fs = require('fs');
var https = require('https');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {                               
         throw err; 
       })
       .on('response', function (response) {                       
         console.log('Response Status Code: ', response.statusCode);
         console.log('Downloading Image...');
         console.log(response.statusMessage, response.headers['content-type'])
         console.log('..Download Complete');
       })
       .pipe(fs.createWriteStream('./futures.jpg'));
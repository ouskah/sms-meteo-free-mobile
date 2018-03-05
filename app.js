var request = require("request");

request("https://smsapi.free-mobile.fr/sendmsg?user="+process.argv[2]+"&pass="+process.argv[3]+"&msg=Hello%20World%20!", function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
});
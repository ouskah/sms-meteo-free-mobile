var request = require("request");

var sms = function (text){
request("https://smsapi.free-mobile.fr/sendmsg?user="+process.env.SMS_ID+"&pass="+process.env.SMS_LOGIN+"&msg="+text, function (error, response) {
	console.log("\nfree");
	console.log("error:", error); // Affiche un code d'erreur si besoin
	console.log("statusCode:", response && response.statusCode); // Affiche le statut et la réponse
});
}

module.exports = sms;
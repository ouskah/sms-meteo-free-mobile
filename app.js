var request = require("request");

// Documentation de l'API forecast : https://openweathermap.org/forecast5
// Actuelle + 3h, Paris (2988507) + celsius + français
function meteo(){
	request("https://api.openweathermap.org/data/2.5/forecast?id=3020392&units=metric&lang=fr&cnt=2&APPID="+process.env.WEATHER_KEY, function (error, response) {
	console.log("\nmeteo");
	console.log("error:", error); 
	console.log("statusCode:", response && response.statusCode);
	console.log('body:', JSON.parse(response.body));

	var a = JSON.parse(response.body);
	SMS(parse(a.list[0]) + " | " + parse(a.list[1]));
});
}


function parse(json){

	var temp_min = json.main.temp_min;
	var temp_max = json.main.temp_max;
	var weather_description = json.weather[0].description;
	var timestamp = json.dt_txt;

	return encodeURIComponent(timestamp + ": " +temp_min + "-" + temp_max + "C, " + weather_description);

}



// Déclenche l'envoi d'un SMS avec Free Mobile
// Les identifiants proviennent d'un fichier .env
function SMS(text){
request("https://smsapi.free-mobile.fr/sendmsg?user="+process.env.SMS_ID+"&pass="+process.env.SMS_LOGIN+"&msg="+text, function (error, response) {
	console.log("\nfree");
	console.log("error:", error); // Affiche un code d'erreur si besoin
	console.log("statusCode:", response && response.statusCode); // Affiche le statut et la réponse
});
}


// Déclenchement de l'application 
meteo();


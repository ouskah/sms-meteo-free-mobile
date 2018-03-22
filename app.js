var request = require("request");

var sms = require("./sms");


// Documentation de l'API forecast : https://openweathermap.org/forecast5
// Actuelle + 3h, Paris (2988507) + celsius + français
function meteo(){
	request("https://api.openweathermap.org/data/2.5/forecast?id=2988507&units=metric&lang=fr&cnt=2&APPID="+process.env.WEATHER_KEY, function (error, response) {
	console.log("\nmeteo");
	console.log("error:", error); 
	console.log("statusCode:", response && response.statusCode);
	console.log("body:", JSON.parse(response.body));

	var a = JSON.parse(response.body);
	sms(parse(a.list[0]) + " | " + parse(a.list[1]));
});
}


function parse(json){

	var temp_min = json.main.temp_min;
	var temp_max = json.main.temp_max;
	var weather_description = json.weather[0].description;
	var timestamp = json.dt_txt;

	return encodeURIComponent(timestamp + ": " +temp_min + "-" + temp_max + "C, " + weather_description);

}





// Déclenchement de l'application 
meteo();



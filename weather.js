var city_1=new Object();

function insertandcheck_1()
{
	var zipcodeValue=document.getElementById('zipcode').value;
	if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
	{
		alert("Please type in the valid zipcode!");
		return false;
	}
	city_1.zipcode = zipcodeValue;
	getWoeidNumber_1(city_1.zipcode);
	show_1();
    //getWeather(city.woeid);
}

function show_1(){
	content="";
	content += "Wind chill: "+city_1.windchill+" F"+"<br>";
	content += "Wind speed: "+city_1.windSpeed+" mph"+"<br>";
	content += "Wind Direction: "+city_1.windDir+"<br>";
	content += "Sunrise: "+city_1.sunrise+"<br>";
	content += "Sunset: "+city_1.sunset+"<br>";
	content += "Humidity: "+city_1.humidity+" %"+"<br>";
	content += "Barometer: "+city_1.barometer+"<br>";
	content += "Five day forecast: "+city_1.fivedays+"<br>";
	/*document.getElementById('display').innerHTML = city.zipcode;*/
	document.getElementById('display_1').innerHTML = content;
}

function getWoeidNumber_1(x){
	var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
	var secondPart = "%22&format=json&diagnostics=true&callback=";
	var searchURL = firstPart + x + secondPart;
	$.ajax({
		url: searchURL,
		success: getWoeid_1
		});
}

function getWeather_1(y){
       var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
       var sPart="&format=json&diagnostics=true&callback=";
       var wURL=fPart + y + sPart;
       $.ajax({
             url: wURL,
             success: getWeatherData_1
             });
}

function getWeatherData_1(data){
	getWindChill_1(data);
	getSunrise_1(data);
	getSunset_1(data);
	getFivedays_1(data);
	getHumidity_1(data);
	getBarometer_1(data);
	getWind_1(data);
}

function getWoeid_1(data){
	//alert('Hi');
	city_1.woeid= data.query.results.place[0].woeid;
    getWeather_1(city_1.woeid);
}

function getWindChill_1(data){
	city_1.windchill= data.query.results.channel.wind.chill;
}

function getSunrise_1(data){
	city_1.sunrise= data.query.results.channel.astronomy.sunrise;
}

function getSunset_1(data){
	city_1.sunset= data.query.results.channel.astronomy.sunset;
}

function getFivedays_1(data){
	city_1.fivedays= data.query.results.channel.item.description;
}

function getHumidity_1(data){
	city_1.humidity= data.query.results.channel.atmosphere.humidity;
}

function getBarometer_1(data){
	pres= data.query.results.channel.atmosphere.rising;
	switch(pres)
	{
		case 1:
		city_1.barometer="R";
		break;
		case 2:
		city_1.barometer="F";
		break;
		default:
		city_1.barometer="S";
	}
}

function getWind_1(data){
	dir= data.query.results.channel.wind.direction;
	city_1.windSpeed=data.query.results.channel.wind.speed;

	if(dir>=348.75 || dir<11.25){
		city_1.windDir="N";
	}
	else if(dir>=11.25 && dir<33.75){
		city_1.windDir="NNE";
	}
	else if(dir>=33.75 && dir<56.25){
		city_1.windDir="NE";
	}
	else if(dir>=56.25 && dir<78.75){
		city_1.windDir="ENE";
	}
	else if(dir>=78.75 && dir<101.25){
		city_1.windDir="E";
	}
	else if(dir>101.25 && dir<123.75){
		city_1.windDir="ESE";
	}
	else if(dir>123.75 && dir<146.25){
		city_1.windDir="SE";
	}
	else if(dir>=146.25 && dir<168.75){
		city_1.windDir="SSE";
	}
	else if(dir>=168.75 && dir<191.25){
		city_1.windDir="S";
	}
	else if(dir>=191.25 && dir<213.75){
		city_1.windDir="SSW";
	}
	else if(dir>=213.75 && dir<236.25){
		city_1.windDir="SW";
	}
	else if(dir>=236.25 && dir<258.75){
		city_1.windDir="WSW";
	}
	else if(dir>=258.75 && dir<281.25){
		city_1.windDir="W";
	}
	else if(dir>=281.25 && dir<303.75){
		city_1.windDir="WNW";
	}
	else if(dir>=303.75 && dir<326.25){
		city_1.windDir="NW";
	}
	else{
		city_1.windDir="NNW";
	}

}
/*$('#getit').click(function() {
	var zipcodeValue=document.getElementById('zipcode').value;
if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
  {
  alert("Please type in the valid zipcode!");
  return false;
  }
  city.zipcode=zipcodeValue;
});*/

var city_2=new Object();

function insertandcheck_2()
{
	var zipcodeValue=document.getElementById('zipcode').value;
	if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
	{
		alert("Please type in the valid zipcode!");
		return false;
	}
	city_2.zipcode = zipcodeValue;
	getWoeidNumber_2(city_2.zipcode);
	show_2();
    //getWeather(city.woeid);
}

function show_2(){
	content="";
	content += "Wind chill: "+city_2.windchill+" F"+"<br>";
	content += "Wind speed: "+city_2.windSpeed+" mph"+"<br>";
	content += "Wind Direction: "+city_2.windDir+"<br>";
	content += "Sunrise: "+city_2.sunrise+"<br>";
	content += "Sunset: "+city_2.sunset+"<br>";
	content += "Humidity: "+city_2.humidity+" %"+"<br>";
	content += "Barometer: "+city_2.barometer+"<br>";
	content += "Five day forecast: "+city_2.fivedays+"<br>";
	/*document.getElementById('display').innerHTML = city.zipcode;*/
	document.getElementById('display_2').innerHTML = content;
}

function getWoeidNumber_2(x){
	var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
	var secondPart = "%22&format=json&diagnostics=true&callback=";
	var searchURL = firstPart + x + secondPart;
	$.ajax({
		url: searchURL,
		success: getWoeid_2
		});
}

function getWeather_2(y){
       var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
       var sPart="&format=json&diagnostics=true&callback=";
       var wURL=fPart + y + sPart;
       $.ajax({
             url: wURL,
             success: getWeatherData_2
             });
}

function getWeatherData_2(data){
	getWindChill_2(data);
	getSunrise_2(data);
	getSunset_2(data);
	getFivedays_2(data);
	getHumidity_2(data);
	getBarometer_2(data);
	getWind_2(data);
}

function getWoeid_2(data){
	//alert('Hi');
	city_2.woeid= data.query.results.place[0].woeid;
    getWeather_2(city_2.woeid);
}

function getWindChill_2(data){
	city_2.windchill= data.query.results.channel.wind.chill;
}

function getSunrise_2(data){
	city_2.sunrise= data.query.results.channel.astronomy.sunrise;
}

function getSunset_2(data){
	city_2.sunset= data.query.results.channel.astronomy.sunset;
}

function getFivedays_2(data){
	city_2.fivedays= data.query.results.channel.item.description;
}

function getHumidity_2(data){
	city_2.humidity= data.query.results.channel.atmosphere.humidity;
}

function getBarometer_2(data){
	pres= data.query.results.channel.atmosphere.rising;
	switch(pres)
	{
		case 1:
		city_2.barometer="R";
		break;
		case 2:
		city_2.barometer="F";
		break;
		default:
		city_2.barometer="S";
	}
}

function getWind_1(data){
	dir= data.query.results.channel.wind.direction;
	city_2.windSpeed=data.query.results.channel.wind.speed;

	if(dir>=348.75 || dir<11.25){
		city_2.windDir="N";
	}
	else if(dir>=11.25 && dir<33.75){
		city_2.windDir="NNE";
	}
	else if(dir>=33.75 && dir<56.25){
		city_2.windDir="NE";
	}
	else if(dir>=56.25 && dir<78.75){
		city_2.windDir="ENE";
	}
	else if(dir>=78.75 && dir<101.25){
		city_2.windDir="E";
	}
	else if(dir>101.25 && dir<123.75){
		city_2.windDir="ESE";
	}
	else if(dir>123.75 && dir<146.25){
		city_2.windDir="SE";
	}
	else if(dir>=146.25 && dir<168.75){
		city_2.windDir="SSE";
	}
	else if(dir>=168.75 && dir<191.25){
		city_2.windDir="S";
	}
	else if(dir>=191.25 && dir<213.75){
		city_2.windDir="SSW";
	}
	else if(dir>=213.75 && dir<236.25){
		city_2.windDir="SW";
	}
	else if(dir>=236.25 && dir<258.75){
		city_2.windDir="WSW";
	}
	else if(dir>=258.75 && dir<281.25){
		city_2.windDir="W";
	}
	else if(dir>=281.25 && dir<303.75){
		city_2.windDir="WNW";
	}
	else if(dir>=303.75 && dir<326.25){
		city_2.windDir="NW";
	}
	else{
		city_2.windDir="NNW";
	}

}

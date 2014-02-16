var city=new Object();
	
function insertandcheck()
{
	var zipcodeValue=document.getElementById('zipcode').value;
	if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
	{
		alert("Please type in the valid zipcode!");
		return false;
	}
	city.zipcode = zipcodeValue;
	getWoeidNumber(city.zipcode);
    //getWeather(city.woeid);
}

function show(){
	content="";
	content += "Wind chill: "+city.windchill+" F"+"<br>";
	content += "Wind speed: "+city.windSpeed+" mph"+"<br>";
	content += "Wind Direction: "+city.windDir+"<br>";
	content += "Sunrise: "+city.sunrise+"<br>";
	content += "Sunset: "+city.sunset+"<br>";
	content += "Humidity: "+city.humidity+" %"+"<br>";
	content += "Barometer: "+city.barometer+"<br>";
	content += "Five day forecast: "+city.fivedays+"<br>";
	/*document.getElementById('display').innerHTML = city.zipcode;*/
	document.getElementById('display').innerHTML = content;
}

function getWoeidNumber(x){
	var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
	var secondPart = "%22&format=json&diagnostics=true&callback=";
	var searchURL = firstPart + x + secondPart;
	$.ajax({
		url: searchURL,
		success: getWoeid
		});
}

function getWeather(y){
       var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
       var sPart="&format=json&diagnostics=true&callback=";
       var wURL=fPart + y + sPart;
       $.ajax({
             url: wURL,
             success: getWeatherData
             });
}

function getWeatherData(data){
	getWindChill(data);
	getSunrise(data);
	getSunset(data);
	getFivedays(data);
	getHumidity(data);
	getBarometer(data);
	getWind(data);
}

function getWoeid(data){
	//alert('Hi');
	city.woeid= data.query.results.place[0].woeid;
    getWeather(city.woeid);
}
	
function getWindChill(data){
	city.windchill= data.query.results.channel.wind.chill;
}

function getSunrise(data){
	city.sunrise= data.query.results.channel.astronomy.sunrise;
}

function getSunset(data){
	city.sunset= data.query.results.channel.astronomy.sunset;
}

function getFivedays(data){
	city.fivedays= data.query.results.channel.item.description;
}

function getHumidity(data){
	city.humidity= data.query.results.channel.atmosphere.humidity;
}

function getBarometer(data){
	pres= data.query.results.channel.atmosphere.rising;
	switch(pres)
	{
		case 1:
		city.barometer="R";
		break;
		case 2:
		city.barometer="F";
		break;
		default:
		city.barometer="S";
	}
}

function getWind(data){
	dir= data.query.results.channel.wind.direction;
	city.windSpeed=data.query.results.channel.wind.speed;
	
	if(dir>=348.75 || dir<11.25){
		city.windDir="N";
	}
	else if(dir>=11.25 && dir<33.75){
		city.windDir="NNE";
	}
	else if(dir>=33.75 && dir<56.25){
		city.windDir="NE";
	}
	else if(dir>=56.25 && dir<78.75){
		city.windDir="ENE";
	}
	else if(dir>=78.75 && dir<101.25){
		city.windDir="E";
	}
	else if(dir>101.25 && dir<123.75){
		city.windDir="ESE";
	}
	else if(dir>123.75 && dir<146.25){
		city.windDir="SE";
	}
	else if(dir>=146.25 && dir<168.75){
		city.windDir="SSE";
	}
	else if(dir>=168.75 && dir<191.25){
		city.windDir="S";
	}
	else if(dir>=191.25 && dir<213.75){
		city.windDir="SSW";
	}
	else if(dir>=213.75 && dir<236.25){
		city.windDir="SW";
	}
	else if(dir>=236.25 && dir<258.75){
		city.windDir="WSW";
	}
	else if(dir>=258.75 && dir<281.25){
		city.windDir="W";
	}
	else if(dir>=281.25 && dir<303.75){
		city.windDir="WNW";
	}
	else if(dir>=303.75 && dir<326.25){
		city.windDir="NW";
	}
	else{
		city.windDir="NNW";
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

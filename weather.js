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
	content += "Wind Chill: "+city.windchill+" F"+"<br>";
	content += "Sunrise: "+city.sunrise+"<br>";
	content += "Sunset: "+city.sunset+"<br>";
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
/*$('#getit').click(function() {
	var zipcodeValue=document.getElementById('zipcode').value;
if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
  {
  alert("Please type in the valid zipcode!");
  return false;
  }
  city.zipcode=zipcodeValue;
});*/
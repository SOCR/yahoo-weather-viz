$(document).ready(function() {

  $('#zip').click(function() {

    var zip1 = document.getElementById("input1").value;
    var zip2 = document.getElementById("input2").value;
    var placeurl1="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
    var placeurl2="%22&format=json&diagnostics=true&debug=true&callback=";


    var placecombo1=placeurl1+zip1+placeurl2;
    var placecombo2=placeurl1+zip2+placeurl2;
    
    


    $.ajax ({
      url: placecombo1,
      success: place1
    });




})
  

  
function jax()
{

    var zip1 = document.getElementById("input1").value;
    var zip2 = document.getElementById("input2").value;
    var placeurl1="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
    var placeurl2="%22&format=json&diagnostics=true&debug=true&callback=";


    var placecombo1=placeurl1+zip1+placeurl2;
    var placecombo2=placeurl1+zip2+placeurl2;

 $.ajax ({
      url: placecombo2,
      success: place2
    }); 
}







  function place2(data) {
      
      try{
        var woeid=data.query.results.place[0].woeid;
      }
      catch(err)
      {
        er();
      }
      
      var weatherurl1="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
      var weatherurl2="&format=json&diagnostics=true&callback=";
      
      var weathercombo=weatherurl1+woeid+weatherurl2;

       $.ajax({url:weathercombo,success:weather2,complete:compare});
     }


function place1(data) {
      
      try{
        var woeid=data.query.results.place[0].woeid;
      }
      catch(err)
      {
        er();
      }
      
      var weatherurl1="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
      var weatherurl2="&format=json&diagnostics=true&callback=";
      
      var weathercombo=weatherurl1+woeid+weatherurl2;

       $.ajax({url:weathercombo,success:weather1,complete:jax});
     }





function weather1(data){

var location=data.query.results.channel.location.city;
var temperature=data.query.results.channel.item.condition.temp;
var high=data.query.results.channel.item.forecast[0].high;
var low=data.query.results.channel.item.forecast[0].low;
var chill=data.query.results.channel.wind.chill;
var sunrise=data.query.results.channel.astronomy.sunrise;
var sunset=data.query.results.channel.astronomy.sunset;
var humidity=data.query.results.channel.atmosphere.humidity;
var barometer=data.query.results.channel.atmosphere.pressure;
var direction=data.query.results.channel.wind.direction;
var speed=data.query.results.channel.wind.speed;

$("div#location1").text("City1: "+location);
$("div#temperature1").text("Temperature: "+temperature+"F");
$("div#high1").text("High: "+high+"F");
$("div#low1").text("Low: "+low+"F");
$("div#chill1").text("Wind Chill: "+chill);
$("div#sunrise1").text("Sunrise: "+sunrise);
$("div#sunset1").text("Sunset: "+sunset);
$("div#humidity1").text("Humidity: "+humidity);
$("div#barometer1").text("Barometer: "+barometer);
$("div#direction1").text("Wind Direction: "+direction);
$("div#speed1").text("Speed: "+speed);

}


function weather2(data){

var location=data.query.results.channel.location.city;
var temperature=data.query.results.channel.item.condition.temp;
var high=data.query.results.channel.item.forecast[0].high;
var low=data.query.results.channel.item.forecast[0].low;
var chill=data.query.results.channel.wind.chill;
var sunrise=data.query.results.channel.astronomy.sunrise;
var sunset=data.query.results.channel.astronomy.sunset;
var humidity=data.query.results.channel.atmosphere.humidity;
var barometer=data.query.results.channel.atmosphere.pressure;
var direction=data.query.results.channel.wind.direction;
var speed=data.query.results.channel.wind.speed;

$("div#location2").text("City2: "+location);
$("div#temperature2").text("Temperature: "+temperature+"F");
$("div#high2").text("High: "+high+"F");
$("div#low2").text("Low: "+low+"F");
$("div#chill2").text("Wind Chill: "+chill);
$("div#sunrise2").text("Sunrise: "+sunrise);
$("div#sunset2").text("Sunset: "+sunset);
$("div#humidity2").text("Humidity: "+humidity);
$("div#barometer2").text("Barometer: "+barometer);
$("div#direction2").text("Wind Direction: "+direction);
$("div#speed2").text("Speed: "+speed);

}



function er(){
  alert("Wrong zip code!");

}


function compare()
{
  var tempstr1=$("div#temperature1").html();
  var temper1=tempstr1.replace("F","");
  var finalT1=temper1.replace("Temperature: ","");

   var tempstr2=$("div#temperature2").html();
  var temper2=tempstr2.replace("F","");
  var finalT2=temper2.replace("Temperature: ","");


  var city1=$("div#location1").html();
  var finalCity1=city1.replace("City1: ","");

   var city2=$("div#location2").html();
  var finalCity2=city2.replace("City2: ","");

if((finalT1-finalT2)>0)
{
  $("div#comparison").text(finalCity1+"'temperature is "+(finalT1-finalT2)+"F higher than "+finalCity2+"'s");

}
else if((finalT1-finalT2)!=0)
$("div#comparison").text(finalCity2+"'temperature is "+(finalT2-finalT1)+"F higher than "+finalCity1+"'s");
else
  $("div#comparison").text(finalCity2+" and "+finalCity1+"have the same temperature.");
}


})


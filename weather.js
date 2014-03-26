

$(document).ready(function(){
    var city_1=new Object();
    var city_2=new Object();
    var counter=1;
	
	$("#zipcode").focus(function(){
		$(this).val("");
	})
    
   $("#question").hide();
   
///////////// D3 //////////////
var cities = new Array();

if(counter==1){
cities.push(city_1);
}
else if(counter==2){
cities.push(city_2);
}
else if(city_1.zipcode != cities(cities.length-1))

    
  $("#getit").click(function(){
      if(counter==1){
        insertandcheck_1();
        setTimeout(show_1,500);
<<<<<<< HEAD
        counter=2;
=======
        city_left=CityArray[CityNumber];
>>>>>>> FETCH_HEAD
      }
      else if(counter==2){
        insertandcheck_2();
        setTimeout(show_2,500);
<<<<<<< HEAD
          counter=3;
=======
        city_right=CityArray[CityNumber];
>>>>>>> FETCH_HEAD
      }
      else if(counter==3){
          $("#question").show();
          $("#left").click(function(){
              insertandcheck_1();
              setTimeout(show_1,500);
               $("#question").hide();
               city_left=CityArray[CityNumber];
          });
          $("#right").click(function(){
              insertandcheck_2();
              setTimeout(show_2,500);
               $("#question").hide();
               city_right=CityArray[CityNumber];
          });
      }
<<<<<<< HEAD
  });
=======
      

    })
   
    function insertandcheck(){
            
	       var zipcodeValue =document.getElementById('zipcode').value;
            
	       if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5){
		      alert("Please type in the valid zipcode!");
		      return false;
	       }
           else{
	           CityArray[CityNumber].zipcode = zipcodeValue;
                getWoeidNumber(CityArray[CityNumber].zipcode);
            }
        };
>>>>>>> FETCH_HEAD
    
function insertandcheck_1(){
	var zipcodeValue =document.getElementById('zipcode').value;
	if (isNaN(zipcodeValue) || zipcodeValue.toString().length != 5)
	{
		alert("Please type in the valid zipcode!");
		return false;
	}
    else{
	   city_1.zipcode = zipcodeValue;
        getWoeidNumber_1(city_1.zipcode);
    }
    //getWeather(city.woeid);
};
    
function show_1(){
	
	content_cityname=city_1.place;
	
    content_details="";
	content_details += "Wind chill: "+city_1.windchill+" F"+"<br>"
	content_details += "Humidity: "+city_1.humidity+" %"+"<br>";
	
	content_wind="";
	content_wind += "Wind speed: "+city_1.windSpeed+" mph"+"<br>";
	content_wind += "Wind Direction: "+city_1.windDir+"<br>";
	content_wind += "Barometer: "+city_1.barometer+"<br>";
	
	content_sunandmoon="";
	content_sunandmoon += "Sunrise: "+city_1.sunrise+"<br>";
	content_sunandmoon += "Sunset: "+city_1.sunset+"<br>";
	
	content_todayhl=city_1.day1high+city_1.day1low;
	content_current=city_1.current+"°";
	
	content_forcast = "<p>Forcast</p>";
        content_forcast +="<p align=center>" ;
        content_forcast +="<table border='1' align=center><tr><td align=center>" + city_1.day1 + "</td><td align=center>" + city_1.day1high + "</td><td align=center>" + city_1.day1low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_1.day2 + "</td><td align=center>" + city_1.day2high + "</td><td align=center>" + city_1.day2low +"</td></tr>"  
                                                       + "<tr><td align=center>" + city_1.day3 + "</td><td align=center>" + city_1.day3high + "</td><td align=center>" + city_1.day3low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_1.day4 + "</td><td align=center>" + city_1.day4high + "</td><td align=center>" + city_1.day4low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_1.day5 + "</td><td align=center>" + city_1.day5high + "</td><td align=center>" + city_1.day5low +"</td></tr>"
                                                       + "</table><p align=center>";
                           
                          

	/*document.getElementById('display').innerHTML = city.zipcode;*/
	$("#display_cityname1").html(content_cityname);
	$("#display_details1").html(content_details);
	$("#display_wind1").html(content_wind);
	$("#display_sunandmoon1").html(content_sunandmoon);
	$("#display_todayhl1").html(content_todayhl);
	$("#display_current1").html(content_current);
	$("#display_forecast1").html(content_forcast);
	
};


function getWoeidNumber_1(x){
	var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
	var secondPart = "%22&format=json&diagnostics=true&callback=";
	var searchURL = firstPart + x + secondPart;
	$.ajax({
		url: searchURL,
		success: getWoeid_1
		});
};

function getWeather_1(y){
       var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
       var sPart="&format=json&diagnostics=true&callback=";
       var wURL=fPart + y + sPart;
       $.ajax({
             url: wURL,
             success: getWeatherData_1
             });
};

function getWeatherData_1(data){
	getWindChill_1(data);
	getSunrise_1(data);
	getSunset_1(data);
	getFivedays_1(data);
	getHumidity_1(data);
	getBarometer_1(data);
	getWind_1(data);
	getlocation_1(data);
	getdaytemp_1(data);
	compare();
};

function getlocation_1(data){
	city_1.place=data.query.results.channel.location.city;
}

function getdaytemp_1(data){
	
	/*var day1high=Math.round(data.query.results.channel.item.forecast[0].high);
	var day1low=Math.round(data.query.results.channel.item.forecast[0].low);
	city_1.day1temp=Math.round(day1high+day1low)/2;*/
city_1.day1temp=(Math.round(data.query.results.channel.item.forecast[0].high)+Math.round(data.query.results.channel.item.forecast[0].low))/2;
city_1.day2temp=(Math.round(data.query.results.channel.item.forecast[1].high)+Math.round(data.query.results.channel.item.forecast[1].low))/2;
city_1.day3temp=(Math.round(data.query.results.channel.item.forecast[2].high)+Math.round(data.query.results.channel.item.forecast[2].low))/2;
city_1.day4temp=(Math.round(data.query.results.channel.item.forecast[3].high)+Math.round(data.query.results.channel.item.forecast[3].low))/2;
city_1.day5temp=(Math.round(data.query.results.channel.item.forecast[4].high)+Math.round(data.query.results.channel.item.forecast[4].low))/2;
city_1.day1=data.query.results.channel.item.forecast[0].day;
city_1.day2=data.query.results.channel.item.forecast[1].day;
city_1.day3=data.query.results.channel.item.forecast[2].day;
city_1.day4=data.query.results.channel.item.forecast[3].day;
city_1.day5=data.query.results.channel.item.forecast[4].day;

city_1.day1high=data.query.results.channel.item.forecast[0].high;
city_1.day1low=data.query.results.channel.item.forecast[0].low;
city_1.day2high=data.query.results.channel.item.forecast[1].high;
city_1.day2low=data.query.results.channel.item.forecast[1].low;
city_1.day3high=data.query.results.channel.item.forecast[2].high;
city_1.day3low=data.query.results.channel.item.forecast[2].low;
city_1.day4high=data.query.results.channel.item.forecast[3].high;
city_1.day4low=data.query.results.channel.item.forecast[3].low;
city_1.day5high=data.query.results.channel.item.forecast[4].high;
city_1.day5low=data.query.results.channel.item.forecast[4].low;
}

function getWoeid_1(data){
	//alert('Hi');
	city_1.woeid= data.query.results.place[0].woeid;
      getWeather_1(city_1.woeid);
};

function getWindChill_1(data){
	city_1.windchill= data.query.results.channel.wind.chill;
};

function getSunrise_1(data){
	city_1.sunrise= data.query.results.channel.astronomy.sunrise;
};

function getSunset_1(data){
	city_1.sunset= data.query.results.channel.astronomy.sunset;
};

function getFivedays_1(data){
	city_1.current= data.query.results.channel.item.condition.temp;
};

function getHumidity_1(data){
	city_1.humidity= data.query.results.channel.atmosphere.humidity;
};

function getBarometer_1(data){
	pres= data.query.results.channel.atmosphere.rising;
	switch(pres)
	{
		case '1':
		city_1.barometer="R";
		break;
		case '2':
		city_1.barometer="F";
		break;
		default:
		city_1.barometer="S";
	}
};

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

};
    
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
    //getWeather(city.woeid);
};

function show_2(){
	content_cityname=city_2.place;
	
    content_details="";
	content_details += "Wind chill: "+city_2.windchill+" F"+"<br>"
	content_details += "Humidity: "+city_2.humidity+" %"+"<br>";
	
	content_wind="";
	content_wind += "Wind speed: "+city_2.windSpeed+" mph"+"<br>";
	content_wind += "Wind Direction: "+city_2.windDir+"<br>";
	content_wind += "Barometer: "+city_2.barometer+"<br>";
	
	content_sunandmoon="";
	content_sunandmoon += "Sunrise: "+city_2.sunrise+"<br>";
	content_sunandmoon += "Sunset: "+city_2.sunset+"<br>";
	
    content_todayhl=city_2.day1high+city_2.day1low;
	content_current=city_2.current+"°";
	
	content_forcast = "<p>Forcast</p>";
        content_forcast +="<p align=center>" ;
        content_forcast +="<table border='1' align=center><tr><td align=center>" + city_2.day1 + "</td><td align=center>" + city_2.day1high + "</td><td align=center>" + city_2.day1low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_2.day2 + "</td><td align=center>" + city_2.day2high + "</td><td align=center>" + city_2.day2low +"</td></tr>"  
                                                       + "<tr><td align=center>" + city_2.day3 + "</td><td align=center>" + city_2.day3high + "</td><td align=center>" + city_2.day3low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_2.day4 + "</td><td align=center>" + city_2.day4high + "</td><td align=center>" + city_2.day4low +"</td></tr>"
                                                       + "<tr><td align=center>" + city_2.day5 + "</td><td align=center>" + city_2.day5high + "</td><td align=center>" + city_2.day5low +"</td></tr>"
                                                       + "</table><p align=center>";
	/*document.getElementById('display').innerHTML = city.zipcode;*/
	$("#display_cityname2").html(content_cityname);
	$("#display_details2").html(content_details);
	$("#display_wind2").html(content_wind);
	$("#display_sunandmoon2").html(content_sunandmoon);
	$("#display_todayhl2").html(content_todayhl);
	$("#display_current2").html(content_current);
	$("#display_forecast2").html(content_forcast);
	
};

function getWoeidNumber_2(x){
	var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
	var secondPart = "%22&format=json&diagnostics=true&callback=";
	var searchURL = firstPart + x + secondPart;
	$.ajax({
		url: searchURL,
		success: getWoeid_2
		});
};

function getWeather_2(y){
       var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
       var sPart="&format=json&diagnostics=true&callback=";
       var wURL=fPart + y + sPart;
       $.ajax({
             url: wURL,
             success: getWeatherData_2
             });
};

function getWeatherData_2(data){
	getWindChill_2(data);
	getSunrise_2(data);
	getSunset_2(data);
	getFivedays_2(data);
	getHumidity_2(data);
	getBarometer_2(data);
	getWind_2(data);
	getlocation_2(data);
	getdaytemp_2(data);
	compare();
};

function getlocation_2(data){
	city_2.place=data.query.results.channel.location.city;
}

function getdaytemp_2(data){
city_2.day1temp=(Math.round(data.query.results.channel.item.forecast[0].high)+Math.round(data.query.results.channel.item.forecast[0].low))/2;
city_2.day2temp=(Math.round(data.query.results.channel.item.forecast[1].high)+Math.round(data.query.results.channel.item.forecast[1].low))/2;
city_2.day3temp=(Math.round(data.query.results.channel.item.forecast[2].high)+Math.round(data.query.results.channel.item.forecast[2].low))/2;
city_2.day4temp=(Math.round(data.query.results.channel.item.forecast[3].high)+Math.round(data.query.results.channel.item.forecast[3].low))/2;
city_2.day5temp=(Math.round(data.query.results.channel.item.forecast[4].high)+Math.round(data.query.results.channel.item.forecast[4].low))/2;
city_2.day1=data.query.results.channel.item.forecast[0].day;
city_2.day2=data.query.results.channel.item.forecast[1].day;
city_2.day3=data.query.results.channel.item.forecast[2].day;
city_2.day4=data.query.results.channel.item.forecast[3].day;
city_2.day5=data.query.results.channel.item.forecast[4].day;

city_2.day1high=data.query.results.channel.item.forecast[0].high;
city_2.day1low=data.query.results.channel.item.forecast[0].low;
city_2.day2high=data.query.results.channel.item.forecast[1].high;
city_2.day2low=data.query.results.channel.item.forecast[1].low;
city_2.day3high=data.query.results.channel.item.forecast[2].high;
city_2.day3low=data.query.results.channel.item.forecast[2].low;
city_2.day4high=data.query.results.channel.item.forecast[3].high;
city_2.day4low=data.query.results.channel.item.forecast[3].low;
city_2.day5high=data.query.results.channel.item.forecast[4].high;
city_2.day5low=data.query.results.channel.item.forecast[4].low;
}

function getWoeid_2(data){
	//alert('Hi');
	city_2.woeid= data.query.results.place[0].woeid;
    getWeather_2(city_2.woeid);
};

function getWindChill_2(data){
	city_2.windchill= data.query.results.channel.wind.chill;
};

function getSunrise_2(data){
	city_2.sunrise= data.query.results.channel.astronomy.sunrise;
};

function getSunset_2(data){
	city_2.sunset= data.query.results.channel.astronomy.sunset;
};

function getFivedays_2(data){
	city_2.current= data.query.results.channel.item.condition.temp;
};

function getHumidity_2(data){
	city_2.humidity= data.query.results.channel.atmosphere.humidity;
};

function getBarometer_2(data){
	pres= data.query.results.channel.atmosphere.rising;
	switch(pres)
	{
		case '1':
		city_2.barometer="R";
		break;
		case '2':
		city_2.barometer="F";
		break;
		default:
		city_2.barometer="S";
	}
};

function getWind_2(data){
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

    
<<<<<<< HEAD
    function compare(){

comparison="";
	
=======
  function compare(){
        comparison="";
	  city_1=city_left;;
	  city_2=city_right;
	  
>>>>>>> FETCH_HEAD
	if (city_1.day1temp<city_2.day1temp){
	   differenceday1=city_2.day1temp-city_1.day1temp;
       comparison += city_1.place+" is " + differenceday1 + " degrees colder than " +city_2.place+" today. <br>";
    }
    else{
    	differenceday1=city_1.day1temp-city_2.day1temp;
        comparison += city_1.place+" is " + differenceday1 + " degrees warmer than " +city_2.place+" today. <br>";
    }
<<<<<<< HEAD
    
    if (city_1.day2temp<city_2.day2temp){
	   differenceday2=city_2.day2temp-city_1.day2temp;
       comparison += city_1.place+" is " + differenceday2 + " degrees colder than " +city_2.place+" tomorrow. <br>";
    }
    else{
    	differenceday2=city_1.day2temp-city_2.day2temp;
        comparison += city_1.place+" is " + differenceday2 + " degrees warmer than " +city_2.place+" tomorrow. <br>";
    }
    
    if (city_1.day3temp<city_2.day3temp){
	   differenceday3=city_2.day3temp-city_1.day3temp;
       comparison += city_1.place+" is " + differenceday3 + " degrees colder than " +city_2.place+" on " + city_1.day3 + "<br>";
    }
    else{
    	differenceday3=city_1.day3temp-city_2.day3temp;
        comparison += city_1.place+" is " + differenceday3 + " degrees warmer than " +city_2.place+" on " + city_1.day3 +"<br>";
    }

    if (city_1.day4temp<city_2.day4temp){
	   differenceday4=city_2.day4temp-city_1.day4temp;
       comparison += city_1.place+" is " + differenceday4 + " degrees colder than " +city_2.place +" on " + city_1.day4+"<br>";
    }
    else{
    	differenceday4=city_1.day4temp-city_2.day4temp;
        comparison += city_1.place+" is " + differenceday4 + " degrees warmer than " +city_2.place+" on " + city_1.day4+"<br>";
    }

    if (city_1.day5temp<city_2.day5temp){
	   differenceday5=city_2.day5temp-city_1.day5temp;
       comparison += city_1.place+" is " + differenceday5 + " degrees colder than " +city_2.place+" on " + city_1.day5+"<br>";
    }
    else{
    	differenceday5=city_1.day5temp-city_2.day5temp;
        comparison += city_1.place+" is " + differenceday5 + " degrees warmer than " +city_2.place+" on " + city_1.day5+"<br>";
    }
    $("#compare").html(comparison);

}


}); 
=======
    
    if (city_1.day2temp<city_2.day2temp){
	   differenceday2=city_2.day2temp-city_1.day2temp;
       comparison += city_1.place+" is " + differenceday2 + " degrees colder than " +city_2.place+" tomorrow. <br>";
    }
    else{
    	differenceday2=city_1.day2temp-city_2.day2temp;
        comparison += city_1.place+" is " + differenceday2 + " degrees warmer than " +city_2.place+" tomorrow. <br>";
    }
    
    if (city_1.day3temp<city_2.day3temp){
	   differenceday3=city_2.day3temp-city_1.day3temp;
       comparison += city_1.place+" is " + differenceday3 + " degrees colder than " +city_2.place+" on " + city_1.day3 + "<br>";
    }
    else{
    	differenceday3=city_1.day3temp-city_2.day3temp;
        comparison += city_1.place+" is " + differenceday3 + " degrees warmer than " +city_2.place+" on " + city_1.day3 +"<br>";
    }

    if (city_1.day4temp<city_2.day4temp){
	   differenceday4=city_2.day4temp-city_1.day4temp;
       comparison += city_1.place+" is " + differenceday4 + " degrees colder than " +city_2.place +" on " + city_1.day4+"<br>";
    }
    else{
    	differenceday4=city_1.day4temp-city_2.day4temp;
        comparison += city_1.place+" is " + differenceday4 + " degrees warmer than " +city_2.place+" on " + city_1.day4+"<br>";
    }

    if (city_1.day5temp<city_2.day5temp){
	   differenceday5=city_2.day5temp-city_1.day5temp;
       comparison += city_1.place+" is " + differenceday5 + " degrees colder than " +city_2.place+" on " + city_1.day5+"<br>";
    }
    else{
    	differenceday5=city_1.day5temp-city_2.day5temp;
        comparison += city_1.place+" is " + differenceday5 + " degrees warmer than " +city_2.place+" on " + city_1.day5+"<br>";
    }
    
        if(CityNumber >=1){
         $("#compare").html(comparison);
         }
         else{
         $("#compare").hide();
         }
   }  
    
})
<<<<<<< HEAD

>>>>>>> FETCH_HEAD
=======
>>>>>>> FETCH_HEAD

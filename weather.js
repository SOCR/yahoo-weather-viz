

$(document).ready(function(){
    var CityArray = new Array();
    var CityNumber = -1;
    
    $("#zipcode").focus(function(){
		$(this).val("");
	})
    
    $("#question").hide();
    
    $("#getit").click(function(){
        CityArray.push(new Object());
        CityNumber+=1;
        
        if(CityNumber==0){
        insertandcheck();
        setTimeout(show_1,500);
        city_left=CityArray[CityNumber];
      }
      else if(CityNumber==1){
        insertandcheck();
        setTimeout(show_2,500);
        city_right=CityArray[CityNumber];
      }
      else if(CityNumber>=2){
          $("#question").show();
          $("#left").click(function(){
              insertandcheck();
              setTimeout(show_1,500);
               $("#question").hide();
               city_left=CityArray[CityNumber];
          });
          $("#right").click(function(){
              insertandcheck();
              setTimeout(show_2,500);
               $("#question").hide();
               city_right=CityArray[CityNumber];
          });
      }
      

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
    
    function show_1(){

            content_cityname=CityArray[CityNumber].place;

            content_details="";
            content_details += "Wind chill: "+CityArray[CityNumber].windchill+" F"+"<br>"
            content_details += "Humidity: "+CityArray[CityNumber].humidity+" %"+"<br>";

            content_wind="";
            content_wind += "Wind speed: "+CityArray[CityNumber].windSpeed+" mph"+"<br>";
            content_wind += "Wind Direction: "+CityArray[CityNumber].windDir+"<br>";
            content_wind += "Barometer: "+CityArray[CityNumber].barometer+"<br>";

            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+CityArray[CityNumber].sunrise+"<br>";
            content_sunandmoon += "Sunset: "+CityArray[CityNumber].sunset+"<br>";

            content_todayhl=CityArray[CityNumber].day1high+CityArray[CityNumber].day1low;
            content_current=CityArray[CityNumber].current+"°";

            content_forcast = "<p>Forcast</p>";
            content_forcast +="<p align=center>" ;
            content_forcast +="<table border='1' align=center><tr><td align=center>" + CityArray[CityNumber].day1 + "</td><td align=center>" + CityArray[CityNumber].day1high + "</td><td align=center>" + CityArray[CityNumber].day1low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day2 + "</td><td align=center>" + CityArray[CityNumber].day2high + "</td><td align=center>" + CityArray[CityNumber].day2low +"</td></tr>"  
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day3 + "</td><td align=center>" + CityArray[CityNumber].day3high + "</td><td align=center>" + CityArray[CityNumber].day3low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day4 + "</td><td align=center>" + CityArray[CityNumber].day4high + "</td><td align=center>" + CityArray[CityNumber].day4low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day5 + "</td><td align=center>" + CityArray[CityNumber].day5high + "</td><td align=center>" + CityArray[CityNumber].day5low +"</td></tr>"
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
    
     function show_2(){

            content_cityname=CityArray[CityNumber].place;

            content_details="";
            content_details += "Wind chill: "+CityArray[CityNumber].windchill+" F"+"<br>"
            content_details += "Humidity: "+CityArray[CityNumber].humidity+" %"+"<br>";

            content_wind="";
            content_wind += "Wind speed: "+CityArray[CityNumber].windSpeed+" mph"+"<br>";
            content_wind += "Wind Direction: "+CityArray[CityNumber].windDir+"<br>";
            content_wind += "Barometer: "+CityArray[CityNumber].barometer+"<br>";

            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+CityArray[CityNumber].sunrise+"<br>";
            content_sunandmoon += "Sunset: "+CityArray[CityNumber].sunset+"<br>";

            content_todayhl=CityArray[CityNumber].day1high+CityArray[CityNumber].day1low;
            content_current=CityArray[CityNumber].current+"°";

            content_forcast = "<p>Forcast</p>";
            content_forcast +="<p align=center>" ;
            content_forcast +="<table border='1' align=center><tr><td align=center>" + CityArray[CityNumber].day1 + "</td><td align=center>" + CityArray[CityNumber].day1high + "</td><td align=center>" + CityArray[CityNumber].day1low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day2 + "</td><td align=center>" + CityArray[CityNumber].day2high + "</td><td align=center>" + CityArray[CityNumber].day2low +"</td></tr>"  
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day3 + "</td><td align=center>" + CityArray[CityNumber].day3high + "</td><td align=center>" + CityArray[CityNumber].day3low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day4 + "</td><td align=center>" + CityArray[CityNumber].day4high + "</td><td align=center>" + CityArray[CityNumber].day4low +"</td></tr>"
                                                               + "<tr><td align=center>" + CityArray[CityNumber].day5 + "</td><td align=center>" + CityArray[CityNumber].day5high + "</td><td align=center>" + CityArray[CityNumber].day5low +"</td></tr>"
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


    function getWoeidNumber(x){
            var firstPart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22";
            var secondPart = "%22&format=json&diagnostics=true&callback=";
            var searchURL = firstPart + x + secondPart;
            $.ajax({
                url: searchURL,
                success: getWoeid
                });
    };

    function getWeather(y){
               var fPart="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D";
               var sPart="&format=json&diagnostics=true&callback=";
               var wURL=fPart + y + sPart;
               $.ajax({
                     url: wURL,
                     success: getWeatherData
                     });
    };

    function getWeatherData(data){
            getWindChill(data);
            getSunrise(data);
            getSunset(data);
            getFivedays(data);
            getHumidity(data);
            getBarometer(data);
            getWind(data);
            getlocation(data);
            getdaytemp(data);
            compare();
    };

    function getlocation(data){
            CityArray[CityNumber].place=data.query.results.channel.location.city;
    };

    function getdaytemp(data){

            /*var day1high=Math.round(data.query.results.channel.item.forecast[0].high);
            var day1low=Math.round(data.query.results.channel.item.forecast[0].low);
            city_1.day1temp=Math.round(day1high+day1low)/2;*/
        CityArray[CityNumber].day1temp=(Math.round(data.query.results.channel.item.forecast[0].high)+Math.round(data.query.results.channel.item.forecast[0].low))/2;
        CityArray[CityNumber].day2temp=(Math.round(data.query.results.channel.item.forecast[1].high)+Math.round(data.query.results.channel.item.forecast[1].low))/2;
        CityArray[CityNumber].day3temp=(Math.round(data.query.results.channel.item.forecast[2].high)+Math.round(data.query.results.channel.item.forecast[2].low))/2;
        CityArray[CityNumber].day4temp=(Math.round(data.query.results.channel.item.forecast[3].high)+Math.round(data.query.results.channel.item.forecast[3].low))/2;
        CityArray[CityNumber].day5temp=(Math.round(data.query.results.channel.item.forecast[4].high)+Math.round(data.query.results.channel.item.forecast[4].low))/2;
        CityArray[CityNumber].day1=data.query.results.channel.item.forecast[0].day;
        CityArray[CityNumber].day2=data.query.results.channel.item.forecast[1].day;
        CityArray[CityNumber].day3=data.query.results.channel.item.forecast[2].day;
        CityArray[CityNumber].day4=data.query.results.channel.item.forecast[3].day;
        CityArray[CityNumber].day5=data.query.results.channel.item.forecast[4].day;

        CityArray[CityNumber].day1high=data.query.results.channel.item.forecast[0].high;
        CityArray[CityNumber].day1low=data.query.results.channel.item.forecast[0].low;
        CityArray[CityNumber].day2high=data.query.results.channel.item.forecast[1].high;
        CityArray[CityNumber].day2low=data.query.results.channel.item.forecast[1].low;
        CityArray[CityNumber].day3high=data.query.results.channel.item.forecast[2].high;
        CityArray[CityNumber].day3low=data.query.results.channel.item.forecast[2].low;
        CityArray[CityNumber].day4high=data.query.results.channel.item.forecast[3].high;
        CityArray[CityNumber].day4low=data.query.results.channel.item.forecast[3].low;
        CityArray[CityNumber].day5high=data.query.results.channel.item.forecast[4].high;
        CityArray[CityNumber].day5low=data.query.results.channel.item.forecast[4].low;
    };

    function getWoeid(data){
            //alert('Hi');
            CityArray[CityNumber].woeid= data.query.results.place[0].woeid;
              getWeather(CityArray[CityNumber].woeid);
    };

    function getWindChill(data){
            CityArray[CityNumber].windchill= data.query.results.channel.wind.chill;
    };

    function getSunrise(data){
            CityArray[CityNumber].sunrise= data.query.results.channel.astronomy.sunrise;
    };

    function getSunset(data){
            CityArray[CityNumber].sunset= data.query.results.channel.astronomy.sunset;
    };

    function getFivedays(data){
            CityArray[CityNumber].current= data.query.results.channel.item.condition.temp;
    };

    function getHumidity(data){
            CityArray[CityNumber].humidity= data.query.results.channel.atmosphere.humidity;
    };

    function getBarometer(data){
            pres= data.query.results.channel.atmosphere.rising;
            switch(pres)
            {
                case '1':
                CityArray[CityNumber].barometer="R";
                break;
                case '2':
                CityArray[CityNumber].barometer="F";
                break;
                default:
                CityArray[CityNumber].barometer="S";
            };
    };

    function getWind(data){
            dir= data.query.results.channel.wind.direction;
            CityArray[CityNumber].windSpeed=data.query.results.channel.wind.speed;

            if(dir>=348.75 || dir<11.25){
                CityArray[CityNumber].windDir="N";
            }
            else if(dir>=11.25 && dir<33.75){
                CityArray[CityNumber].windDir="NNE";
            }
            else if(dir>=33.75 && dir<56.25){
                CityArray[CityNumber].windDir="NE";
            }
            else if(dir>=56.25 && dir<78.75){
                CityArray[CityNumber].windDir="ENE";
            }
            else if(dir>=78.75 && dir<101.25){
                CityArray[CityNumber].windDir="E";
            }
            else if(dir>101.25 && dir<123.75){
                CityArray[CityNumber].windDir="ESE";
            }
            else if(dir>123.75 && dir<146.25){
                CityArray[CityNumber].windDir="SE";
            }
            else if(dir>=146.25 && dir<168.75){
                CityArray[CityNumber].windDir="SSE";
            }
            else if(dir>=168.75 && dir<191.25){
                CityArray[CityNumber].windDir="S";
            }
            else if(dir>=191.25 && dir<213.75){
                CityArray[CityNumber].windDir="SSW";
            }
            else if(dir>=213.75 && dir<236.25){
                CityArray[CityNumber].windDir="SW";
            }
            else if(dir>=236.25 && dir<258.75){
                CityArray[CityNumber].windDir="WSW";
            }
            else if(dir>=258.75 && dir<281.25){
                CityArray[CityNumber].windDir="W";
            }
            else if(dir>=281.25 && dir<303.75){
                CityArray[CityNumber].windDir="WNW";
            }
            else if(dir>=303.75 && dir<326.25){
                CityArray[CityNumber].windDir="NW";
            }
            else{
                CityArray[CityNumber].windDir="NNW";
            }

    };
    
  function compare(){
        comparison="";
	  city_1=city_left;;
	  city_2=city_right;
	  
	if (city_1.day1temp<city_2.day1temp){
	   differenceday1=city_2.day1temp-city_1.day1temp;
       comparison += city_1.place+" is " + differenceday1 + " degrees colder than " +city_2.place+" today. <br>";
    }
    else{
    	differenceday1=city_1.day1temp-city_2.day1temp;
        comparison += city_1.place+" is " + differenceday1 + " degrees warmer than " +city_2.place+" today. <br>";
    }
    
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

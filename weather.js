

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
            content_state=CityArray[CityNumber].state;
            content_country=CityArray[CityNumber].country;
        
            content_geo=content_state+",  "+content_country;

            content_details="";
            content_details += "Feels like "+CityArray[CityNumber].current+"°F"+"<br>";
            content_details += "Wind chill: "+CityArray[CityNumber].windchill+" F"+"<br>";
            content_details += "Humidity: "+CityArray[CityNumber].humidity+" %"+"<br>";
            content_details += "Visibility: "+CityArray[CityNumber].visibility+" mile"+"<br>";

            content_wind="";
            content_wind += "Wind speed: "+CityArray[CityNumber].windSpeed+" mph"+"<br>";
            content_wind += "Wind Direction: "+CityArray[CityNumber].windDir+"<br>";
            content_wind += "Barometer: "+CityArray[CityNumber].barometer+"<br>";

            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+CityArray[CityNumber].sunrise+"<br>";
            content_sunandmoon += "Sunset: "+CityArray[CityNumber].sunset+"<br>";

            content_todayhl=CityArray[CityNumber].day1high+CityArray[CityNumber].day1low;
            content_current=CityArray[CityNumber].current+"°";            
        
            $("#display_cityname1").html(content_cityname);
            $("#display_geo1").html(content_geo);
            $("#display_details1").html(content_details);
            $("#display_windpressure1").html(content_wind);
            $("#display_sunmoon1").html(content_sunandmoon);
            $("#display_todayhl1").html(content_todayhl);
            $("#display_current1").html(content_current);
            
        
            $("#table1 td:eq(0)").html("Today");
            $("#table1 td:eq(1)").html("Tomorrow");
            $("#table1 td:eq(2)").html(CityArray[CityNumber].day3);
            $("#table1 td:eq(3)").html(CityArray[CityNumber].day4);
            $("#table1 td:eq(4)").html(CityArray[CityNumber].day5);
        
            $("#table1 td:eq(5)").html(CityArray[CityNumber].code1);
            $("#table1 td:eq(6)").html(CityArray[CityNumber].code2);
            $("#table1 td:eq(7)").html(CityArray[CityNumber].code3);
            $("#table1 td:eq(8)").html(CityArray[CityNumber].code4);
            $("#table1 td:eq(9)").html(CityArray[CityNumber].code5);
        
            $("#table1 td:eq(10)").html(CityArray[CityNumber].date1);
            $("#table1 td:eq(11)").html(CityArray[CityNumber].date2);
            $("#table1 td:eq(12)").html(CityArray[CityNumber].date3);
            $("#table1 td:eq(13)").html(CityArray[CityNumber].date4);
            $("#table1 td:eq(14)").html(CityArray[CityNumber].date5);
        
            $("#table1 td:eq(15)").html(CityArray[CityNumber].daytext1);
            $("#table1 td:eq(16)").html(CityArray[CityNumber].daytext2);
            $("#table1 td:eq(17)").html(CityArray[CityNumber].daytext3);
            $("#table1 td:eq(18)").html(CityArray[CityNumber].daytext4);
            $("#table1 td:eq(19)").html(CityArray[CityNumber].daytext5);
        
            $("#table1 td:eq(20)").html(CityArray[CityNumber].day1high);
            $("#table1 td:eq(21)").html(CityArray[CityNumber].day2high);
            $("#table1 td:eq(22)").html(CityArray[CityNumber].day3high);
            $("#table1 td:eq(23)").html(CityArray[CityNumber].day4high);
            $("#table1 td:eq(24)").html(CityArray[CityNumber].day5high);
        
            $("#table1 td:eq(25)").html(CityArray[CityNumber].day1low);
            $("#table1 td:eq(26)").html(CityArray[CityNumber].day2low);
            $("#table1 td:eq(27)").html(CityArray[CityNumber].day3low);
            $("#table1 td:eq(28)").html(CityArray[CityNumber].day4low);
            $("#table1 td:eq(29)").html(CityArray[CityNumber].day5low);

    };
    
     function show_2(){

            content_cityname=CityArray[CityNumber].place;
            content_state=CityArray[CityNumber].state;
            content_country=CityArray[CityNumber].country;
         
            content_geo=content_state+",  "+content_country;

            content_details="";
            content_details += "Feels like "+CityArray[CityNumber].current+"°F"+"<br>";
            content_details += "Wind chill: "+CityArray[CityNumber].windchill+" F"+"<br>";
            content_details += "Humidity: "+CityArray[CityNumber].humidity+" %"+"<br>";
            content_details += "Visibility: "+CityArray[CityNumber].visibility+" mile"+"<br>";
            

            content_wind="";
            content_wind += "Wind speed: "+CityArray[CityNumber].windSpeed+" mph"+"<br>";
            content_wind += "Wind Direction: "+CityArray[CityNumber].windDir+"<br>";
            content_wind += "Barometer: "+CityArray[CityNumber].barometer+"<br>";

            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+CityArray[CityNumber].sunrise+"<br>";
            content_sunandmoon += "Sunset: "+CityArray[CityNumber].sunset+"<br>";

            content_todayhl=CityArray[CityNumber].day1high+CityArray[CityNumber].day1low;
            content_current=CityArray[CityNumber].current+"°";
         

            /*document.getElementById('display').innerHTML = city.zipcode;*/
            $("#display_cityname2").html(content_cityname);
            $("#display_geo2").html(content_geo);
            $("#display_details2").html(content_details);
            $("#display_windpressure2").html(content_wind);
            $("#display_sunmoon2").html(content_sunandmoon);
            $("#display_todayhl2").html(content_todayhl);
            $("#display_current2").html(content_current);
         
            $("#table2 td:eq(0)").html("Today");
            $("#table2 td:eq(1)").html("Tomorrow");
            $("#table2 td:eq(2)").html(CityArray[CityNumber].day3);
            $("#table2 td:eq(3)").html(CityArray[CityNumber].day4);
            $("#table2 td:eq(4)").html(CityArray[CityNumber].day5);
        
            $("#table2 td:eq(5)").html(CityArray[CityNumber].code1);
            $("#table2 td:eq(6)").html(CityArray[CityNumber].code2);
            $("#table2 td:eq(7)").html(CityArray[CityNumber].code3);
            $("#table2 td:eq(8)").html(CityArray[CityNumber].code4);
            $("#table2 td:eq(9)").html(CityArray[CityNumber].code5);
        
            $("#table2 td:eq(10)").html(CityArray[CityNumber].date1);
            $("#table2 td:eq(11)").html(CityArray[CityNumber].date2);
            $("#table2 td:eq(12)").html(CityArray[CityNumber].date3);
            $("#table2 td:eq(13)").html(CityArray[CityNumber].date4);
            $("#table2 td:eq(14)").html(CityArray[CityNumber].date5);
        
            $("#table2 td:eq(15)").html(CityArray[CityNumber].daytext1);
            $("#table2 td:eq(16)").html(CityArray[CityNumber].daytext2);
            $("#table2 td:eq(17)").html(CityArray[CityNumber].daytext3);
            $("#table2 td:eq(18)").html(CityArray[CityNumber].daytext4);
            $("#table2 td:eq(19)").html(CityArray[CityNumber].daytext5);
        
            $("#table2 td:eq(20)").html(CityArray[CityNumber].day1high);
            $("#table2 td:eq(21)").html(CityArray[CityNumber].day2high);
            $("#table2 td:eq(22)").html(CityArray[CityNumber].day3high);
            $("#table2 td:eq(23)").html(CityArray[CityNumber].day4high);
            $("#table2 td:eq(24)").html(CityArray[CityNumber].day5high);
        
            $("#table2 td:eq(25)").html(CityArray[CityNumber].day1low);
            $("#table2 td:eq(26)").html(CityArray[CityNumber].day2low);
            $("#table2 td:eq(27)").html(CityArray[CityNumber].day3low);
            $("#table2 td:eq(28)").html(CityArray[CityNumber].day4low);
            $("#table2 td:eq(29)").html(CityArray[CityNumber].day5low);

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
            getVisibility(data);
            compare();
    };

    function getlocation(data){
            CityArray[CityNumber].place=data.query.results.channel.location.city;
            CityArray[CityNumber].state=data.query.results.channel.location.region;
            CityArray[CityNumber].country=data.query.results.channel.location.country;
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

        CityArray[CityNumber].date1=data.query.results.channel.item.forecast[0].date;
        CityArray[CityNumber].date2=data.query.results.channel.item.forecast[1].date;
        CityArray[CityNumber].date3=data.query.results.channel.item.forecast[2].date;
        CityArray[CityNumber].date4=data.query.results.channel.item.forecast[3].date;
        CityArray[CityNumber].date5=data.query.results.channel.item.forecast[4].date;
        
        CityArray[CityNumber].code1=data.query.results.channel.item.forecast[0].code;
        CityArray[CityNumber].code2=data.query.results.channel.item.forecast[1].code;
        CityArray[CityNumber].code3=data.query.results.channel.item.forecast[2].code;
        CityArray[CityNumber].code4=data.query.results.channel.item.forecast[3].code;
        CityArray[CityNumber].code5=data.query.results.channel.item.forecast[4].code;
        
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
        
        CityArray[CityNumber].daytext1=data.query.results.channel.item.forecast[0].text;
        CityArray[CityNumber].daytext2=data.query.results.channel.item.forecast[1].text;
        CityArray[CityNumber].daytext3=data.query.results.channel.item.forecast[2].text;
        CityArray[CityNumber].daytext4=data.query.results.channel.item.forecast[3].text;
        CityArray[CityNumber].daytext5=data.query.results.channel.item.forecast[4].text;
        
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
    
    function getVisibility(data){
            CityArray[CityNumber].visibility= data.query.results.channel.atmosphere.visibility;
    }
    
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

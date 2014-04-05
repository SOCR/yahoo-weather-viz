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
        insertandcheck();
         
        if(CityNumber==0){
        setTimeout(show_1,1200);
        city_left=CityArray[CityNumber];
        showImage_1();
        }
        
        else if(CityNumber==1){
            setTimeout(show_2,1200);
            city_right=CityArray[CityNumber];
            setTimeout(compare,500);
            showImage_2();
        
        }
        
      else if(CityNumber>=2){
          $("#question").show();
          $("#left").click(function(){
              setTimeout(show_1,1200);
               $("#question").hide();
               city_left=CityArray[CityNumber];
               setTimeout(compare,500);
          });
          $("#right").click(function(){
              setTimeout(show_2,1200);
               $("#question").hide();
               city_right=CityArray[CityNumber];
               setTimeout(compare,500);
          });
      }
        setTimeout(function(){drawGraph();

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
    
    function showImage_1(){
        var windimg = document.createElement('div');
        windimg.id="windimg1";
        document.getElementsByTagName('body')[0].appendChild(windimg);
        $("#windimg1").append('<img src="http://bestclipartblog.com/clipart-pics/tornado-clip-art-9.png" height="280" width="200">')
        
        var sunmoonimg = document.createElement('div');
        sunmoonimg.id="sunmoonimg1";
        document.getElementsByTagName('body')[0].appendChild(sunmoonimg);
        $("#sunmoonimg1").append('<img src="http://aspgweather.com/cumulus/sunrise.png">')
    }
    
    function showImage_2(){
        var windimg = document.createElement('div');
        windimg.id="windimg2";
        document.getElementsByTagName('body')[0].appendChild(windimg);
        $("#windimg2").append('<img src="http://upload.wikimedia.org/wikipedia/commons/f/f7/Anemometer%2C_robinsonsk%2C_Nordisk_familjebok.png" height="190" width="160">')
        
        var sunmoonimg = document.createElement('div');
        sunmoonimg.id="sunmoonimg2";
        document.getElementsByTagName('body')[0].appendChild(sunmoonimg);
        $("#sunmoonimg2").append('<img src="http://aspgweather.com/cumulus/sunset_icon.png">')
    }
    
    function show_1(){
            $("#container").show();
            content_cityname=CityArray[CityNumber].place;
            content_state=CityArray[CityNumber].state;
            content_country=CityArray[CityNumber].country;
        
            content_geo=content_state+",  "+content_country;

            content_details="";
            content_details += "Feels like "+'<font color="#1f77b4">'+CityArray[CityNumber].current+"°F"+'</font>'+"<br>"+"<br>";
            content_details += "Wind chill: "+'<font color="#1f77b4">'+ CityArray[CityNumber].windchill+"F    " +'</font>';
            content_details += "Humidity: "+'<font color="#1f77b4">'+CityArray[CityNumber].humidity+"%    "+'</font>';
            content_details += "Visibility: "+'<font color="#1f77b4">'+CityArray[CityNumber].visibility+" miles"+'</font>'+"<br>"+"<br>";
            content_details += CityArray[CityNumber].description;

            content_wind="";
            content_wind += "Wind speed: "+'<font color="#1f77b4">'+CityArray[CityNumber].windSpeed+" mph"+'</font>'+"<br>";
            content_wind += "Wind Direction: "+'<font color="#1f77b4">'+CityArray[CityNumber].windDir+'</font>'+"<br>";
            content_wind += "Barometer: "+'<font color="#1f77b4">'+CityArray[CityNumber].barometer+'</font>'+"<br>";
        
            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+'<font color="#1f77b4">'+CityArray[CityNumber].sunrise+'</font>'+"<br>";
            content_sunandmoon += "Sunset: "+'<font color="#1f77b4">'+CityArray[CityNumber].sunset+'</font>'+"<br>";

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
        
            $("#table1 td:eq(5)").html('<img src='+CityArray[CityNumber].day1icon+'>');
            $("#table1 td:eq(6)").html('<img src='+CityArray[CityNumber].day2icon+'>');
            $("#table1 td:eq(7)").html('<img src='+CityArray[CityNumber].day3icon+'>');
            $("#table1 td:eq(8)").html('<img src='+CityArray[CityNumber].day4icon+'>');
            $("#table1 td:eq(9)").html('<img src='+CityArray[CityNumber].day5icon+'>');
        
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
            $("#container").show();
            content_cityname=CityArray[CityNumber].place;
            content_state=CityArray[CityNumber].state;
            content_country=CityArray[CityNumber].country;
         
            content_geo=content_state+",  "+content_country;

            content_details="";
            content_details += "Feels like "+'<font color="#1f77b4">'+CityArray[CityNumber].current+"°F"+'</font>'+"<br>"+"<br>";
            content_details += "Wind chill: "+'<font color="#1f77b4">'+ CityArray[CityNumber].windchill+"F    " +'</font>';
            content_details += "Humidity: "+'<font color="#1f77b4">'+CityArray[CityNumber].humidity+"%    "+'</font>';
            content_details += "Visibility: "+'<font color="#1f77b4">'+CityArray[CityNumber].visibility+" miles"+'</font>'+"<br>"+"<br>";
            content_details += CityArray[CityNumber].description;

            content_wind="";
            content_wind += "Wind speed: "+'<font color="#1f77b4">'+CityArray[CityNumber].windSpeed+" mph"+'</font>'+"<br>";
            content_wind += "Wind Direction: "+'<font color="#1f77b4">'+CityArray[CityNumber].windDir+'</font>'+"<br>";
            content_wind += "Barometer: "+'<font color="#1f77b4">'+CityArray[CityNumber].barometer+'</font>'+"<br>";
        
            content_sunandmoon="";
            content_sunandmoon += "Sunrise: "+'<font color="#1f77b4">'+CityArray[CityNumber].sunrise+'</font>'+"<br>";
            content_sunandmoon += "Sunset: "+'<font color="#1f77b4">'+CityArray[CityNumber].sunset+'</font>'+"<br>";
            
            content_todayhl=CityArray[CityNumber].day1high+CityArray[CityNumber].day1low;
            content_current=CityArray[CityNumber].current+"°";

            content_urlday1=CityArray[CityNumber].day1icon;
         

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
    
            $("#table2 td:eq(5)").html('<img src='+CityArray[CityNumber].day1icon+'>');
            $("#table2 td:eq(6)").html('<img src='+CityArray[CityNumber].day2icon+'>');
            $("#table2 td:eq(7)").html('<img src='+CityArray[CityNumber].day3icon+'>');
            $("#table2 td:eq(8)").html('<img src='+CityArray[CityNumber].day4icon+'>');
            $("#table2 td:eq(9)").html('<img src='+CityArray[CityNumber].day5icon+'>');
        
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
    };

    function getlocation(data){
            CityArray[CityNumber].place=data.query.results.channel.location.city;
            CityArray[CityNumber].state=data.query.results.channel.location.region;
            CityArray[CityNumber].country=data.query.results.channel.location.country;
            var city=CityArray[CityNumber].place;
            var replacedCity=city.split(' ').join('%20');
            var geolocation= replacedCity+"%2C"+CityArray[CityNumber].state;   
            getWunderground(geolocation); 
            
    };

    function getWunderground(z){
        var Part_1="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20wunderground.forecast%20where%20location%3D'";
        var Part_2="'%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
        var geoURL=Part_1+z+Part_2;
        $.ajax({
                     url: geoURL,
                     success: getnewdata
                     });
    };

    function getnewdata(data){
           getdescription(data);
           geticon(data);
           getforecast_text(data);
    };    

    function getdescription(data){
           CityArray[CityNumber].description=data.query.results.forecast.txt_forecast.forecastday[0].fcttext;
    };

    function geticon(data){
           CityArray[CityNumber].day1icon=data.query.results.forecast.simpleforecast.forecastday[0].icons.icon_set[8].icon_url;
           CityArray[CityNumber].day2icon=data.query.results.forecast.simpleforecast.forecastday[1].icons.icon_set[8].icon_url;
           CityArray[CityNumber].day3icon=data.query.results.forecast.simpleforecast.forecastday[2].icons.icon_set[8].icon_url;
           CityArray[CityNumber].day4icon=data.query.results.forecast.simpleforecast.forecastday[3].icons.icon_set[8].icon_url;
           CityArray[CityNumber].day5icon=data.query.results.forecast.simpleforecast.forecastday[4].icons.icon_set[8].icon_url;
    }

    function getforecast_text(data){
             
           CityArray[CityNumber].daytext1=data.query.results.forecast.simpleforecast.forecastday[0].conditions;
           CityArray[CityNumber].daytext2=data.query.results.forecast.simpleforecast.forecastday[1].conditions;
           CityArray[CityNumber].daytext3=data.query.results.forecast.simpleforecast.forecastday[2].conditions;
           CityArray[CityNumber].daytext4=data.query.results.forecast.simpleforecast.forecastday[3].conditions;
           CityArray[CityNumber].daytext5=data.query.results.forecast.simpleforecast.forecastday[4].conditions;

    }

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
       comparison += city_1.place+" is " + differenceday3 + " degrees colder than " +city_2.place+" on " + city_1.day3 + ". <br>";
    }
    else{
        differenceday3=city_1.day3temp-city_2.day3temp;
        comparison += city_1.place+" is " + differenceday3 + " degrees warmer than " +city_2.place+" on " + city_1.day3 +". <br>";
    }

    if (city_1.day4temp<city_2.day4temp){
       differenceday4=city_2.day4temp-city_1.day4temp;
       comparison += city_1.place+" is " + differenceday4 + " degrees colder than " +city_2.place +" on " + city_1.day4+". <br>";
    }
    else{
        differenceday4=city_1.day4temp-city_2.day4temp;
        comparison += city_1.place+" is " + differenceday4 + " degrees warmer than " +city_2.place+" on " + city_1.day4+". <br>";
    }

    if (city_1.day5temp<city_2.day5temp){
       differenceday5=city_2.day5temp-city_1.day5temp;
       comparison += city_1.place+" is " + differenceday5 + " degrees colder than " +city_2.place+" on " + city_1.day5+". <br>";
    }
    else{
        differenceday5=city_1.day5temp-city_2.day5temp;
        comparison += city_1.place+" is " + differenceday5 + " degrees warmer than " +city_2.place+" on " + city_1.day5+". <br>";
    }
    
        if(CityNumber >=1){
         $("#compare").html(comparison);
         }
         else{
         $("#compare").hide();
         }
   };
    
    function drawGraph(){   
        // define dimensions of graph
        var iDiv = document.createElement('div');
        iDiv.id = "block"+CityNumber;
        iDiv.className = "block";
        document.getElementsByTagName('body')[0].appendChild(iDiv);

        var m = [80, 100, 80, 100]; // margins
        var w = 1000 - m[1] - m[3]; // width
        var h = 400 - m[0] - m[2]; // height
        var colors=["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2, #7f7f7f, #c7c7c7, #bcbd22, #dbdb8d, #17becf, #9edae5"];


        D1=CityArray[CityNumber].day1;
        D2=CityArray[CityNumber].day2;
        D3=CityArray[CityNumber].day3;
        D4=CityArray[CityNumber].day4;
        D5=CityArray[CityNumber].day5;
        T1=CityArray[CityNumber].day1temp;
        T2=CityArray[CityNumber].day2temp;
        T3=CityArray[CityNumber].day3temp;
        T4=CityArray[CityNumber].day4temp;
        T5=CityArray[CityNumber].day5temp;
        // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
        var data = [{"Day":D1,"Temp":T1},{"Day":D2,"Temp":T2},{"Day":D3,"Temp":T3},{"Day":D4,"Temp":T4},{"Day":D5,"Temp":T5}];
        
        // X scale will fit all values from data[] within pixels 0-w
        var x = d3.scale.ordinal().domain([D1,D2,D3,D4,D5]).rangePoints([0, w]);
        // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
        var y = d3.scale.linear().range([h, 0]);

        /*y.domain([0, d3.max(data, function(d) {
        return d.Temp;
        })]);*/
        y.domain([20,120]);
            // automatically determining max range can work something like this
            // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);
 
        // create a line function that can convert data[] into x and y points
        var line = d3.svg.line()
            // assign the X function to plot our line as we wish
            .x(function(d) { 
                return x(d.Day); })
            .y(function(d) { 
                return y(d.Temp);});
            // Add an SVG element with the desired dimensions and margin.
            var graph = d3.select("#block"+CityNumber).append("svg:svg")
                  .attr("width", w + m[1] + m[3])
                  .attr("height", h + m[0] + m[2])
                .append("svg:g")
                  .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
                
                // create yAxis
                var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
                // Add the x-axis.

                // create left yAxis
                var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
                // Add the y-axis to the left
                
                graph.append("svg:g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + h + ")")
                  .call(xAxis);
                
                graph.append("svg:g")
                  .attr("class", "y axis")
                  .attr("transform", "translate(-25,0)")
                  .call(yAxisLeft)
                  .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 6)
                  .attr("dy", ".71em")
                  .style("text-anchor","end")
                  .text("Temperature (ºF)");;

                // Add the line by appending an svg:path element with the data line we created above
                // do this AFTER the axes above so that the line is above the tick-lines
                means=d3.mean(data, function(d) {        
        return d.Temp;
        });
        

                    function xx(d) { return x(d.Day); };
                    function yy(d) { return y(d.Temp); };

                        graph
                        .selectAll("circle")
                        .data(data)
                        .enter().append("circle")
                        .attr("r", 5)
                        .attr("cx", xx)
                        .attr("cy", yy)
                        .style("fill",colors[CityNumber]);

                        graph.append("text")
                        .attr("transform", "translate(" + w + " , " + ((CityNumber+1)*15) + ")")
                        .attr("x", 3)
                        .attr("dy", ".35em")
                        .style("fill",colors[CityNumber])
                        .text("• "+CityArray[CityNumber].place);
        
                graph.append("svg:path").attr("d", line(data))
                .style("stroke",colors[CityNumber]);
        };
    
})

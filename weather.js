$(document).ready(function(){
    var CityArray = new Array();
    var CityNumber = -1;
    
    $("#zipcode").focus(function(){
        $(this).val("");
    })
    
    $("#question").hide();
    $(".progress_bar").hide();
    
    $("#getit").click(function(){
        CityArray.push(new Object());
        CityNumber+=1;
        insertandcheck();
         
        if(CityNumber==0){
        $(".progress_bar").show();
        setTimeout(show_1,1200);
        city_left=CityArray[CityNumber];
        showImage_1();
        }
        
        else if(CityNumber==1){
            $(".progress_bar").show();
            setTimeout(show_2,1200);
            city_right=CityArray[CityNumber];
            setTimeout(compare,500);
            showImage_2();
        
        }
        
      else if(CityNumber>=2){
          $("#question").show();
          $("#left").click(function(){
              $(".progress_bar").show();
              setTimeout(show_1,1200);
               $("#question").hide();
               city_left=CityArray[CityNumber];
               setTimeout(compare,500);
          });
          $("#right").click(function(){
              $(".progress_bar").show();
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
        $("#windimg1").append('<img s

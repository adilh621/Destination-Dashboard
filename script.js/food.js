$(document).ready(function(){

    $("#searchCityBtn").click(function(lat , lon){
    
        
    
    
    
    //   console.log(position);
    //   var lat1 = position.coords.latitude;
    //   var lat1 = JSON.stringify(x)
    //   var long = position.coords.longitude;
    //   var long = JSON.stringify(y)
    
      console.log(lat);
      console.log(lon);
      $.ajax({
        
        type: "GET",
        url: "https://developers.zomato.com/api/v2.1/search",
        headers: { "user-key": "973b94938ae37b99cb3572338e4f61c1"},
        data:{
            // lat: lat1,
            // lon: long,
            // entity_type: "zone",
            // radius: "16000",
            sort : "real_distance",
            q:"fastfood",
            count : 300
        },
        success:
            function(response) {
                console.log(response);
        },
        });
    
      
    
     
      
       
    
    })
    
        
    
    
    });
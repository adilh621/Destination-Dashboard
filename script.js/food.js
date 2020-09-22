function refineSearch(lat , lon ,q){

    var q = ' ';
    var option1 = document.getElementById("bakery")
    var option2 = document.getElementById("asian")
    var option3 = document.getElementById("mediterranean")
    var option4 = document.getElementById("seafood")
    var option5 = document.getElementById("vegetarian")
    var option6 = document.getElementById("fastfood")
    var option7 = document.getElementById("deli")
    var option8 = document.getElementById("bar")

    if(option1.checked===true){
        
        var search1 = option1.value 
        console.log(search1);
        q = search1;

    }
    else if(option2.checked === true){
        
        var search2 = option2.value
        console.log(search2);
        q = search2;
    
    }
    else if(option3.checked === true){
        
        var search3 = option3.value
        console.log(search3);
        q = search3;
    
    }
    else if(option4.checked === true){
        
        var search4 = option4.value
        console.log(search4);
        q = search4;
    
    }
    else if(option5.checked === true){
        
        var search5 = option5.value
        console.log(search5);
        q = search5;
    
    }
    else if(option6.checked === true){
        
        var search6 = option6.value
        console.log(search6);
        q = search6;
    
    }
    else if(option7.checked === true){
        
        var search7 = option7.value
        console.log(search7);
        q = search7;
    
    }
    else if(option8.checked === true){
        
        var search8 = option8.value
        console.log(search8);
        q = search8;
    
    }
    else{alert('nothing was selected')}
   
   
    console.log("user lat is:",lat);
    console.log("user lon is:",lon);
    console.log("user criteria is:" , q);

    $.ajax({
    
        type: "GET",
        url: "https://developers.zomato.com/api/v2.1/search",
        headers: { "user-key": "973b94938ae37b99cb3572338e4f61c1"},
        data:{
            lat: lat,
            lon: lon,
            // entity_type: "group",
            
            sort : "real_distance",
            q : q
            
        },
        success:
            function(response) {
                console.log(response);
                // create variable that stores
                
                
                // BOX 1
                var restaurantImg = response.restaurants[0].restaurant.featured_image
                console.log(restaurantImg);
                var imgContainer = $("#imgOne");
                imgContainer.attr('src', restaurantImg)
                // BOX 2
                var restaurantImg = response.restaurants[1].restaurant.featured_image
                console.log(restaurantImg);
                var imgContainer2 = $("#imgTwo");
                imgContainer.attr('src', restaurantImg)


                // BOX 3
                var restaurantImg = response.restaurants[2].restaurant.featured_image
                console.log(restaurantImg);
                var imgContainer3 = $("#imgThree");
                imgContainer.attr('src', restaurantImg)
                // BOX 4
                var restaurantImg = response.restaurants[3].restaurant.featured_image
                console.log(restaurantImg);
                var imgContainer4 = $("#imgFour");
                imgContainer.attr('src', restaurantImg)
                
        },
        });
}

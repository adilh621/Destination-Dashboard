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

                //image placement
                var restaurantImg = response.restaurants[0].restaurant.featured_image
                console.log(restaurantImg);
                var imgContainer = $("#imgOne");
                if (restaurantImg.charAt(0) === "h") {
                    imgContainer.attr('src', (restaurantImg))}
                else {imgContainer.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName = response.restaurants[0].restaurant.name
                console.log(restaurantName);
                $("#food-title1").html(restaurantName);
                //location placement
                var restaurantAddress = response.restaurants[0].restaurant.location.address
                var phoneNumber = response.restaurants[0].restaurant.phone_numbers
                console.log(restaurantAddress)
                $("#text1").html(restaurantAddress +" "+" " +"Phone Number: " +phoneNumber);
                //time placement
                var restaurantTime = response.restaurants[0].restaurant.timings
                console.log(restaurantTime);
                $("#times1").html("Hours of Operation: "+" "+restaurantTime)
                //price placememnt
                var restaurantPrice = response.restaurants[0].restaurant.price_range
                console.log(restaurantPrice)
                $("#price1").html("Price (1=$   4=$$$$):"+" "+restaurantPrice);
                //menu placement
                var restaurantMenu = response.restaurants[0].restaurant.menu_url
                console.log(restaurantMenu);
                $("#menu1").attr("href" , restaurantMenu)

                // BOX 2

                //image placement
                var restaurantImg2 = response.restaurants[1].restaurant.featured_image
                console.log(restaurantImg2);
                var imgContainer2 = $("#imgTwo");
                if (restaurantImg2.charAt(0) === "h") {
                    imgContainer2.attr('src', (restaurantImg2))}
                else {imgContainer2.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName2 = response.restaurants[1].restaurant.name
                console.log(restaurantName2);
                $("#food-title2").html(restaurantName2);
                //location and phone # placement 
                var restaurantAddress2 = response.restaurants[1].restaurant.location.address
                var phoneNumber2 = response.restaurants[1].restaurant.phone_numbers
                console.log(restaurantAddress2)
                $("#text2").html(restaurantAddress2 +" "+" " + "Phone Number: " +phoneNumber2);
                //time placement
                var restaurantTime2 = response.restaurants[1].restaurant.timings
                console.log(restaurantTime2);
                $("#times2").html("Hours of Operation: "+" "+restaurantTime2)
                //price placememnt
                var restaurantPrice2 = response.restaurants[1].restaurant.price_range
                console.log(restaurantPrice2)
                $("#price2").html("Price (1=$   4=$$$$):"+" "+restaurantPrice2);
                //menu placement
                var restaurantMenu2 = response.restaurants[1].restaurant.menu_url
                console.log(restaurantMenu2);
                $("#menu2").attr("href" , restaurantMenu2)                
                
                


                // BOX 3

                //image placement
                var restaurantImg3 = response.restaurants[2].restaurant.featured_image
                console.log(restaurantImg3);
                var imgContainer3 = $("#imgThree");
                if (restaurantImg3.charAt(0) === "h") {
                    imgContainer3.attr('src', (restaurantImg3))}
                    else {imgContainer3.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName3 = response.restaurants[2].restaurant.name
                console.log(restaurantName3);
                $("#food-title3").html(restaurantName3);
                //location placement
                var restaurantAddress3 = response.restaurants[2].restaurant.location.address
                var phoneNumber3 = response.restaurants[2].restaurant.phone_numbers
                console.log(restaurantAddress3)
                $("#text3").html(restaurantAddress3 +" "+" " + "Phone Number: " +phoneNumber3);
                //time placement
                var restaurantTime3 = response.restaurants[2].restaurant.timings
                console.log(restaurantTime3);
                $("#times3").html("Hours of Operation: "+" "+restaurantTime3)
                //price placememnt
                var restaurantPrice3 = response.restaurants[2].restaurant.price_range
                console.log(restaurantPrice3)
                $("#price3").html("Price (1=$   4=$$$$):"+" "+restaurantPrice3);
                //menu placement
                var restaurantMenu3 = response.restaurants[2].restaurant.menu_url
                console.log(restaurantMenu3);
                $("#menu3").attr("href" , restaurantMenu3)

                // BOX 4

                //image placement
                var restaurantImg4 = response.restaurants[3].restaurant.featured_image
                console.log(restaurantImg4);
                var imgContainer4 = $("#imgFour");
                if (restaurantImg4.charAt(0) === "h") {
                    imgContainer4.attr('src', (restaurantImg4))}
                else {imgContainer4.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName4 = response.restaurants[3].restaurant.name
                console.log(restaurantName4);
                $("#food-title4").html(restaurantName4);
                //location placement
                var restaurantAddress4 = response.restaurants[3].restaurant.location.address
                var phoneNumber4 = response.restaurants[3].restaurant.phone_numbers
                console.log(restaurantAddress4)
                $("#text4").html(restaurantAddress4 + " " + " " +"Phone Number: " +phoneNumber4);
                //time placement
                var restaurantTime4 = response.restaurants[3].restaurant.timings
                console.log(restaurantTime4);
                $("#times4").html("Hours of Operation: "+" "+restaurantTime4)
                //price placememnt
                var restaurantPrice4 = response.restaurants[3].restaurant.price_range
                console.log(restaurantPrice4)
                $("#price4").html("Price (1=$   4=$$$$):"+" "+restaurantPrice4);
                //menu placement
                var restaurantMenu4 = response.restaurants[3].restaurant.menu_url
                console.log(restaurantMenu4);
                $("#menu4").attr("href" , restaurantMenu4)
                
        },
        });
}

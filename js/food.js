function refineSearch(lat , lon){

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
        q = search1;
    }

    else if(option2.checked === true){
        var search2 = option2.value
        q = search2;
    }

    else if(option3.checked === true){
        var search3 = option3.value
        q = search3;
    }

    else if(option4.checked === true){
        var search4 = option4.value
        q = search4;
    }

    else if(option5.checked === true){
        var search5 = option5.value
        q = search5;
    }

    else if(option6.checked === true){
        var search6 = option6.value
        q = search6;
    }

    else if(option7.checked === true){
        var search7 = option7.value
        q = search7;
    }

    else if(option8.checked === true){
        var search8 = option8.value
        q = search8;
    }

    else{alert('Nothing was selected')}

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
                
                // BOX 1

                //image placement
                var restaurantImg = response.restaurants[0].restaurant.featured_image
                var imgContainer = $("#imgOne");
                if (restaurantImg.charAt(0) === "h") {
                    imgContainer.attr('src', (restaurantImg))}
                else {imgContainer.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName = response.restaurants[0].restaurant.name
                $("#food-title1").html(restaurantName);
                //location placement
                var restaurantAddress = response.restaurants[0].restaurant.location.address
                var phoneNumber = response.restaurants[0].restaurant.phone_numbers
                $("#text1").html(restaurantAddress +" "+" " +"Phone Number: " +phoneNumber);
                //time placement
                var restaurantTime = response.restaurants[0].restaurant.timings
                $("#times1").html("Hours of Operation: "+" "+restaurantTime)
                //price placememnt
                var restaurantPrice = response.restaurants[0].restaurant.price_range
                $("#price1").html("Price (1=$   4=$$$$):"+" "+restaurantPrice);
                //menu placement
                var restaurantMenu = response.restaurants[0].restaurant.menu_url
                $("#menu1").attr("href" , restaurantMenu)
                //show card
                $("#cardF1").show();

                // BOX 2

                //image placement
                var restaurantImg2 = response.restaurants[1].restaurant.featured_image
                var imgContainer2 = $("#imgTwo");
                if (restaurantImg2.charAt(0) === "h") {
                    imgContainer2.attr('src', (restaurantImg2))}
                else {imgContainer2.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName2 = response.restaurants[1].restaurant.name
                $("#food-title2").html(restaurantName2);
                //location and phone # placement 
                var restaurantAddress2 = response.restaurants[1].restaurant.location.address
                var phoneNumber2 = response.restaurants[1].restaurant.phone_numbers
                $("#text2").html(restaurantAddress2 +" "+" " + "Phone Number: " +phoneNumber2);
                //time placement
                var restaurantTime2 = response.restaurants[1].restaurant.timings
                $("#times2").html("Hours of Operation: "+" "+restaurantTime2)
                //price placememnt
                var restaurantPrice2 = response.restaurants[1].restaurant.price_range
                $("#price2").html("Price (1=$   4=$$$$):"+" "+restaurantPrice2);
                //menu placement
                var restaurantMenu2 = response.restaurants[1].restaurant.menu_url
                $("#menu2").attr("href" , restaurantMenu2)                
                //show card
                $("#cardF2").show();

                // BOX 3

                //image placement
                var restaurantImg3 = response.restaurants[2].restaurant.featured_image
                var imgContainer3 = $("#imgThree");
                if (restaurantImg3.charAt(0) === "h") {
                    imgContainer3.attr('src', (restaurantImg3))}
                    else {imgContainer3.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName3 = response.restaurants[2].restaurant.name
                $("#food-title3").html(restaurantName3);
                //location placement
                var restaurantAddress3 = response.restaurants[2].restaurant.location.address
                var phoneNumber3 = response.restaurants[2].restaurant.phone_numbers
                $("#text3").html(restaurantAddress3 +" "+" " + "Phone Number: " +phoneNumber3);
                //time placement
                var restaurantTime3 = response.restaurants[2].restaurant.timings
                $("#times3").html("Hours of Operation: "+" "+restaurantTime3)
                //price placememnt
                var restaurantPrice3 = response.restaurants[2].restaurant.price_range
                $("#price3").html("Price (1=$   4=$$$$):"+" "+restaurantPrice3);
                //menu placement
                var restaurantMenu3 = response.restaurants[2].restaurant.menu_url
                $("#menu3").attr("href" , restaurantMenu3)
                //show card
                $("#cardF3").show();

                // BOX 4

                //image placement
                var restaurantImg4 = response.restaurants[3].restaurant.featured_image
                var imgContainer4 = $("#imgFour");
                if (restaurantImg4.charAt(0) === "h") {
                    imgContainer4.attr('src', (restaurantImg4))}
                else {imgContainer4.attr('src', "./assets/placeholder_img.jpg" )}
                //name placement
                var restaurantName4 = response.restaurants[3].restaurant.name
                $("#food-title4").html(restaurantName4);
                //location placement
                var restaurantAddress4 = response.restaurants[3].restaurant.location.address
                var phoneNumber4 = response.restaurants[3].restaurant.phone_numbers
                $("#text4").html(restaurantAddress4 + " " + " " +"Phone Number: " +phoneNumber4);
                //time placement
                var restaurantTime4 = response.restaurants[3].restaurant.timings
                $("#times4").html("Hours of Operation: "+" "+restaurantTime4)
                //price placememnt
                var restaurantPrice4 = response.restaurants[3].restaurant.price_range
                $("#price4").html("Price (1=$   4=$$$$):"+" "+restaurantPrice4);
                //menu placement
                var restaurantMenu4 = response.restaurants[3].restaurant.menu_url
                $("#menu4").attr("href" , restaurantMenu4)
                //show card
                $("#cardF4").show();                
        },
    });
}

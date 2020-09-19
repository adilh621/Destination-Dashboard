function coord(lat,lon){

    console.log("i was called")
    console.log(lat);
    console.log(lon);

    $.ajax({
    
        type: "GET",
        url: "https://developers.zomato.com/api/v2.1/search",
        headers: { "user-key": "973b94938ae37b99cb3572338e4f61c1"},
        data:{
            lat: lat,
            lon: lon,
            // entity_type: "zone",
            // radius: "16000",
            sort : "real_distance",
            q:"fastfood"
        },
        success:
            function(response) {
                console.log(response);
        },
        });

        




}

 
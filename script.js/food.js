function refineSearch(lat , lon ,q){

    var q = ' ';
    var option1 = document.getElementById("option1")
    var option2 = document.getElementById("option2")
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
        },
        });
}

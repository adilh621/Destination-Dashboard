//JS

var searchBtn = $('#searchCityBtn')
var departBtn = $("#departBtn");
function weatherSearch (city) {
    var APIkey = "af6923e95cbb6c53be8ceb07c2b776e5";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        // console.log(lat);
        // console.log(lon);
        // return lat, lon;
        refineSearch(lat , lon);
        // tom1(lat, lon);
    });
    
    console.log("weather recieved")
    
    

}


$(searchBtn).on('click', function(){
    event.preventDefault();
    var city = $('#cityInput').val();
    console.log("i was click")
    console.log(city);
    weatherSearch(city);
    

});

$(departBtn).on('click' , function(e){
    var $inputCityVal = $("#cityInput")
    e.preventDefault();
    console.log("here")
    // //show contents and prompts user to select option
    $('#dashboard').show();
    $('#navMessage').show();
    // //change the innerHTML for "cityinput"
    
    // placeholderCity.attr("placeholder", $inputCityVal);
    
})





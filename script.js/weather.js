//JS

var APIkey = "af6923e95cbb6c53be8ceb07c2b776e5";

var city = "New York";





function weatherSearch () {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(lat);
        console.log(lon);
        return lat, lon;

    });
}
weatherSearch();



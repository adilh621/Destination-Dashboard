// JS code

var openAPI = "af6923e95cbb6c53be8ceb07c2b776e5"

var tomAPI = "OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk"

// var h1El = document.querySelector("#test");

function weatherSearch () {
    var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openAPI;
    
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        // $(".city").empty().append(response.name);
        // $(".icon").empty().attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(lat);
        console.log(lon);

        // uvAndTime(lat, lon);
    });
}

weatherSearch();

function tomSearch () {
    var queryURL = "https://api.tomtom.com/search/2/poiDetails.json?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=Rm91cnNxdWFyZTo1NTExYWY3MTQ5OGUwZjc4OWNkODRhZjI="
    var pic = "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=23bc3b0b-d33d-3c07-8612-e660ea7c0864&height=200&width=200"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        $("#pic1").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[0].id + "&height=200&width=200");
        $("#pic2").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[1].id + "&height=200&width=200");
        $("#pic3").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[2].id + "&height=200&width=200");
        $("#pic4").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[3].id + "&height=200&width=200");
        $("#pic5").attr("src", "https://api.tomtom.com/search/2/poiPhoto?key=OkYURWQKTdRDcXG4k3GCeRVkW173Dfxk&id=" + response.result.photos[4].id + "&height=200&width=200");

    });

}

tomSearch();
//JS

var searchBtn = $("#searchCityBtn");
var departBtn = $("#departBtn");

function weatherSearch(city) {
    var APIkey = "af6923e95cbb6c53be8ceb07c2b776e5";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;

        refineSearch(lat, lon);
    });
}

$(searchBtn).on('click', function () {
    event.preventDefault();
    var city = $('#cityInput').val();
    weatherSearch(city);
});

// show navMessage and dashboard on click departure button
$(departBtn).on('click', function (e) {
    var $inputCityVal = $("#cityInput")

    if ($('#cityInput').val().length == 0) {
        alert("Please enter city name")
    }

    else {
    e.preventDefault();
    //show contents and prompts user to select option
    $('#dashboard').show();
    $('#navMessage').show();

    // reference input fields and input value
    var inputCityText = $(".initial-input-city")
    var placeholderCityText = $(".placeholder-city-text")

    // get value
    var targetCity = inputCityText.val();

    // set attribute to the value
    placeholderCityText.attr("placeholder",targetCity);
    }
});

//  code for appending info and icon on the dashboard and for displaying drawings
$(departBtn).on('click', function (e) {
    e.preventDefault();
    // get value
    var cityDash = $('#cityInput').val();
    dashboardIcons(cityDash);
});

function dashboardIcons(cityDash) {
    var APIkey = "af6923e95cbb6c53be8ceb07c2b776e5";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityDash + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        showImages(response);
        var latP = response.coord.lat;
        var lonP = response.coord.lon;
        // append these elements to dashboard
        var temp = response.main.temp;
        var country = response.sys.country;

        $("#weather-input").empty().append(temp.toFixed(0) + " °F");
        $("#icon-input").empty().attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
        $("#language-input").empty().append(country);
        getDate(latP, lonP);
    });
}

function getDate(latP, lonP) {
    var APIkey = "af6923e95cbb6c53be8ceb07c2b776e5";
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIkey + "&lat=" + latP + "&lon=" + lonP;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#time-input").empty().append("(" + response.date_iso.split("T")[0] + ")");
    });
}

function showImages(response) {

    var group235 = "./assets/png_files/img_dash_group235.png"
    var group6 = "./assets/png_files/img_dash_group6.png"
    var group7 = "./assets/png_files/img_dash_group7.png"
    var group8 ="./assets/png_files/img_dash_group8.png"
    var groupElse = "./assets/png_files/img_dash_group_else.png"
    
    var idEl = response.weather[0].id;
    
    // dashboard container
    var toBringContainer = $("#to-bring-container")
    
    // if for ID 200-300-500s
    if (parseInt(idEl) < 600) {
        toBringContainer.attr("src", group235);
    }
    // if for ID 600s
    else if (parseInt(idEl) > 599 && parseInt(idEl) < 624) {
        toBringContainer.attr("src", group6);
    }
    // if for ID 700s
    else if (parseInt(idEl) > 700 && parseInt(idEl) < 800) {
        toBringContainer.attr("src", group7);
    }
    // if for ID 800s
    else if (parseInt(idEl) === 800) {
        toBringContainer.attr("src", group8);
    }
    // if for ID anything else just in case
    else {
        toBringContainer.attr("src", groupElse);
    };
}
//JS

var searchBtn = $('#searchCityBtn')
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
        // console.log(lat);
        // console.log(lon);
        // return lat, lon;
        refineSearch(lat, lon);
        // tom1(lat, lon);

    });
    console.log("weather recieved");
}


$(searchBtn).on('click', function () {
    event.preventDefault();
    var city = $('#cityInput').val();
    console.log("i was click")
    console.log(city);
    weatherSearch(city);

});



// ----------------------- victorias code starts here

// show navMessage and dashboard on click departure button
$(departBtn).on('click', function (e) {
    var $inputCityVal = $("#cityInput")
    e.preventDefault();
    console.log("here")

    //show contents and prompts user to select option
    $('#dashboard').show();
    $('#navMessage').show();

    // reference input fields and input value
    var inputCityText = $(".initial-input-city")
    var placeholderCityText = $(".placeholder-city-text")

    // get value
    var targetCity = inputCityText.val();
    console.log(targetCity);

    // set attribute to the value
    placeholderCityText.attr("placeholder",targetCity);

});


// ---------------------------- select everything and uncomment everything below this line to start



// // funciton appending "don't forget to bring" depending on weather response IDS

// // all image options
// var toBringImages = {
//     group235: "./assets/img_dash_group235.jpg",
//     group6: "./assets/img_dash_group6.jpg",
//     group7: "./assets/img_dash_group7.jpg", 
//     group8: "./assets/img_dash_group8.jpg",
//     groupElse: "./assets/img_dash_group_else.jpg",
//     } ;


// // coded ID for texting
// var weatherID = 500

// // dashboard container
// var $toBringContainer = $("#to-bring-container")

// // if for ID 200-300-500s
// if (weatherID <= 600) {
//     $toBringContainer.attr("src",toBringImages.group235)
//     console.log("rain");
// }

// // if for ID 600s
// else if (weatherID <= 600) {
//     $toBringContainer.attr("src",toBringImages.group6)
//     console.log("group 6 snow")

// }

// // if for ID 700s
// else if (weatherId = 700) {
//     $toBringContainer.attr("src",toBringImages.group7)
//     console.log("group 7 atmosphere")
// }

// // if for ID 800s
// else if (weatherId > 800) {
//     $toBringContainer.attr("src",toBringImages.group8)
//     console.log("group 8 clear")
// }

// // if for ID anything else just in case
// else {
//     $toBringContainer.attr("src",toBringImages.groupElse)
//     console.log("other")
// };









// PETER'S code for appending info and icon on the dashboard and for displaying drawings

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
        // ADD THIS
        var temp = response.main.temp;
        var country = response.sys.country;
        // var icon = $("<img>").empty().attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
        $("#weather-input").empty().append(temp.toFixed(0) + " °F");
        $("#currency-input").empty().attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
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

    var group235 = "./assets/img_dash_group235.png"
    var group6 = "./assets/img_dash_group6.png"
    var group7 = "./assets/img_dash_group7.png"
    var group8 ="./assets/img_dash_group8.png"
    var groupElse = "./assets/img_dash_group_else.png"
    
    var ide = response.weather[0].id;

    console.log(response.weather[0].id)
    console.log(ide);
    
    // dashboard container
    var toBringContainer = $("#to-bring-container")
    
    // if for ID 200-300-500s
    if (parseInt(ide) < 600) {
        toBringContainer.attr("src", group235)
        console.log("rain");
    }
    
    // if for ID 600s
    else if (parseInt(ide) > 599 && parseInt(ide) < 624) {
        toBringContainer.attr("src", group6)
        console.log("group 6 snow")
    
    }
    
    // if for ID 700s
    else if (parseInt(ide) > 700 && parseInt(ide) < 800) {
        toBringContainer.attr("src", group7)
        console.log("group 7 atmosphere")
    }
    
    // if for ID 800s
    else if (parseInt(ide) === 800) {
        toBringContainer.attr("src", group8)
        console.log("group 8 clear")
    }
    
    // if for ID anything else just in case
    else {
        toBringContainer.attr("src", groupElse)
        console.log("other")
    };
}
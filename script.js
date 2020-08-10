$(document).ready(function() {

var ApiKey = "01ad664aa90cf386c711b85c2719ca99";

var userSearch = $("#city-search").val()

var currentDay = moment().format('l');

//local sotrage array
var localStorageArr = []

    $("#search-submit").click(function(event) { 
        event.preventDefault()
        var userSearch = $("#city-search").val()
        //localStorage.setItem(userSearch);
        localStorageArr.push(userSearch) //pushing value of user search to array
        for(var i = 0; i < localStorageArr.length; i++) {
            //click submit > pushes to local storage array > loop through array > render items to page
            $(".city-list").append("<li>" + localStorageArr[i] + "</li>")
        }


        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=" + ApiKey;
        $.get(queryUrl, function(response, status){
            console.log(response)
           


//transfer data from api to html
var name = response.name; //create paragraph tag with the city name
var date = currentDay
//convert kelvin to fahrenheit
var tempF = (response.main.temp - 273.15) * 1.80 + 32;

var temperature = "Temperature: " + tempF.toFixed(2) + " F"
var windSpeed = "Wind Speed: " + response.wind.speed; 
var humidity = "Humidity: " + response.main.humidity + "%"; 

$(".weather").append(name + "<br>");
$(".weather").append(date + "<br>");
$(".todaysWeather span").text(response.weather[0].description);
$(".weather").append(temperature + "<br>");
$(".weather").append(windSpeed + "<br>");
$(".weather").append(humidity + "<br>")


});


//UV index api url

var uvQueryUrl = "https://api.openweathermap.org/data/2.5/uvi?appid="+ ApiKey + "&lat=" + lat + "&lon=" + lon;
$.get(uvQueryUrl, function(response, status){

var lat = response.coord.lat;
var lon = response.coord.lon;

var uvIndex = "UV-Index: " + response.value;
$(".weather").append(uvIndex);
console.log(uvIndex)
});
});


//get items from local storage
localStorage.getItem("userSearch");


//five day forcast

var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=" + ApiKey;
$.get(forcastUrl, function(response, status){
    console.log(response)

//need date, temperature, humidity

var forcastDate = response.weatherdata.forcast.time;




});


});

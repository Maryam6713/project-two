var userInput = prompt(" Enter the temperature range \n (0-39)):");
var temperatureRanges = [
    { min: 33, max: 39, condition: "Heat Wave", image: "images/hot1.gif" },
    { min: 27, max: 32, condition: "Very Hot", image: "images/hot2.gif" },
    { min: 23, max: 26, condition: "Hot", image: "images/hot.gif"},
    { min: 16, max: 22, condition: "Room Temprature", image: "images/room tamp.gif" },
    { min: 11, max: 15, condition: "Warm", image: "images/warm.gif"},
    { min: 5, max: 10, condition: "Mild", image: "images/rainy.gif"},
    { min: 0, max: 4, condition: "Cold", image: "images/cold1.gif"}
];

function getWeatherCondition(temperature) {
    for (const range of temperatureRanges) {
        if (temperature >= range.min && temperature <= range.max) {
            return range;
        }
    }
    return null;
}

var userTemperature = parseInt(userInput);
var weatherInfo = getWeatherCondition(userTemperature);

if (weatherInfo) {
    var weatherReport = `
        <div class="card weather-card">
            <div class="card-body ">
                <h5 class="card-title text-2">Weather Checker</h5>
                <p class="card-text">Temperature: ${userTemperature}°C</p>
                <p class="card-text">Weather: ${weatherInfo.condition}</p>
                <img src="${weatherInfo.image}" alt="Weather Image" class="imagedropshadow">
            </div>
        </div>
    `;
    document.write(weatherReport);
} else {
    var noWeatherReport = `
        <div class="card weather-card">
            <div class="card-body">
                <p class="card-text">Weather condition not applicable for the given temperature range.</p>
               
            </div>
        </div>
    `;
    document.write(noWeatherReport);
}
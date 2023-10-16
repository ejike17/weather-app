const KEY = "c78ca35ab00907833d1458d8fdddec1e";
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let img = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")
let apiUrl = "";

async function checkWeather() {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${KEY}&units=metric`;
    const response = await fetch(apiUrl);
    
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block"
        return
    } else {
        document.querySelector(".error").style.display = "none"
    }
    
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    
    if (data.weather[0].main === "Clear") {
        img.src = "images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
        img.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
        img.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        img.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        img.src = "images/mist.png";
    }
    input.value = ''
    weather.style.display = "block"
}

btn.addEventListener("click", checkWeather);

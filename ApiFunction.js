const apiKey = "0a0fc684c08aef4ed414fe6bbef7e0c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".weekly-forecast").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        setWeatherIcon(data.weather[0].main);

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

function setWeatherIcon(weatherMain) {
    switch (weatherMain) {
        case "Clouds":
            icon.src = "weather-app-img/images/clouds.png";
            break;
        case "Clear":
            icon.src = "weather-app-img/images/clear.png";
            break;
        case "Rain":
            icon.src = "weather-app-img/images/rain.png";
            break;
        case "Drizzle":
            icon.src = "weather-app-img/images/drizzle.png";
            break;
        case "Mist":
            icon.src = "weather-app-img/images/mist.png";
            break;
        default:
            icon.src = "weather-app-img/images/default.png";
            break;
    }
}

async function displayWeeklyForecast(city) {
    const weeklyForecastContainer = document.querySelector(".weekly-forecast");
    weeklyForecastContainer.innerHTML = ""; // Clear existing content

    const weeklyApiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(weeklyApiUrl);
    const data = await response.json();

    const dailyForecasts = data.list.filter((forecast, index) => index % 8 === 0); // Extract daily forecasts

    dailyForecasts.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("forecast-day");

        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        const temperature = Math.round(day.main.temp);
        const iconCode = day.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        dayDiv.innerHTML = `
            <p>${dayOfWeek}</p>
            <img src="${iconUrl}" alt="Weather Icon">
            <p>${temperature}°C</p>
        `;

        weeklyForecastContainer.appendChild(dayDiv);
    });

    weeklyForecastContainer.style.display = "block"; // Show weekly forecast
}

searchButton.addEventListener("click", () => {
    const city = searchBox.value;
    checkWeather(city);
    displayWeeklyForecast(city); // Display weekly forecast when search button is clicked
});
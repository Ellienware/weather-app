    const apiKey ="0a0fc684c08aef4ed414fe6bbef7e0c1";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input")
    const searchButton = document.querySelector(".search button")
    const icon = document.querySelector(".weather-icon")

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
                icon.src = "weather-app-img/images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                icon.src = "weather-app-img/images/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                icon.src = "weather-app-img/images/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                icon.src = "weather-app-img/images/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                icon.src = "weather-app-img/images/mist.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
        
    }
    searchButton.addEventListener("click", ()=>{
        checkWeather(searchBox.value)
    })

    checkWeather();
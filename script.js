const apiKey = "ec341f6e87a9305023ae2fd4f7d04967";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  let weatherImg = document.querySelector(".weather-icon");

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImg.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(search.value);
  document.querySelector(".disp").style.display = "block";
});
search.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    checkWeather(search.value);
    document.querySelector(".disp").style.display = "block";
  }
});
search.addEventListener("focus", () => {
  document.querySelector(".disp").style.display = "none";
});


const apiKey = 'fe7316d527e7467f091f21524c99f0b9';

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  }
});

function getWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function displayWeatherData(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

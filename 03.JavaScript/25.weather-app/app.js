// https://www.weatherapi.com/

const para = document.querySelector("#show-weather");
const humidity = document.querySelector("#show-humidity");

async function getWeather(event) {
  event.preventDefault();

  const city = document.querySelector("#city-input").value;

  const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );

  console.log(response);

  para.innerHTML = response.data.current.temp_c;
  humidity.innerHTML = "Humidity: " +response.data.current.humidity;
}

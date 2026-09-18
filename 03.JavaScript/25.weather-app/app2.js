// https://www.weatherapi.com/

const para = document.querySelector("#show-weather");
const humidity = document.querySelector("#show-humidity");
const img = document.querySelector("#weather-icon")


// await ko use karne ky liye functions ko async bana lazmi hy
async function getWeather(event) {
  try {
    event.preventDefault();

    para.innerHTML = "loading..."

    const city = document.querySelector("#city-input").value;

    if (!city) return;

    const response = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
    );

    console.log(response);

    img.src = response.data.current.condition.icon
    para.innerHTML = "Temperature: " + response.data.current.temp_c;
    humidity.innerHTML = "Humidity: " + response.data.current.humidity;
  } catch (err) {
    console.log(err.response.data.error.message);

    humidity.innerHTML = ""
    para.innerHTML = err.response.data.error.message;
  }
}

// try {

//   throw new Error("Balance kam hy bhai!");

// } catch (error) {
//   console.error("Error line 26 - app.js: ", error);
// } finally {
//   console.log("hello");
// }

console.log("File running till the end");

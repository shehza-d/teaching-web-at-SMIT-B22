// https://www.weatherapi.com/

const para = document.querySelector("#show-weather");
const humidity = document.querySelector("#show-humidity");
const img = document.querySelector("#weather-icon");

// await ko use karne ky liye functions ko async bana lazmi hy
async function getWeather(event) {
  try {
    event.preventDefault();

    const city = document.querySelector("#city-input").value;
    if (!city) return;

    para.innerHTML = "loading...";

    // fetch
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
    );
    const data = await response.json(); // converting data

    console.log("response: ", data);

    if (data.error) {
      //  para.innerHTML = data.error.message;

      throw new Error(data.error.message);
    }

    img.src = data.current.condition.icon;
    para.innerHTML = "Temperature: " + data.current.temp_c;
    humidity.innerHTML = "Humidity: " + data.current.humidity;
  } catch (err) {
    console.log(err);

    // console.log(err.response.data.error.message);

    humidity.innerHTML = "";
    img.src = "";
    para.innerHTML = err.message; //err.response.data.error.message;
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

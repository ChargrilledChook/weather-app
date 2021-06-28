// DOM Selectors =================================
const headerIcon = document.querySelector("#head-icon");
const button = document.querySelector("#search-btn");
const toggle = document.querySelector(".switch input");
const main = document.querySelector("main");

// Top level variables / declarations =================================
// Standard internationalisation API, which we use to convert country codes to country names
const countryCodes = new Intl.DisplayNames(["en"], { type: "region" });
// Obviously not ideal to have a key sitting here in plain text but somewhat unavoidable in this implementation
const key = "bcd9efe90d4b0bbc5b7e653dc9004c70";
let units = "celcius";
let currentData;
const defaultCity = "newcastle";

// Listeners =================================
button.addEventListener("click", displayWeather);

toggle.addEventListener("click", () => {
  units = units === "celcius" ? "fahrenheit" : "celcius";
  updateData(currentData);
});

// Helper divs =================================
const loading = document.createElement("div");
loading.textContent = "Loading...";

const error = document.createElement("div");
error.textContent = "Couldn't find that place - did you spell it correctly?";

// Core Logic =================================
async function fetchData() {
  const searchTerm = document.querySelector("input").value || defaultCity;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}&units=metric`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
}

async function displayWeather(event) {
  // REFACTOR Try block so we can load straight away without the form. There is probably a better solution
  try {
    event.preventDefault();
  } finally {
    main.innerHTML = "";
    main.append(loading);
    const data = await fetchData();
    main.innerHTML = "";
    if (data.cod === "400" || data.cod === "404") return main.append(error);

    currentData = data;
    return main.append(createContainer(data));
  }
}

// After an api call we cache the data in a variable, so we can convert between C and F without another call
// This re-renders data in that case
function updateData(data) {
  const updated = createContainer(data);
  main.innerHTML = "";
  main.append(updated);
}

// REFACTOR Way too long, break down. Not complex just bulky due to
// creating a lot of divs
function createContainer(data) {
  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = `${data.name},  ${countryCodes.of(data.sys.country)}`;
  const current = document.createElement("div");
  current.classList.add("main-temp");
  const description = document.createElement("div");
  description.classList.add("description");
  const min = document.createElement("div");
  const max = document.createElement("div");
  const icon = document.createElement("img");
  icon.classList.add("icon");

  const currTemp = convertTemp(data.main.temp, units);
  const minTemp = convertTemp(data.main.temp_min, units);
  const maxTemp = convertTemp(data.main.temp_max, units);

  const iconId = data.weather[0].icon;
  console.log(iconId);
  const iconSrc = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  icon.src = iconSrc;
  headerIcon.src = iconSrc;

  current.textContent = `${currTemp} °${units.slice(0, 1).toUpperCase()}`;
  description.textContent = data.weather[0].description;
  min.textContent = `Min: ${minTemp}`;
  max.textContent = `Max: ${maxTemp}`;

  container.append(current, title, description, min, max, icon);

  return container;
}

// Helper functions =================================
function convertTemp(temp, units) {
  if (units === "celcius") return Math.round(temp);

  return Math.round((temp * 9) / 5 + 32);
}

// Immediately load some data on pageload
displayWeather();

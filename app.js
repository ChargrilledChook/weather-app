// Standard internationalisation API, which we use to convert country codes to country names
const countryCodes = new Intl.DisplayNames(["en"], { type: "region" });

const key = "bcd9efe90d4b0bbc5b7e653dc9004c70";

const button = document.querySelector("#geo-search");
button.addEventListener("click", displayWeather);

const main = document.querySelector("main");

const toggle = document.querySelector(".switch input");

const headerIcon = document.querySelector("#head-icon");

let units = "celcius";

toggle.addEventListener("click", () => {
  units = units === "celcius" ? "fahrenheit" : "celcius";
  updateData(currentData);
});

let currentData;

async function fetchData() {
  const searchTerm = document.querySelector("input").value || "newcastle";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}&units=metric`;
  console.log(url);
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  console.table(data);
  return data;
}

async function displayWeather(event) {
  try {
    event.preventDefault();
  } finally {
    main.innerHTML = "";
    main.append(loading);
    const data = await fetchData();
    console.log(data);
    main.innerHTML = "";
    if (data.cod === "400" || data.cod === "404") return main.append(error);

    currentData = data;
    return main.append(createContainer(data));
  }
}

function updateData(data) {
  const updated = createContainer(data);
  main.innerHTML = "";
  main.append(updated);
}

function createContainer(data) {
  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = `${data.name}, ${countryCodes.of(data.sys.country)}`;
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

const loading = document.createElement("div");
loading.textContent = "Loading...";

const error = document.createElement("div");
error.textContent = "Couldn't find that place - did you spell it correctly?";

function convertTemp(temp, units) {
  if (units === "celcius") return temp;

  // + String conversion is used to drop  extra 0s ie 15.00
  return +((temp * 9) / 5 + 32).toFixed(2);
}

displayWeather();

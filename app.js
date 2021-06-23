const key = "bcd9efe90d4b0bbc5b7e653dc9004c70";

const button = document.querySelector("button");
button.addEventListener("click", displayWeather);

const main = document.querySelector("main");

async function fetchData() {
  const searchTerm = document.querySelector("input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}&units=metric`;
  console.log(url);
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  console.table(data);
  return data;
}

async function displayWeather() {
  main.innerHTML = "";
  main.append(loading);
  const data = await fetchData();
  console.log(data);
  main.innerHTML = "";
  if (data.cod === "404") return main.append(error);

  return main.append(createContainer(data));
}

function createContainer(data) {
  const container = document.createElement("div");
  container.classList.add("result");
  const header = document.createElement("h2");
  header.textContent = `${data.name}, ${data.sys.country}`;

  const tempContainer = document.createElement("div");
  const current = document.createElement("div");
  const min = document.createElement("div");
  const max = document.createElement("div");

  const currTemp = data.main.temp;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  current.textContent = `Current temperature in ${data.name} is ${currTemp} degrees celcius`;
  min.textContent = `Min: ${minTemp}`
  max.textContent = `Max: ${maxTemp}`
  tempContainer.append(current, min, max)


  container.append(header, tempContainer);

  return container;
}

const loading = document.createElement("div");
loading.textContent = "Loading...";

const error = document.createElement("div");
error.textContent = "Couldn't find that place - did you spell it correctly?";

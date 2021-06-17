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
  const data = await fetchData();
  console.log(data);
  const weather = createContainer(data);
  main.append(weather);
}

function createContainer(data) {
  const container = document.createElement("div");
  container.classList.add("result");
  const header = document.createElement("h2");
  header.textContent = `${data.name}, ${data.sys.country}`;

  const tempContainer = document.createElement("div");
  const temp = data.main.temp;
  tempContainer.textContent = `Current temperature in ${data.name} is ${temp} degrees celcius`;

  container.append(header, tempContainer);

  return container;
}

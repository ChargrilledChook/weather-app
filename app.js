const key = "";

const button = document.querySelector('button')
button.addEventListener('click', displayWeather)



async function fetchData() {
  const searchTerm = document.querySelector('input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}&units=metric`
  console.log(url)
  const response = await fetch(url, {mode: 'cors'})
  const data = await response.json();
  console.table(data)
  return data;
}

async function displayWeather(){
  fetchData();
}

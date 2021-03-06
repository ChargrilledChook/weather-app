# How's the Weather? 🌤️

A small project to practice async / await functions, promises and working with external APIs.

Allows you to search cities to find the current local weather.

[View Live](https://chargrilledchook.github.io/weather-app/)

[Kanban Board](https://github.com/ChargrilledChook/weather-app/projects/1)

[Openweather API](https://openweathermap.org/)

### About

This project takes JSON data from the [Openweather API](https://openweathermap.org/) and parses it into a minimal, clean, mobile responsive web app.

This project based on [this spec](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/weather-app) from [The Odin Project](https://www.theodinproject.com/)

Current version should be considered a proof of concept rather than a fully fledged app; certain key features are missing. For instance there is currently no way to search for Stanmore, Sydney, versus Stanmore, UK.

### Tools used

- Plain Javascript, CSS and HTML
- The [Openweather API](https://openweathermap.org/)
- Google fonts
- Material Icons
- CSS Normalize

### How to use

A demo of the site can be seen [here](https://chargrilledchook.github.io/weather-app/).

Running this app locally requires no special dependencies - simply clone this repository and open the index.html file. For best results load it on a liver server / local host.

### Possible future features

- [ ] More granular search, ie by country, state etc
- [ ] Ajax type ahead in search (or similar)
- [ ] More detailed data
- [ ] Four day forecast

### Issues

- [ ] Currently very little input checking - if we get readable data back from the api we display it, otherwise
      we get two generic errors. For instance postcodes work but give very inconsistent results
- [ ] No ability to search by country - some places you might want to search default to a country you don't want
- [ ] Revisit colour palette - certain images are difficult to see against certain backdrops
- [ ] Revisit design in general - not terrible, but feel it lacks something
- [ ] Entering an empty input will load the default city (that is seen on page load) - this is not the worst solution but there's probably better ways (ie form validation)
- [ ] Required flag on form is not working
- [ ] Create container is too long and needs refactoring
- [ ] Should probably process the data I get back into an object with only the fields I need
- [ ] Add some tests

### Reflections

- Definitely prefer asysnc / away syntax to promises, but still important to understand promise syntax. Good start but more practice would be good
- What is the best way to get data directly out of an aysnc function, without top level async? I went with a side effect here but doesn't feel optimal
- After using React creating a large amount of divs and dynamically filling them with state / data feels very inefficient / clunky.
- Should spend a little bit more time processing the raw JSON data into my own data structures

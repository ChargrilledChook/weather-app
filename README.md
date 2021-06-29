# weather-app

A small project to practice async / await functions, promises and working with external APIs.

Currently rewriting this doc WIP

[Kanban Board](https://github.com/ChargrilledChook/weather-app/projects/1)

[View Live](https://chargrilledchook.github.io/weather-app/)

[Openweather API](https://openweathermap.org/)

### About

Mobile responsive

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

### Reflections

- Definitely prefer asysnc / away syntax to promises, but still important to understand promise syntax
- What is the best way to get data directly out of an aysnc function, without top level async? I went with a side effect here but doesn't feel optimal

# weather-app

API Practice for TOP

[Kanban Board](https://github.com/ChargrilledChook/weather-app/projects/1)

[View Live](https://chargrilledchook.github.io/weather-app/)

[Openweather API](https://openweathermap.org/)

Not quite complete, current deployment is to assist with mobile testing

### About

### Tools used

- Plain Javascript, CSS and HTML
- The [Openweather API](https://openweathermap.org/)
- Google fonts
- Material Icons

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

### Reflections

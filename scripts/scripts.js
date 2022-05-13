// Api key voor Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic3ZlbmtlcnNiZXJnZW4iLCJhIjoiY2wxbWI5ZmdiMGlrczNwbzMzbm4wenFmNyJ9.zVdvr_b4j8uyxeKb-HinDw';

// Api key voor openWeatherMap
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = '9efa578c2fa6083cd559fa2801b0824b';
var center = [4.325, 52.081]; //Midden van de map in een variable gezet voor het gemak

// Map aanmaken 
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: center,
  zoom: 3.5,
});


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

var popup = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingplaats #1</h3>');
var popup2 = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingplaats #2</h3>');
var popup3 = new mapboxgl.Popup().setHTML('<h3 class="popuptext">Landingplaats #3</h3>');

var loungePad1 = [-97.15, 25.99]; //LngLat van de landingplaats in variablen gezet hierdoor kan ik ze ook gebruiken om het weer op te halen
var loungePad2 = [4.325, 52.081];  
var loungePad3 = [-80.15, 25.75];

// Marker toevoegen op de map voor iedere landingplaats
var marker = new mapboxgl.Marker({
	color: "purple"})
  .setLngLat(loungePad1)
  .setPopup(popup)
  .addTo(map);

var marker2 = new mapboxgl.Marker({
	color: "yellow"})
  .setLngLat(loungePad2)
  .setPopup(popup2)
  .addTo(map);

  var marker3 = new mapboxgl.Marker({
  	color: "pink"})
  .setLngLat(loungePad3)
  .setPopup(popup3)
  .addTo(map);

//------------Onclicks voor de knoppen

document.getElementById('knop1').onclick = function() {
map.flyTo({
center: loungePad1,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherplaats1();

};

document.getElementById('knop2').onclick = function() {
map.flyTo({
center: loungePad2,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherplaats2();

};

document.getElementById('knop3').onclick = function() {
map.flyTo({
center: loungePad3,
speed: 1,
zoom: 10,
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});

getWeatherplaats3();

};

// Weathermap -- per plaats heb ik een function aangemaakt om voor die locatie het weer op te halen, deze functie wordt uitgevoerd bij een onclick
function getWeatherplaats1 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + loungePad1[1] + '&lon=' + loungePad1[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// Haal het weer op, doordat de LngLat in een variable staat kan ik deze hier gebruiken
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeatherplaats2 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + loungePad2[1] + '&lon=' + loungePad2[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// Haal het weer op, doordat de LngLat in een variable staat kan ik deze hier gebruiken
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeatherplaats3 () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + loungePad3[1] + '&lon=' + loungePad3[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// Haal het weer op, doordat de LngLat in een variable staat kan ik deze hier gebruiken
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

function getWeather () {

var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + center[1] + '&lon=' + center[0] + '&appid=0390daa8a38c5a1e9f2ff77491c72abc'
// Haal het weer op, doordat de LngLat in een variable staat kan ik deze hier gebruiken. Hier haal ik het weer op van het midden van de kaart.
// in dit geval is dat het midden van de Golf van Mexico. Hierdoor heb ik altijd gegevens om het weer mee te vullen (aangezien de andere pas na een onclick worden uitgevoerd)
fetch(request)

// parse response to JSON format
.then(function(responseWeather) {
return responseWeather.json();
})

// do something with response
.then(function(responseWeather) {
// show full JSON object
var weatherBox = document.getElementById('weather');
var degC = Math.floor(responseWeather.main.temp - 273.15);
weatherBox.innerHTML = degC + '&#176;C <br><img src="https://openweathermap.org/img/wn/' + responseWeather.weather[0].icon + '@2x.png"><br>' +  responseWeather.weather[0].description;
});
};

getWeather();

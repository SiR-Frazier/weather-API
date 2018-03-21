import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './API-weather.js';


$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let zip = $('#zip').val();
    // let city = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&us&units=imperial&appid=b880a64b038ae0a31f016759b8e69896`).then(function(response) {
      // $('.showTemp').text(`The temperature in Kelvin is
      //   ${response.main.temp}`);
      $('.showF').text(`The temperature in Fahrenheit is
        ${response.main.temp}`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

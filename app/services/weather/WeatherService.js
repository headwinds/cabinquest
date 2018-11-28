var events = require('events');

var WeatherService = {};

WeatherService.dispatcher = new events.EventEmitter();

WeatherService.getWeather = function( file, email ) {

//var cityStr = (weatherObj.city.indexOf(" ") !== -1 ) ? weatherObj.city.split(" ").join("_") : weatherObj.city;

      var myAPIKey = "d1e7cd2b6f6363fe"; // should I move this service to the server?!
      
      var urlStr = "http://api.wunderground.com/api/d1e7cd2b6f6363fe/geolookup/conditions/q/" + weatherObj.country.toLowerCase() + "/" + cityStr + ".json";
      var dataTypeStr = "jsonp"; 

      return $.ajax({
              url : urlStr,
              dataType : dataTypeStr});
  }

  module.exports = WeatherService;
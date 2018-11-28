/* 
 hacked together by headwinds | www.headwinds.net
 see README.md for a more detailed write up 

 create a rest based service 

*/

var sys = require('sys');
var mongoose = require('mongoose/');
var restify = require('restify');  
var express = require('express');
var fs = require('fs');

var MessageService = require('./services/MessageService');
var FeedService = require('./services/FeedService');
var CamperService = require('./services/CamperService');

var MessageMongooseModel = MessageService.getModel();
var CamperMongooseModel = FeedService.getModel();
var FeedMongooseModel = CamperService.getModel();


var ResitifyService = {};

ResitifyService.createServer = function(){

    var mongodbPort = process.env.PORT || 8000;

    var mongodbServer = restify.createServer({
      formatters: {
          'application/json': function(req, res, body){
              if(req.params.callback){
                  var callbackFunctionName = req.params.callback.replace(/[^A-Za-z0-9_\.]/g, '');
                  return callbackFunctionName + "(" + JSON.stringify(body) + ");";
              } else {
                  return JSON.stringify(body);
              }
          },
          'text/html': function(req, res, body){
              return body;
          }
      }
    });

    mongodbServer.use( restify.bodyParser() );

    // Enable CORS
    /*
    mongodbServer.all( '/*', function( req, res, next ) {
      res.header( 'Access-Control-Allow-Origin', '*' );
      res.header( 'Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, OPTIONS' );
      res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-File-Name, Content-Type, Cache-Control' );
      
      if( 'OPTIONS' == req.method ) {
        res.send( 203, 'OK' );
      }
      
      next();

    });
    */

    mongodbServer.listen(mongodbPort, function() {
    
      var consoleMessage = '\n National Project :: ghost server'
      consoleMessage += '\n +++++++++++++++++++++++++++++++++++++++++++++++++++++' 
      consoleMessage += '\n\n open your browser to http://localhost: '+ mongodbPort + '\n\n';
      consoleMessage += '+++++++++++++++++++++++++++++++++++++++++++++++++++++ \n\n'  
     
      sys.puts(consoleMessage, mongodbServer.name, mongodbServer.url);

    });

    mongodbServer.on('httpReady', function() {
      
      sys.puts("Mongo heard httpReady ");

    });
  
    // ROUTES

    mongodbServer.get('/', getDefaultMessage);

    mongodbServer.get('/campers', getData);
    mongodbServer.post('/campers', postData);
    mongodbServer.get('/messages', getData);
    mongodbServer.post('/messages', postData);

  };

ResitifyService.getDefaultMessage = function(req, res, next) {
  
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  var defaultMessage = "Default message - server connected!";
  defaultMessage += "\nbut perhaps not the database - try:";
  defaultMessage += "\nlocal: http://localhost:8000/messages";
  defaultMessage += "\nremote: http://nationalpark-mongodb.jit.su/messages";
         
  res.send(defaultMessage); 
};

  // This function is responsible for returning all entries for the Message model
ResitifyService.getData = function(req, res, next) {
    // Resitify currently has a bug which doesn't allow you to set default headers
    // This headers comply with CORS and allow us to mongodbServer our response to any origin
    //res.header("Access-Control-Allow-Origin", "*"); 
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, OPTIONS' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-File-Name, Content-Type, Cache-Control' );
    
    if( 'OPTIONS' == req.method ) {
      res.send( 203, 'OK' );
    }
    
    var url = req.url;

    sys.puts("!!  mongodbServer getData url  !!: " + url);

    switch(url) {
      case "/messages" :

        MessageMongooseModel.find().limit(20).sort('date', -1).execFind( function (arr,data) {
          sys.puts("data: " + data)
          res.send(data);
        });

      break;

      case "/feeds" :

        FeedMongooseModel.find().limit(20).sort('date', -1).execFind(function (arr,data) {
          //sys.puts("data: " + data)
          res.send(data);
        });
       
      break;

      case "/campers" :

        CamperMongooseModel.find().limit(20).sort('date', -1).execFind(function (arr,data) {
          //sys.puts("data: " + data)
          res.send(data);
        });
       
      break;
      default :

      break;
    }

    next();
  };

ResitifyService.postData = function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // Create a new message model, fill it up and save it to Mongodb

  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, OPTIONS' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-File-Name, Content-Type, Cache-Control' );
  
  if( 'OPTIONS' == req.method ) {
    res.send( 203, 'OK' );
  }

  var url = req.url;

  sys.puts("mongodbServer postData url: " + url);

  switch(url) {
    case "/messages" :

      sys.puts("mongodbServer postMessage: " + req.params.message);
      var message = new MessageMongooseModel(); 
  
      message.message = req.params.message;
      message.date = new Date() 
      
      message.save(function () {
        res.send(req.body);
      });

    break;

    case "/feeds" :

      sys.puts("mongodbServer postMessage: " + req.params.message);
      var feed = new FeedMongooseModel(); 
  
      feed.message = req.params.message;
      feed.date = new Date() 
      
      feed.save(function () {
        res.send(req.body);
      });

    break;

    case "/campers" :

      var camper = new CamperMongooseModel();
  
      sys.puts("mongodbServer camper name is: " + req.params.name);

      camper.name = req.params.name;
      camper.date = new Date() 
      camper.save(function () {
        res.send(req.body);
      });
     
    break;
    default :

    break;
  }
};

var respondTo = function(filePath, req, res, next){

  var timeStr = new Date().getTime(); 

  sys.puts("Mongo says hi / filePath: " + filePath + " : time: " + timeStr);
   //sys.puts("Mongo says hi / response: " + response);


   mongodbServer.emit('httpReady');

  //mongodbServer.get(filePath, getData);
  //mongodbServer.post(filePath, postData);
  //mongodbServer.get('/campers', getData);
  //mongodbServer.post('/campers', postData);

    getData( req, res, next );
}

module.exports = ResitifyService; 
/* 
 hacked together by headwinds | www.headwinds.net
 see README.md for a more detailed write up 

  ServiceManager can handle the following services and should be limited to one task:

  Unzip files and send them to the mongodb

*/

module.exports = function() {

  var sys = require('sys');
  var mongoose = require('mongoose/');
  var restify = require('restify');  
  var express = require('express');
  var fs = require('fs');
  var UnzipService = require('./unzip/unzipService');

  ////////////////////////////////////////////////////// UNZIP

  var testUnzip = function(){
    sys.puts("testing unzip");

    //var zip = new Zip("brandonflowers@gmail.com-takeout.zip");
    //unzipService.unzip("brandonflowers@gmail.com-takeout.zip");
    //sys.puts(unzipService);
    //var s = new Service();
    //s.test();

    var unzipService = new UnzipService();
    var path = "../data/"
    unzipService.unzip(path + "brandonflowers@gmail.com-takeout.zip");

  };

  return {
    test: function(){
      console.log("testing...")
    }
  }
  
};
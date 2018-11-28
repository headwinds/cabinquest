/* 
 hacked together by headwinds | www.headwinds.net
 see README.md for a more detailed write up 

 Send emails

*/

var sys = require('sys');
var mongoose = require('mongoose/');
var restify = require('restify');  
var express = require('express');
var fs = require('fs');
var emailService = require('./email/email');
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "brandonflowers@gmail.com",
        pass: "Griffin22"
    }
});

var EmailService = {}; 

EmailService.purpose = function() {
  console.log("EmailService: sends emails");
};

EmailService.sendEmail = function( emailObj ) {

	// setup e-mail data with unicode symbols
	var mailOptions = {
    	from: emailObj.userName + " <" + emailObj.userEmail + ">", // sender address
    	to: "brandonflowers@gmail.com", // list of receivers
    	subject: "New Nationalpark post", // Subject line
    	text: "Hello world", // plaintext body
    	html: "<b>Hello world</b>" // html body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});
}

module.exports = EmailService;
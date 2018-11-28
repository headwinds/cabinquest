var UnzipService = require('./app/services/unzip/UnzipService'); // has the deprecated xml2json node-expat!!!!! 
var FileUploadService = require('./app/services/fileupload/FileUploadService');
var fileupload = new FileUploadService();
var TakeoutMongoService = require('./app/services/takeout/TakeoutMongoService');

module.exports = function(logger, hive) {

  logger.log("server - file received");
  hive.log("hive message", "drone", 2);

  UnzipService.purpose();
  fileupload.purpose(); 

  //////////////////////////////////////////////////////  2. unzip the takeout and convert the subscription.xml to json 
  
  var name = data.name;
  var zipPath = data.file; 
  var cabinQuestUserId = data.cabinQuestUserId;

  var email = name.split("-takeout.zip")[0]; 

  //var email = zipPath.substr(0, takeoutIndex);

  //console.log("zipPath : " + zipPath);
  logger.log("name: " + name);
  logger.log("email: " + email);

  // make sure you listen to the event before it is called 
  UnzipService.dispatcher.on("unzipComplete", function(){
      logger.log("FileUploadService - upload complete");

      //UnzipService.report(); // should be 8 json files ready to send 

      //////////////////////////////////////////////////////  3. save the files in mongodb 

      // I may to create it first before attempting to insert it into a collection that doesn't exist!

      if ( UnzipService.files.length === 8 ) TakeoutMongoService.create( name, email, UnzipService.files, cabinQuestUserId, "bellwoods" );

  }); 

  UnzipService.unzip( zipPath, email );
}
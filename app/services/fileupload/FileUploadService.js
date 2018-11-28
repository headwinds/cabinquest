
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

var events = require("events");    

var FileUploadService = function() {
   events.EventEmitter.call(this);
};

util.inherits(FileUploadService, events.EventEmitter);

FileUploadService.prototype.purpose = function(){
  console.log("\n");
  console.log("-----------------------------------------------");
  console.log("FileUploadService: allows the users to find a file and upload it");
};

FileUploadService.prototype.uploadFile = function(req, res ){

  var form = new formidable.IncomingForm();
  form.keepExtensions = true;
 
  //var self = this; 
  console.log(form,'FileUploadService - uploadFile');

  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    console.log('FileUploadService - request is right');

    var files = req.files;
    
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.uploadDir = process.env.TMP || process.env.TMPDIR || process.env.TEMP || '/tmp' || process.cwd();

    form.parse(req, function(err, fields, files) {

      console.log('FileUploadService - parse');
      console.log('FileUploadService - fields: ' + fields);
      console.log('FileUploadService - files: ' + files);

      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));

    });

    form.on('progress', function(bytesReceived, bytesExpected) {
     console.log("FileUploadService - progress");
    });

    form.on('fileBegin', function(name, file) {
     console.log("FileUploadService - fileBegin");

    });

    form.on('error', function(err) {
      console.log("FileUploadService - error");

      res.send( { info: err } );

    });
    
    form.on('file', function(name, file) {

      console.log('FileUploadService - file - ok ready to send my response!', req.session);
      
      //self.file = file;
      var data = { name: name, file: file, cabinQuestUserId: req.session.cabinQuestUser._id  }
      // file complete
      req.session.fileupload.emit("FileUploadService_uploadComplete", data);


    });

    return;
  }

};

module.exports = FileUploadService;
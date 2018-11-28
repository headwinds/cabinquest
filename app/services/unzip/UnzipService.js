var AdmZip = require("adm-zip"); // https://github.com/cthackers
var xml2json = require("xml2json");
var events = require('events');

var UnzipService = {};

UnzipService.dispatcher = new events.EventEmitter();
UnzipService.files = []; 

UnzipService.unzip = function( file, email ) {
	console.log("UnzipService / unzip / file: " + file );

	var zip = new AdmZip(file.path); 

	var unzippedFiles = [];

	zip.getEntries().forEach(function(entry) {
	    var entryName = entry.entryName;

	    console.log("UnzipService / unzip / entryName: " + entryName);

	    var decompressedData = zip.readFile(entry); 
	    
	    if ( entryName === email + "-takeout/Reader/subscriptions.xml" ) {

	    	//console.log(zip.readAsText(entry));
	    	// decompressed buffer of the entry
	    	// convert the xml to json
	    	var subscriptionsJSON = xml2json.toJson(decompressedData); 

	    	//var subscriptionsJSONStr = JSON.stringify(subscriptionsJSON);
	    	//console.log("--------- subscriptions -------------");
	    	//console.log(subscriptionsJSONStr);

	    	//var strippedEscaped = subscriptionsJSONStr.replace(/\\"/g, ''); 

	    	//console.log("---------- stripped ------------");
	    	//console.log(strippedEscaped);

	    	unzippedFiles.push( { subscriptions: subscriptionsJSON });  

	    } else {
	    	
	    	switch( entryName ) {

		    	case email + "-takeout/Reader/followers.json" :	
		    		unzippedFiles.push( { followers: decompressedData } );  
		    		break; 
		    	case email + "-takeout/Reader/liked.json" :	
		    		unzippedFiles.push( { liked: decompressedData} );  
		    		break; 
		    	case email + "-takeout/Reader/notes.json" :	
		    		unzippedFiles.push( { notes: decompressedData} );  
		    		break; 
		    	case email + "-takeout/Reader/shared.json" :	
		    		unzippedFiles.push( { shared: decompressedData} ); 
		    		break; 	
		    	case email + "-takeout/Reader/shared-by-followers.json" :	
		    		unzippedFiles.push( { sharedByFollowers: decompressedData } );  
		    		break; 
		    	case email + "-takeout/Reader/starred.json" :	
		    		unzippedFiles.push( { starred: decompressedData} );  
		    		break; 	
		    	case email + "-takeout/Reader/following.json" :	
		    		unzippedFiles.push( { following: decompressedData} );  
		    		break; 						
	    	}

	    }

	 
	});

	// after the files have been process, then dispatch the complete event
	

	UnzipService.files = unzippedFiles;

	console.log(unzippedFiles.length, "UnzipService unzip finsihed - should be 8");

	if ( unzippedFiles.length === 8 ) UnzipService.dispatcher.emit('unzipComplete');

}; 

UnzipService.purpose = function() {
	console.log("\n");
	console.log("-----------------------------------------------");
	console.log("UnzipService / purpose: will zip and unzip files");
};

UnzipService.report = function() {
	console.log("\n");
	console.log("-----------------------------------------------");
	console.log("UnzipService / report: ");
	console.log(UnzipService.files, "UnzipService total files: " + UnzipService.files.length);
};

module.exports = UnzipService;
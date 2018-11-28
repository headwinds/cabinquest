angular.module('cabinquest.bellwoods')
.service('BellwoodsImageService', ['$http', '$q', function($http, $q) {

    //var log = (document.domain === "localhost") ? true : false; 
    var log = false;

    var defaultImageUrl = "img/bellwoods/tree/defaultTreeImage.jpg"; 
    //http://images2.fanpop.com/image/photos/9600000/Astro-Boy-astro-boy-9613180-720-1296.jpg";  

    this.loadImage = function( photoURLStr, successCallback, errorCallback, treeActorCallback ) {

        if (log) console.log("BellwoodsImageService loadImage");

          var loader = new PxLoader( { statusInterval: 2000 } ); 
          var pxImage = new PxLoaderImage(photoURLStr); 

          loader.add(pxImage); 

          // callback that runs every time an image loads 
          loader.addProgressListener(function(e) { 
           
              ////////console.log(e, "load progress");
          }); 

          loader.addCompletionListener(function(e) { 

             //console.log(pxImage, "load complete");
             var img = pxImage.img;

             photoNaturalHeight = img.naturalHeight;
             photoNaturalWidth = img.naturalWidth;

             var imgObj = { url: photoURLStr, width: photoNaturalWidth, height: photoNaturalHeight};

             successCallback(imgObj);
             treeActorCallback(imgObj);

          });
         
          loader.start();

    };

    this.loadImageSVG = function( btnDetailsObj, callback ){

      var onSVGLoadedHandler = function(data){

          if (log) console.log(data, "BellwoodsImageService - onSVGLoadedHandler - loadSVG"); 

          var btnDefs = data.select("defs");
          //btnGroup.append(defs);

          if (log) console.log(btnDetailsObj, "BellwoodsImageService - onSVGLoadedHandler - btnDetailsObj"); 
          if (log) console.log(data, "BellwoodsImageService - onSVGLoadedHandler - data"); 
                

          var btnGroup = data.select('#' + btnDetailsObj.name);

          if (log) console.log(btnGroup, "BellwoodsImageService - onSVGLoadedHandler - btnGroup"); 


          var scaleNum = 0.4; 

          var translateStr = 'translate(' + btnDetailsObj.x + ',' + btnDetailsObj.y + ') scale(' + scaleNum + ')';
          //var translateStr = 't' + btnDetailsObj.x + ' ' + btnDetailsObj.y + ' s' + scaleNum;

          btnGroup.attr("transform", translateStr);
          btnGroup.attr("opacity", btnDetailsObj.opacity);

          btnGroup.attr("pointer-events", btnDetailsObj.events);
          btnGroup.attr("cursor", btnDetailsObj.cursor);

          btnGroup.click( btnDetailsObj.action ) 

          callback(btnGroup, btnDefs)


      }; 

      Snap.load(btnDetailsObj.url, onSVGLoadedHandler) ;

    };

    this.loadImageInDiv = function( el, photoURLStr ) {

          // remove old photo
          el.find("img").remove();

          var loader = new PxLoader( { statusInterval: 2000 } ); 
          var pxImage = new PxLoaderImage(photoURLStr); 

          loader.add(pxImage); 

          // callback that runs every time an image loads 
          loader.addProgressListener(function(e) { 
           
              ////////console.log(e, "load progress");
          }); 

          loader.addCompletionListener(function(e) { 

             //console.log(pxImage, "load complete");
             var img = pxImage.img;

             photoNaturalHeight = img.naturalHeight;
             photoNaturalWidth = img.naturalWidth;

             $(img).css("width", "100%");
             $(img).css("id", "landscape");
             
             el.append(img);

             onLargePhotoLoadCompleteHanlder();

          });
         
          loader.start();
        
    };

    this.getVideoUrl = function(branchObj) {

    // then try the description

    if ( undefined !== branchObj.description ) {

      var contentStr = branchObj.description; 
      //
       var imageUrl = null; 
                 

      // default 
       var startIndexNum = contentStr.indexOf("http");
       var endIndexNum = contentStr.indexOf("jpg");

       // check for pngs
        if ( endIndexNum === -1 ) {
         
          endIndexNum = contentStr.indexOf("png");

          if (log) console.log("BellwoodsGameController - getImageUrl - no jpgs");

          // check for jpgs 
          if ( endIndexNum === -1 ) {
            if (log) console.log("BellwoodsGameController - getImageUrl - no pngs");

            endIndexNum = contentStr.indexOf("gif");

            // check for gifs
            if ( endIndexNum === -1 ) {
              if (log) console.log("BellwoodsGameController - getImageUrl - no gifs");

              return defaultImageUrl;
            } 

          }

        }

    } 
  };

  this.getImageUrl = function(branchObj) {

    // first try enclosures

    if ( undefined !== branchObj.enclosures ) {

      if ( branchObj.enclosures.length > 0 ) {

        /*
        if ( branchObj.enclosures[0].type.toLowerCase() === "image" ) {
           
           // flawed: there may not be 3 items and they may not have urls      

          return branchObj.enclosures[3].url; 
        }
        */

      } else { 

        if ( undefined !== branchObj.enclosures[0] && branchObj.enclosures[0].hasOwnProperty("type") && branchObj.enclosures[0].type.toLowerCase() === "image" ) {
          
          return branchObj.enclosures[0].url; 
        }
      }

    }

    // then try the description

    if ( undefined !== branchObj.description ) {

      var contentStr = branchObj.description; 
      //
      var imageUrl = null; 
              
      // default 
       var startIndexNum = contentStr.indexOf("http");
       var endIndexNum = contentStr.indexOf("jpg");

       // check for pngs
        if ( endIndexNum === -1 ) {
         
          endIndexNum = contentStr.indexOf("png");

          if (log) console.log("BellwoodsGameController - getImageUrl - no jpgs");

          // check for jpgs 
          if ( endIndexNum === -1 ) {
            if (log) console.log("BellwoodsGameController - getImageUrl - no pngs");

            endIndexNum = contentStr.indexOf("gif");

            // check for gifs
            if ( endIndexNum === -1 ) {
              if (log) console.log("BellwoodsGameController - getImageUrl - no gifs");

              return defaultImageUrl;
            } 

          }

        }

    } else {

    }

  
    if ( endIndexNum === -1 ) {
      if (log) console.log("BellwoodsGameController - getImageUrl - no images found returning default" );
      return defaultImageUrl;
    } 
    
    endIndexNum += 3; 

    if (log) console.log("BellwoodsGameController - getImageUrl - contentStr: " + contentStr);
    if (log) console.log("BellwoodsGameController - getImageUrl - endIndexNum: " + endIndexNum);

    // find the image tag first 
    var strEndWithImageTag = contentStr.substring(0, endIndexNum); 

    var reverse = function(str) {
      return str.split('').reverse().join('');
    }

    var revStr = reverse(strEndWithImageTag);
    var pttHIndex = revStr.indexOf("ptth");

    if (log) console.log("BellwoodsGameController - strEndWithImageTag: " + strEndWithImageTag);
    if (log) console.log("BellwoodsGameController - revStr: " + revStr);
    if (log) console.log("BellwoodsGameController - pttHIndex: " + pttHIndex);

    var firstImageHTTPIndex = endIndexNum - pttHIndex - "http".length;

    imageURL = strEndWithImageTag.substring(firstImageHTTPIndex, endIndexNum);
    if (log) console.log("BellwoodsGameController - getImageUrl: " + imageURL);

    //imageURL = contentStr.substring(startIndexNum, endIndexNum);

    if ( undefined === imageURL) imageURL = defaultImageUrl;
    
    return imageURL;

  };

   
}]);
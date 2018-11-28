

angular.module('porthole.services').factory('PortholeLocalStorageService', ['$rootScope', '$q', function($rootScope, $q) {
    
    var log = (document.domain === "localhost") ? true : false;  
    log = false;

    var name = 'PortholeLocalStorageService';
    var appName = "porthole"; 

    // local storage for now...perhaps try sql lite or indexdb in the future ?! move to mongodb longterm...

    var supportsLocalStorage = function() {
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    }

    var savePortholeState = function(currentUserModel, currentCabinModel, currentStoryModel, currentTreeModel, currentForestModel, manifest, bMuteMessage){

      bMuteMessage = typeof bMuteMessage !== "undefined" ? bMuteMessage : false;


      if (!supportsLocalStorage()) { 

        // display error that local storage isnt supported
        $rootScope.$broadcast("PortholeLocalStorageService:error", { messageHTML: "<p>Your browser needs to support local storage. Please upgrade to use this app</p>"});
        return false; 
      }


      if (log) console.log(arguments, "PortholeLocalStorageService savePortholeState ---> \n");

      // USER

      localStorage[ appName + ".user.lastVersionUpdateViewed" ] = manifest.version; 
      localStorage[ appName + ".user.bAcceptedFeatureUpdate" ] = String(currentUserModel.bAcceptedFeatureUpdate);
      localStorage[ appName + ".user.bShowViewed" ] = String(currentUserModel.bShowViewed);
      
      // USER PHOTO 

      localStorage[ appName + ".user.bUsePersonalPhoto" ] = String(currentUserModel.bUsePersonalPhoto);
      localStorage[ appName + ".user.personalPhoto.title" ] = String(currentUserModel.personalPhoto.title);
      localStorage[ appName + ".user.personalPhoto.description" ] = String(currentUserModel.personalPhoto.description);
      localStorage[ appName + ".user.personalPhoto.photoUrl" ] = String(currentUserModel.personalPhoto.photoUrl);
      localStorage[ appName + ".user.personalPhoto.webPageUrl" ] = String(currentUserModel.personalPhoto.webPageUrl);
      localStorage[ appName + ".user.personalPhoto.source" ] = String(currentUserModel.personalPhoto.source);

      // USER TREE 
      localStorage[ appName + ".user.bUsePersonalTree" ] = String(currentUserModel.bUsePersonalTree);
      localStorage[ appName + ".user.personalTree.title" ] = String(currentUserModel.personalTree.title);
      localStorage[ appName + ".user.personalTree.url" ] = String(currentUserModel.personalTree.url);
      
      localStorage[ appName + ".user.presentation" ] = String(currentUserModel.presentation);
      localStorage[ appName + ".user.transition" ] = String(currentUserModel.transition);
      localStorage[ appName + ".user.order" ] = String(currentUserModel.order);
      localStorage[ appName + ".user.bUsePinnedPhoto" ] = String(currentUserModel.bUsePinnedPhoto);
      localStorage[ appName + ".user.pinnedPhotoUrl" ] = String(currentUserModel.pinnedPhotoUrl);
      localStorage[ appName + ".user.currentTreeTitle" ] = String(currentUserModel.currentTreeTitle);


      if (log) console.debug("PortholeLocalStorageService - saved bUsePersonalPhoto: " + String( localStorage[ appName + ".user.bUsePersonalPhoto" ]) );
      if (log) console.debug("PortholeLocalStorageService - saved photoUrl: " + String( localStorage[ appName + ".user.personalPhoto.photoUrl" ]) );

      
      // STORY

      /*
      setCurrentStoryModel(); // this function can't be called here!
     
      localStorage[ appName + ".story.photoURL" ] = currentStoryModel.versionPhotoURL;
      localStorage[ appName + ".story.versionText" ] = currentStoryModel.verstionText;
      localStorage[ appName + ".story.timestampAsNumber" ] = currentStoryModel.timestampAsNumber;
      localStorage[ appName + ".story.versionID" ] = currentStoryModel.versionID;
      */

      // CABIN
      localStorage[ appName + ".cabin.title" ] = currentCabinModel.title;
      localStorage[ appName + ".cabin.description" ] = currentCabinModel.description;
      localStorage[ appName + ".cabin.location" ] = currentCabinModel.location;
      localStorage[ appName + ".cabin.bOwn" ] = String(currentCabinModel.bOwn);
      localStorage[ appName + ".cabin.bRent" ] = String(currentCabinModel.bRent);
      localStorage[ appName + ".cabin.bDream" ] = String(currentCabinModel.bDream);
      localStorage[ appName + ".cabin.cost" ] = currentCabinModel.cost;
      localStorage[ appName + ".cabin.kmFromHome" ] = currentCabinModel.kmFromHome;
      localStorage[ appName + ".cabin.photoURL" ] = currentCabinModel.photoURL;
      localStorage[ appName + ".cabin.daysPerYear" ] = currentCabinModel.daysPerYear;

      // TREE
      //localStorage[ appName + ".tree.lastBranchesTitleOrder" ] = JSON.stringify(currentTreeModel.lastBranchesTitleOrder) //String(currentTreeModel.lastBranchesTitleOrder);
      localStorage[ appName + ".tree.title" ] = currentTreeModel.title;

      // FOREST
      // localStorage[ appName + ".forest.branches" ] = JSON.stringify(currentForestModel.branches) //String(currentTreeModel.lastBranchesTitleOrder);
      
      var branchesStrings = []; 

      _.each( currentForestModel.branches, function(branch){
        //var branchStr = JSON.stringify( JSON.decycle(branch) );
        /*
        var lightBranch = {
          about : branch.about,
          feedLink : branch.feedLink,
          feedTitle : branch.feedTitle,
          index : branch.index,
          link : branch.link,
          photoLargeURL : branch.photoLargeURL,
          photoURL : branch.photoURL,
          publishedDate : branch.publishedDate,
          tags : String(branch.tags),
          text : branch.text,
          title : branch.title,
          useText : String(branch.useText),
          x: branch.x,
          y: branch.y,
        }
        */

        var branchStr = JSON.stringify( branch );
        branchesStrings.push(branchStr);
      });

      //if (log) console.log("PortholeLocalStorageService - branchesStrings: ", branchesStrings ); 

      //localStorage[ appName + ".forest.branches" ] = JSON.stringify(branchesStrings) // dont save the branches locally since it exceeds the storage limit easily
      
      localStorage[ appName + ".forest.trees" ] = JSON.stringify(currentForestModel.trees)
      localStorage[ appName + ".forest.date" ] = currentForestModel.date;

      if (!bMuteMessage) $rootScope.$broadcast("PortholeLocalStorageService:save:success", { messageHTML: "<p>Setting Saved</p>"});

      return true;

    }

    var resumePortholeState = function(currentUserModel, currentCabinModel, currentStoryModel, currentTreeModel, currentForestModel) {
       
       if (!supportsLocalStorage()) { 

          // display error that local storage isnt supported
          return false; 
        } 

        if (log) console.log("resumePortholeState -++- ");

        // USER

        currentUserModel.lastVersionUpdateViewed = localStorage[ appName + ".user.lastVersionUpdateViewed" ];
        currentUserModel.bAcceptedFeatureUpdate = ( String( localStorage[ appName + ".user.bAcceptedFeatureUpdate" ] ) === "true" ) ? true : false;
        currentUserModel.bUsePersonalPhoto = ( String( localStorage[ appName + ".user.bUsePersonalPhoto" ] ) === "true" ) ? true : false; 
        currentUserModel.bShowViewed = ( String( localStorage[ appName + ".user.bShowViewed" ] ) === "true" ) ? true : false; 
        
        // USER PHOTO

        var usePersonalPhotoStr = ( String( localStorage[ appName + ".user.bUsePersonalPhoto" ] ) !== "undefined" ) ? String( localStorage[ appName + ".user.bUsePersonalPhoto" ] ) : "false";
        currentUserModel.bUsePersonalPhoto = ( usePersonalPhotoStr === "true" ) ? true : false; 
        
        currentUserModel.personalPhoto.title = ( String ( localStorage[ appName + ".user.personalPhoto.title" ] ) !== "undefined") ? localStorage[ appName + ".user.personalPhoto.title" ] : ""; 
        currentUserModel.personalPhoto.description = ( String ( localStorage[ appName + ".user.personalPhoto.description" ] ) !== "undefined" ) ? localStorage[ appName + ".user.personalPhoto.description" ] : ""; 
        currentUserModel.personalPhoto.photoUrl = ( String ( localStorage[ appName + ".user.personalPhoto.photoUrl" ] ) !== "undefined" ) ? localStorage[ appName + ".user.personalPhoto.photoUrl" ] : ""; 
        currentUserModel.personalPhoto.webPageUrl = ( String ( localStorage[ appName + ".user.personalPhoto.webPageUrl" ] ) !== "undefined" ) ? localStorage[ appName + ".user.personalPhoto.webPageUrl" ] : ""; 
        currentUserModel.personalPhoto.source = ( String ( localStorage[ appName + ".user.personalPhoto.source" ] ) !== "undefined" ) ? localStorage[ appName + ".user.personalPhoto.source" ] : "";         

        // USER TREE 

        var usePersonalTreeStr = ( String( localStorage[ appName + ".user.bUsePersonalTree" ] ) !== "undefined" ) ? String( localStorage[ appName + ".user.bUsePersonalTree" ] ) : "false";
        currentUserModel.bUsePersonalTree = ( usePersonalTreeStr === "true" ) ? true : false; 
        
        currentUserModel.personalTree.title = ( String ( localStorage[ appName + ".user.personalTree.title" ] ) !== "undefined") ? localStorage[ appName + ".user.personalTree.title" ] : ""; 
        currentUserModel.personalTree.description = ( String ( localStorage[ appName + ".user.personalTree.url" ] ) !== "undefined" ) ? localStorage[ appName + ".user.personalTree.url" ] : ""; 

        currentUserModel.presentation = ( String ( localStorage[ appName + ".user.presentation" ] ) !== "undefined" ) ? localStorage[ appName + ".user.presentation" ] : "full";
        currentUserModel.transition = ( String ( localStorage[ appName + ".user.transition" ] ) !== "undefined") ? localStorage[ appName + ".user.transition" ] : "fade";
        currentUserModel.order = ( String( localStorage[ appName + ".user.order" ] ) !== "undefined") ? localStorage[ appName + ".user.order" ] : "shuffled";

        currentUserModel.bUsePinnedPhoto = ( String( localStorage[ appName + ".user.bUsePinnedPhoto" ] ) === "true" ) ? true : false; 
        currentUserModel.pinnedPhotoUrl = localStorage[ appName + ".user.pinnedPhotoUrl" ];


        if (log) console.debug("resume  currentUserModel.bUsePersonalPhoto " +  currentUserModel.bUsePersonalPhoto );
        if (log) console.debug("resume photoUrl " + String( localStorage[ appName + ".user.personalPhoto.photoUrl" ]) );
        
        //if (log) console.debug("resume bUsePersonalTree " + String( localStorage[ appName + ".user.bUsePersonalTree" ]) );

        // STORY 
        /*
        currentStoryModel.versionPhotoURL =  localStorage[ appName + ".story.photoURL" ];
        currentStoryModel.verstionText = localStorage[ appName + ".story.versionText" ];
        currentStoryModel.timestampAsNumber = parseInt(localStorage[ appName + ".story.timestampAsNumber" ] );
        currentStoryModel.versionID =  parseInt(localStorage[ appName + ".story.versionID" ] );
        */


        // CABIN 

        currentCabinModel.title = localStorage[ appName + ".cabin.title" ];
        currentCabinModel.description = localStorage[ appName + ".cabin.description" ];
        currentCabinModel.location = localStorage[ appName + ".cabin.location" ];
        currentCabinModel.bOwn = ( localStorage[ appName + ".cabin.bOwn" ] === "true" ) ? true : false; 
        currentCabinModel.bRent = ( localStorage[ appName + ".cabin.bRent" ] === "true" ) ? true : false; 
        currentCabinModel.bDream = ( localStorage[ appName + ".cabin.bDream" ] === "true" ) ? true : false; 
        currentCabinModel.cost = localStorage[ appName + ".cabin.cost" ];
        currentCabinModel.kmFromHome = localStorage[ appName + ".cabin.kmFromHome" ];
        currentCabinModel.photoURL = ( localStorage[ appName + ".cabin.photoURL" ] !== "undefined") ? localStorage[ appName + ".cabin.photoURL" ] : "unknown";
        currentCabinModel.daysPerYear = localStorage[ appName + ".cabin.daysPerYear" ];
        currentCabinModel.timestampAsNumber = parseInt(localStorage[ appName + ".cabin.timestampAsNumber" ] );

        // TREE
        //currentTreeModel.lastBranchesTitleOrder = (String(localStorage[ appName + ".tree.lastBranchesTitleOrder" ]) !== "undefined") ? JSON.parse(localStorage[ appName + ".tree.lastBranchesTitleOrder" ]) : [];
        currentTreeModel.title = localStorage[ appName + ".tree.title" ];

        if (log) console.log("resume bUsePersonalPhoto: " + localStorage[ appName + ".user.bUsePersonalPhoto" ] );
        if (log) console.log(currentUserModel, "currentUserModel" );
        if (log) console.log(currentTreeModel, "currentTreeModel" );

        // FOREST
       
        var branchesStrings = (String(localStorage[ appName + ".forest.branches" ]) !== "undefined") ? JSON.parse(localStorage[ appName + ".forest.branches" ]) : [];
        
        var branchesObjs = [];
        /* not saved locally
        _.each( branchesStrings, function(branchStr){
          var branchObj = JSON.parse(branchStr);
          branchesObjs.push(branchObj);
        });
        */
        currentForestModel.branches = branchesObjs;
        
        currentForestModel.trees = ( String(localStorage[ appName + ".forest.trees" ]) !== "undefined" ) ? JSON.parse(localStorage[ appName + ".forest.trees" ]) : ["cabinporn"];
        currentForestModel.date = ( String(localStorage[ appName + ".forest.date" ]) !== "undefined") ? new Date( Date.parse( localStorage[ appName + ".forest.date" ] ) ) : new Date();
    
        if ( currentForestModel.trees.length === 0  ) currentForestModel.trees = ["cabinporn"];
        
        if (log) console.log(currentUserModel, "resumePortholeState -++- currentUserModel");
        if (log) console.log(currentForestModel, "resumePortholeState -++- currentForestModel");

        //drawBoard();
        
        return true;
    }


  // PUBLIC
  return {

      savePortholeState : savePortholeState,
      resumePortholeState : resumePortholeState,

  } 

}]);
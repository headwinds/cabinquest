angular.module('porthole.services')
    .service('PortholeTreeService', ['$http', '$q', 'PortholeImageService', 'PortholeBranchModel', 'ConfigService',
      function($http, $q, PortholeImageService, PortholeBranchModel, ConfigService) {

    var log = ConfigService.getLog("PortholeTreeService"); //(document.domain === "localhost") ? true : false; 

    /////////////////////////// PRIVATE

    //var serverPath = ( document.domain === "localhost") ? 'http://localhost:3000' : 'http://cabinquest.jit.su';
    var serverPath = ConfigService.getServerPath();

    if (log) console.log("PortholeTreeService serverPath: " + serverPath);

    var validateContent = function( entry ){

      // first check for empty or undefined

      for ( var ix in entry ) {

        if ( String(entry[ix]) === "undefined" ) {
          String(entry[ix]) = "not found";
        }

      }

      return entry;

    }

    var getRSSBranch = function( branch, index ){

        //if (log) console.log("PortholeTreeService - getRSSBranch");

        // note: remember to clear cache to test this!
      
        var tags = [];
      
        //validate content

        branch = validateContent(branch);

        var images = PortholeImageService.getImagesFromDescription(branch);

        //if (log) console.log("PortholeTreeService - getRSSBranch - images: ", images);

        
        var resultImageObj = images[0];
        var photoUrl = ( resultImageObj.useText ) ? resultImageObj.defaultImageUrl : resultImageObj.imageUrl;

        // works for some...
        //if (log) console.log(branch, "PortholeTreeService - getRSSBranch")

        // replace 500 with 1280 - only works for CabinPorn
        var photoLargeUrl = ( photoUrl.indexOf("500") > -1 ) ? photoUrl.replace("500","1280") : photoUrl;

        var branchTitleUnescape = _.unescape(branch.title);
        var branchDescriptionUnescape = _.unescape(resultImageObj.text);

        /*

        author: nullcategories: Array[6]0: "cabin"1: "cabinporn"2: "colorado"3: "snow"4: "solar"5: "submission"length: 6__proto__: Array[0]comments: nulldate: "2015-02-10T18:14:16.000Z"description: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"enclosures: Array[0]guid: "http://cabinporn.com/post/110646415150"image: Objectlink: "http://cabinporn.com/post/110646415150"meta: Objectoriglink: nullpermalink: "http://cabinporn.com/post/110646415150"pubDate: "2015-02-10T18:14:16.000Z"pubdate: "2015-02-10T18:14:16.000Z"rss:@: Objectrss:category: Array[6]rss:description: Objectrss:guid: Objectrss:link: Objectrss:pubdate: Objectrss:title: Objectsource: Objectsummary: "<img src="http://41.media.tumblr.com/cf362224cafdd95b00cd92be8b71b890/tumblr_niofin4r6P1qzwmsso1_500.jpg"/><br/><br/><p>Artist-in-Residence cabin up Lefthand Canyon in <b>Ward, CO</b>. </p><p>Submitted by Sasha Arsic.</p>"title: "Artist-in-Residence cabin up Lefthand Canyon in Ward,..."
        var portholeBranch = { 
          tags: tags,
          photoURL: photoURL,
          photoLargeURL: photoLargeURL,
          link: branch.link,
          publishedDate: branch.publishedDate,
          title: branchTitleUnescape,
          feedLink: branch.meta.link,
          feedTitle: branch.meta.title,
          about: branchTitleUnescape,
          index: index,
          text: branchDescriptionUnescape,
          useText: resultImageObj.useText,
          x: 0,
          y: 0,
        }; 
        */
        // fix title
        if (branch.meta.title === "National Geographic Photo of the Day") branch.meta.title = "National Geographic";
        else if (branch.meta.title === "Latest Articles") branch.meta.title = "Dwell";
        else if (branch.meta.title === "Latest Items from TreeHugger") branch.meta.title = "TreeHugger";
        else if (branch.meta.title.trim() === "Polygon -  All") branch.meta.title = "Polygon";
        else if (branch.meta.title.trim() === "Behance Featured Projects") branch.meta.title = "Behance";
        else if (branch.meta.title.trim() === "Abduzeedo Design Inspiration - Design Inspiration & Tutorials") branch.meta.title = "Abduzeedo";
        else if (branch.meta.title.trim() === "Latest News - Pitchfork") branch.meta.title = "Pitchfork";
        else if (branch.meta.title.trim() === "rackk and ruin") branch.meta.title = "Rackk and Ruin";
        else if (branch.meta.title.trim() === "BOILER ROOM") branch.meta.title = "Boiler Room";
        else if (branch.meta.title.trim() === "CRISTIAN ORDONEZ") branch.meta.title = "Cristian Ordóñez";
        else if (branch.meta.title.trim() === "Get Outside — Medium") branch.meta.title = "Headlands";
        else if (branch.meta.title.trim() === "ArtStation - Latest Picks") branch.meta.title = "ArtStation";
        else if (branch.meta.title.trim() === "Y! Sports Blogs  - Yahoo Canada Sports") branch.meta.title = "Yahoo Sports";
        else if (branch.meta.title.trim() === "International Documentary Association") branch.meta.title = "Documentary";
        else if (branch.meta.title.trim() === "/Film") branch.meta.title = "Slash";
        else if (branch.meta.title.trim() === "Film Blog | The Guardian") branch.meta.title = "The Guardian";
        else if (branch.meta.title.trim() === "Crosscuts") branch.meta.title = "Walker";
        else if (branch.meta.title.trim() === "NBA.com: News") branch.meta.title = "NBA";
        else if (branch.meta.title.trim() === "CONTEMPORIST") branch.meta.title = "Contemporist";
        else if (branch.meta.title.trim() === "Sports - The Inquisitr News") branch.meta.title = "The Inquisitr";
        else if (branch.meta.title.trim() === "designboom | architecture & design magazine") branch.meta.title = "designboom";

       

        
        var portholeBranch = new PortholeBranchModel( branch.categories, 
                                                      photoUrl, 
                                                      photoLargeUrl,
                                                      images, 
                                                      branch.link,
                                                      branch.date,
                                                      branchTitleUnescape,
                                                      branch.meta.link,
                                                      branch.meta.title,
                                                      branchDescriptionUnescape,
                                                      index,
                                                      branchDescriptionUnescape,
                                                      resultImageObj.useText,
                                                      0,
                                                      0,
                                                      false,
                                                      false);

       

        return portholeBranch;
    }
   
    var createAllPortholeTrees = function(){

      // 1
      var cabinPornTreeObj = { _id : "1", xmlUrl : "http://cabinporn.com/rss", type : "rss", title : "Cabin Porn™", category: "architecture", origin: "porthole"  };
      // 2
      var coolHuntingTreeObj = { _id : "2", xmlUrl : "http://feeds.coolhunting.com/ch", type : "rss", title : "Cool Hunting", category: "design", origin: "porthole" };
      // 3
      //var swissmissTreeObj = { _id : "54cb9435d1796e940600008b", xmlUrl : "http://feeds2.feedburner.com/Swissmiss", type : "rss", title : "Swiss Miss" };
      var designmilkTreeObj = { _id : "3", xmlUrl : "http://feeds.feedburner.com/design-milk", type : "rss", title : "Design Milk", category: "design", origin: "porthole" };
      // 4
      var wiredTreeObj = { _id : "4", xmlUrl : "http://feeds.wired.com/wired/index", type : "rss", title : "WIRED", category: "technology", origin: "porthole" };
      // 5
      var boingboingTreeObj = { _id : "5", xmlUrl : "http://feeds.boingboing.net/boingboing/iBag", type : "rss", title : "Boing Boing", category: "technology", origin: "porthole" };
      // 6
      var kotakuTreeObj = { _id : "6", xmlUrl : "http://kotaku.com/rss/vip", type : "rss", title : "Kotaku", category: "gaming", origin: "porthole" };
      // 7
      var treeHuggerTreeObj = { _id : "7", xmlUrl : "http://www.treehugger.com/feeds/latest/", type : "rss", title : "Tree Hugger", category: "technology", origin: "porthole" };
      // 8
      var nationalGeographicTreeObj = { _id : "8", xmlUrl : "http://feeds.nationalgeographic.com/ng/photography/photo-of-the-day/", type : "rss", title : "National Geographic", category: "technology", origin: "porthole" };
      // 9
      var dwellTreeObj = { _id : "9", xmlUrl : "http://www.dwell.com/articles/feed", type : "rss", title : "Dwell", category: "architecture", origin: "porthole" };
      // 10 
      var colossalTreeObj = { _id : "10", xmlUrl : "http://feeds.feedburner.com/colossal", type : "rss", title : "Colossal", category: "design", origin: "porthole" };
      // 11
      var polygonTreeObj = { _id : "11", xmlUrl : "http://www.polygon.com/rss/index.xml", type : "rss", title : "Polygon", category: "gaming", origin: "porthole" };
      // 12
      var architizerTreeObj = { _id : "12", xmlUrl : "http://architizer.tumblr.com/rss", type : "rss", title : "Architizer", category: "architecture", origin: "porthole" };
      // 13
      var harpersbazaarTreeObj = { _id : "13", xmlUrl : "http://harpersbazaar.tumblr.com/rss", type : "rss", title : "Harpers Bazaar", category: "fashion", origin: "porthole" };
      // 14 
      var wTreeObj = { _id : "14", xmlUrl : "http://w.tumblr.com/rss", type : "rss", title : "W", category: "fashion", origin: "porthole" };
      // 15
      var booooooomTreeObj = { _id : "15", xmlUrl : "http://www.booooooom.com/feed/", type : "rss", title : "BOOOOOOOM!", category: "art", origin: "porthole" };
      // 16 
      var abduzeedoTreeObj = { _id : "16", xmlUrl : "http://feeds.feedburner.com/abduzeedo", type : "rss", title : "Abduzeedo", category: "design", origin: "porthole" };
      // 17
      var behanceTreeObj = { _id : "17", xmlUrl : "https://www.behance.net/feeds/projects", type : "rss", title : "Behance", category: "art", origin: "porthole" };
      // 18
      var bleacherReportTreeObj = { _id : "18", xmlUrl : "http://bleacherreport.tumblr.com/rss", type : "rss", title : "Bleacher Report", category: "sports", origin: "porthole" };
      // 19
      var gamespotTreeObj = { _id : "19", xmlUrl : "http://www.gamespot.com/feeds/mashup/", type : "rss", title : "GameSpot", category: "gaming", origin: "porthole" };
      // 20
      var twitchfilmTreeObj = { _id : "20", xmlUrl : "http://feeds.twitchfilm.com/TwitchEverything", type : "rss", title : "TwitchFilm", category: "film", origin: "porthole" };
      // 21
      var mmTreeObj = { _id : "21", xmlUrl : "http://www.50mm.jp/?format=rss", type : "rss", title : "50mm", category: "photography", origin: "porthole" };
      // 22
      var stuckTreeObj = { _id : "22", xmlUrl : "http://www.stuckincustoms.com/feed/", type : "rss", title : "Stuck in Customs", category: "photography", origin: "porthole" };
      // 23
      var nmeTreeObj = { _id : "23", xmlUrl : "http://www.nme.com/rss/reviews", type : "rss", title : "Nme", category: "music", origin: "porthole" };
      // 24
      var pitchforkTreeObj = { _id : "24", xmlUrl : "http://pitchfork.com/rss/news/", type : "rss", title : "Pitchfork", category: "music", origin: "porthole" };
      // 25 
      var boilerroomTreeObj = { _id : "25", xmlUrl : "http://boilerroom.tv/feed/", type : "rss", title : "Boiler Room", category: "music", origin: "porthole" };
      // 26
      var ruinTreeObj = { _id : "26", xmlUrl : "http://feeds.feedburner.com/RackkAndRuin", type : "rss", title : "Rackk and Ruin", category: "fashion", origin: "porthole" };
      // 27
      var paperholmTreeObj = { _id : "27", xmlUrl : "http://www.paperholm.com/rss", type : "rss", title : "Paperholm", category: "art", origin: "porthole" };
      // 28
      //var fraserTreeObj = { _id : "28", xmlUrl : "https://fraserflowers.wordpress.com/feed/", type : "rss", title : "fraser", category: "photography", origin: "porthole" }; 
      // 29 
      var cristianTreeObj = { _id : "29", xmlUrl : "http://cristianordonez.tumblr.com/rss/", type : "rss", title : "Cristian Ordóñez", category: "photography", origin: "porthole" }; 
      // 30
      var headlandsTreeObj = { _id : "30", xmlUrl : "https://medium.com/feed/get-outside/", type : "rss", title : "headlands", category: "photography", origin: "porthole" }; 
      // 31
      var artnationTreeObj = { _id : "31", xmlUrl : "https://artstation.com/artwork.rss", type : "rss", title : "ArtStation", category: "art", origin: "porthole" }; 
      // 32
      var nycscoutTreeObj = { _id : "32", xmlUrl : "http://feeds.feedburner.com/scoutingny", type : "rss", title : "Scouting NY", category: "photography", origin: "porthole" }; 
      // 33
      var taviTreeObj = { _id : "33", xmlUrl : "http://www.thestylerookie.com/feeds/posts/default", type : "rss", title : "tavi gevinson", category: "fashion", origin: "porthole" }; 
      // 34
      var repellerTreeObj = { _id : "34", xmlUrl : "http://www.manrepeller.com/feed", type : "rss", title : "Man Repeller", category: "fashion", origin: "porthole" }; 
      // 35
      var slashFilmTreeObj = { _id : "35", xmlUrl : "http://www.slashfilm.com/feed/", type : "rss", title : "Slash", category: "film", origin: "porthole" };
      // 36
      var guardianFilmTreeObj = { _id : "36", xmlUrl : "http://www.theguardian.com/film/filmblog/rss", type : "rss", title : "Guardian Film", category: "film", origin: "porthole" }; 
      // 37
      var walkerFilmTreeObj = { _id : "37", xmlUrl : "http://blogs.walkerart.org/filmvideo/feed/", type : "rss", title : "Walker Film", category: "film", origin: "porthole" }; 
      // 38
      var docFilmTreeObj = { _id : "38", xmlUrl : "http://www.documentary.org/rss.xml", type : "rss", title : "Documentary", category: "film", origin: "porthole" }; 
      // 39
      //var yahoosportsTreeObj = { _id : "39", xmlUrl : "https://ca.sports.yahoo.com/blogs/rss.xml", type : "rss", title : "Yahoo Sports", category: "sports", origin: "porthole" }; 
      // 40
      var venturebeatTreeObj = { _id : "40", xmlUrl : "http://venturebeat.com/feed/", type : "rss", title : "Venture Beat", category: "technology", origin: "porthole" }; 
      // 41
      var killscreenTreeObj = { _id : "41", xmlUrl : "https://killscreen.com/feed/", type : "rss", title : "Killscreen", category: "gaming", origin: "porthole" };
      // 42
      var inquisitrTreeObj = { _id : "42", xmlUrl : "http://feeds.inquisitr.com/TheInquisitrSport", type : "rss", title : "The Inquisitr Sport", category: "sports", origin: "porthole" };
      // 43 
      var sbnationTreeObj = { _id : "43", xmlUrl : "http://www.sbnation.com/rss/current", type : "rss", title : "SB Nation", category: "sports", origin: "porthole" };
      // 44
      var dezeenTreeObj = { _id : "44", xmlUrl : "http://www.dezeen.com/feed/", type : "rss", title : "Dezeen", category: "architecture", origin: "porthole" };
      // 45
      var contemporistTreeObj = { _id : "45", xmlUrl : "http://feeds.feedburner.com/contemporist", type : "rss", title : "Contemporist", category: "architecture", origin: "porthole" };
      // 46
      var eikongraphiaTreeObj = { _id : "46", xmlUrl : "http://eikongraphia.com/?feed=rss2", type : "rss", title : "Eikongraphia", category: "photography", origin: "porthole" };
      // 47 
      var unhappyTreeObj = { _id : "47", xmlUrl : "http://unhappyhipsters.com/rss", type : "rss", title : "Unhappy Hipsters", category: "design", origin: "porthole" };
      // 48 
      var architectureTreeObj = { _id : "48", xmlUrl : "http://architectureblog.tumblr.com/rss", type : "rss", title : "The Architecture Blog", category: "architecture", origin: "porthole" };
      // 49
      var designboomTreeObj = { _id : "49", xmlUrl : "http://www.designboom.com/feed/", type : "rss", title : "Design Boom", category: "design", origin: "porthole" };
      // 50
      var nautilusTreeObj = { _id : "50", xmlUrl : "http://nautil.us/rss/all", type : "rss", title : "Nautilus", category: "technology", origin: "porthole" };
      // 51
      


      /*
      
      http://www.slashfilm.com/feed/

      http://www.theguardian.com/film/filmblog/rss

      http://blogs.walkerart.org/filmvideo/feed/

      http://www.documentary.org/rss.xml

      */


      if (log) console.log("PortholeTreeService - createPortholeTrees");

      var allPortholeTrees = {
        "cabinporn" : cabinPornTreeObj,
        "treehugger" : treeHuggerTreeObj,
        "wired" : wiredTreeObj,
        "coolhunting" : coolHuntingTreeObj,
        "kotaku" : kotakuTreeObj,
        "nationalgeographic" : nationalGeographicTreeObj,
        "colossal" : colossalTreeObj,
        "dwell" : dwellTreeObj,
        "designmilk" : designmilkTreeObj,
        "boingboing" : boingboingTreeObj,
        "polygon" : polygonTreeObj,
        "architizer" : architizerTreeObj,
        "harpersbazaar" : harpersbazaarTreeObj,
        "w" : wTreeObj,
        "booooooom" : booooooomTreeObj,
        "abduzeedo" : abduzeedoTreeObj,
        "behance" : behanceTreeObj,            
        "bleacherreport" : bleacherReportTreeObj,  
        "gamespot" : gamespotTreeObj,
        "twitchfilm" : twitchfilmTreeObj,
        "mm" : mmTreeObj,
        "stuck" : stuckTreeObj,
        "nme" : nmeTreeObj,
        "pitchfork" : pitchforkTreeObj,
        "boilerroom" : boilerroomTreeObj,
        "ruin" : ruinTreeObj,
        "paperholm" : paperholmTreeObj,
        //"fraser" : fraserTreeObj,
        "cristian" : cristianTreeObj,
        "headlands" : headlandsTreeObj,
        "artnation" : artnationTreeObj,
        "nycscout" : nycscoutTreeObj,
        "tavi" : taviTreeObj,
        "repeller" : repellerTreeObj,
        //"yahoosports" : yahoosportsTreeObj,
        "slash" : slashFilmTreeObj,
        "guardian" : guardianFilmTreeObj,
        "walker" : walkerFilmTreeObj,
        "doc" : docFilmTreeObj,
        "venturebeat" : venturebeatTreeObj,
        "killscreen" : killscreenTreeObj,
        "inquisitr" : inquisitrTreeObj,
        "sbnation" : sbnationTreeObj,
        "dezeen" :  dezeenTreeObj,
        "contemporist" : contemporistTreeObj,
        "eikongraphia" : eikongraphiaTreeObj, 
        "unhappy" : unhappyTreeObj, 
        "architecture" : architectureTreeObj,
        "designboom":designboomTreeObj,
        "nautilus":nautilusTreeObj,
      };



     return allPortholeTrees;
   }


   this.getAllPortholeTrees = function(){

    return allPortholeTrees = createAllPortholeTrees(); 

   }
   


    /////////////////////////// PUBLIC
        
    this.loadTree = function( treeObj ){

        if (log) console.log(treeObj, "PortholeTreeService - loadTree");
        var serviceRoute = serverPath + "/bellwoods/trees/load";

        self.data = {
            
            loadTreePromise: $http.get(devPath, {
                                params: serviceRoute
                            })
        };

        return self.data;
    };

    this.loadTreeById = function( treeObj ){

        if (log) console.log("PortholeTreeService - loadTreeById - treeObj", treeObj);
        if (log) console.log("PortholeTreeService - loadTreeById - serverPath: " + serverPath);
        
        var serviceRoute = serverPath + "/bellwoods/trees/getTreeByRSSUrl/" + treeObj._id;

        self.data = {
            
            loadTreePromise: $http.get(serviceRoute)
        };

        return self.data;
    };

    this.getTreeByRSSUrl = function( treeObj ){

        var serviceRoute = serverPath + "/bellwoods/trees/getTreeByRSSUrl/:xmlUrl";
        console.log("PortholeTreeService - loadTree - serviceRoute: " + serviceRoute);

        self.data = {
            
            loadTreePromise: $http.get(serviceRoute, {
                                params: { xmlUrl: treeObj.xmlUrl }
                            })
        };

        return self.data;
    };

    this.parse = function( result, type ){

        var portholeBranches = [];

        _.each(result.branches, function(branch, index) {

            switch(type){

                case "cool" :
                    portholeBranch = getCoolBranch(branch, index);
                    break;

                case "rss" :
                    portholeBranch = getRSSBranch(branch, index);
                    break;

                default :
                    portholeBranch = getRSSBranch(branch, index);
                    break;
            }

            portholeBranches.push(portholeBranch);

        });

        return portholeBranches;

        
    };

    this.getForestFeed = function(trees, bSignedIn) {

          bSignedIn = ( typeof bSignedIn !== "undefined" ) ? bSignedIn : false;

          var treePromises = [];  

          var parent = this; 
          var currentTree;

          if (bSignedIn) {

            _.each( trees, function(tree){ 

              var treePromise = parent.getTreeByRSSUrl( tree ).loadTreePromise;
              treePromises.push(treePromise);

            });


          } else {

            var allPortholeTrees = createAllPortholeTrees();
          
            _.each( trees, function(treeValue){ 

              if (log) console.log("PortholeTreeService - getForestFeed - not signed in");

              //

              currentTree = allPortholeTrees[treeValue]; 

              if ( undefined !== currentTree) {
                var treePromise = parent.getTreeByRSSUrl( currentTree ).loadTreePromise;
                treePromises.push(treePromise);
              }

            });

        }

      return $q.all(treePromises);
                    
    }

    this.getForestFeedByTreeModels = function( treeModels ) {

          var treePromises = [];  

          var parent = this; 
          
          _.each( treeModels, function( treeModel ){ 

              var treePromise = parent.getTreeByRSSUrl( treeModel ).loadTreePromise;
              treePromises.push(treePromise);
            
        })

      return $q.all(treePromises);
                    
    }

    
}]);
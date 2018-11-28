


angular.module('porthole.controllers').controller('PortholeMediaController',
    ['$rootScope',
        '$scope',
        '$location',
        '$timeout',
        'PortholeTreeService',
        'ConfigService',
        function ($rootScope,
                  $scope,
                  $location,
                  $timeout,
                  PortholeTreeService,
                  ConfigService) {


            var log = ConfigService.getLog("PortholeMediaController");

            var curPhotoIndex = 0;
            var offY = 26; // height of minimized bar

            var creditsContainerHeight = 150;
            var $credits = $("#creditsContainer");
            var curCreditsY = 0;
            var creditsUp = false;

            var curBranch;

            // native is always mobile
            // while web could be desktop or mobile

            $scope.bMobile = ( ConfigService.isNative() ) ? true : ( ConfigService.isMobile() ) ? true : false;

            $scope.bPlayPause = true;
            $scope.bFacebook = true;
            $scope.bMap = true;

            $scope.bShowViewed = true;
            $scope.bSignedIn = false;

            $scope.forest = {
                cabinporn: true,
                coolhunting: false,
                wired: false,
                kotaku: false,
                treehugger: false,
            }

            $scope.selectedImageObj = null;

            $scope.credits = {state: "DOWN"};

            $scope.pinned = "NO";
            $scope.pinnedIndex = "";
            $scope.branchIndex = 1;

            $scope.cluster = "NO";

            $scope.selectedFeeds = ["cabinporn"];

            $scope.personal = "yes";
            $scope.presentation = "full";
            $scope.transition = "instant";
            $scope.order = "shuffled";

            $scope.imageBtns = [];

            var cabinquestUserModel = null;

            var currentUserModel = null;
            var currentForestModel = null;

            $scope.state = {
                label: "dragEnd",
                size: "full",
                mode: "porthole"
            }

            $scope.branchesTotal = 0; // until it loads to look nice

            $scope.disabledAll = false;
            $scope.totalSubImages = 1;
            var imagesIndex = 0;
            $scope.displayImagesIndex = 1;

            $scope.init = function(){

                if (log) console.log($scope, "PortholeMediaController - init" );

                setupEvents();
                //setupCreditsBtn();


            };

            var setupEvents = function(){

                $scope.$on("PortholeViewController:toosmall:up:click", function(event,data){

                    onClickUpHandler();

                });

                $scope.$on("cluster:select", function(event, data){

                    $timeout( function(){
                        $scope.cluster = "NO";
                    });

                });

                $scope.$on("PortholeViewController:space:show", function(event, data){

                    if (log) console.log("PortholeMediaController - heard space");

                    $scope.disable();

                    $scope.state.mode = "space";

                    if (log) console.log("PortholeMediaController - heard space and scope is now: ",  $scope);

                });

                $scope.$on("PortholeViewController:space:hide", function(event, data){
                    $scope.enable();

                    $scope.state.mode = "porthole";
                });

                $scope.$on("PortholeViewController:enable", function(event, data){

                    if (log) console.log("PortholeMediaController - enable");

                    if ($scope.state.mode === "porthole") $scope.enable();

                });

                $scope.$on("PortholeViewController:disable", function(event, data){

                    if (log) console.log("PortholeMediaController - disable");

                    if ($scope.state.mode === "porthole") $scope.disable();

                });

                $rootScope.$on("PortholeViewController:localStorage:resumed", function(event, data){

                    currentUserModel = data.currentUserModel;
                    currentForestModel = data.currentForestModel;

                    $timeout( function(){
                        $scope.branchesTotal = (undefined !== data.currentForestModel ) ? data.currentForestModel.branches.length : 20;
                    });

                    if (log) console.log(data, "PortholeMediaController - heard resume - $scope.branchesTotal: " + $scope.branchesTotal);

                    // bShowViewed
                    $timeout( function(){
                        $scope.bShowViewed = currentUserModel.bShowViewed;
                    });



                    if ( null !== currentUserModel && currentUserModel.bUsePinnedPhoto ) {

                        var pinnedPhotoUrl = currentUserModel.pinnedPhotoUrl;
                        var branchObj = _.findWhere( currentForestModel.branches, {  photoUrl: pinnedPhotoUrl }  );

                        if ( undefined !== branchObj ) {

                            $scope.pinnedIndex = branchObj.index + 1;
                            $scope.pinned = "YES";

                            if (log) console.log(branchObj, "PortholeMediaController - gold - branches update");

                            var pinnedBranchIndex = _.indexOf(data.portholeBranches, branchObj) ;

                            curPhotoIndex = pinnedBranchIndex;

                            //$timeout( function(){
                            $scope.pinnedIndex = pinnedBranchIndex + 1;
                            //});

                            //$rootScope.$broadcast("PortholeMediaController:pin:loadPinned", { branchObj: branchObj, pinnedBranchIndex: pinnedBranchIndex } );

                        } else {

                            //$scope.pinnedIndex = branchObj.index + 1;
                            $scope.pinned = "NO";
                            currentUserModel.bUsePinnedPhoto = false;


                            if (log) console.log(branchObj, "PortholeMediaController - error on pin - branch is not define!");

                        }

                    }


                });

                $scope.$on("PortholeAppViewController:keyboard:left", function(event,data){

                    if (log) console.log("PortholeMediaController - heard left click - $scope.state.mode: ", $scope.state.mode);

                    if ($scope.state.mode === "porthole" ) $scope.leftClick();

                });

                $scope.$on("PortholeAppViewController:keyboard:right", function(event,data){

                    if (log) console.log("PortholeMediaController - heard right click - $scope.state.mode: ", $scope.state.mode);

                    if ($scope.state.mode === "porthole" ) $scope.rightClick();

                });

                $scope.$on("PortholeAppViewController:keyboard:up", function(event,data){

                    if (log) console.log("PortholeMediaController - heard up click");

                    $scope.upClick();

                });

                $scope.$on("PortholeAppViewController:keyboard:down", function(event,data){

                    if (log) console.log("PortholeMediaController - heard down click");

                    $scope.downClick();

                });

                $scope.$on("PortholeViewController:unpin", function(event,data){

                    setUnPinned();

                });

                $scope.$on("PortholeViewController:index:change", function(event,data){

                    updateCreditsIndex( data.index );
                    //updateImageOptions( branchObj );

                });

                $scope.$on("PortholeViewController:image:options", function(event,data){


                    updateImageOptions( data.branchObj );

                });


                $scope.$on("PortholeViewController:forest:loaded", function(event,data) {

                    $scope.currentForestModel = data.currentForestModel;

                    $timeout( function(){

                        $scope.branchesTotal = data.currentForestModel.branches.length;

                        if (log) console.log("PortholeMediaController - heard forest loaded - data",  data);

                    });


                });

                $scope.$on("PortholeViewController:branches:update", function(event,data) {

                    $timeout( function(){

                        if (undefined !== data.branches ) $scope.branchesTotal = data.branches.length;

                        if (log) console.log(data, "PortholeMediaController - heard branches update $scope.branchesTotal: " + $scope.branchesTotal);

                        // cur index can't be greater than total

                    });


                });

                $scope.$on("PortholeViewController:branchIndex:update", function(event, data){

                    if (log) console.log(data, "PortholeMediaController - heard branchIndex update data: ", data);
                    if (log) console.log(data, "PortholeMediaController - heard branchIndex update data curPhotoIndex: " + curPhotoIndex);

                    //if (data.bShowViewed) $scope.branchIndex = data.branchIndex;
                    //else $scope.branchIndex = data.branchIndex - 1;

                    $scope.branchIndex = data.branchIndex; // displayed already increased by 1
                    curPhotoIndex = data.branchIndex - 1;


                    if ( $scope.bSignedIn ) {
                        updateBranchesShowing();
                    }

                    //if (!data.bShowViewed) $scope.branchesTotal--;

                    $scope.selectedImageObj = null;


                });

                $scope.$on("CabinQuestViewController:user", function(event,data){

                    if (log) console.log("PortholeMediaController - heard user response - data: ", data);

                    if (data.model !== null) {

                        $scope.bSignedIn = true;
                        //cabinquestUserModel = data.model;

                        currentUserModel = data.model;

                        setupUserBySettings();
                    }

                });

                //$rootScope.$broadcast("CabinquestUser:client:request");
                $rootScope.$broadcast("PortholeMediaController:ready");

                if (log) console.log("PortholeMediaController - setupEvents - rootScope: ", $rootScope);

            }

            var startPostTransition = function(){
                $scope.disabledAll = true;
            }

            var endPostTransition = function(){
                $scope.disabledAll = false;
            }

            var setupUserBySettings = function(){

                if (log) console.log("PortholeMediaController - setupUserBySettings");

                if (null !== currentUserModel ) {

                    if ( currentUserModel.bUsePinnedPhoto ) {

                        if (log) console.log("PortholeViewController - setupUserBySettings - display pinned");

                        var pinnedPhotoUrl = currentUserModel.pinnedPhotoUrl;

                        if ( pinnedPhotoUrl !== "undefined" ) {
                            setPinned( pinnedPhotoUrl );
                        } else {
                            setUnPinned();
                        }
                    }

                    // SIGNED IN SETTINGS

                    if ($scope.bSignedIn ) {

                        if ( currentUserModel.bShowViewed ) setShowViewed();
                        else setHideViewed();

                    }

                }
            }

            ////////////////////////////////////////////////////////////////////////// VIEWED

            var updateBranchesShowing = function(){
                // currentForestModel.branches
            }

            var setShowViewed = function(){

                $scope.bShowViewed = true;
            }

            var setHideViewed = function(){

                $scope.bShowViewed = false;
            }

            ////////////////////////////////////////////////////////////////////////// PINNED

            var setPinned = function( pinnedPhotoUrl ){

                if (log) console.log("setPinned pinnedPhotoUrl" + pinnedPhotoUrl);

                $scope.pinned = "YES";

                // find indexOf_

                var branchesUrls = [];

                _.each(portholeBranches, function(branch) {
                    branchesUrls.push(branch.photoUrl)
                });

                var pinnedPhotoIndex = _.indexOf( branchesUrls, pinnedPhotoUrl );

                if (log) console.log(" PortholeViewController - setPinned pinnedPhotoIndex: " + pinnedPhotoIndex);

                var displayNum =  pinnedPhotoIndex + 1; //currentUserModel.pinnedPhotoIndex + 1;

                $scope.pinnedIndex = displayNum;

                $scope.branchIndex = displayNum;

            }

            var setUnPinned = function(){

                $scope.pinned = "NO";

                //$("#pinLabel").text( "PIN" );
                currentUserModel.bUsePinnedPhoto = false;

                $scope.pinnedIndex = "";

            }

            var updateCreditsIndex = function( indexNum ){

                $scope.branchIndex = indexNum + 1;

            }

            var emptyImages = function(){

            }

            var removeImageOptions = function(){

                var target = $("#rowImageContainer");

                var onStart = function(){
                    target.css( "z-index", "-1");
                }

                var onComplete = function(){
                    target.css({"overflow":"hidden"});
                }

                TweenMax.to(target, 0.75, {css: { "top": "-5px"}, onStart: onStart, onComplete: onComplete } );


                // $("#rowImageContainer").empty();

            }

            var updateImageOptions = function(branchObj){

                if (log) console.log("PortholeMediaController - updateImageOptions: ", branchObj);

                $timeout( function(){

                    //$scope.totalSubImages = 1;
                    //var imagesIndex = 0;
                    //$scope.displayImagesIndex = 1;

                    curBranch = branchObj;
                    $scope.totalSubImages = curBranch.images.length;

                    if ( $scope.totalSubImages > 1 ) {

                        var target = $("#rowImageContainer");

                        var onStart = function(){
                            target.css( "z-index", "-1");
                            target.css({"overflow":"visible"});
                        }

                        var onComplete = function(){
                            target.css( "z-index", "2");
                        }

                        TweenMax.to(target, 0.75, {css: { "top": "28px"}, onStart: onStart, onComplete: onComplete } );

                    }

                });

            }

            $scope.enable = function(){

                $("#mediaControlBtnContainer button").css({"cursor":"pointer", "opacity": 1});

                $timeout( function(){
                    $scope.disabledAll = false;
                });
            }

            $scope.disable = function(){

                $("#mediaControlBtnContainer button").css({"cursor":"default", "opacity": 0.5});

                $timeout( function(){
                    $scope.disabledAll = true;
                });
            }

            $scope.updateImage = function( imageObj ){

                if (log) console.log("PortholeMediaController - updateImage: ", imageObj);

                // what index is this image?
                var imgIndex;
                _.each( curBranch.images, function(image, index) {

                    if ( image === imageObj ) imgIndex = index;

                })

                $rootScope.$broadcast("PortholeMediaController:largephoto:update", {imageObj: imageObj, imgIndex: imgIndex});


            }

            var animateCreditsUp = function( delayMilliseconds ){

                delayMilliseconds = ( typeof delayMilliseconds !== "undefined" ) ? delayMilliseconds : 0;

                if (log) console.log("PortholeMediaController - animateCreditsUp");

                var windowHeight = $(window).height();
                var padding = 0;

                var offscreenY = windowHeight - offY;
                var onScreenY =  windowHeight - (creditsContainerHeight + padding);

                var delaySeconds = delayMilliseconds / 1000;

                var tl = new TimelineMax({delay: delaySeconds, repeat:0});
                tl.to( $credits, 1, {top:onScreenY} );
                tl.play();

                curCreditsY = onScreenY;
                $scope.credits.state = true;


            }

            var animateCreditsDown = function( delayMilliseconds ){

                delayMilliseconds = ( typeof delayMilliseconds !== "undefined" ) ? delayMilliseconds : 0;

                var windowHeight = $(window).height();
                var padding = 20;

                var offscreenY = windowHeight - offY;
                var creditsContainerHeight = 120 ;

                var delaySeconds = delayMilliseconds / 1000;

                var tl = new TimelineMax({delay:delaySeconds, repeat:0});
                tl.to( $credits, 1, {top:offscreenY} );
                tl.play();

                curCreditsY = offscreenY;

                creditsUp = false;

            }

            var handleEnterNum = function(){

                // restrict number from 1 to $scope.branchesTotal;
                if (log) console.log("PortholeMediaController - handleEnterNum $scope.branchIndex 2: " + $scope.branchIndex);

                var type = typeof $scope.branchIndex;

                if (log) console.log("PortholeMediaController - handleEnterNum type: " + type);

                if ( type === "undefined" ) {
                    $scope.branchIndex = 1;
                    if (log) console.log("PortholeMediaController - handleEnterNum ERROR undefined ");
                    return;
                } else {

                }

                if ( $scope.branchIndex <= 1 ) $scope.branchIndex = 1;

                if ( $scope.branchIndex >= $scope.branchesTotal ) $scope.branchIndex = $scope.branchesTotal;

                var enteredIndex = $scope.branchIndex - 1;

                //if ( enteredIndex > 19 ) enteredIndex = 19;

                curPhotoIndex = enteredIndex;

                if (log) console.log("PortholeMediaController - handleEnterNum curPhotoIndex: " + curPhotoIndex)

                $rootScope.$broadcast("PortholeMediaController:enteredIndex:change", { enteredIndex: enteredIndex });

            }

            /////////////////////////////////////////////////////////////////////// INTERACTIONS

            $scope.emailShareClick = function(){
                if (log) console.log("PortholeMediaController - email - click");
                $rootScope.$broadcast("PortholeMediaController:email:click");
            }

            $scope.dragClick = function(){

                if ( $scope.state.label === "dragStart") {
                    $rootScope.$broadcast("PortholeMediaController:drag:end");
                    $scope.state.label = "dragEnd";
                    return;
                }

                $scope.state.label = "dragStart";
                $rootScope.$broadcast("PortholeMediaController:drag:start");

            }

            $scope.viewedToggleClick = function(){

                var action = ($scope.bShowViewed) ? "hide" : "show";

                $rootScope.$broadcast("Setting:viewed:" + action);

                $scope.bShowViewed = !$scope.bShowViewed;

                currentUserModel.bShowViewed = $scope.bShowViewed;

            }

            $scope.actualSizeClick = function(){

                if ( $scope.state.size === "full" ) $scope.state.size = "center";
                else  $scope.state.size = "full";

                var action = $scope.state.size;

                $rootScope.$broadcast("Setting:size:" + action);

                if (log) console.log("PortholeMediaController actualSizeClick action: " + action);

            }

            $scope.resetClick = function(){

                $rootScope.$broadcast("PortholeMediaController:reset");

            }

            $scope.creditClick = function(){

                $rootScope.$broadcast("PortholeMediaController:credits:hide");
            }

            $scope.settingsClick = function(){

                var domain = ( document.domain.indexOf("cabinquest") === -1 ) ? "porthole" : "cabinquest";

                ConfigService.track('settings','clicked')

                $rootScope.$broadcast("PortholeMediaController:settings:click");
            }

            $scope.tweetShareClick = function(){
                $rootScope.$broadcast("PortholeMediaController:send:twitter");
            }

            $scope.readClick = function(){
                $rootScope.$broadcast("PortholeMediaController:read:click");
            }

            $scope.fullscreenClick = function(){

                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;

                rfs.call(el);

            }

            $scope.playPauseClick = function(){

                if ($scope.state.label === "play") $scope.state.label = "pause";
                else $scope.state.label = "play";

                $rootScope.$broadcast("PortholeMediaController:playpause:click", {state: $scope.state.label});
            }

            var cancelDrag = function(){
                $scope.state.label = "dragEnd";
            }


            $scope.leftClick = function(){


                if ( $scope.cluster === "NO" ) {

                    curPhotoIndex--;
                    if ( curPhotoIndex < 0 ) curPhotoIndex = $scope.branchesTotal - 1; //0;

                } else {

                    curPhotoIndex -= 8;

                    if ( curPhotoIndex < 0 ) {

                        curPhotoIndex = $scope.branchesTotal + curPhotoIndex;

                    } else {
                        // do nothing
                    }

                }

                updateCreditsIndex(curPhotoIndex + 1);
                resetAfterImageChange();

                $rootScope.$broadcast("PortholeMediaController:left:click", {index: curPhotoIndex});

            }

            $scope.rightClick = function(){

                if (log) console.log("PortholeMediaController - rightClick - curPhotoIndex: " + curPhotoIndex);

                if ( $scope.cluster === "NO" ) {

                    curPhotoIndex++;
                    if ( curPhotoIndex >= $scope.branchesTotal ) curPhotoIndex = 0;//$scope.branchesTotal - 1;


                } else {

                    curPhotoIndex += 8;

                    var underDif = $scope.branchesTotal - curPhotoIndex;

                    if ( underDif >= 0 ) {
                        // do nothing
                    } else {
                        var overDif = curPhotoIndex - $scope.branchesTotal;

                        curPhotoIndex = overDif;//$scope.branchesTotal - 1;
                    }


                }

                updateCreditsIndex(curPhotoIndex + 1);
                resetAfterImageChange();

                $rootScope.$broadcast("PortholeMediaController:right:click", {index: curPhotoIndex});

            }

            var resetAfterImageChange = function(){

                removeImageOptions();

                $scope.totalSubImages = 1;
                imagesIndex = 0;
                $scope.displayImagesIndex = 1;

                cancelDrag();
            }

            var onClickUpHandler = function(){

                imagesIndex++;
                $scope.displayImagesIndex++;

                if ( imagesIndex >= $scope.totalSubImages ) {
                    imagesIndex = 0; //$scope.totalSubImages - 1;
                    $scope.displayImagesIndex = 1; //$scope.totalSubImages;
                }

                $rootScope.$broadcast("PortholeMediaController:up:click", {index: imagesIndex});

            }

            $scope.upClick = function(){

                if (log) console.log("PortholeMediaController - upClick ----------------");
                if (log) console.log("PortholeMediaController - upClick - imagesIndex: " + imagesIndex);
                if (log) console.log("PortholeMediaController - upClick - $scope.totalSubImages: " + $scope.totalSubImages);

                onClickUpHandler();
            }

            $scope.downClick = function(){

                if (log) console.log("PortholeMediaController - downClick ----------------");
                if (log) console.log("PortholeMediaController - downClick - imagesIndex: " + imagesIndex);
                if (log) console.log("PortholeMediaController - downClick - $scope.totalSubImages: " + $scope.totalSubImages);

                imagesIndex--;
                $scope.displayImagesIndex--;

                if ( imagesIndex < 0 ) {
                    imagesIndex = $scope.totalSubImages - 1; //0;
                    $scope.displayImagesIndex = $scope.totalSubImages;
                }

                $rootScope.$broadcast("PortholeMediaController:down:click", {index: imagesIndex});

            }

            $scope.indexChange = function(){
                //handleEnterNum();

                console.log( $scope.branchIndex );

            }

            $scope.trashClick = function(){
                if (log) console.log("PortholeMediaController - trashClick");

                var curIndex = $scope.branchIndex - 1;
                $rootScope.$broadcast("PortholeMediaController:trash:click", {index: curIndex});
            }

            $scope.pinClick = function(){

                if (log) console.log( "PortholeMediaController - credit pin clicked / bPinPost: " + $scope.pinned )

                if ( $scope.pinned === "NO" ) {

                    $scope.pinned = "YES";
                    $scope.pinnedIndex = $scope.branchIndex;

                    //curPhotoIndex = $scope.branchIndex - 1;
                    $rootScope.$broadcast("PortholeMediaController:pin:click", {bUsePinnedPhoto: true});

                } else {

                    $scope.pinned = "NO";
                    $scope.pinnedIndex = "";

                    $rootScope.$broadcast("PortholeMediaController:pin:click", {bUsePinnedPhoto: false});

                }

            }

            $scope.clusterClick = function(){

                if (log) console.log("PortholeMediaController - cluster clicked / cluster: " + $scope.cluster )

                var bCluster = true;

                if ( $scope.cluster === "NO" ) {
                    $scope.cluster = "YES";
                } else {
                    $scope.cluster = "NO";
                    bCluster = false;
                }

                $rootScope.$broadcast("PortholeMediaController:cluster:click", {bCluster: bCluster});

            }


        }]);




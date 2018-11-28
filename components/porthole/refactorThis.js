angular.module('porthole.controllers').controller('PortholeViewController',
    ['$rootScope',
        '$scope',
        '$location',
        '$timeout',
        '$window',
        '$queue',
        '$swipe',
        'PortholeTwitterService',
        'PortholeTreeService',
        'PortholeTreeUtil',
        'PortholeLocalStorageService',
        'PortholeBranchModel',
        'DronePreloaderFactory',
        'ClusterFactory',
        'PortholeImageService',
        'WeatherService',
        'ConfigService',
        function ($rootScope,
                  $scope,
                  $location,
                  $timeout,
                  $window,
                  $queue,
                  $swipe,
                  PortholeTwitterService,
                  PortholeTreeService,
                  PortholeTreeUtil,
                  PortholeLocalStorageService,
                  PortholeBranchModel,
                  DronePreloaderFactory,
                  ClusterFactory,
                  PortholeImageService,
                  WeatherService,
                  ConfigService) {

            var log = ConfigService.getLog("PortholeViewController");

            var appName = "porthole";

            $scope.bNative = ConfigService.isNative();
            $scope.bMobile = ConfigService.isMobile();

            $scope.bShowPorthole = true; //( W.getViewportWidth() > 700 ) ? true : false;
            $scope.bShowGame = false;

            var feedbackURL = "https://chrome.google.com/webstore/detail/porthole/dilfffpckfhcpgidnmgaeoidgekcjlln/support";
            var defaultCentersPhoto = "http://www.cabinzoom.com/images/luxury-cabin-from-reclaimed-materials.jpg";
            var noInternetBackupImg = "images/no-internet-backup.jpg";

            var systemMessageQueue = null;

            $scope.bSignedIn = false;
            $scope.cabinQuestUserModel = null;
            $scope.authUserModel = null;

            $scope.bSkipUpdate = false;

            $scope.weather = {city: "", about: "", temperature: "", wind: "", windstory: "", station: ""}
            $scope.sig = {name: "- greys1sters", time: ""};

            $scope.state = {
                game: "GAME_HIDE",  // see setState in the init
            }

            $scope.testMessage = "";
            $scope.bShowState = false;


            $scope.SpaceModel = {
                curCampaign: "bigcitybrave"
            };

            $scope.porthole = {
                version: "0.4.22"
            }

            $scope.numPhotosToCluster = 9;

            var personalPhoto = {
                title: "",
                description: "",
                photoUrl: "",
                webPageUrl: "",
                feedTitle: "Me",
            };

            var personalTree = {
                title: "",
                feedUrl: "",
            };

            var myTree = {
                title: "",
                description: "",
                feedUrl: "",
                source: "",
            };

            var TreeModel = {
                title: "",
                id: ""
            };

            var ForestModel = {
                trees: ["cabinporn"],
                branches: [],
                date: new Date()
            };

            var UserModel = {
                lastVersionUpdateViewed: "0.0.0",
                bAcceptedFeatureUpdate: false,
                bUsePersonalPhoto: false,
                bUsePersonalTree: false,
                personalPhoto: personalPhoto,
                personalTree: personalTree,
                presentation: "full",
                order: "shuffled",
                transition: "instant",
                bUsePinnedPhoto: false,
                pinnedPhotoUrl: "",
                bShowViewed: true,
            };

            var StoryModel = {
                versionPhotoURL: "",
                verstionText: "",
                timestampAsNumber: -1,
                versionID: ""
            };

            var CabinModel = {
                title: "",
                description: "",
                location: "",
                bOwn: false,
                bRent: false,
                cost: 100000,
                bDream: false,
                kmFromHome: 250,
                daysPerYear: 12,
                timestampAsNumber: -1,
                photoUrl: "unknown"
            };

            var currentUserModel = _.clone(UserModel);
            var currentStoryModel = _.clone(StoryModel);
            var currentCabinModel = _.clone(CabinModel);
            var currentTreeModel = _.clone(TreeModel);
            var currentForestModel = _.clone(ForestModel);

            var currentCabinQuestUser = null; // need to sign in

            var messageMilliseconds = 2500;

            var photoNaturalHeight = 0;
            var photoNaturalWidth = 0;

            var curImgIndex = 0;
            var curSubPhotoIndex = 0;

            // config

            $scope.portholeBranches = []; // index 0 is the most recent - if signed in, need to use their branches instead of the default

            //$scope.$scope.portholeBranches

            var currentPostcard = {versionID: 0};

            var curPhotoIndex = 0;
            $scope.curBranch = {title: "", date: "", source: "", feedLink: ""};

            var creditsUp = false;
            var curCreditsY = 0;

            var $panel = $("#panelContainer");
            var $settings = $("#settingContainer");
            var $credits = $("#creditsContainer");
            var $landscape = $("#landscapeContainer");
            var $loading = $("#loadingTxt");
            var $update = $("#updateContainer");
            var $message = $("#messageContainer");
            var $porthole = $("#portholeContainer");

            var creditsContainerHeight = 150;
            var offY = 26; // height of minimized bar

            var bCreditControlsVisible = true;
            var bCreditsContainerVisible = true;

            var viewReadyCount = 0;

            var manifest = {};

            var creditsHidden = true;
            var fullControlsHidden = true;

            var hideTimeout = 0;

            var clusterFactory = null;
            var bClusterState = false;

            var bAuth = false; // during 3 updates I cant guarantee order of completion

            $scope.bPreviousClicked = false;
            $scope.bSkipUnlocked = true;
            $scope.loader = null;

            $scope.drone = null;

            $scope.init = function(){

                console.log("PortholeViewController init");

                if ( !window.rootScope ) window.rootScope = $rootScope;

                hideAll(); // some templates are loaded later...

                setupWindowManager(); // there should be only 1 manager in the main view controller

                setupMouseTracker();

                setupMessages();
                createSystemMessageQueue();

                hidePanel();

                hideNavControls();

                setState( "GAME_HIDE");

                if ( $scope.bMobile ) setupMobile();

                /*

                resumeFromLocalStorage is auth is null else resumeFromServer

                */
            }

            /////////////////////////////////////////////////////////////////////////// TEST

            var setState = function( stateStr ){

                console.log("PortholeViewController setState state: " + stateStr);

                $scope.state.game = stateStr;

                //$window.cabinQuestState.state = stateStr;

                if ($scope.state.game === "GAME_SHOW") {

                    $timeout( function(){

                        $scope.testMessage = "GAME -PortholeViewController-Sign in & Press Q";
                        $scope.bShowState = true;

                        var btn = $("#profilePanel").find(".closePanelBtn");
                        btn.click();

                        $scope.showGame();

                    });

                } else {

                    $scope.hideGame();
                    setupEvents();
                }

                // odd case where there are 2 PortholeViewController due to the way I setup the index transition
                // there really should only be 1 but for now....

                $rootScope.$broadcast("PortholeViewController:state:change", {state: stateStr});


            }

            var test = function(){

                console.log("PortholeViewController - test");

                var testInterval = null;

                setTimeout( function(){

                    var elapsedSeconds = 15;

                    testInterval = setInterval( function(){

                        $(window).trigger("PxLoader:jquery:waiting", {elapsedSeconds: elapsedSeconds});
                        elapsedSeconds++;

                        if (elapsedSeconds > 20) clearInterval(testInterval);

                    }, 1000);

                }, 3000);
            }

            /////////////////////////////////////////////////////////////////////////// EVENTS

            var setupEvents = function(){

                if (log) console.log("PorholeViewController listening");


                window.dispatcher = {

                    trigger: function(eventName, data){
                        if (log) console.log('window.dispatcher - ' + eventName + ' time: ' + data.elapsedSeconds + ' sec');


                        $rootScope.$broadcast("PXLoader:waiting", {elapsedSeconds: data.elapsedSeconds} );
                    }
                }

                /////////////////////////////////////////////////////////////////////// STATE CHANGE

                $scope.$on("PortholeViewController:state:change", function(event, data){

                    // don't call setState because I don't want to broadcast it again... this is hack to sync up the 2 controllers
                    if (log) console.log('PorholeViewController heard state change data: ', data);
                    $scope.state.game = data.state;

                });

                /////////////////////////////////////////////////////////////////////// SETTINGS LOAD


                $scope.$on("PortholeSettingsViewController:settings:loaded", function(event, data){

                    if (log) console.log('PorholeViewController heard settings loaded data: ', data);

                    // update all these settings...

                    // weird bugged - when you're signed in, branches aren't shuffled!

                    // but mainly the order...
                    if (data.order === "shuffled") {
                        $scope.portholeBranches = _.shuffle(currentForestModel.branches);
                    }

                    broadcastPortholeBranchesUpdate();


                });

                /////////////////////////////////////////////////////////////////////// TOOLTIP

                $scope.$on("tooltip:create", function(event, data){

                    createTooltip(data);

                });

                $scope.$on("tooltip:destroy", function(event, data){

                    destroyTooltip();

                });


                /////////////////////////////////////////////////////////////////////// PRELOADER

                $scope.$on("preloader:add", function(event, data){

                    addPreloader();

                });

                $scope.$on("preloader:remove", function(event, data){

                    removePreloader();

                });

                $scope.$on("skip:image:load", function(event, data){
                    $rootScope.$broadcast("PortholeMediaController:right:click", {index: curPhotoIndex + 1});
                });

                /////////////////////////////////////////////////////////////////////// SPACE

                $scope.$on("SpaceViewController:message:show", function(event,data) {

                    if(log) console.log("PorholeViewController message");
                    showSystemMessage( data.messageHTML, true, data.messageMilliseconds);
                });

                $scope.$on("SpaceViewController:space:hide", function(event,data) {

                    setState("GAME_HIDE");

                });

                $scope.$on("NavCtrl:game:show", function(event, data) {

                    $scope.state.game = "GAME_SHOW"; // don't call setState
                    $window.cabinQuestState.state = "GAME_SHOW";

                    if(log) console.log("PorholeViewController heard show game ", $scope);

                    $("#landscapeContainer").hide();
                    $("#spaceContainer").show();

                    $scope.bShowGame = true;
                    $scope.bShowState = false;

                    $rootScope.$broadcast("PortholeViewController:space:show");

                    //$scope.showGame();
                });

                /////////////////////////////////////////////////////////////////////// KEYBOARD

                $scope.$on("PortholeAppViewController:keyboard:p", function(event, data) {
                    showFeed();

                });

                $scope.$on("PortholeAppViewController:keyboard:q", function(event, data) {
                    $scope.showGame();

                });


                $scope.$on("PortholeAppViewController:keyboard:disabled", function(event, data) {

                    if (log) console.log("PortholeViewController - heard keyboard disabled");

                    showSystemMessage( data.messageHTML, true, messageMilliseconds);

                });


                $scope.$on("PortholeMediaController:largephoto:update", function(event, data) {

                    if (log) console.log("PortholeViewController - heard largephoto update", data);
                    if (log) console.log("PortholeViewController - heard largephoto current branch", $scope.curBranch);

                    //updateLargePhoto( data.imageUrl );

                    curImgIndex = data.imgIndex;

                    var imgNum = Number(curImgIndex) + 1;
                    loadPhoto( data.imageObj.imageUrl, $scope.curBranch, imgNum )

                });


                $scope.$on("BellwoodsModel:updateBranches:complete", function(event, data) {

                    if (log) console.log("PortholeViewController - heard updateBranches complete from BellwoodsModel: ", data);

                    //
                    /*
                    _.each( $scope.portholeBranches, function(branch) {

                        var title = branch.title;
                        var feedTitle = branch.feedTitle;
                        var serverTree = data.model;

                        if (log) console.log("PortholeViewController - heard updateBranches - serverTree: ", serverTree);

                        branch.bViewed = _.contains( serverTree.lastReviewedBranchTitles, title);

                        if (log) console.log("PortholeViewController - onForestLoadedHandler - found viewed: " + branch.bViewed);

                    });

                    */
                    // update the viewed
                    if ( $scope.bSignedIn) {
                        if ( !currentCabinQuestUser.bShowViewed ) hideViewed();
                        else showAll();
                    }




                });

                //////////////////////////////////////////////////////////////////////// RESIZE


                $scope.$on("Setting:size:full", function(event, data) {

                    $("#landscapeContainer").removeClass("landscapeCenterPhoto");
                    $("#landscapeContainer").addClass("landscapeFullPhoto");

                    var branch = $scope.portholeBranches[curPhotoIndex];

                    if (log) console.log("PortholeViewController - heard size full", branch);

                    //$("#landscapeContainer").css("width", branch.width );
                    //$("#landscapeContainer").css("height", branch.height );

                    currentUserModel.presentation = "full";

                    setupIndividualPhotoPresentation("full");

                });

                $scope.$on("Setting:size:center", function(event, data) {

                    if (log) console.log("PortholeViewController - heard size actual");

                    currentUserModel.presentation = "center";

                    setupIndividualPhotoPresentation("center");


                });

                ///////////////////////////////////////////////////////////////////////// FEED

                var bGetForest = true; // double call bug

                $scope.$on("BellwoodsModel:getFeed:complete", function(event, data) {

                    var feedModel = data.model;

                    var activeTrees = PortholeTreeUtil.getActiveTrees(feedModel);

                    if (bGetForest) {
                        if (log) console.log("PortholeViewController - heard feed complete - data and acted once: ", data);
                        bGetForest = false;
                        getForestFeedByTreeModels( activeTrees );
                    }

                    setTimeout( function(){
                        bGetForest = true;
                    }, 1000);

                });

                ///////////////////////////////////////////////////////////////////////// MEDIA CONTROLLERs

                // I may need to queue messages
                /*
                $rootScope.$on("PortholeImageService:update", function(event, data) {

                  showSystemMessage( data.messageHTML, true, messageMilliseconds);

                });
                */

                $scope.$on("PortholeMediaController:read:click", function(event, data) {

                    if (log) console.log("ProfileViewController heard the read click");

                    displayText($scope.curBranch.text, $scope.curBranch);

                });

                $scope.$on("PortholeMediaController:viewed:show", function(event, data) {

                    if (log) console.log("PortholeViewController - heard show all");

                    currentUserModel.bShowViewed = true;

                    showAll();
                    //showViewed();
                    save(true);

                });

                $scope.$on("PortholeMediaController:viewed:hide", function(event, data) {

                    if (log) console.log("PortholeViewController - heard hide all viewed");

                    currentUserModel.bShowViewed = false;

                    hideViewed();

                    save(true);

                });


                $scope.$on("ProfileController:read", function(event, data) {

                    showFullControls();

                });


                $scope.$on("ProfileController:settings:hide", function(event, data) {

                    hidePanel(); // hide the settings panel

                });

                ////////////////////////////////////////////////////////////// TREE UTIL

                $scope.$on("PortholeTreeUtil:update", function(event, data) {

                    showSystemMessage( data.messageHTML, true, messageMilliseconds);

                });

                ////////////////////////////////////////////////////////////// LOCAL STORAGE


                $scope.$on("PortholeLocalStorageService:error", function(event, data) {

                    showSystemMessage( data.messageHTML, true, messageMilliseconds);

                });



                $scope.$on("PortholeLocalStorageService:save:success", function(event, data) {

                    //showSystemMessage( data.messageHTML, true, messageMilliseconds);

                });

                $scope.$on("ProfileController:signin:complete", function(event, data) {

                    onSignInCompleteHandler(data);

                });


                ////////////////////////////////////////////////////////////// MEDIA CONTROLS


                $scope.$on("PortholeMediaController:ready",  function(event, data) {

                    if (log) console.log("PortholeViewController - heard that PortholeMediaController is ready");

                    updateViewsReady();

                });

                $scope.$on("PortholeMediaController:send:twitter",  function(event, data) {
                    if (log) console.log(data, "PortholeViewController - heard tweet click - data");

                    var branch = $scope.portholeBranches[curPhotoIndex];

                    PortholeTwitterService.tweetSharePopUp( branch )

                });

                // PLAY PAUSE

                $scope.$on("PortholeMediaController:playpause:click", function(event, data){

                    if (log) console.log("PortholeViewController - play - click");

                    if ( data.state === "play") play();
                    else pause();

                });

                $scope.$on("PortholeMediaController:email:click", function(event, data){

                    if (log) console.log("PortholeViewController - email");

                    onEmailClickHandler();

                });

                // TRASH

                $scope.$on("PortholeMediaController:trash:click", function(event, data){

                    if (log) console.log("PortholeViewController - trash - click");

                    var trashIndex = data.index;

                    $scope.portholeBranches.splice(trashIndex, 1);

                    // update the index
                    broadcastPortholeBranchesUpdate();

                });

                // SETTINGS

                $scope.$on("PortholeMediaController:settings:click", function(event, data){

                    if (log) console.log("PortholeViewController - settings - heard the click");

                    onSettingsClickHandler();

                });

                ///////////////////////////////////////////////////////////////////////// KEYBOARD



                // ENTER

                $scope.$on("PortholeAppViewController:keyboard:enter", function(event, data){

                    if (log) console.log("PortholeViewController - enter - heard the click");

                    onEnterClickHandler();

                });

                // RIGHT NEXT

                $scope.$on("PortholeMediaController:right:click", function(event, data){

                    if (log) console.log("PortholeViewController - right - heard the click");

                    $scope.bPreviousClicked = false;

                    curPhotoIndex = data.index;
                    curImgIndex = 0;

                    cancelDrag();

                    displayPhotoByIndex(curPhotoIndex);

                });

                // LEFT PREVIOUS

                $scope.$on("PortholeMediaController:left:click", function(event, data){

                    if (log) console.log("PortholeViewController - left - heard the click");

                    $scope.bPreviousClicked = true;

                    curPhotoIndex = data.index;
                    curImgIndex = 0;

                    cancelDrag();

                    displayPhotoByIndex(curPhotoIndex);

                });

                // UP NEXT

                $scope.$on("PortholeMediaController:up:click", function(event, data){

                    if (log) console.log("PortholeViewController - up - heard the click");

                    updateSubPhoto(data.index);


                });

                // DOWN PREVIOUS

                $scope.$on("PortholeMediaController:down:click", function(event, data){

                    if (log) console.log("PortholeViewController - down - heard the click");

                    updateSubPhoto(data.index);

                });

                // PIN INDEX

                $scope.$on("PortholeMediaController:pin:click", function(event, data){
                    if (log)  console.log("PortholeViewController - heard pin click");

                    var branch = $scope.portholeBranches[curPhotoIndex];//_.findWhere( $scope.portholeBranches, {index:  curPhotoIndex} );

                    if ( data.bUsePinnedPhoto ) {

                        currentUserModel.pinnedPhotoUrl = $scope.curBranch.images[ curImgIndex ]; //$scope.curBranch.photoUrl; //
                        currentUserModel.bUsePinnedPhoto = true;
                        currentUserModel.bUsePersonalPhoto = false;

                    } else {

                        currentUserModel.pinnedPhotoUrl = "undefined";
                        currentUserModel.bUsePinnedPhoto = false;


                    }

                    save();

                });

                // CLUSTER

                $scope.$on("cluster:select", function(event, data){

                    onClusterLeafSelect(data);
                });

                $scope.$on("PortholeMediaController:cluster:click", function(event, data){
                    if (log) console.log("PortholeViewController - heard cluster click data.bCluster: " + data.bCluster);
                    onClusterClickHandler(data.bCluster);
                });

                $scope.$on("ClusterFactory:draw:complete", function(event, data){
                    if (log) console.log("PortholeViewController - ClusterFactory draw complete ");
                    enableUI();
                    //removePreloader();
                });

                $scope.$on("ClusterFactory:erase:complete", function(event, data){
                    removeClusterContainer();
                    enableUI();
                });

                $scope.$on("PortholeMediaController:enteredIndex:change", function(event, data){

                    if (log) console.log("PortholeViewController - heard enteredIndex change - data.enteredIndex: " + data.enteredIndex);

                    displayPhotoByIndex(data.enteredIndex );

                });


                $scope.$on("PortholeMediaController:drag:start", function(event, data){

                    if (log)  console.log("PortholeViewController - heard drag start ");

                    onDragPhotoStartHandler();

                });

                $scope.$on("PortholeMediaController:drag:end", function(event, data){

                    if (log)  console.log("PortholeViewController - heard drag end");

                    onDragPhotoEndHandler();

                });

                ////////////////////////////////////////////////////////////// SETTINGS

                $scope.$on("Setting:viewed:show", function(event, data) {

                    currentUserModel.bShowViewed = true;

                    save();

                });

                $scope.$on("Setting:viewed:hide", function(event, data) {

                    currentUserModel.bShowViewed = false;

                    save();

                });

                // not signed in...
                $scope.$on("PortholeSettingsViewController:update:trees", function(event, data) {

                    if (log) console.log("PortholeViewController - trees - changed");

                    var messageMilliseconds = 2000;
                    showSystemMessage("<p style='text-align:center'>Please wait - Updating Feed</p>", true, messageMilliseconds);

                    currentForestModel.trees = data.trees;

                    getForestFeed( currentForestModel.trees ); // load from server

                    save();

                });

                // signed in...
                $scope.$on("BellwoodsTreeActorFactory:feed:remove", function(event, data) {

                    if (log) console.log("PortholeViewController - heard feed remove ");

                    // need load the feed since in this case feedModel is only ids

                    //onFeedChangeHandler( data.feedModel );



                });

                $scope.$on("BellwoodsTreeActorFactory:feed:add", function(event, data) {

                    if (log) console.log(data, "PortholeViewController - heard feed add ");

                    //onFeedChangeHandler( data.feedModel );


                });


                $scope.$on("PortholeSettingsViewController:ready",  function(event, data) {

                    if (log) console.log("PortholeViewController - heard that PortholeSettingsController is ready");

                    var leftPos = $("#settingContainer").width() + "px";
                    $("#settingContainer").css("left", leftPos);

                    updateViewsReady();

                });



                // CLOSE SETTINGS
                $scope.$on("PortholeSettingsViewController:signin", function(event, data){

                    if (log) console.log("PortholeViewController - heard signin click");

                    onSignInHandler(data);

                });

                // CLOSE SETTINGS
                $scope.$on("PortholeSettingsViewController:close:click", function(event, data){

                    if (log) console.log("PortholeViewController - heard close click");

                    onSettingsClickHandler();

                });

                // PERSONAL PHOTO ////////////////////////////////////////////////

                $scope.$on("PortholeSettingsViewController:personalPhoto:title:change", function(event, data){

                    if (log) console.log(currentUserModel, "PortholeViewController - personal photo - title updated");

                    currentUserModel.personalPhoto.title = data.title;
                    currentUserModel.bUsePersonalPhoto = true;

                    $scope.curBranch.title = data.title;

                    save();

                });

                $scope.$on("PortholeSettingsViewController:personalPhoto:description:change", function(event, data){

                    if (log) console.log(currentUserModel, "PortholeViewController - personal photo - description updated");

                    currentUserModel.personalPhoto.description = data.description;
                    currentUserModel.bUsePersonalPhoto = true;

                    $scope.curBranch.title = data.title;

                    save();

                });


                $scope.$on("PortholeSettingsViewController:personalPhoto:photoUrl:change", function(event, data){

                    currentUserModel.personalPhoto.photoUrl = data.photoUrl;
                    currentUserModel.bUsePersonalPhoto = true;

                    $scope.curBranch.link = data.photoUrl;

                    if (log) console.log(currentUserModel, "PortholeViewController - personal photo - photoUrl updated");

                    displayPersonalPhoto();

                    save();

                });

                $scope.$on("PortholeSettingsViewController:personalPhoto:webPageUrl:change", function(event, data){

                    if (log) console.log(currentUserModel, "PortholeViewController - personalphoto - webPageUrl updated");

                    currentUserModel.personalPhoto.webPageUrl = data.webPageUrl;
                    currentUserModel.bUsePersonalPhoto = true;

                    save();

                });


                $scope.$on("PortholeSettingsViewController:personalPhoto:feedTitle:change", function(event, data){

                    if (log) console.log(currentUserModel, "PortholeViewController - personalphoto - feedTitle updated");

                    currentUserModel.personalPhoto.feedTitle = data.feedTitle;
                    currentUserModel.bUsePersonalPhoto = true;

                    $scope.curBranch.feedTitle = data.feedTitle;

                    save();

                });



                ////////////////////////////////////////////////////////////////////////////////////////////////

                // PHOTO

                $scope.$on("PortholeSettingsViewController:bUsePersonalPhoto:change", function(event, data){

                    currentUserModel.bUsePersonalPhoto = data.bUsePersonalPhoto; //? true : false;

                    if (log) console.log(data, "PortholeViewController - currentUserModel.bUsePersonalPhoto - updated");

                    if ( !data.bUsePersonalPhoto ) {

                        if (log) console.log("PortholeViewController - currentUserModel.bUsePersonalPhoto - updated - removing photo branch");

                        removeBranchPhoto( currentUserModel.personalPhoto.photoUrl );
                        setRandomPhoto();

                        return;

                    }

                    var urlValid = false;

                    if ( String(currentUserModel.personalPhoto.photoUrl).indexOf("jpg") !== -1 ) {
                        urlValid = true;
                    } else if ( String(currentUserModel.personalPhoto.photoUrl).indexOf("png") !== -1 ) {
                        urlValid = true;
                    } else if ( String(currentUserModel.personalPhoto.photoUrl).indexOf("gif") !== -1 ) {
                        urlValid = true;
                    } else {
                        // do nothing - no image found
                    }

                    if (urlValid) {
                        displayPersonalPhoto();
                        save();
                    } else {
                        if (log) console.log("PortholeViewController - currentUserModel.bUsePersonalPhoto - url problems");
                    }

                });

                // TREE

                $scope.$on("PortholeSettingsViewController:usePersonalTree:change", function(event, data){

                    currentUserModel.usePersonalTree = (data.usePersonalTree === "yes") ? true : false;

                    if (log) console.log(data, "PortholeViewController - usePersonalTree - changed");

                    //save();

                    if (data.usePersonalTree === "no") {

                        //setRandomPhoto();

                        save();
                    }

                });

                // ORDER

                $scope.$on("PortholeSettingsViewController:order:change", function(event, data){

                    currentUserModel.order = data.order;

                    if (log) console.log("PortholeViewController - order - changed data: ", data);

                    //
                    if ( currentUserModel.order === "shuffled") {

                        //if (log) console.log("PortholeViewController - order - after shuffle: ", $scope.portholeBranches);

                        //if ($scope.bSignedIn) {

                        //} else {
                        $scope.portholeBranches = _.shuffle(currentForestModel.branches);
                        //}

                    } else {

                        $scope.portholeBranches =  currentForestModel.branches;
                    }

                    setRandomPhoto();

                    broadcastPortholeBranchesUpdate();

                    save();

                });

                // TRANSITION

                $scope.$on("PortholeSettingsViewController:transition:change", function(event, data){

                    currentUserModel.transition = data.transition;

                    if (log) console.log(currentUserModel, "PortholeViewController - transition - changed");

                    save();

                });

                // PRESENTATION

                $scope.$on("PortholeSettingsViewController:presentation:change", function(event, data){

                    currentUserModel.presentation = data.presentation;

                    if (log) console.log(data, "PortholeViewController - presentation - changed");

                    if (currentUserModel.presentation === "full") setFullBrowserPhoto();
                    else setCenterBrowserPhoto();

                    save();

                });


                // PX LOADER WAITING
                /*
                $scope.$on("PxLoader:waiting", function(event, data){
                   if (log)  console.log(data, "PortholeViewController - heard PxLoader waiting - seconds: " + data.elapsedSeconds)

                });


                window.rootScope.$on("PxLoader:waiting", function(event, data){
                   if (log)  console.log("PortholeViewController - heard PxLoader waiting - data: ", data)

                });
                */

                $(window).on("PxLoader:jquery:waiting", function (event, data) {
                    if (log) console.log('PortholeViewController heard pxloader event: event=%o, data=%o', event, data);

                    var messageHTML = "<div><p>Please wait - elapsed time: " + data.elapsedSeconds + " secs <br /> <span style='color:#ccc; font-size:12px'> After 20 seconds, it will attempt to load the next post </span></div>"
                    //var skipMessage = "<div style='margin-top: 10px; height: 24px'><button id='skipLoad' ng-click='skipImageLoad()'>skip</button></div>";
                    //messageHTML += skipMessage;

                    var bAutoClose = true;
                    var milliseconds =  3000;
                    var bSkipLink =  true;


                    if ( data.elapsedSeconds >= 20 ) {

                        //var messageHTML = "<p>If it's still loading after: " + data.elapsedSeconds + " secs <br /> <span style='color:#ccc; font-size:12px'> There may be a connection problem </span></p>"

                        PortholeImageService.cancelLoad();
                        $scope.loader = null;

                        if ( $scope.bSkipUnlocked ) $rootScope.$broadcast("PortholeMediaController:right:click", {index: curPhotoIndex + 1});

                        $scope.bSkipUnlocked = false;


                        //if ( Number(data.elapsedSeconds) >= 65 ) showSystemMessage( messageHTML, bAutoClose, milliseconds);

                    } else {

                        if ( Number(data.elapsedSeconds) % 5 === 0 ) showSystemMessage( messageHTML, bAutoClose, milliseconds, bSkipLink);
                    }

                });


                $scope.$on("PortholeMediaController:credits:hide", function(event, data){

                    hideFullControls();

                });

                $scope.$on("PortholeViewController:user", function(event, data){

                    if (log) console.log('PortholeViewController user ready');

                    $scope.cabinQuestUserModel = data.model;
                    $scope.authUserModel = data.authUserModel;

                    $scope.bSignedIn = true;

                    updateViewsReady(true);

                });

                $scope.$on( "CabinQuestViewController:auth:fail", function(event, data){

                    updateViewsReady(false);

                });

                $rootScope.$broadcast("PortholeViewController:ready");

            };

            /////////////////////////////////////////////////////////////////////////// CLUSTER TOOLTIP

            var onClusterLeafSelect = function(data){
                if (log) console.log("PortholeViewController - onClusterLeafSelect", data);


                destroyTooltip();
                onClusterClickHandler(false);

                transitionToLeaf(data);


            }

            var transitionToLeaf = function(data){

                // which branch is this?
                _.each( $scope.portholeBranches, function( branch, index) {

                    if ( branch.title === data.title ) {

                        curPhotoIndex = index;
                        $rootScope.$broadcast("PortholeViewController:index:change", {index: curPhotoIndex, branchObj: branch});

                        displayPhotoByIndex(curPhotoIndex);

                    }

                });

            }

            var createTooltip = function(data){

                if (log) console.log("PortholeViewController - createTooltip", data);
                /*
                . feedLink:"http://photography.nationalgeographic.com/photography/photo-of-the-day/"
                . feedTitle:"National Geographic"
                . publishedDate
                . title
                */

                if ( undefined === data.model ) {
                    data.model = {
                        title: "Sorry, Problem Loading Image",
                        feedTitle: "Satelite Substituted",
                        publishedDate: String( new Date() )
                    }
                }

                var model = data.model;
                var point = data.point;

                var dateStr = String(model.publishedDate);
                var dateObj = new Date(dateStr);

                var formattedDateStr = moment( dateObj ).format('LL');

                var tooltip = "<div id='clusterTooltip' class='tooltip' style='opacity: 1; z-index:5'>" +
                    "<p class='title'>" + model.title + "&nbsp;" + "</p>" +
                    "<p class='brand'>" + model.feedTitle + "&nbsp;" + "</p>" +
                    "<p class='date'>" + formattedDateStr + "</p>" +
                    "</div>";


                var tooltipTop = point.y - Math.floor( point.offsetY / 2);
                var toolTipLeft = point.x - Math.floor( point.offsetX / 2);

                if (toolTipLeft !== 0) {
                    // add it first
                    $landscape.append(tooltip);
                    // then move it
                    $("#clusterTooltip").css({top: tooltipTop, left: toolTipLeft });

                }

            }

            var destroyTooltip = function(){

                if (log) console.log("PortholeViewController - destroyTooltip");

                $(".tooltip").remove();
            }

            /////////////////////////////////////////////////////////////////////////// MOBILE

            var setupMobile = function(){

                $scope.bSkipUpdate = true; // what for again?!

                setupWeather();


                if (log) console.log("PorholeViewController setupMobile");


            }

            var setupWeather = function(){
                // country US = CA

                var weatherPromise = WeatherService.getWeather({city: "Toronto", country: "canada", state: "ontario"});

                var onSuccessHandler = function(parsed_json){
                    var location = parsed_json['location']['city'];
                    var temp_f = parsed_json['current_observation']['temp_f'];

                    if (log) console.log("PorholeViewController setupMobile onSuccessHandler parsed_json: ", parsed_json);
                    /*
                    feelslike_c
                    feelslike_f
                    http://icons.wxug.com/i/c/k/clear.gif"
                    */
                    var current = parsed_json.current_observation;

                    // wind_kph wind_mph
                    /*
                    var weatherHTML = "<p style='font-size:40px'>" + current.feelslike_c  + "&deg;</p>";
                    var iconHTML = "<img src=" + current.icon_url + " />";
                    var postcardHTML = "<p style='font-size:20px'>Today POSTCARD " + current.display_location.city + " " + current.weather + "</p>";

                    $("#weatherAlertContainer").append(weatherHTML);
                    $("#weatherAlertContainer").append(iconHTML);
                    $("#weatherAlertContainer").append(postcardHTML);
                    */

                    $timeout( function(){
                        //$scope.weather.temperature = current.feelslike_c + "&deg";
                        $("#temperature").html(current.feelslike_c + "&deg");
                        $scope.weather.about = current.weather;
                        $scope.weather.city = current.display_location.city;

                        //precip_today_metric:"0.0"
                        // relative_humidity:"68%"
                        // station_id: "CYTZ"
                        // wind_dir
                        // wind_gust_kph

                        var rain = ( Number(current.precip_today_metric) < 2 )? "They seemed content to nibble at the shoots on the bank." : "They hurried onto to the bank, perhaps sensing a storm.";
                        var windSpeed = ( Number(current.wind_gust_kph) < 80 )? "They struggled against the current and seemed content to spin in circles." : "The wind whipped them along without a care in the world.";


                        $scope.weather.station = current.station_id;

                        var windstory = "From the looking glass we spied the swans gliding along the river." + windSpeed + rain;

                        $scope.sig.time = current.observation_time_rfc822;

                        $scope.weather.wind = "Winds " + current.wind_string;
                        $scope.weather.windstory = windstory;

                        TweenMax.to("#weatherAlertContainer",1, {css: {height:"100%"}, delay: 0, ease:Power2.easeOut} );

                    });


                }

                var onErrorHandler = function(parsed_json){
                    //
                    if (log) console.log("PorholeViewController setupMobile onErrorHandler parsed_json: ", parsed_json);
                }

                weatherPromise.done(onSuccessHandler);
                weatherPromise.fail(onErrorHandler);
            }


            $scope.acceptWeatherClick = function(){

                TweenMax.to("#weatherAlertContainer",0.5,{css: {height:0}, delay: 0, ease:Power2.easeOut} );

                if ($scope.state.game !== "GAME_SHOW") getForestFeed( currentForestModel.trees );
            }

            ///////////////////////////////////////////////////////////////////////////

            $scope.showMessage = function(data){
                showSystemMessage( data.messageHTML, true, data.messageMilliseconds);
            }



            var updateViewsReady = function( bAuthorized ){

                viewReadyCount++;  // 2 views need to be ready plus I need to know whether the user is signed in or not

                if (log) console.log("PortholeViewController - updateViewsReady - viewReadyCount: " + viewReadyCount);

                if ( typeof bAuthorized !== "undefined" ) bAuth = bAuthorized;
                if (window.isChromeExtension) bAuth = false;

                //var viewTotal = (window.isChromeExtension) ? 2 : 3;

                if ( viewReadyCount === 2 ) {

                    resumeAfterAllViewsReady(bAuth);

                }

            };

            var disableUI = function(){
                $rootScope.$broadcast("PortholeViewController:disable");
            }

            var enableUI = function(){
                $rootScope.$broadcast("PortholeViewController:enable");
            }


            var getClusterBranches = function(numPhotosToCluster){


                var clusterBranches = [];

                //if (log) console.log("PorholeViewController - getClusterBranches - $scope.portholeBranches: " , $scope.portholeBranches);

                _.times(numPhotosToCluster, function(){

                    var clusterBranch = $scope.portholeBranches[curPhotoIndex];

                    //if (log) console.log("PorholeViewController - getClusterBranches - clusterBranch wot: " , clusterBranch);
                    if ( typeof clusterBranch !== "undefined" ) clusterBranches.push(clusterBranch);

                    curPhotoIndex++;

                    if ( curPhotoIndex > $scope.portholeBranches.length ) {
                        curPhotoIndex = 1;
                    }

                });

                $rootScope.$broadcast("PortholeViewController:branchIndex:update", {branchIndex: curPhotoIndex} );

                return clusterBranches;

            }

            var onClusterClickHandler = function(bCluster){

                if (log) console.log("PortholeViewController - onClusterClickHandler");


                // disable UI
                disableUI();

                if (bCluster) {

                    hideLandscapePhoto( 0.25 );
                    addClusterContainer();

                    if ( null === clusterFactory ) {
                        clusterFactory = new ClusterFactory({ scope: $scope,
                            bShowViewport: true});
                    }

                    var clusterBranches = getClusterBranches($scope.numPhotosToCluster);

                    clusterFactory.draw( clusterBranches );


                } else {

                    clusterFactory.erase();
                    destroyTooltip();

                    showLandscapePhoto( 1 );
                }

                $scope.bClusterState = bCluster;

            }

            var addClusterContainer = function(){
                $landscape.append( '<div id="clusterContainer"></div>');
                $landscape.append( '<div id="viewportContainer" style="display: none"></div>');
            }

            var removeClusterContainer = function(){
                $landscape.find("#clusterContainer").remove();
                $landscape.find("#viewportContainer").remove();

                // clusterFactory = null;
            }

            var hideLandscapePhoto = function( opacity ){

                opacity = ( typeof opacity !== "undefined" ) ? opacity : 0;

                var onCompleteHandler = function(){

                };


                TweenMax.to( $("#landscape"), 1, { css: {opacity: opacity }, onComplete: onCompleteHandler } );
            }

            var showLandscapePhoto = function( opacity ){

                opacity = ( typeof opacity !== "undefined" ) ? opacity : 1;

                var onCompleteHandler = function(){

                };

                TweenMax.to( $("#landscape"), 1, { css: {opacity: opacity }, onComplete: onCompleteHandler } );
            }


            var flushForest = function(){

                if (log) console.log("PortholeViewController - flushForest");


                //else getForestFeed( currentForestModel.trees );

                getForestFeed( currentForestModel.trees );

            };

            var resumeAfterAllViewsReady = function( bAuth ){

                if (log) console.log("PortholeViewController - resumeAfterAllViewsReady - bAuth: " + bAuth);

                /*

                there's a double forest request made if the user is already signed in which should not happen

                */

                var bProfileUrl = ( document.documentURI.indexOf("profile") > -1 ) ? true : false;

                if ( bProfileUrl ) {

                    if (bAuth) resumeFromServer();

                } else {

                    if (bAuth) resumeFromServer();
                    else resumeFromLocalStorage(); // don't check local if on profile to prevent double pics

                }



            }

            var resumeFromServer = function(){

                if (log) console.log("PortholeViewController - resumeFromServer");

                // do nothing but wait until the feed has been loaded
            }

            var resumeFromLocalStorage = function(){

                if (log) console.log("PortholeViewController - resumeFromLocalStorage - $scope: ", $scope);


                //PortholeTreeUtil.hasTreeBeenUpdated();
                // 1. resume from local storage if not signe
                var bLocalCheck = checkPersistentData(); // loads from local storage


                // 2. load the new tree which can be compared against resumed state
                //if (bLocalCheck) callLoadTree();
                //trees = ["cabinporn", "wired", "kotaku", "treehugger", "coolhunting"];

                if (bLocalCheck) {

                    if (log) console.log("PortholeViewController - init after checked local - viewReadyCount: " + viewReadyCount);
                    if (log) console.log("PortholeViewController - init after checked local - currentUserModel: ", currentUserModel);

                    var today = new Date();
                    var todayDate = today.getDate();
                    var savedDate = currentForestModel.date.getDate();

                    if (log) console.log("PortholeViewController - compare today data: " + todayDate + " against " + savedDate);

                    /*
                      always load the feed
                    */

                    if ( $scope.bMobile ) {
                        // do nothing until the weather has been accepted...

                        if (log) console.log("PortholeViewController - resumeFromLocalStorage - mobile");

                    } else {

                        if (log) console.log("PortholeViewController - resumeFromLocalStorage - desktop");

                        getForestFeed( currentForestModel.trees );
                    }



                    /*

                    if ( todayDate !==  savedDate || ( currentForestModel.branches.length === 0 ) ) {

                        getForestFeed( currentForestModel.trees ); // load from server

                        if (log) console.log("PortholeViewController - init after checked local - server load");

                    } else {

                      $scope.portholeBranches = (currentUserModel.order === "shuffled") ? _.shuffle( currentForestModel.branches ) : currentForestModel.branches;

                      broadcastPortholeBranchesUpdate();

                      if (log) console.log("PortholeViewController - init after checked local - local load");


                      getManifest(); // loads the manifest json file
                    }
                    */

                    //
                    $rootScope.$broadcast("PortholeViewController:localStorage:resumed", { currentUserModel: currentUserModel, currentForestModel: currentForestModel, portholeBranches: $scope.portholeBranches } );

                }  //callLoadTree();

            }

            var checkPersistentData = function(){

                if (log) console.log("PortholeViewController - checkPersistentData - $scope.bSignedIn: " + $scope.bSignedIn);

                if ( $scope.bSignedIn ) {

                }

                // if no location storaga, create it...
                var bFoundStorage  = PortholeLocalStorageService.resumePortholeState(currentUserModel, currentCabinModel, currentStoryModel, currentTreeModel, currentForestModel);
                return bFoundStorage;
            }

            var broadcastPortholeBranchesUpdate = function(){

                //if ( $scope.portholeBranches.length < 200 ) {
                $rootScope.$broadcast("PortholeViewController:branches:update", { branches: $scope.portholeBranches } );
                //} else {
                //  if (log) console.log("PortholeViewController ERROR! too many branches resumeAfterAllViewsReady");
                //}

                if (log) console.log("PortholeViewController - broadcastPortholeBranchesUpdate - total branches: " + $scope.portholeBranches.length);
                //if (log) console.log("PortholeViewController - broadcastPortholeBranchesUpdate - $scope.portholeBranches: ", $scope.portholeBranches);
            }


            var showFeed = function(){
                $("#landscapeContainer").show();
            }


            $scope.showGame = function(){
                if (log) console.debug("PortholeViewController - GAME MODE");

                setState( "GAME_SHOW" );

                $("#landscapeContainer").hide();
                $("#spaceContainer").show();

                $scope.bShowGame = true;
                $scope.bShowState = false;

                $rootScope.$broadcast("PortholeViewController:space:show");
            }

            $scope.hideGame = function(){
                $("#spaceContainer").hide();
                $("#landscapeContainer").show();

                $scope.bShowGame = false;
            }

            var updateGame = function( updateObj ){

            }

            var updateSubPhoto = function( index ){

                if (log) console.log("PortholeViewController - updateSubPhoto - index: ", index);

                curSubPhotoIndex = index;

                var photoUrl = $scope.curBranch.images[curSubPhotoIndex].imageUrl;

                var imgNum = curSubPhotoIndex + 1;
                loadPhoto(photoUrl, $scope.curBranch, imgNum);
            }


            var onFeedChangeHandler = function(feedModel){

                var activeTrees = PortholeTreeUtil.getActiveTrees(feedModel);

                currentForestModel.trees = activeTrees;

                if (log) console.log("PortholeViewController - onFeedChangeHandler - feedModel: ", feedModel);
                if (log) console.log("PortholeViewController - onFeedChangeHandler - activeTrees: ", activeTrees);

                getForestFeedByTreeModels(activeTrees);

                //save();
            }

            var showAll = function(){

                $scope.portholeBranches = currentForestModel.branches;

                if (log) console.log("PortholeViewController - showAll - $scope.portholeBranches: ", $scope.portholeBranches.length);

            }

            var showViewed = function(){

                if (log) console.log("PortholeViewController - showViewed - $scope.portholeBranches: ", $scope.portholeBranches.length);

                var viewedBranches = _.where( currentForestModel.branches, {bViewed: true} );

                $scope.portholeBranches = viewedBranches;

                broadcastPortholeBranchesUpdate();

            }

            var hideViewed = function(){

                if (log)  console.log("PortholeViewController - hideViewed - $scope.portholeBranches: ", $scope.portholeBranches.length);
                if (log)  console.log("PortholeViewController - hideViewed - currentForestModel: ", currentForestModel.branches.length);

                //currentForestModel

                var unviewedBranches = _.where( $scope.portholeBranches, {bViewed: false} );

                if (log)  console.log("PortholeViewController - hideViewed - unviewedBranches: ", unviewedBranches.length);

                $scope.portholeBranches = unviewedBranches;

                broadcastPortholeBranchesUpdate();
            }

            var onForestLoadedHandler = function( forest ){

                var orderedForest = [];

                if (log) console.log("PortholeViewController - onForestLoadedHandler - forest: ", forest);

                //if ( forest.)

                /*

                forest is an array of tree obj with 3 props:

                branches: Array[50]
                lastReviewedBranchTitles: Array[0]
                tree: "Cool Hunting"


                */

                _.each( forest, function(tree) {

                    var parsedBranches = PortholeTreeService.parse(tree, "rss");

                    if ( null !== tree.branches ) {

                        var sampleTrees = ( tree.branches.length > 20 ) ? _.sample(parsedBranches, 20) : parsedBranches;
                        orderedForest = orderedForest.concat(sampleTrees);

                    } else {

                        if (log) console.log("PortholeViewController - onForestLoadedHandler - ERROR! tree.branches is null!");
                        //return;
                    }

                });

                // finally shuffle the forest

                $timeout( function(){

                    $scope.portholeBranches = ( currentUserModel.order === "shuffled") ? _.shuffle(orderedForest) : orderedForest;

                    currentForestModel.branches = $scope.portholeBranches;

                    if (log) console.log("PortholeViewController - onForestLoadedHandler - currentUserModel: ", currentUserModel);

                    if (log) console.log("PortholeViewController - onForestLoadedHandler - currentForestModel.branches.length: " + currentForestModel.branches.length );
                    if (log) console.log("PortholeViewController - onForestLoadedHandler - $scope.portholeBranches.length: " + $scope.portholeBranches.length);


                    //var treeTitles = _.pluck( forest, "tree" );
                    //if (log) console.log("PortholeViewController - onForestLoadedHandler - treeTitles: ", treeTitles);


                    if ( $scope.bSignedIn) {

                        // hide viewed true?
                        if ( currentUserModel.bShowViewed ) {

                            _.each( $scope.portholeBranches, function(branch) {

                                var title = branch.title;
                                var feedTitle = branch.feedTitle;

                                var foundTree = _.findWhere( forest, {tree: feedTitle }); // tree prop is actually treeTitle not an obj

                                if ( undefined !== foundTree) {

                                    //if (log) console.log("PortholeViewController - onForestLoadedHandler foundTree: ", foundTree );

                                    branch.bViewed = _.contains( foundTree.lastReviewedBranchTitles, title);

                                    //if (log) console.log("PortholeViewController - onForestLoadedHandler - found viewed: " + branch.bViewed);
                                }

                            });

                        }


                    }


                    currentForestModel.branches = orderedForest; // save them in order for comparison;
                    currentForestModel.date = new Date();

                    $rootScope.$broadcast("PortholeViewController:forest:loaded", {currentForestModel: currentForestModel});


                    //
                    //var bUpdated = compareBranchOrders(); // this needs to happen later...

                    // after comparing them, then update - need the manifest before saving
                    // getManifest will call setupUserBySettings which display the photo


                    getManifest();



                    if (log) console.log("PortholeViewController - onForestLoadedHandler - curPhotoIndex: " + curPhotoIndex);

                    //displayPhotoByIndex( curPhotoIndex );
                    //displayRandomPhoto();

                    //
                    if ( currentUserModel.bUsePersonalPhoto ) addBranchPhoto();

                    //if ( !$scope.bSignedIn ) save(); // no more saving due to local storage limit

                });

            }

            var addPersonalPhotoToForest = function(){

                //currentForestModel.branches.push( personalPhotoBranch );

            }

            var compareBranchOrders = function(){

                var loadedBranchTitles = _.pluck( $scope.portholeBranches, "title");
                var savedBranchTitles = _.pluck( currentForestModel.branches, "title");

                // compare previous to current
                return PortholeTreeUtil.hasTreeBeenUpdated( loadedBranchTitles, savedBranchTitles);


            }

            // .toLowerCase().split(" ").join("");

            var save = function(bMuteMessage){

                if (log) console.log("PhotoViewController - save - bMuteMessage: " + bMuteMessage);

                PortholeLocalStorageService.savePortholeState(currentUserModel, currentCabinModel, currentStoryModel, currentTreeModel, currentForestModel, manifest, bMuteMessage);

            }

            var onManifestLoadedHandler = function(data){
                manifest = data;
                // show update?
                $timeout( function(){
                    $scope.porthole.version = data.version;
                });
                // first need to call resume!
                //var bReviewed = hasUserReviewedUpate(); // calls resume - see setWindow();

                //if ( W.getViewportWidth() > 700 ) hasUserReviewedUpate();

                skipUpdateReview();

                setupUserBySettings();

            }


            var setupUserBySettings = function(){

                if (log) console.debug("=======================================");
                if (log) console.log(currentUserModel, "PortholeViewController setupUserBySettings");

                //return;

                // does the user want to see a personal photo?
                if ( currentUserModel.bUsePersonalPhoto ) {

                    //displayPersonalPhoto(); don't want to start at the personal photo if the list is shuffled
                    addBranchPhoto();
                    displayRandomPhoto();

                } else  {

                    if ( currentUserModel.bUsePinnedPhoto ) {

                        if (log) console.log("PortholeViewController - setupUserBySettings - display pinned");

                        var pinnedPhotoUrl = currentUserModel.pinnedPhotoUrl;

                        if ( pinnedPhotoUrl !== "undefined" ) {
                            displayPhotoByURL($scope.portholeBranches, pinnedPhotoUrl );
                        }

                    } else {

                        if (log) console.log("PortholeViewController - setupUserBySettings - display random");
                        displayRandomPhoto();
                    }

                }

                // does the user want to see the viewed posts or not?
                if ( $scope.bSignedIn) {
                    // still there is a problem here...
                    if ( currentUserModel.bShowViewed ) showAll();
                    else hideViewed();
                }


                // need to wait until the photo has loaded

            };


            var changeBackupTextDisplay = function() {
                if ( $landscape.hasClass("landscapeCenterPhoto") ) {

                    if (log) console.log("PorholeViewController - displayText - fixing display");

                    $landscape.removeClass("landscapeCenterPhoto");
                    $landscape.addClass("landscapeFullPhoto");

                    $porthole.removeClass("portholeWhite");
                    $porthole.addClass("portholeBlack");
                }

            }


            // ALL IMAGES
            var setupPhotoPresentation = function(){

                if (log) console.log("PortholeViewController - setupPhotoPresentation - currentUserModel.presentation: " + currentUserModel.presentation);

                if (currentUserModel.presentation === "full") {
                    setFullBrowserPhoto();
                    //repositionLandscape();
                } else if (currentUserModel.presentation === "center") {
                    setCenterBrowserPhoto();
                } else {
                    // currentUserModel.presentation is undefined for the first time!
                    setFullBrowserPhoto();
                    //repositionLandscape();
                }
            }

            // INDIVIDUAL IMAGES
            var setupIndividualPhotoPresentation = function( size ){

                if (size === "full") {
                    setFullBrowserPhoto();
                    //repositionLandscape();
                } else if (size === "center") {
                    setCenterBrowserPhoto();
                }
            }


            var skipUpdateReview = function(){

                if (log) console.log("PortholeViewController - skipUpdateReview ");

                currentUserModel.lastVersionUpdateViewed = manifest.version;
                currentUserModel.bAcceptedFeatureUpdate = true;

                save(true);

            }

            var hasUserReviewedUpate = function(){

                //var bValidStorage = checkPersistentData();

                var bDisplayUpdate = false;

                if (log) console.log("-------------------------------------");
                if (log) console.log(currentUserModel, "PortholeViewController - hasUserReviewedUpate - currentUserModel");
                if (log) console.log("-------------------------------------");

                if ( currentUserModel.lastVersionUpdateViewed === undefined ) {
                    if (log )console.log("PortholeViewController - hasUserReviewedUpate - date is undefined!!! ");
                }

                var lastVersion = currentUserModel.lastVersionUpdateViewed;
                var bAcceptedFeatureUpdate = currentUserModel.bAcceptedFeatureUpdate;
                var manifestVersion = manifest.version;

                if (log )console.log("PortholeViewController - compare - lastVersion: " + lastVersion + " vs manifestVersion: " + manifestVersion + " with bAcceptedFeatureUpdate: " + bAcceptedFeatureUpdate);

                if ( lastVersion  === manifestVersion && bAcceptedFeatureUpdate ) {
                    if (log) console.log("update read - versions match and user has accpeted update");

                } else if ( currentUserModel.lastVersionUpdateViewed !== manifest.version ) {
                    if (log) console.log("need to read update - versions don't match");

                    bDisplayUpdate = true;
                } else if ( lastVersion === manifestVersion && !bAcceptedFeatureUpdate ) {

                    if (log) console.log("need to read update - second time - I still need to know if the user has accepted the update");
                    bDisplayUpdate = true;

                } else if ( lastVersion === "0.0.0" ) {
                    if (log) console.log("need to read update - first time");
                    // need to create the storage by attempting to save
                    bDisplayUpdate = true;

                } else {
                    if (log) console.log("problem looking at version viewed");
                }



                //if (bDisplayUpdate) showUpdate();

                return bDisplayUpdate;
            }

            var getManifest = function(){
                $.getJSON( "./manifest.json", function( data ) {

                    //////console.log("porthole chrome extension v" + manifest.version);
                    onManifestLoadedHandler(data);
                });
            }

            var getURL = function( contentStr ){

                //console.log("PhotoViewController - contentStr: " + contentStr)

                //var urlRegex = /(http|ftp|https):\/\/([\w\-_]+(?:(?:\.[\w\-_]+)+))([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g;

                var startIndexNum = contentStr.indexOf("http");
                var endIndexNum = contentStr.indexOf("jpg");

                if ( endIndexNum === -1 ) {
                    endIndexNum = contentStr.indexOf("png");
                }

                endIndexNum += 3;

                return contentStr.substring(startIndexNum, endIndexNum)
            }

            var getOriginalWidthOfImg = function (img_element) {
                var img = new Image();
                img.src = (img_element.getAttribute ? img_element.getAttribute("src") : false) || img_element.src;
                return img.width;
            }

            var resetLandscape = function(){
                $landscape.css("top", "0px");
                $landscape.css("left", "0px");
            }


            var displayPreloader = function(){

                addPreloader();

            }

            var loadAnotherPhoto = function(photoURLStr, currentBranch){

                if (log) console.log("PhotoViewController - loadAnotherPhoto - currentBranch: ", currentBranch)

                /*
                var images = currentBranch.images;
                var largePhotoObj;

                if ( images.length > 1 ) {


                  // this photoURLStr is not suitable so mark it
                   var smallPhotoObj = _.findWhere(images, { imageUrl: photoURLStr});
                   smallPhotoObj.large = false;

                  // find the next suitable image
                   var largePhotos = _.findWhere(images, { large: true });
                   largePhotoObj = largePhotos[0];

                }
                */
                $rootScope.$broadcast("PortholeViewController:toosmall:up:click");

            }

            var loadSateliteImage = function( msgHtml, currentBranch, imgNum, bDefault ){

                showSystemMessage(msgHtml, true, 2000);

                var altImagePath = PortholeImageService.getSateliteImage();

                loadPhoto(altImagePath, currentBranch, undefined, true);
            }


            var loadPhoto = function(photoURLStr, currentBranch, imgNum, bDefault ){

                if (log) console.log("PhotoViewController - loadPhoto photoURLStr: " + photoURLStr);
                if (log) console.log("PhotoViewController - loadPhoto currentBranch: ", currentBranch);

                $rootScope.$broadcast("PortholeViewController:disable");

                $scope.bSkipUnlocked = true;

                displayPreloader();

                imgNum = (typeof imgNum !== "undefined") ? imgNum : curPhotoIndex + 1;
                bDefault = (typeof bDefault !== "undefined") ? bDefault : false;

                //return; // doesn't removePreloader

                var decodedPhotoUrl = decodeURIComponent(photoURLStr);

                $scope.loader = new PxLoader( { statusInterval: 1000, noProgressTimeout: 60000 } );
                var pxImage = new PxLoaderImage(decodedPhotoUrl);

                $scope.loader.add(pxImage);

                // callback that runs every time an image loads
                $scope.loader.addProgressListener(function(e) {

                    if (log) console.log("PortholeViewController load progress arguments: ", arguments);

                    //if (e.state === "TIMEOUT") {

                    //};

                    //if (e.error) {
                    // displayText( currentBranch.text, currentBranch  );
                    //

                });

                $scope.loader.addCompletionListener(function(e) {

                    removePreloader();
                    $("#landscapeContainer").find("img").remove();

                    if (log) console.log(e, "PortholeViewController load complete");
                    var img = pxImage.img;

                    photoNaturalHeight = img.naturalHeight;
                    photoNaturalWidth = img.naturalWidth;

                    if (log) console.log("PortholeViewController loadPhoto photoNaturalHeight: " + photoNaturalHeight);
                    if (log) console.log("PortholeViewController loadPhoto photoNaturalWidth: " + photoNaturalWidth);

                    if ( e.error ) {

                        if (log) console.log("PortholeViewController - ERROR - error loading image ", e);

                        //displayText( currentBranch.text, currentBranch  );

                        var msgHtml = "<p style='text-align:center'>Error Loading Image <br /> <span style='color:#ccc; font-size:12px'> loading satelite alternative </span></p>";
                        loadSateliteImage(msgHtml, currentBranch, imgNum, bDefault);


                    } else if ( photoNaturalHeight < 150 || photoNaturalWidth < 300 ) {

                        if (log) console.log("PortholeViewController - ERROR - image not suitable for full screen", currentBranch);

                        //displayText("<p>Sorry, there was a problem loading this image. Please select another post.</p>");
                        //displayText( currentBranch.text, currentBranch  );

                        showSystemMessage("<p style='text-align:center'>Image " + imgNum + " is too small <br /> <span style='color:#ccc; font-size:12px'> most likely an AD or Tracking Gif </span></p>", true, 3000);

                        loadAnotherPhoto(photoURLStr, currentBranch);

                    } else {

                        $(img).css("width", "100%");
                        $(img).attr("id", "landscape");

                        if ( $landscape.find("img") ) {
                            $landscape.find("img").remove();
                        }

                        $landscape.append(img);

                        $landscape.find("#loadingMsg").remove();

                        if (  !bDefault ) {
                            var t1 = new TimelineMax({paused: false});
                            t1.to("#landscape", 0, {x:currentBranch.x, y:currentBranch.y, z: 0} );
                        }

                        onLargePhotoLoadCompleteHanlder();

                    }

                    // $("#loadingTxt").hide();

                    showFullControls();

                    // if there is a photo, there is a good chance the post will have other photos
                    $rootScope.$broadcast("PortholeViewController:image:options", {branchObj: currentBranch} );


                });

                $scope.loader.start();

            }

            var onEmailClickHandler = function(){

                console.log("PorholeViewController - onEmailClickHandler - curBranch");
                console.log("PorholeViewController - onEmailClickHandler - currentCabinQuestUser");

                var emailTo = ($scope.bSignedIn) ?  $scope.cabinQuestUserModel.email : "";

                var subject = $scope.curBranch.title;
                var body = $scope.curBranch.link;

                var via = "\n\n\n\n\n via porthole";

                body += via;

                var emailLoc = "mailto:"+emailTo+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);

                window.location.href = emailLoc;
            }

            var onDragPhotoStartHandler = function(){

                if (log) console.log("PortholeViewController - onDragPhotoStartHandler");

                var onDragEndHandler = function(e){

                    var matrix = $("#landscape").css('transform').replace(/[^0-9\-.,]/g, '').split(',')
                    var x = matrix[12] || matrix[4];//translate x
                    var y = matrix[13] || matrix[5];//translate y

                    var currentBranch = $scope.portholeBranches[curPhotoIndex];

                    currentBranch.x =  x;
                    currentBranch.y =  y;

                    if (log) console.log("PortholeViewController - drag complete - newY: " + currentBranch.y);

                    var muteMessage = true;
                    save(muteMessage);


                    if (log) console.log("PortholeViewController - drag complete - currentBranch: ", currentBranch);

                }

                Draggable.create("#landscape", {type:"y", throwProps:false, onDragEnd: onDragEndHandler});

            }

            var onDragPhotoEndHandler = function(){
                cancelDrag();
            }

            var cancelDrag = function(){
                var result = Draggable.get("#landscape");
                if ( undefined !== result ) result.kill();
            }

            var acceptFeatureClickHandler = function(){

                currentUserModel.bAcceptedFeatureUpdate = true;
                //
                save();
                //
                hideUpdate();
            }

            var skipFeatureClickedHandler = function(){

                currentUserModel.bAcceptedFeatureUpdate = true;
                //
                save();
                //
                hideUpdate();
            }

            var showUpdate = function(){

                if (log) console.log("skipFeatureClickedHandler clicked!");

                // has the user seen the update?
                //$update.show();

                TweenMax.to( $update, 0.5, {opacity: 1, display: "block"} );

                // ensure last and manifest now match
                currentUserModel.lastVersionUpdateViewed = manifest.version;

                //manifest.version
                $("#tryFeatureBtn").on("click", function(){
                    acceptFeatureClickHandler();
                    //
                    //flushForest();
                });

            }

            var hideUpdate = function(){
                TweenMax.to( $update, 0.5, {opacity: 0, display: "none"} );
            }

            var removeUpdate = function(){

                $("#tryFeatureBtn").off();
                $("#skipFeatureBtn").off();
            }

            var displayPhoto = function( photoURLStr, titleStr, imgId ){

                $(imgId).attr("src", photoURLStr);
                $(imgId).attr("alt", titleStr);

            }

            //////////////////////////////////////////////////// PERSONAL VS RANDOM


            var fixImageUrls = function( brokenStr ) {

                return brokenStr.split('src="//images.rewardstyle.com/img?').join('src="http://images.rewardstyle.com/img?');

            }

            var removePhoto = function(){

                var imgTarget = $landscape.find("img");

                var onCompleteHandler = function(){
                    imgTarget.remove();
                }

                TweenMax.to(imgTarget, 1, {css:{opacity:0}, ease:Power2.easeOut, onComplete: onCompleteHandler });

            }

            var displayText = function( textStr, branchObj ){

                // remember pseudo elements!

                removePhoto();

                textStr = typeof textStr !== "undefined" ? textStr : "<p>Sorry, there was a problem loading this image. Please select another post.</p>";

                var newPTag = "<p style='font-size: 18px; margin-top: 20px'>";
                var textArray = textStr.split("</p>");

                /*
                if ( textStr === "<p>Sorry, there was a problem loading this image. Please select another post.</p>") {
                  console.log(branchObj, "PorholeViewController - displayText - sorry");

                  var htmlSorryStr = "<div class='backup'><div id='backupText' class='backupTextContainer'>" + textStr + "</div></div>";

                  $landscape.html(htmlSorryStr);
                  return;
                }
                */

                //textArray.pop();

                var remakeP = "";

                _.each( textArray, function(newTextStr, index){

                    if ( newTextStr.toLowerCase().indexOf("<p>the post") > -1 ) {

                        var fixStr = newTextStr.split("<p>").join(newPTag);
                        remakeP += fixStr + "</p>";

                    } else {
                        remakeP += newTextStr + "</p>";
                    }

                });

                //if (log) console.log(remakeP, "PortholeViewController - displayText - lastP: ");
                /*
                var htmlStr = "<div class='branch'>" +
                                "<div class='branchTitle'>" +
                                    "<h2>" +  branchObj.title + "</h2>" +
                                "</div>" +
                                "<div class='branchDescription'>" +
                                     remakeP +
                                "</div>" +
                                "<div class='branchTags'>" +
                                    "<h6>" +  branchObj.tags + "</h2>" +
                                "</div>" +
                             "</div>";
                  */

                var htmlStr = remakeP;

                //var why = "<div style='margin-left: 50px; margin-top: 50px; position: absolute; text-align: left'><p><span style='font-size: 12px'><span style='color: #999'>Note:</span> Text is being shown since no images were found in the post.</span></p></div>"
                //htmlStr += why;

                //$landscape.html(htmlStr);
                /*
                if (branchObj.feedTitle === "Man Repeller" && undefined !== branchObj) {

                  setTimeout( function(){

                    var brokenHTML = $landscape.html();

                    var fixedHTML = fixImageUrls(brokenHTML);

                    //console.log(fixedHTML, "PorholeViewController - displayText fixed");
                    //$landscape.html(fixedHTML);
                    $rootScope.$broadcast("leaf:display", {description: fixedHTML, branchObj: branchObj})
                    doneAddingMedia();

                  }, 2000);


                } else {
                  $rootScope.$broadcast("leaf:display", {description: htmlStr, branchObj: branchObj});
                  doneAddingMedia();
                }
                */

                $rootScope.$broadcast("leaf:display", {description: htmlStr, branchObj: branchObj});
                doneAddingMedia();

                creditsHidden = true;
                //slideUpControls();
            }

            var addBranchPhoto = function(){

                if (log) console.log("PorholeViewController - addBranchPhoto")

                var branchTitle = _.unescape(currentUserModel.personalPhoto.title);
                var branchDescription = _.unescape(currentUserModel.personalPhoto.description);
                var branchIndex = $scope.portholeBranches.length;
                var branchPhotoUrl = currentUserModel.personalPhoto.photoUrl;

                var tags = [];
                var photoUrl = branchPhotoUrl;
                var photoLargeUrl = branchPhotoUrl;
                var images = [branchPhotoUrl];
                var link =  branchPhotoUrl;
                var publishedDate = new Date();
                var branchTitleUnescape = branchTitle;
                var feedLink = branchPhotoUrl;
                var feedTitle = branchTitle;
                var aboutUnescape = branchDescription;
                var index = branchIndex;
                var textUnescape = branchDescription;
                var bUseText = false;
                var x = 0;
                var y = 0;
                var bViewed = false;
                var bTrashed = false;

                var portholeBranch = new PortholeBranchModel( tags,
                    photoUrl,
                    photoLargeUrl,
                    images,
                    link,
                    publishedDate,
                    branchTitleUnescape,
                    feedLink,
                    feedTitle,
                    aboutUnescape,
                    index,
                    textUnescape,
                    bUseText,
                    x,
                    y,
                    bViewed,
                    bTrashed);

                $scope.portholeBranches.push(portholeBranch);

                broadcastPortholeBranchesUpdate();
            }

            var removeBranchPhoto = function( rejectBranchPhotoUrl ){

                var newBranches = _.reject( $scope.portholeBranches, function(branch) { return branch.photoUrl === rejectBranchPhotoUrl } );

                $scope.portholeBranches = newBranches;

                if (log) console.log($scope.portholeBranches, "PortholeViewController removeBranchPhoto");

                broadcastPortholeBranchesUpdate();

            }

            var displayPersonalPhoto = function(){

                if (log) console.log("PortholeViewController displayPersonalPhoto");

                addBranchPhoto();
                //loadPhoto(currentUserModel.personalPhoto.photoUrl, currentUserModel);
                displayPhotoByIndex( $scope.portholeBranches.length - 1 );

                //displayPhotoByUrl( );

                /* PROBLEM
                  ////console.log("! switching !");
                  var messageMilliseconds = 3000;
                  showSystemMessage("<p>Please check the url for your personal photo; switching to random mode</p>", true, messageMilliseconds);


                   setRandomPhoto();
                */

            }


            var updateBranch = function( branchObj, branchIndex ){


                if (undefined === branchObj) return;

                if ( branchObj.title.length > 100 ) branchObj.title = branchObj.title.substring(0,100) + " ...";

                $timeout( function(){

                    $scope.curBranch = branchObj;

                });

                // see BellswoodModel which is listening for the update

                if ($scope.bSignedIn) {

                    branchObj.bViewed = true;

                    // save the updated title
                    var feedTitle = branchObj.feedTitle;
                    var title = branchObj.title;

                    var treeBranches = _.where($scope.portholeBranches, {feedTitle: feedTitle});

                    var treeAllTitles = _.pluck(treeBranches, "title");
                    var treeViewedBranches = _.where(treeBranches, {bViewed: true});
                    var treeViewedTitles = _.pluck(treeViewedBranches, "title");

                    if (log) console.log("PortholeViewController - updateBranch - treeAllTitles", treeAllTitles);
                    if (log) console.log("PortholeViewController - updateBranch - treeViewedBranches", treeViewedBranches);
                    if (log) console.log("PortholeViewController - updateBranch - treeViewedTitles", treeViewedTitles);

                    // send only the values that need to be updated
                    var treeObj = {
                        userId: ($scope.bSignedIn) ? $scope.cabinQuestUserModel._id : null,
                        lastBranchTitles: treeAllTitles,
                        lastReviewedBranchTitles: treeViewedTitles,
                        title: branchObj.feedTitle,
                    };

                    $rootScope.$broadcast("PortholeViewController:branchIndex:update", {branchIndex: branchIndex, bShowViewed: currentUserModel.bShowViewed, treeObj: treeObj});

                    if (currentUserModel.bShowViewed) showAll();
                    else hideViewed();

                } else {
                    $rootScope.$broadcast("PortholeViewController:branchIndex:update", {branchIndex: branchIndex, bShowViewed: currentUserModel.bShowViewed});
                }


            }

            var displayRandomPhoto = function(){

                //if (log) console.log("PortholeViewController displayRandomPhoto $scope.portholeBranches: ", $scope.portholeBranches);

                var randomIndex = 0;
                var total = $scope.portholeBranches.length;

                if ( total > 0 ) {

                    //if (log) console.log("$scope.portholeBranches", $scope.portholeBranches);

                    var randomIndex = Math.floor( Math.random() * total ) - 1;

                    if (randomIndex >= total || randomIndex < 0 ) randomIndex = 0;
                }

                if (log) console.log("displayRandomPhoto randomIndex: " + randomIndex);

                var branchObj = $scope.portholeBranches[randomIndex];

                //if (log) console.log("PortholeViewController - displayRandomPhoto - branchObj: ", branchObj)

                if (branchObj) {

                    chooseMedium(branchObj);

                    curPhotoIndex = randomIndex;

                    $rootScope.$broadcast("PortholeViewController:index:change", {index: randomIndex + 1, branchObj: branchObj});

                } else {

                    if (log) console.log("PortholeViewController - displayRandomPhoto ERROR! - branchObj : ", branchObj)
                }

                var newBranchIndex = randomIndex + 1;
                updateBranch( branchObj, newBranchIndex );

            }

            var displayPhotoByURL = function( branches, pinnedPhotoUrl ){

                // attempt to find branch by photoUrl

                var branchObj = _.findWhere( branches, {  photoUrl: pinnedPhotoUrl }  );


                if ( "undefined" !== String(branchObj) ) {

                    var branchIndex = _.indexOf(branches, branchObj) ;

                    if (log) console.log("PortholeViewController - displayPhotoByUrl branchIndex: ", branchIndex);

                    chooseMedium(branchObj);

                    updateBranch( branchObj, Number(branchIndex) + 1 );

                    curPhotoIndex = branchIndex;

                } else {

                    var messageHTML = "<p>Your pinned photo is no longer included in this feed.</p>"
                    var bAutoClose = true;
                    var milliseconds =  3000;

                    showSystemMessage( messageHTML, bAutoClose, milliseconds);

                    setRandomPhoto();

                    currentUserModel.bUsePinnedPhoto = false;

                    $rootScope.$broadcast("PortholeViewController:unpin");

                    save();
                }

            }

            var updateCluster = function( branchObj ){

                // next vs. previous
                if ( $scope.bPreviousClicked ) {

                    curPhotoIndex - $scope.numPhotosToCluster;
                    if ( curPhotoIndex < 0 ) curPhotoIndex = 0;

                } else {

                    if ( ( curPhotoIndex + $scope.numPhotosToCluster ) >= $scope.portholeBranches.length ) curPhotoIndex - $scope.numPhotosToCluster;

                }

                var clusterBranches = getClusterBranches($scope.numPhotosToCluster);

                addClusterContainer();

                if (null !== clusterFactory ) {

                    clusterFactory.update( clusterBranches );


                } else {
                    /*
                   clusterFactory = new ClusterFactory({ scope: $scope,
                                                            bShowViewport: true});
                    clusterFactory.draw( clusterBranches );
                    */
                    console.log("PortholeViewController - ERROR - updateCluster - cluster should not be null!");
                }


            }

            var loadFullScreen = function( branchObj ){

                if ( undefined !== branchObj) {

                    if ( String( branchObj.useText ) === "true" ) {
                        //displayText( branchObj.text, branchObj );
                        //loadPhoto(branchObj.photoLargeUrl);

                        var msgHtml = "<p style='text-align:center'>No Image Available <br /> <span style='color:#ff0; font-size:12px'> loading satelite alternative </span></p>";
                        loadSateliteImage(msgHtml, branchObj, undefined, true);

                    } else {

                        var photoPath = ( branchObj.hasOwnProperty("photoLargeURL") ) ? branchObj.photoLargeURL : branchObj.photoLargeUrl;

                        if (log) console.log(branchObj, "PortholeViewController - photoPath: " + photoPath);

                        loadPhoto(photoPath, branchObj);
                    }

                }

            }

            var chooseMedium = function( branchObj ){

                if (log) console.log(branchObj, "PortholeViewController - chooseMedium");

                if ( $scope.bClusterState ) updateCluster(branchObj);
                else loadFullScreen(branchObj);

            }

            var displayPhotoByIndex = function( indexNum ){

                if (log) console.log("PortholeViewController - displayPhotoByIndex - currentUserModel: ",  currentUserModel );
                if (log) console.log("PortholeViewController - displayPhotoByIndex - $scope.portholeBranches: ", $scope.portholeBranches);
                //if (log) console.log("PortholeViewController - displayPhotoByIndex - currentForestModel.branches: ", currentForestModel.branches);

                if ( $scope.portholeBranches.length !== 0 ) {

                    var branchObj = $scope.portholeBranches[indexNum];

                    chooseMedium(branchObj);
                    updateBranch(branchObj, Number(indexNum + 1)) ;

                } else {
                    if (log) console.log("PortholeViewController - displayPhotoByIndex - ERROR $scope.portholeBranches length is 0");

                }

            }

            var doneAddingMedia = function(){

                if (log) console.log("PortholeViewController - doneAddingMedia - currentUserModel.transition: " + currentUserModel.transition)

                var animTime = (currentUserModel.transition === "instant") ? 0 : 2;

                //$landscape.animate({opacity: 1}, animTime);

                $landscape.css("opacity", 0);

                var t1 = new TimelineMax({paused: false});
                t1.to($landscape, animTime, {opacity: 1} );

                setupPhotoPresentation();

                showLandscape();

                setTimeout( function(){
                    repositionCredits();
                }, 50 );

                $rootScope.$broadcast("PortholeViewController:enable");


            }

            $scope.skipImageLoad = function(){
                if (log) console.log("PortholeViewController skipImageLoad $scope.loader: ", $scope.loader);

                PortholeImageService.cancelLoad();

                $rootScope.$broadcast("PortholeMediaController:right:click", {index: curPhotoIndex + 1});


                //$scope.loader = null;
            }


            var onLargePhotoLoadCompleteHanlder = function(){


                doneAddingMedia();
                //animateCreditsUp(0);
                //animateCreditsDown(5000);
            }

            var getTitleLinkHeight = function(){
                var titleLinkHeight = $("#titleLink").find("a").height();

                if (log) console.log("PortholeViewController - getTitleLinkHeight - titleLinkHeight: " + titleLinkHeight);

                return titleLinkHeight + 20;
            }

            var repositionCredits = function(){


                var winHeight = W.getViewportHeight();
                var winWidth = W.getViewportWidth();

                if ( winHeight <  winWidth ) {
                    // flip it for landscape
                    winHeight = W.getViewportWidth();
                    winHeight = W.getViewportHeight();
                }


                var titleHeight = $("#titleLink").height(); // block needs to be visible
                var controlsHeight = $("#creditsControls").height();

                var headlineHeight = $("#titleLink").find("span").height();

                var newContainerHeight = titleHeight + controlsHeight;

                //$('#creditsContainer').height(newContainerHeight);
                var footerHeight = $('#creditsContainer').height();
                //footerHeight = 60;

                //var creditsHeight;
                //switch (headlineHeight) {
                //case
                //}

                var offset = winHeight - ( headlineHeight + 100  );

                if ( String(offset) !== "NaN" ) {

                    //$credits.css('top', String(offset) + 'px');
                    //TweenMax.to( $("creditsContainer"), 1, { css: {'top': String(offset) + 'px'}});

                    //$credits.css('left', '20px');
                    showFullControls();

                    /*
                    if (log) console.log("PortholeViewController repositionCredits +");
                    if (log) console.log("PortholeViewController - repositionCredits  - winHeight: " + winHeight );
                    if (log) console.log("PortholeViewController - repositionCredits  - footerHeight: " + footerHeight );
                    if (log) console.log("PortholeViewController - repositionCredits  - headlineHeight: " + headlineHeight );
                    if (log) console.log("PortholeViewController - repositionCredits  - creditsTop offset: " + offset );
                    */
                    //if (log) console.log("PortholeViewController - repositionCredits  - winWidth: " + winWidth );

                } else {

                    if (log) console.log("PortholeViewController - repositionCredits - offset is NaN  - bellwoods mode don't do anything" );
                }

                var mesStrA = 'PortVCtlr winHeight: ' + winHeight + ' winWidth: ' + winWidth;
                var mesStrB = 'PortVCtlr offset: ' + offset;

                if (log) $rootScope.$broadcast("hivelog", { message: mesStrA, color: "#FFF"} );
                if (log) $rootScope.$broadcast("hivelog", { message: mesStrB, color: "#FFF"} );


                var creditsTop = $credits.css('top');
                var creditsLeft = $credits.css('left');

                var mesStrC = 'PortVCtlr creditsTop: ' + creditsTop + ' creditsLeft: ' + creditsLeft;

                if (log) $rootScope.$broadcast("hivelog", { message: mesStrC, color: "#FFF"} );


            }

            var showLoading = function(){
                $("#landscapeContainer").css({"display":"block","opacity":1})
                $("#loadingTxt").animate( {opacity: 0.9}, 200 );
            }

            var addPreloader = function(){
                if (log) console.log("PhotoViewController - addPreloader")

                var loadingSvgPath = 'img/loaders/loadingAutonomous.svg'; //ConfigService.getServerPath() + '/img/loaders/loadingWisp2.svg';

                var loadingMsg = "<div id='loadingTxt' style='opacity: 0'></div>";

                $landscape.append(loadingMsg);

                var onSVGLoaded = function( data ){

                    var svg = data.node;

                    $("#loadingTxt").append( svg );

                    var snapSVG = Snap(data.node);
                    snapSVG.attr("id", "viewport");
                    snapSVG.attr("style", "overflow:visible");

                    $scope.drone = new DronePreloaderFactory( snapSVG );

                    showLoading();

                }

                Snap.load(loadingSvgPath, onSVGLoaded ) ;
            }

            var removePreloader = function(){

                if (log) console.log("PortholeViewController - removePreloader - 1 $scope.drone: ", $scope.drone);
                /*
                var onComplete = function(){
                  $("#loadingTxt").remove();
                }



                 $("#loadingTxt").animate( {opacity: 0}, 0, onComplete );
                 */
                if ( null !== $scope.drone ) {
                    $scope.drone.destroy();
                    $scope.drone = null;

                    if (log) console.log("PortholeViewController - removePreloader - 2");
                }

                $("#loadingTxt").remove();
            }

            /*
            var animateLoading = function(){
              showLoading();

              setTimeout( function(){
                removePreloader();
              }, 2000);
            }
            */

            ///////////////////////////////////////////// BUTTONS

            var repositionLandscape = function(){
                var windowHeight = $(window).height();
                var landscapeHeight = $landscape.height();

                var overhang = landscapeHeight - windowHeight;

                // attempts to move the photo up since most focal points at near the bottom of the image especially buildings

                var newTop;

                if (overhang >= 0) {

                    var fixTop = -(overhang); //-(overhang/2);

                    newTop = fixTop + "px";

                    ////////console.log("---------------------");
                    ////////console.log("overhang: " + overhang);
                    ////////console.log("fixTop: " + fixTop);
                } else if ( overhang < 0 ) {

                    // center the div y

                    var centerY = Math.floor( ( windowHeight - landscapeHeight ) / 2 );



                    newTop = centerY + "px";


                }


                TweenMax.to($landscape, 1, {css:{ top: newTop },
                    ease:Power2.easeOut,
                    delay: 0});



                // what is the over hang?
                //console.log("repositionLandscape overhang:" + overhang);

            }



            ////////////////////////////////////////////////////////////////// PERSISTENCE

            // I want to store:
            // - photoUrl
            // - the current text
            // - timestamp

            var setCurrentStoryModel = function(){

                currentStoryModel.versionPhotoURL = currentPostcard.photoUrl;
                currentStoryModel.verstionText = $("#story").val();
                currentStoryModel.timestampAsNumber = Number( moment()._d );
                currentStoryModel.versionID = currentPostcard.versionID++;

            }



            //////////////////////////////////////////////////////////////////

            var hideAll = function() {
                $("#panelContainer").hide();

                $landscape.hide();
                //$credits.hide();
                $loading.hide();

                $landscape.css("opacity",0);
                $loading.css("opacity",0);



            }

            ///////////////////////////////////////////////////////////// SHOW & HIDE

            // MESSAGE

            var createSystemMessageQueue = function(){

                var queueCallback = function(messsageObj) {
                    //if (log) console.log("MessageQueue callback messsageObj: ", messsageObj);

                    messsageObj.showMessage( messsageObj.bSkipLink );
                    messsageObj.closeMessage( messsageObj.bSkipLink );
                };

                var options = {
                    delay: 500, //delay 2 seconds between processing items
                    paused: true, //start out paused
                    complete: function() {
                        //if (log) console.log('PortholeViewController - createSystemMessageQueue - complete!');
                    }
                };

                // create an instance of a queue
                // note that the first argument - a callback to be used on each item - is required
                systemMessageQueue = $queue.queue(queueCallback, options);

                systemMessageQueue.start(); //must call start() if queue starts paused

            }

            var previousMessage =  "";
            var bBlockTimeout = false;
            var showSystemMessage = function( messageHTMLStr, bAutoClose, timeMilliseconds, bSkipLink ){

                bSkipLink = ( typeof bSkipLink === "undefined" ) ? false : true;


                // don't bother repeating messages in rapid succession
                if ( messageHTMLStr === previousMessage ) {

                    if (!bBlockTimeout){
                        setTimeout( function() {
                            previousMessage = "";
                            bBlockTimeout = false;
                        }, 5000);

                        bBlockTimeout = true;
                    }

                    return;
                }

                var closeMessage = function( bSkipLink ){

                    if ( bAutoClose )  {

                        hideSystemMessage( timeMilliseconds );

                        $("#closeSystemMessageBtn").hide();
                        $("#portholeMessageControlsContainer").hide();

                    } else {
                        $("#closeSystemMessageBtn").show();
                        $("#portholeMessageControlsContainer").show();
                    }

                    if(bSkipLink) {
                        $("#skipLoad").off();

                        $("#skipSystemMessageBtn").show();
                        $("#portholeMessageControlsContainer").show();
                    } else {
                        $("#skipSystemMessageBtn").hide();
                        $("#portholeMessageControlsContainer").hide();
                    }


                }

                var showMessage = function( bSkipLink ){
                    $message.fadeIn("fast");

                    $message.find('.content').html(messageHTMLStr);

                    if (log) console.log("PortholeViewController showMessage bSkipLink: " + bSkipLink )

                    if(bSkipLink) {

                        $("#skipLoad").on("click", function(){
                            if (log) console.log("PortholeViewController - skip image load")
                            $rootScope.$broadcast("skip:image:load");
                        });
                    }


                }

                var messageObj = {
                    messageHTMLStr: messageHTMLStr,
                    bAutoClose: bAutoClose,
                    timeMilliseconds: timeMilliseconds,
                    showMessage: showMessage,
                    closeMessage: closeMessage,
                    bSkipLink: bSkipLink
                }


                systemMessageQueue.add( messageObj );

                previousMessage = messageHTMLStr;

            }

            var onHideSystemMessageHandler = function( event  ){
                hideSystemMessage( 0 );
            }

            var onSkipSystemMessageHandler = function( event  ){
                console.log("PortholeViewController onSkipSystemMessageHandler $scope: ", $scope);
                $scope.skipImageLoad();
            }

            var hideSystemMessage = function( timeMilliseconds ){
                setTimeout( function(){
                    $message.fadeOut("fast");
                }, timeMilliseconds);
            }

            // SETTING PANEL

            var getForestFeed = function( trees ) {

                // only load the forest once per day
                if (log) console.log("PortholeViewController - getForestFeed - trees: ", trees);
                if (log) console.log("PortholeViewController - getForestFeed - $scope.bSignedIn: " + $scope.bSignedIn);

                if ( trees.length === 0 ) {

                    if (log) console.log("PortholeViewController - ERROR! - trees is empty");
                    return;
                }

                var forestFeedPromise = PortholeTreeService.getForestFeed( trees, $scope.bSignedIn );

                forestFeedPromise.then( function(responses) {

                    var forest = _.map(responses, function(response, index){ return { branches: response.data.branches, tree: trees[index] } });

                    if (log) console.log(forest, "PortholeViewController - getForestFeed - forestFeedPromise - complete ")

                    onForestLoadedHandler(forest);

                });

            }

            var getForestFeedByTreeModels = function( treeModels ) {

                // only load the forest once per day
                if (log) console.log("PortholeViewController - getForestFeedByTreeModels - treeModels: ", treeModels);

                if ( treeModels.length !== 0 ) {

                    var forestFeedPromise = PortholeTreeService.getForestFeedByTreeModels( treeModels );

                    forestFeedPromise.then( function(responses) {

                        var forest = _.map(responses, function(response, index){ return { branches: response.data.branches, tree: treeModels[index].title, lastReviewedBranchTitles: treeModels[index].lastReviewedBranchTitles } });

                        if (log) console.log("PortholeViewController - getForestFeedByTreeModels - forestFeedPromise - responses: ", responses)
                        if (log) console.log("PortholeViewController - getForestFeedByTreeModels - forestFeedPromise - forest: ", forest);

                        onForestLoadedHandler(forest);

                    });

                } else {

                    var messageMilliseconds = 3000;
                    showSystemMessage("<p style='text-align:center'>No trees selected - Visit Settings to add some</p>", true, messageMilliseconds);

                    getManifest();

                }

            }

            var setRandomPhoto = function(){
                // disable the form

                displayRandomPhoto( $scope.portholeBranches );
            }

            var onRandomPhotoSettingsClickHandler = function(e){

                setRandomPhoto();
                save();

            };

            //////////////////////////////////////////////////////////////////////  PRESENTATION

            var setFullBrowserPhoto = function(){

                //$landscape.removeClass("landscapeCenterPhoto");
                //$landscape.addClass("landscapeFullPhoto");

                var imgTarget = $landscape.find("img");

                TweenMax.to(imgTarget, 1, {css:{width:"100%", height: "auto"}, ease:Power2.easeOut});

                //TweenMax.to($landscape, 1, {css:{width:"100%", height: "100%", top: "0px", left: "0px"}, ease:Power2.easeOut});

                TweenMax.to($landscape, 1, {css:{ width:"100%",
                    height: "100%",
                    top: "0px",
                    left: "0px",
                    margin: "0px"},
                    ease:Power2.easeOut});

                //$porthole.removeClass("portholeWhite");
                //$porthole.addClass("portholeBlack");

                //TweenMax.to($landscape, 1, {css:"landscapeFullPhoto", ease:Power2.easeOut});

            }

            var setCenterBrowserPhoto = function(){

                //$landscape.removeClass("landscapeFullPhoto");
                //$landscape.addClass("landscapeCenterPhoto");

                var imgTarget = $landscape.find("img");

                //$landscape.css("width", photoNaturalWidth + "px");
                //$landscape.css("height", photoNaturalHeight + "px");
                TweenMax.to(imgTarget, 1, {css:{width:photoNaturalWidth + "px", height: photoNaturalHeight + "px"}, ease:Power2.easeOut});


                var winHeight = $(window).height();
                var winWidth = $(window).width();

                var divX = ( winWidth / 2 ) - ( photoNaturalWidth / 2 );
                var divY =  ( winHeight / 2 ) - ( photoNaturalHeight / 2 );

                //$porthole.removeClass("portholeBlack");
                //$porthole.addClass("portholeWhite");
                //$landscape.css("top", divY + "px");

                TweenMax.to($landscape, 1, {css:{ width:photoNaturalWidth + "px",
                    height: photoNaturalHeight + "px",
                    top: divY +"px",
                    left: divX + "px",
                    margin: "0px"},
                    ease:Power2.easeOut});
                //TweenMax.to($landscape, 1, {css:"landscapeCenterPhoto", ease:Power2.easeOut});

                /*
                FULL
                left: 0px;
                height: 100%;
                background-position: 50% 50%;
                background-size: cover;
                //background-attachment: scroll;
                text-align: center;
                z-index: $landscapeContainerIndex;
                overflow: visible;

                // CENTER
                margin: auto;
               //position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                overflow: visible;
                */

            }

            ////////////////////////////////////////////////////////////////////// PERSONAL

            // LANDSCAPE

            var showLandscape = function(){
                $landscape.show();
            }

            // CREDITS

            var onResizeHandler = function(){

                if (log) $rootScope.$broadcast("hivelog", { message: 'onResizeHandler' });

                if (currentUserModel.presentation === "center") setCenterBrowserPhoto();

                //$scope.bShowPorthole = ( W.getViewportWidth() > 700 ) ? true : false;

                if ( $window.cabinQuestState.state  === "GAME_HIDE" ) repositionCredits();
            }

            var setupGestureTracker = function(){

            }

            var setupMouseTracker = function(){

                $('#portholeContainer').mousemove(function(e){

                    var x = e.pageX - this.offsetLeft;
                    var y = e.pageY - this.offsetTop;

                    //if (log) console.log( "---------------------------");

                    // nav controls

                    var maxNavX = 530;
                    var maxNavY = 100;

                    // media controls

                    var maxX = 530;
                    var maxY = W.getViewportHeight() - 200;

                    //if (log) console.log( "PortholeViewController X: " + x + " Y: " + y);
                    //if (log) console.log( "PortholeViewController maxNavX: " + maxNavX + " maxNavY: " + maxNavY);

                    //if ( x > maxX || y < maxY ) hideFullControls();

                    if  ( x < maxX && y > maxY ) {
                        //if (log) console.log( "PortholeViewController - showFullControls");
                        if ( !$scope.bShowGame ) showFullControls();
                    }

                    if  ( x < maxNavX && y < maxNavY ) {
                        // if (log) console.log( "PortholeViewController - showNavControls");
                        if ( !$scope.bShowGame ) showNavControls();
                    }

                });
            }



            var setupTablet = function(){
                //if (log) console.log("PortholeViewController - setupTablet");


            };

            var setupDesktop = function(){

                //if (log) console.log("PortholeViewController - setupDesktop");


            };

            var setWindow = function(){

                var orientation = W.getOrientation();
                var winHeight = W.getViewportHeight();
                var winWidth = W.getViewportWidth();

                //if (log) console.log("PortholeViewController - setWindow winWidth: " + winWidth);


                setupDesktop();


                // first need to call resume!
                //if ( $scope.bSkipUpdate ) skipUpdateReview();
                //skipUpdateReview();

            };

            var setupWindowManager = function(){
                //https://github.com/pyrsmk/W

                W.addListener(function(){
                    console.log("PortholeViewController - resize - $window.cabinQuestState.state: " +   $window.cabinQuestState.state );

                    if ( $window.cabinQuestState.state  === "GAME_HIDE") {

                        console.log("PortholeViewController - resizing porthole as the game is hidden");

                        onResizeHandler();
                        setWindow();
                    }


                });

                setWindow();


            }

            var onEnterClickHandler = function(){

                if (log) console.log($scope.curBranch, "PortholeViewController - onEnterClickHandler");

                $window.open($scope.curBranch.link, '_blank');

            }

            var onSettingsClickHandler = function(){

                var settingsPanelVisible = $panel.is(':visible');

                if (log) console.log("PortholeViewController - onSettingsClickHandler - settingsPanelVisible: " + settingsPanelVisible);

                if (settingsPanelVisible) hidePanel();
                else showPanel();

            }

            var setupMessages = function(){
                $("#closeSystemMessageBtn").on("click", onHideSystemMessageHandler );

                $("#skipSystemMessageBtn").on("click", onSkipSystemMessageHandler );
            }

            ///////////////////////////////////////////////////////////////// SHOW / HIDE CREDITS CONTAINER

            /*
            var showCreditsContainer = function(){

              if (log) console.log("PortholeViewController - showCreditsContainer  - creditsHidden: " + creditsHidden);

               if (!bCreditsContainerVisible) {

                var creditsEl = $("#creditsContainer");

                var onComplete = function(){
                  bCreditsContainerVisible = true;
                }

                var tl = new TimelineMax({paused: false, delay: 0});
                tl.to(creditsEl, 0.75, { opacity: 1, onComplete: onComplete   });

              }

            }


            var hideCreditsContainer = function(){

              if (log) console.log("PortholeViewController - hideCreditsContainer - creditsHidden: " + creditsHidden);


              if (bCreditsContainerVisible) {

                var creditsEl = $("#creditsContainer");

                var onComplete = function(){
                  bCreditsContainerVisible = false;
                }

                var tl = new TimelineMax({paused: false, delay: 0});
                tl.to(creditsEl, 0.75, { opacity: 0, onComplete: onComplete   });

              }

            }
            */


            var hideLandscape = function(){

                if (log) console.log("PortholeViewController - hideLandscape" );

                var hideEl = $("#landscapeContainer");

                var tl = new TimelineMax({paused: false, delay: 0});
                tl.to(hideEl, 0.75, { opacity: 0   });


            }



            ///////////////////////////////////////////////////////////////// SHOW / HIDE MEDIA CONTROLS PANEL




            var slideUpControls = function(){
                //if (log) console.log("PortholeViewController - slideUpControls - creditsHidden: " + creditsHidden);

                /*
                var bottomY = W.getViewportHeight();
                var creditsY = Number($("#creditsContainer").css("top").split("px")[0]);

                var titleLinkHeight = getTitleLinkHeight();

                var dif = bottomY - creditsY;

                if ( dif <= ( titleLinkHeight + 10 ) ) creditsHidden = true;
                */

                if (creditsHidden) {

                    var titleLinkHeight = getTitleLinkHeight();


                    //var topPos = W.getViewportHeight() - $("#creditsContainer").height() - titleLinkHeight;

                    var topPos = String( Number($("#creditsContainer").css("top").split("px")[0]) - titleLinkHeight ) + "px";
                    var creditsEl = $("#creditsContainer");

                    var tl = new TimelineMax({paused: false, delay: 0});
                    tl.to(creditsEl, 0.75, { top: topPos, ease: Expo.easeOut   });

                    creditsHidden = false;

                    $rootScope.$broadcast("PortholeViewController:credits:show");

                }
            }

            var showNavControls = function(){
                $rootScope.$broadcast("PortholeViewController:navControls:show");
            }

            var hideNavControls = function(){
                $rootScope.$broadcast("PortholeViewController:navControls:hide");
            }


            var showFullControls = function(){

                //if (log) console.log("PortholeViewController - showFullControls: " + fullControlsHidden);

                //if (log) console.log("PortholeViewController - showFullControls $window.isChromeExtension: " +  $window.isChromeExtension);
                //if (log) console.log("PortholeViewController - showFullControls $scope.bSignedIn: " + $scope.bSignedIn);

                /*
                if ( !$window.isChromeExtension.isChromeExtension && !$scope.bSignedIn ) {
                  return;
                }
                */

                clearTimeout(hideTimeout);

                if (fullControlsHidden) {

                    //var titleLinkHeight = getTitleLinkHeight();

                    //var topPos = String( Number($("#creditsContainer").css("top").split("px")[0]) - titleLinkHeight ) + "px";
                    var creditsEl = $("#creditsContainer");

                    var onStartHandler = function(){
                        $("#creditsContainer").show();
                        fullControlsHidden = false;
                    }

                    var onCompleteHandler = function(){
                        hideFullControls();
                    }

                    var tl = new TimelineMax({paused: false, delay: 0, onStart: onStartHandler, onComplete: onCompleteHandler});
                    tl.to(creditsEl, 0.75, { opacity: 1, ease: Expo.easeOut   });


                    $rootScope.$broadcast("PortholeViewController:fullControls:show", { showAll: true });

                }


                //slideUpControls();


            }

            var hideFullControls = function(){

                //if (log) console.log("PortholeViewController - hideFullControls: " + fullControlsHidden);

                if (!fullControlsHidden) {

                    hideTimeout = setTimeout( function() {

                        //var titleLinkHeight = getTitleLinkHeight();
                        //var topPos = String( Number($("#creditsContainer").css("top").split("px")[0]) - titleLinkHeight ) + "px";
                        var creditsEl = $("#creditsContainer");

                        var onCompleteHandler = function(){
                            $("#creditsContainer").hide();

                        }

                        var tl = new TimelineMax({paused: false, delay: 0, onComplete: onCompleteHandler});
                        tl.to(creditsEl, 0.75, { opacity: 0, ease: Expo.easeOut   });


                        $rootScope.$broadcast("PortholeViewController:fullControls:hide");

                    }, 3000);

                    fullControlsHidden = true;

                }

            }


            ///////////////////////////////////////////////////////////////// SHOW / HIDE SETTINGS PANEL



            var showPanel = function(){

                // if personal, set the form...

                $rootScope.$broadcast("PortholeViewController:settings:show");

                var leftPos = 0 + "px";

                var onStart = function(){
                    $("#panelContainer").show();
                    if (log) console.log("PortholeViewController - showPanel - show");
                }

                var tl = new TimelineMax({paused: false, onStart: onStart, delay: 0});

                tl.to($("#panelContainer"), 0.75, { left: leftPos, ease: Expo.easeOut   })

            }

            var hidePanel = function(){

                $rootScope.$broadcast("PortholeViewController:settings:hide");

                var leftPos = $("#panelContainer").width() + "px";

                if ( Number(leftPos) === "NaN" ) {
                    if (log) console.log("PortholeViewController - hidePanel - cancel because this is the bellwoods mode");
                    return false;
                }

                var onComplete = function(){
                    $("#panelContainer").hide();
                    if (log) console.log("PortholeViewController - hidePanel - leftPos: " + leftPos);
                }

                var settingsEl = $("#panelContainer");

                var tl = new TimelineMax({paused: false, onComplete: onComplete, delay: 0});
                tl.to(settingsEl, 0.75, { left: leftPos, ease: Power1.easeOut });

            }

            ///////////////////////////////////////////////////////////////// PLAY PAUSE

            var play = function(){

            }

            var pause = function(){

            }

            ///////////////////////////////////////////////////////////////// SIGN IN

            var onSignInHandler = function(data){

                var socialStr = data.socialStr;

                hidePanel();

                hideFullControls();
                hideNavControls();

                hideLandscape();

                $timeout( function(){

                    onSignInAnimationComplete(socialStr);

                }, 750);

            }

            var onSignInCompleteHandler = function(data){

                $scope.bSignedIn = true;

                currentCabinQuestUser = data.model;

            }

            var onSignInAnimationComplete = function(socialStr){

                //var newpath = ( document.domain === "localhost") ? "http://localhost:3000/auth/" + socialStr : "http://www.cabinquest.jit.su/auth/" + socialStr;

                var serverPath = "http://www.cabinquest.jit.su";
                var newpath = serverPath + "/auth/" + socialStr;

                if (log) console.log("PorholeViewController - socialLinkClick - newpath: " + newpath);

                $rootScope.$broadcast("signin:attempt");
                $rootScope.$broadcast("shield:up");

                $window.location.href = newpath; // makes the login REST call - shield should lower on success not timeout!!!

                // sucess will automatically take one to the profile causing a full page refresh
            }

        }]);

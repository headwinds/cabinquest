
import PortholeConfig from "../../config/porthole/PortholeConfig";
import ImagePreloader from "image-preloader";

const loadImageHelper = require('load-img'); // https://github.com/mattdesl/load-img

import Promise from "bluebird";


//const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

/*
const jsdom = require('jsdom');
const xmlserializer = require('xmlserializer');

let Snap = null;

jsdom.env('', ['node_modules/snapsvg/dist/snap.svg.js'], (error, window) => {
    if (error) throw error;

    const paper = window.Snap(100, 100);

    const rect = paper.rect(20, 20, 60, 60);
    rect.attr({fill: 'red'});

    const svg = xmlserializer.serializeToString(paper.node);
    window.close();

    console.log(svg);


    Snap = window.Snap;
});
*/

const log = PortholeConfig.getLog("PortholeImageService");

const defaultImageUrl = "http://images2.fanpop.com/image/photos/9600000/Astro-Boy-astro-boy-9613180-720-1296.jpg";
const defaultFullScreenImageUrl = "images/no-internet-backup.jpg";

export const cancelLoad = () => {

    if(window.stop !== undefined){
        window.stop();
    } else if(document.execCommand !== undefined) {
        document.execCommand("Stop", false);
    }
}

export const plainLoadImage = (url, altUrl, timeoutMilliseconds) => {

    timeoutMilliseconds = (typeof timeoutMilliseconds === "undefined") ? 10000 : timeoutMilliseconds;

    var timer;

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function handleFail() {
        // kill previous error handlers
        this.onload = this.onabort = this.onerror = function() {};
        // stop existing timer
        clearTimer();
        // switch to alternate url
        if (this.src === url) {
            this.src = altUrl;
        }
    }

    var img = new Image();
    img.onerror = img.onabort = handleFail;
    img.onload = function() {
        clearTimer();
    };
    img.src = url;

    timer = setTimeout(function(theImg) {
        return function() {
            handleFail.call(theImg);
        };
    }(img), timeoutMilliseconds);

    return(img);
}

export const loadImage = ( photoURLStr, successCallback, errorCallback, treeActorCallback ) => {

    const decodedPhotoUrl = decodeURIComponent(photoURLStr);

    console.log("PortholeImageService loadImage decodedPhotoUrl: ", decodedPhotoUrl);

    // https://www.npmjs.com/package/image-preloader

    var preloader = new ImagePreloader();

    preloader.onProgress = function(info) {
        console.log('image with source %s is loaded with status %s', info.value.src, info.status);
    };

    // note you can pass in multiple urlOrImgElement1, urlOrImgElement2, urlOrImgElement3
    const promise = preloader.preload(photoURLStr);

    promise.then(function(status){
        console.log('all done!', status);


        let img = new Image();
        img.src = photoURLStr;

        var imgObj = { url: photoURLStr, width: img.naturalWidth, height: img.naturalHeight};

        successCallback(imgObj);
        treeActorCallback(imgObj);

    });

    /*

     const loadImage = require('load-img');

     loadImage('images/foo.png', {
     crossOrigin: 'Anonymous'
     }, (err, img) => {
     if (err) throw err;
     console.log(img.width, img.height);
     document.body.appendChild(img);
     });

     */

};

export const getSateliteImage = () => {

    var altImageNum = Math.floor ( Math.random() * 16 );
    var altImagePath = "./static/img/photos/default" + String(altImageNum) + ".jpg";

    return altImagePath;

};

export const loadImageSVG = ( imgDetailsObj, callback ) => {

    if (log) console.log("PortholeImageService - loadImageSVG - imgDetailsObj: ", imgDetailsObj);

    /*


    var onSVGLoadedHandler = function(data){

        var fillColor = ( imgDetailsObj.color ) ? imgDetailsObj.color : "#009900";

        if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgDetailsObj: ", imgDetailsObj);

        var imgDefs = data.select("defs");
        //btnGroup.append(defs);


        if (imgDetailsObj.name === "game") {
            Snap(imgDefs).select("#game_0_Layer1_0_FILL").select("path")
                .attr("opacity", 1)
                .attr("fill", "#70cbc8");
        }


        //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadSVG - imgDefs: ", imgDefs);

        var part = ( typeof imgDetailsObj.part !== "undefined" ) ? imgDetailsObj.part : "";

        var imgGroup = data.select('#' + imgDetailsObj.name + part);
        var scaleNum = imgDetailsObj.scaleNum;

        if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgDefs: ", imgDefs);
        if (log) console.log("PortholeImageService - onSVGLoadedHandler - imgGroup", imgGroup);

        var translateStr = 'translate(' + imgDetailsObj.x + ',' + imgDetailsObj.y + ') scale(' + scaleNum + ')';

        if ( imgDetailsObj.bBtn && null !== imgGroup ) {
            imgGroup.click( imgDetailsObj.action );
        }

        if ( null !== imgGroup ) {

            imgGroup.attr("transform", translateStr);
            imgGroup.attr("opacity", imgDetailsObj.opacity);

            imgGroup.attr("pointer-events", imgDetailsObj.events);
            imgGroup.attr("cursor", imgDetailsObj.cursor);

            //if (log) console.log("PortholeImageService - onSVGLoadedHandler - loadedSVG - imgDetailsObj.name: " + imgDetailsObj.name);

            callback(imgGroup, imgDefs);

        } else {
            if (log) console.log("PortholeImageService - onSVGLoadedHandler ERROR! - imgGroup is null");
        }

    };

    Snap.load(imgDetailsObj.url, onSVGLoadedHandler);

    */


};

export const loadImageInDiv = ( el, photoURLStr ) => {

        // remove old photo
        el.find("img").remove();

        /*

        var loader = new PxLoader( { statusInterval: 2000 } );
        var decodedPhotoUrl = decodeURIComponent(photoURLStr);
        var pxImage = new PxLoaderImage(decodedPhotoUrl);

        loader.add(pxImage);

        // callback that runs every time an image loads
        loader.addProgressListener(function(e) {

            ////////console.log(e, "load progress");
        });

        loader.addCompletionListener(function(e) {

            //console.log(pxImage, "load complete");
            var img = pxImage.img;

            //img.naturalHeight;
            //img.naturalWidth;

            //$(img).css("width", "100%");
            //$(img).css("id", "landscape");

            el.append(img);

            onLargePhotoLoadCompleteHanlder();

        });

        loader.start();
        */

        const decodedPhotoUrl = decodeURIComponent(photoURLStr);

        //const loadImage = require('load-img');

        loadImageHelper(decodedPhotoUrl, {
            crossOrigin: 'Anonymous'
        }, (err, img) => {
            if (err) throw err;

            console.log("PortholeImageUtil loadImageInDiv: ", img.width, img.height);
            //document.body.appendChild(img);
            el.append(img);
        });


    };

export const bulkLoadImagesInDiv = (el, idStr, imageObjs, successCallback) => {

        var images = [];
        var imgCounter = 0;

        var that = this;

        var onLoaderCompleteHandler = function(e){


            var img = e.resource.img

            if ( e.error ) {

                if (log) console.log("PortholeImageService - bulkLoadImagesInDiv ERROR - error loading image ", e);

                var imgPath = that.getSateliteImage();
                var imgTag = $("<img src='" + imgPath + "'/>");

                img = imgTag;

            }

            console.log("PortholeImageService - bulkLoadImagesInDiv - complete listener img: ", img);


            imgCounter++;
            images.push(img);

            if ( imageObjs.length ===  imgCounter) {

                console.log("PortholeImageService - bulkLoadImagesInDiv - all complete");

                successCallback({images: images});

            }

        }

        _.each(imageObjs, function(imgObj, index){

            var loader = new PxLoader( { statusInterval: 2000 } );

            var decodedPhotoUrl = decodeURIComponent(imgObj.path);
            var pxImage = new PxLoaderImage(decodedPhotoUrl);

            loader.add(pxImage);
            loader.addCompletionListener(onLoaderCompleteHandler);


            loader.start();

        });

    }

export const getVideoUrl = (branchObj) => {

    // then try the description

    if ( undefined !== branchObj.description ) {

        var contentStr = branchObj.description;
        //
        var imageUrl = null;


        // default
        var startIndexNum = contentStr.indexOf("http");
        var endIndexNum = contentStr.indexOf(".jpg");

        // check for jpgs
        if ( endIndexNum === -1 ) {

            endIndexNum = contentStr.indexOf(".png");

            if (log) console.log("PortholeImageService - getVideoUrl - no jpgs");

            // check for pngs
            if ( endIndexNum === -1 ) {
                if (log) console.log("PortholeImageService - getVideoUrl - no pngs");

                endIndexNum = contentStr.indexOf(".gif");

                // check for gifs
                if ( endIndexNum === -1 ) {
                    if (log) console.log("PortholeImageService - getVideoUrl - no gifs");

                    return defaultImageUrl;
                }

            }

        }

    }
};

export const getImagesFromDescription = (branchObj) => {

    //console.log("PortholeImageService - getImagesFromDescription - branchObj: ", branchObj);

    if (branchObj === null) {
        console.error("PortholeImageUtil getImagesFromDescription branchObj is null!");
        return;
    }


    const images = [];
    const uniqueImages = [];

    const description = ( branchObj.description ) ? branchObj.description : branchObj.summary;
    const defaultFullScreenImageUrl = getSateliteImage(); //"img/loaders/defaultbackground.png"; //"./img/wallpapers/bluewallpaper";

    let imageUrl = null;
    let useText = false;

    var addImage = (imgPath, useText) => {

        if (log) console.log( "PortholeImageService - adding image imgPath: " + imgPath);

        if (imgPath === defaultFullScreenImageUrl ) useText = true;

        var resultImageObj = {
            imageUrl: imageUrl,
            defaultImageUrl: defaultFullScreenImageUrl,
            useText: useText,
            text: description,
            large: true, // assume it is large enough until loaded
        }
        // or uniq
        var found = _.find( uniqueImages, imgPath );
        //const uniquePaths = _.uniq(uniqueImages)

        if ( !found ) {

            resultImageObj.imageUrl = imgPath;
            images.push(resultImageObj);
            uniqueImages.push(imgPath);
        }

    }

    var temp = document.createElement('div');
    var frag = document.createDocumentFragment();

    temp.innerHTML = description;
    frag.appendChild(temp);

    var imgTags = temp.getElementsByTagName('img');

    // also search for image tags - frag will auto convert image to img!
    //if (log) console.log("PortholeImageService imgTags: ", imgTags);

    _.each( imgTags, function(img, index){

        if ( typeof img !== "undefined" ) {

            var imgURL;
            //if (log) console.log("PortholeImageService img: ", img);

            if ( typeof img.dataset !== "undefined"  ) {

                //imgURL = img.dataset.imgSrc;

                if ( typeof img.dataset.src !== "undefined" ) {

                    imgURL = img.dataset.src;
                    if (log) console.log("PortholeImageService tests img.dataset.src: " + imgURL);

                } else if ( undefined !== img.dataset.imgSrc ) {

                    imgURL = img.dataset.imgSrc;
                    if (log) console.log("PortholeImageService tests img.dataset.imgSrc: " + imgURL);

                } else {
                    imgURL = img.src;
                }

                if (log) console.log("PortholeImageService tests img.dataset ", img.dataset);

            } else {
                imgURL = img.src;

            }

            if (log) console.log("PortholeImageService 1 px Height check ");

            if (typeof imgURL !== "undefined") {

                var noTrackingGifCheck = true;
                if ( typeof img.height !== "undefined" && img.height === 1) {

                    if (log) console.log("PortholeImageService 1 px Height found!");

                    noTrackingGifCheck = false;
                }

                var noFeedsPortal = ( imgURL.indexOf("feedsportal") !== -1 ) ? false : true;

                if (log) console.log("PortholeImageService noFeedsPortal: " + noFeedsPortal);
                if (log) console.log("PortholeImageService imgURL: " + imgURL);

                if (noTrackingGifCheck && noFeedsPortal) addImage(imgURL, false);


            }

        }

    });

    // at least 1 image is required
    if ( images.length === 0 ) {
        addImage(defaultFullScreenImageUrl, true);
    }

    if (log) console.log("PortholeImageService images.length: " + images.length);

    return images;
};

export const getVideosFromDescription = (branchObj) => {

    if (log) console.log("PortholeImageService - getVideosFromDescription - branchObj: ", branchObj);

    var videos = [];
    var unqiueVideos = [];

    var description = ( branchObj.description ) ? branchObj.description : branchObj.summary;

    var videoUrl = null;

    var addVideo = function(videoPath){

        if (log) console.log( "PortholeImageService addVideo videoPath: " + videoPath);

        var resultVideoObj = {
            videoUrl: videoUrl,
        }

        var dupResult = _.contains( uniqueImages, videoPath );

        if ( dupResult !== true ) {

            resultVideoObj.videoUrl = videoPath;
            videos.push(resultVideoObj);
            unqiueVideos.push(videoUrl);
        }

    }

    var temp = document.createElement('div');
    var frag = document.createDocumentFragment();

    temp.innerHTML = description;
    frag.appendChild(temp);

    var videoTags = temp.getElementsByTagName('video');

    //if (log) console.log("PortholeImageService imageTags: ", imageTags);

    if ( videoTags.length > 0 ) {

        _.each( videoTags, function(video, index){

            if ( typeof video.dataset !== "undefined" ) {

                /*

                 embedType: "video"
                 embedUrl: "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZjSXcdvd-ME%3Fwmode%3Dopaque%26feature%3Doembed&wmode=opaque&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZjSXcdvd-ME%26feature%3Dyoutu.be&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZjSXcdvd-ME%2Fhqdefault.jpg&key=6efca6e5ad9640f180f14146a0bc1392&type=text%2Fhtml&schema=youtube"
                 height: "100%"
                 src: "http://www.youtube.com/watch?v=ZjSXcdvd-ME"
                 width: "100%"

                 */

                addVideo(video.dataset.src);

            }

        });

    }

    return videos;
};




angular.module('porthole.services')
.service('PortholeTwitterService', ['$http', function($http) {
    
    var log = (document.domain === "localhost") ? true : false; 

    this.tweetSharePopUp = function( tweetObj ){

        if (log) console.log ("PortholeTwitterService - tweetSharePopUp - tweetObj: ", tweetObj);

        var rawTitle = tweetObj.title;

        var aboutText = (rawTitle.length > 80) ? rawTitle.substring(0,80) + " ..." : rawTitle;

        //var shareWindowURL = 'http://twitter.com/share?url=' + tweetObj.link + '&amp;text=' + escape(aboutText);
        //var statusWindowURL = 'http://twitter.com/home?status=' + aboutText + " " + escape(tweetObj.link);
        var shareWindowURL = 'http://twitter.com/share?url=' + encodeURIComponent(tweetObj.link) + '&amp;text=' + encodeURIComponent(aboutText);
        var statusWindowURL = 'http://twitter.com/home?status=' + encodeURIComponent(aboutText) + " " + encodeURIComponent(tweetObj.link);

        window.open(statusWindowURL, 'twitterwindow', 'height=380, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

    }

    this.tweetShareAuth = function( tweetObj ) {

        var restUrl = "https://twitter.com/share";

        var tweeSharePromise = $http.post(restUrl, {
                                          params: tweetData
                                      });

        return tweeSharePromise;
    };

    
}]);

// https://gist.github.com/Shoen/6350967
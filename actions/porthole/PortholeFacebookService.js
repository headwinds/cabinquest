angular.module('porthole.services')
.service('PortholeTwitterService', ['$http', function($http) {
    
    var log = (document.domain === "localhost") ? true : false; 

    this.facebookSharePopUp = function( tweetObj ){

       // https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.3

    }


    
}]);

// https://gist.github.com/Shoen/6350967
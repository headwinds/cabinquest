//Articles service used for articles REST endpoint
angular.module('cabinquest.bellwoods').factory('FeedFactoryService', 
  ['$http', '$q', 'ConfigService', 
  function($http, $q, ConfigService) {
    
    var self = this;

    var serverPath = ConfigService.getServerPath();
        
    return {

        getFeed : function( feedObj ){

            console.log("FeedFactoryService - getfeed");

            self.data = {
                
                feedPromise:  $http.post(serverPath + '/bellwoods/feed/get', {
                                          params: feedObj
                                      })
                                
            };

            return self.data;
        },


        create : function( feedObj ){

            console.log("FeedFactoryService - getfeed");

             self.data = {

                feedPromise: $http.post(serverPath + '/bellwoods/feed/create', {
                                          params: feedObj
                                      })
            
            };

            return self.data;
        },

        addFeed : function( feedObj ){

            console.log(feedObj, "FeedFactoryService - addFeed");

            self.data = {

                feedPromise: $http.post(serverPath + '/bellwoods/feed/add', {
                                          params: feedObj
                                      })
            
            };

            return self.data;
        },

        removeFeed : function( feedObj ){

            console.log(feedObj, "FeedFactoryService - removeFeed");

            self.data = {

                feedPromise: $http.post(serverPath + '/bellwoods/feed/remove', {
                                          params: feedObj
                                      })
            
            };

            return self.data;
        },

        update : function( feedObj ){

            console.log(feedObj, "FeedFactoryService - update");

            self.data = {

                feedPromise: $http.post(serverPath + '/bellwoods/feed/update', {
                                          params: feedObj
                                      })
            
            };

            return self.data;
        },
       

    }

}]);

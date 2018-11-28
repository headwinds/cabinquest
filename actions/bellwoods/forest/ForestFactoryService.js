

//Articles service used for articles REST endpoint
angular.module('cabinquest.bellwoods').factory('ForestFactoryService', 
    ['$http', '$q', 'ConfigService',
    function($http, $q, ConfigService) {
    
    var self = this;

    var serverPath = ConfigService.getServerPath();
        
    return {

        getForestByUserId : function( userIdStr, forestTitleStr ){

            console.log("ForestFactoryService - getForestByUserId - userIdStr: " + userIdStr);

            self.data = {
                
                forestPromise: $http.post(serverPath + '/bellwoods/forest/getForestByUserId', {
                                          params: { userId: userIdStr, title: forestTitleStr }
                                      })
            };

            return self.data;
        },

        createForest : function( userIdStr, titleStr, trees ){

            console.log("ForestFactoryService - createForest - userIdStr: " + userIdStr);

            self.data = {
                
                forestPromise: $http.post(serverPath + '/bellwoods/forest/create', {
                                          params: { userId: userIdStr, title: titleStr, trees: trees } 
                                      })
            };

            return self.data;
        },

        updateForest : function( userIdStr, titleStr, trees ){

            console.log("ForestFactoryService - updateForest - userIdStr: " + userIdStr);

            self.data = {
                
                forestPromise: $http.post(serverPath + '/bellwoods/forest/update', {
                                          params: { userId: userIdStr, title: titleStr, trees: trees }
                                      })
            };

            return self.data;
        },

        addTreeId : function( forestObj ){

            console.log("ForestFactoryService - updateForest - treeId: " + forestObj.treeId);

            self.data = {
                
                forestPromise: $http.post(serverPath + '/bellwoods/forest/tree/add', {
                                          params: forestObj
                                      })
            };

            return self.data;
        },

        deleteForest : function( userIdStr, titleStr ){

            console.log("ForestFactoryService - deleteForest - userIdStr: " + userIdStr);

            self.data = {
                
                forestPromise: $http.post(serverPath + '/bellwoods/forest/delete', {
                                          params: { userId: userIdStr, title: titleStr }
                                      })
            };

            return self.data;
        },
    }

}]);

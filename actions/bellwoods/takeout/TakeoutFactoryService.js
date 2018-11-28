

angular.module('cabinquest.bellwoods').factory('TakeoutFactoryService', 
    ['$http', '$q', 'ConfigService',
    function($http, $q, ConfigService) {
    
    var self = this;
    var serverPath = ConfigService.getServerPath();
        
    return {

        getTakeout : function(){

          	console.log("TakeoutFactoryService - getTakeout");

            self.data = { takeoutPromise: $http.get(serverPath + '/takeout') };

            return self.data;
        }
    }
}]);

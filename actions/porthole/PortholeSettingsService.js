
angular.module('porthole.services').factory('PortholeSettingsService', ['$http', '$q', 'ConfigService', function($http, $q, ConfigService) {
    
    var self = this;

    var serverPath = ConfigService.getServerPath();
        
    return {

        saveSetting : function( attr, val, userId ){

            console.log("PortholeSettingsService - settingsObj");

            var dataObj = {attr: attr, val: val, userId: userId}

            self.data = {

              // bellwoods/trees/create
                
                settingsPromise: $http.post(serverPath + '/bellwoods/porthole/setting/save', {
                                          params: dataObj
                                      })
            };

            return self.data;
        },

        getSettings : function( userId ){

            console.log("PortholeSettingsService - getSettings");

            var dataObj = { userId: userId };

            self.data = {

              // bellwoods/trees/create
                
                settingsPromise: $http.post(serverPath + '/bellwoods/porthole/settings/get', {
                                          params: dataObj
                                      })
            };

            return self.data;
        },

        createSettings : function( userId ){

            console.log("PortholeSettingsService - createSettings");

            var dataObj = { userId: userId };

            self.data = {

              // bellwoods/trees/create
                
                settingsPromise: $http.post(serverPath + '/bellwoods/porthole/settings/create', {
                                          params: dataObj
                                      })
            };

            return self.data;
        }
    }

}]);
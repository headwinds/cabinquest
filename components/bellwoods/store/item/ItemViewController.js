angular.module('cabinquest.bellwoods').controller('ItemViewController', 
	['$rootScope',
	'$scope', 
	'$location', 
	'ConfigService',
	function (	$rootScope,	
				$scope, 
				$location,
				ConfigService) {

	var log = ConfigService.getLog("ItemViewController");		

    $scope.init = function(){

        if(log) console.log("ItemViewController init");


    }

    $scope.onStoreItemClickHandler = function(model) {
    	
    	if(log) console.log("ItemViewController item clicked");

    	$rootScope.$broadcast("ItemViewController:item:clicked", model)

    };

}]);
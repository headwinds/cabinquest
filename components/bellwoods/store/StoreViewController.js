angular.module('cabinquest.bellwoods').controller('StoreViewController', 
	['$rootScope',
    '$scope', 
	'$location', 
    'StoreService',
    'ConfigService',
	function (	$rootScope,
                $scope, 
				$location,
                StoreService,
                ConfigService) {

	var buttons = [  { name: "close", opacity: 1, action: "close" }];	
	
    $scope.storeControlsModel = {title: "Store", 
                                parentId: "storeContainer", 
                                parentView: "SpaceViewController",
                                buttons: buttons,
                                bDrag: false,
                                bFixNavColors: false,
                                styleObj: { "fill":"#3a8784" },
                                bRenderBackground: false,
                                viewportWidth: buttons.length + 40};

    $scope.itemModels = StoreService.getDefaultStoreItems();                        

    var log = ConfigService.getLog("StoreViewController");	

    $scope.init = function(){

        if (log) console.log("StoreViewController init");
        setupEvents();

    };

    var setupEvents = function(){

        $scope.$on("SpaceViewController:store:open", function(event,data){
            $("#" + $scope.storeControlsModel.parentId).show();
        });

        $scope.$on("ItemViewController:item:clicked", function(event,data){
            if (log) console.log("StoreViewController heard item clicked", data);
        });


    };

    //////////////////////////////////////////////////////////////////

    var addItemToInventory = function( addItem ){
    
        var curInventory = $scope.player.inventory;

        var bFoundItem = false;
        for ( var ix in curInventory ) {

          var itemInv = curInventory[ix];

          if (log) console.log("-----------------");
          if (log) console.log("SpaceViewController addItemToInventory itemInv: ", itemInv);
          if (log) console.log("SpaceViewController addItemToInventory addItem: ", addItem);

          if ( itemInv.key === addItem.key ) {
            itemInv.total += addItem.total;

            bFoundItem = true; 
            break;
          }

        }

        if (log) console.log("SpaceViewController addItemToInventory bFoundItem: " + bFoundItem);

        if (!bFoundItem) curInventory[addItem.key] = addItem;

        if (log) console.log("SpaceViewController addItemToInventory curInventory: ", curInventory);

        $timeout( function(){
          $scope.player.inventory = curInventory;
        });

    };

    var removeItemFromInventory = function(){
        
    }

    var onBuyHandler = function(){

        // are there any items selected?

        // add selected items
        var totalCost = 0;
        var totalItems = 0;

        var curCreditsTotal = $scope.player.inventory.credits.total;

        for ( var ix in $scope.store ) {

            var item = $scope.store[ix];
            
            if ( item.selected ) {
              addItemToInventory(item);
              totalCost += item.price;
              totalItems++;
            }
        }

        var messageHTML = "<p style='text-align:center'>You can't afford this amount</p>";

        if (log) console.log("SpaceViewController onBuyHandler totalCost: " + totalCost);

        // can I afford these items?
        if ( curCreditsTotal >= totalCost ) {

            if ( totalItems > 1 ) messageHTML = "<p style='text-align:center'>You have purchased these items</p>";
            else  messageHTML = "<p style='text-align:center'>You have purchased this item</p>";
      
            $timeout( function(){
              $scope.player.inventory.credits.total = curCreditsTotal - totalCost;
            });
        }

        displayPlayerMessage(messageHTML);
    
    };

    ///////////////////////////////////////////////////////////////// ACTIONS

    $scope.onStoreItemClickHandler = function( itemModel ){

        if (log) console.log("SpaceViewController onStoreItemClickHandler itemModel: ", itemModel);

        $timeout( function(){
           itemModel.selected =  !itemModel.selected;

           //$("#item0").addClass("storeItemSelected");
         });
    }

    $scope.buy = function(){
         if (log) console.log("SpaceViewController buy");
         onBuyHandler(); 
    }

    $scope.sell = function(){
         if (log) console.log("SpaceViewController sell");
    }

}]);
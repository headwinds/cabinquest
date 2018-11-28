angular.module('cabinquest.bellwoods')
.service('StoreService', ['$http', function($http) {

    // all items 
    var credits = { title: "Credits", price: 1, selected: false, total: 200, key: "credits"};

    var allpurposeFlour = { title: "All Purpose Flour", price: 4, selected: false, total: 1, key: "a-flour"};
    var breadFlour = { title: "Break Flour", price: 6, selected: false, total: 1, key: "b-flour"};
    var instantYeast = { title: "Instant Yeast", price: 1, selected: false, total: 1, key: "i-yeast"};
    var dryActiveYeast = { title: "Dry Active", price: 1, selected: false, total: 1, key: "d-yeast"};

    // illegal items 
    var weedSeeds = { title: "Weed Seeds", price: 1, selected: false, total: 20, key: "w-seeds"};

    // big city brave 
    var standardPellets = { title: "Standard Pellets", price: 10, selected: false, total: 20, key: "s-pellets"};
    var organicPellets = { title: "Organic Pellets", price: 15, selected: false, total: 20, key: "o-pellets"};

    var standardCoop = { title: "Standard Coop", price: 200, selected: false, total: 1, key: "s-coop"};
    var aframeCoop = { title: "Aframe Coop", price: 250, selected: false, total: 1, key: "a-coop"};
    var deluxeCoop = { title: "Deluxe Coop", price: 400, selected: false, total: 1, key: "d-coop"};
    var diyCoop = { title: "DIY Coop", price: 120, selected: false, total: 1, key: "diy-coop"};

    this.getDefaultStoreItems = function() {

        var itemsArray = [  standardPellets, organicPellets, 
                            standardCoop, aframeCoop, deluxeCoop, diyCoop
                            ];

        return itemsArray;
    };

    this.getDefaultGroceryStoreItems = function() {

        var itemsArray = [  allpurposeFlour, breadFlour, 
                            instantYeast, dryActiveYeast, 
                            ];

        return itemsArray;
    };

     this.getDefaultDarkItems = function() {

        var itemsArray = [  allpurposeFlour, breadFlour, 
                            instantYeast, dryActiveYeast, 
                            ];

        return itemsArray;
    };

   
}]);

angular.module('cabinquest.bellwoods').factory('MapMovementService', function() {
  
  
  // Our first service
  var MapMovementService = { 
  
      moveMapByCharacter: function( newPos ){

        var mapWidth = $("#bellwoods").width();
        var mapHeight = $("#bellwoods").height();

        var mapZoom = 1;
      
        var centreX = ( mapWidth / 2 ); //- newPos.x;
        var centreY = ( mapHeight / 2 ); //- newPos.y; 
        //centreY = centreY / 2; // not sure why I need to do this but I do... 

        var newMapX = -( (newPos.x * mapZoom) - centreX);
        var newMapY = -( (newPos.y * mapZoom) - centreY);

        //var centerPos = {x: centreX, y: centreY};
        //var curSpiderCTM =  that.spider[0][0].getCTM();
        //var curSpiderScreenCTM =  that.spider[0][0].getScreenCTM();
        //var curSpiderPos = {ctm: curSpiderCTM, screenCTM: curSpiderScreenCTM};

        var newMapPos = { x: newMapX, y: newMapY}

        var newTrans = "translate(" + newMapPos.x + "," + newMapPos.y + ")scale(" + mapZoom + ")"

        d3.select("#bellwoods")
                    .transition()
                        .duration(1000)
                        .attr("transform", function() {
                            return newTrans;
                        });

        console.log(newTrans, "MapMovementService - moveMapByCharacter");

    }

  };

  // API
  return MapMovementService;

});
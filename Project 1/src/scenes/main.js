Crafty.scene("main", function() {
		
	var elements = [
        "src/entities/thimble.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		//sc['ufo'] = new Ufo();
		//infc['info'] = new Info();
			$.getJSON("./web/levels/maptest2.json",function(mapSource){
				Crafty.e("2D, Canvas, TiledMapBuilder").createWorld(mapSource, function(tiledmap){
					//set up borders
					for(var border = 0; border < tiledmap.getLayer('border').length; border++)
					{
						
						tiledmap.getLayer('border')[border]
								.addComponent("Collision, Border")
								.collision();
					}
					
					sc['thimble'] = new Thimble();
					
				});
			});
		
	
	});
	

	

	
	/*var map = Crafty.e("TiledLevel");
		map.tiledLevel("./web/levels/maptest2.json", "Canvas");
	console.log(map);*/
});

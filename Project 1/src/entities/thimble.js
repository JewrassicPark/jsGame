Thimble = BaseEntity.extend({
	defaults: {
        'speed' : 2,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway, Keyboard, thimble, SpriteAnimation, Mouse, Collision, MouseHover");

		/*
		new Crafty.polygon([21,63],[40,55],[59,52],[71,52],[74,39],[83,24],[102,13],[117,13],[119,13],[136,24],[147,37],[151,51],[174,54],[190,58],[195,62],[200,68],[196,78],[180,85],[148,91],[102,92],[70,91],[46,86],[24,80],[17,68],[18,64])
		*/
		
    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
            .collision()
            .multiway(model.get('speed'), {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
            .bind('EnterFrame', function(e){

            })
            .bind('Click', function(){
                
            })
	
			.animate("walkLeft",0,1,2)
			.animate("walkRight",0,2,2)
			.animate("walkDown",0,0,2)
			.animate("walkUp",0,3,2)
			.animate("walkUpLeft",0,6,2)
			.animate("walkUpRight",0,6,2)
			.animate("walkDownLeft",0,4,2)
			.animate("walkDownRight",0,5,2)
			.bind('NewDirection', function(e){
				//check diagonals first
				this.stop();
				var animation = null;
				if(e.x > 0 && e.y < 0) //up and right
				{
					animation = "walkUpRight";
				}
				else if(e.x > 0 && e.y > 0) //down and right
				{
					animation = "walkDownRight";
				}
				else if(e.x < 0 && e.y < 0) // up and left
				{
					animation = "walkUpLeft";
				}
				else if(e.x < 0 && e.y > 0) //down and left
				{
					animation = "walkDownLeft";
				}
				else if(e.x > 0) // moving right
				{
					animation = "walkRight";
				}
				else if(e.x < 0) //left
				{
					animation = "walkLeft";
				}
				else if(e.y > 0) //down
				{
					animation = "walkDown";
				}
				else if(e.y < 0) //up 
				{
					animation = "walkUp";
				}
				
				if(animation != null)
				{
					this.animate(animation, 20, -1);
				}
				
			})
			.bind('Moved', function(from){
				console.log(this.hit('Border'));
				if(this.hit('Border'))
				{
					this.attr({x:from.x,y:from.y});
				}
			})
			.setName('Thimble');

            entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});
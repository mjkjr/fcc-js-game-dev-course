//export { Enemy1, Enemy2, Enemy3, Enemy4 };

class Enemy1 {

	constructor( context, canvas_width, canvas_height ) {

		// canvas context
		this.context = context;

		// sprite sheet image
		this.image = new Image();
		this.image.src = 'art/enemy1.png';

		// sprite frame size
		this.spriteWidth = 293;
		this.spriteHeight = 155;

		// sprite frame count (zero-indexed)
		this.maxFrame = 5;

		// randomize initial sprite frame
		this.frame = Math.floor(Math.random() * this.maxFrame);

		// draw size
		this.scale = ( 1 + Math.random() * 2 );
		this.width = this.spriteWidth / this.scale;
		this.height = this.spriteHeight / this.scale;

		// randomize initial coordinates, constrained to canvas
		this.x = Math.random() * ( canvas_width - this.width );
		this.y = Math.random() * ( canvas_height - this.height );

		// movement speed
		this.speed = 0;

		// randomize animation speed
		this.animationSpeed = Math.floor(2 + Math.random() * 4);

		// collision flag
		this.isCollided = false;
	}

	/**
	 * Updates the enemy state
	 */
	update( gameFrame ) {

		this.x += -7.5 + Math.random() * 15;
		this.y += -7.5 + Math.random() * 15;

		this.isCollided = false;

		if ( gameFrame % this.animationSpeed == 0 ) {

			this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
		}
	}

	/**
	 * Draws the enemy
	 */
	draw() {

		// draw red bounding box if collision was detected
		if ( this.isCollided ) {
			this.context.fillStyle = "#ff0000";
			this.context.fillRect( this.x, this.y, this.width, this.height );
		}

		this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
	}
}

class Enemy2 {

	constructor( context, canvas_width, canvas_height ) {

		// canvas context
		this.context = context;

		// sprite sheet image
		this.image = new Image();
		this.image.src = 'art/enemy2.png';

		// sprite frame size
		this.spriteWidth = 266;
		this.spriteHeight = 188;

		// sprite frame count (zero-indexed)
		this.maxFrame = 5;

		// randomize initial sprite frame
		this.frame = Math.floor(Math.random() * this.maxFrame);

		// draw size
		this.scale = ( 1 + Math.random() * 2 );
		this.width = this.spriteWidth / this.scale;
		this.height = this.spriteHeight / this.scale;

		// randomize initial coordinates, constrained to canvas
		this.x = Math.random() * ( canvas_width - this.width );
		this.y = Math.random() * ( canvas_height - this.height );

		// movement speed
		this.speed = 1 + Math.random() * 4; 

		// sine wave based movement angle
		this.angle = Math.random() * 2;
		this.angleSpeed = Math.random() * 0.2;
		this.curveSize = Math.random() * 6;

		// randomize animation speed
		this.animationSpeed = Math.floor(2 + Math.random() * 4);

		// collision flag
		this.isCollided = false;
	}

	/**
	 * Updates the enemy state
	 */
	update( gameFrame, canvas_width ) {

		this.x -= this.speed;
		this.y += Math.sin( this.angle ) * this.curveSize;
		this.angle += this.angleSpeed;

		this.isCollided = false;

		if ( this.x + this.width < 0 ) { this.x = canvas_width }

		if ( gameFrame % this.animationSpeed == 0 ) {

			this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
		}
	}

	/**
	 * Draws the enemy
	 */
	draw() {

		// draw red bounding box if collision was detected
		if ( this.isCollided ) {
			this.context.fillStyle = "#ff0000";
			this.context.fillRect( this.x, this.y, this.width, this.height );
		}

		this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
	}
}

class Enemy3 {

	constructor( context, canvas_width, canvas_height ) {

		// canvas context
		this.context = context;

		// sprite sheet image
		this.image = new Image();
		this.image.src = 'art/enemy3.png';

		// sprite frame size
		this.spriteWidth = 218;
		this.spriteHeight = 177;

		// sprite frame count (zero-indexed)
		this.maxFrame = 5;

		// randomize initial sprite frame
		this.frame = Math.floor(Math.random() * this.maxFrame);

		// draw size
		this.scale = ( 1 + Math.random() * 2 );
		this.width = this.spriteWidth / this.scale;
		this.height = this.spriteHeight / this.scale;

		// randomize initial coordinates, constrained to canvas
		this.x = Math.random() * ( canvas_width - this.width );
		this.y = Math.random() * ( canvas_height - this.height );

		// movement speed
		this.speed = 1 + Math.random() * 4; 

		// sine wave based movement angle
		this.angle = Math.random() * 2;
		this.angleSpeed = 0.5 + Math.random() * 2;
		//this.curveSize = (CANVAS_WIDTH/6) + Math.random() * (CANVAS_WIDTH/2);

		// randomize animation speed
		this.animationSpeed = Math.floor(2 + Math.random() * 4);

		// collision flag
		this.isCollided = false;
	}

	/**
	 * Updates the enemy state
	 */
	update( gameFrame, canvas_width, canvas_height ) {

		this.x = (canvas_width/2 - this.width/2) + Math.sin( this.angle * Math.PI / 230 ) * canvas_width/2;
		this.y = (canvas_height/2 - this.height/2) + Math.cos( this.angle * Math.PI / 180 ) * canvas_height/2;
		this.angle += this.angleSpeed;

		this.isCollided = false;

		if ( gameFrame % this.animationSpeed == 0 ) {

			this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
		}
	}

	/**
	 * Draws the enemy
	 */
	draw() {

		// draw red bounding box if collision was detected
		if ( this.isCollided ) {
			this.context.fillStyle = "#ff0000";
			this.context.fillRect( this.x, this.y, this.width, this.height );
		}

		this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
	}
}

class Enemy4 {

	constructor( context, canvas_width, canvas_height ) {

		// canvas context
		this.context = context;

		// sprite sheet image
		this.image = new Image();
		this.image.src = 'art/enemy4.png';

		// sprite frame size
		this.spriteWidth = 213;
		this.spriteHeight = 213;

		// sprite frame count (zero-indexed)
		this.maxFrame = 5;

		// randomize initial sprite frame
		this.frame = Math.floor(Math.random() * this.maxFrame);

		// draw size
		this.scale = ( 1 + Math.random() * 2 );
		this.width = this.spriteWidth / this.scale;
		this.height = this.spriteHeight / this.scale;

		// randomize initial coordinates, constrained to canvas
		this.x = Math.random() * ( canvas_width - this.width );
		this.y = Math.random() * ( canvas_height - this.height );
		this.newX = Math.random() * ( canvas_width - this.width );
		this.newY = Math.random() * ( canvas_height - this.height );

		// movement speed
		this.speed = 10 + Math.random() * 100;

		// randomize animation speed
		this.animationSpeed = Math.floor(2 + Math.random() * 4);

		// interval
		this.interval = Math.floor(50 + Math.random() * 200);

		// collision flag
		this.isCollided = false;
	}

	/**
	 * Updates the enemy state
	 */
	update( gameFrame, canvas_width, canvas_height ) {

		if ( gameFrame % this.interval == 0) {
			this.newX = Math.random() * ( canvas_width - this.width );
			this.newY = Math.random() * ( canvas_height - this.height );
		}

		let dx = this.x - this.newX;
		let dy = this.y - this.newY;

		this.x -= dx / this.speed;
		this.y -= dy / this.speed;

		this.isCollided = false;

		if ( gameFrame % this.animationSpeed == 0 ) {

			this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
		}
	}

	/**
	 * Draws the enemy
	 */
	draw() {

		// draw red bounding box if collision was detected
		if ( this.isCollided ) {
			this.context.fillStyle = "#ff0000";
			this.context.fillRect( this.x, this.y, this.width, this.height );
		}

		this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
	}
}

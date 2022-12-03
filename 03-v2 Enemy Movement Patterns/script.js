// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

/**
 * Runs the game on window load.
 * Code inside the anonymous function stays out of global scope
 */
 window.addEventListener( 'load', function() {

	/** @type {HTMLCanvasElement} */
	const canvas1 = this.document.getElementById( 'canvas1' );
	const context = canvas1.getContext( '2d' );

	// set canvas size
	const canvas1Style = this.window.getComputedStyle(canvas1);
	let CANVAS_WIDTH = canvas1.width = parseFloat(canvas1Style.width, 10);
	let CANVAS_HEIGHT = canvas1.height = parseFloat(canvas1Style.height, 10);
	console.log( "Canvas Size = " + CANVAS_WIDTH + " x " + CANVAS_HEIGHT );

	this.window.addEventListener( 'resize', (event) => {

		// note: this doesn't handle re-calculating game objects relative positions

		// use the new grid size for height since the canvas doesn't scale properly
		gridStyle = this.window.getComputedStyle( document.getElementById('grid') );

		CANVAS_WIDTH = canvas1.width = parseFloat(canvas1Style.width, 10);
		CANVAS_HEIGHT = canvas1.height = parseFloat(gridStyle.height, 10);
		console.log( "Resized Canvas = " + CANVAS_WIDTH + " x " + CANVAS_HEIGHT );
	});

	const NUM_ENEMIES = 12;
	const enemies = [ [], [], [], [] ];

	let gameFrame = 0;

	class Enemy1 {

		constructor( context ) {

			// canvas context
			this.context = context;

			// sprite sheet image
			this.image = new Image();
			this.image.src = '../assets/art/characters/enemy1.png';

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
			this.x = Math.random() * ( CANVAS_WIDTH - this.width );
			this.y = Math.random() * ( CANVAS_HEIGHT - this.height );

			// movement speed
			this.speed = 0;

			// randomize animation speed
			this.animationSpeed = Math.floor(2 + Math.random() * 4);
		}

		/**
		 * Updates the enemy state
		 */
		update() {
			this.x += -7.5 + Math.random() * 15;
			this.y += -7.5 + Math.random() * 15;

			if ( gameFrame % this.animationSpeed == 0 ) {

				this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
			}
		}

		/**
		 * Draws the enemy
		 */
		draw() {

			this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
		}
	}

	class Enemy2 {

		constructor( context ) {

			// canvas context
			this.context = context;

			// sprite sheet image
			this.image = new Image();
			this.image.src = '../assets/art/characters/enemy2.png';

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
			this.x = Math.random() * ( CANVAS_WIDTH - this.width );
			this.y = Math.random() * ( CANVAS_HEIGHT - this.height );

			// movement speed
			this.speed = 1 + Math.random() * 4; 

			// sine wave based movement angle
			this.angle = Math.random() * 2;
			this.angleSpeed = Math.random() * 0.2;
			this.curveSize = Math.random() * 6;

			// randomize animation speed
			this.animationSpeed = Math.floor(2 + Math.random() * 4);
		}

		/**
		 * Updates the enemy state
		 */
		update() {
			this.x -= this.speed;
			this.y += Math.sin( this.angle ) * this.curveSize;
			this.angle += this.angleSpeed;

			if ( this.x + this.width < 0 ) { this.x = CANVAS_WIDTH }

			if ( gameFrame % this.animationSpeed == 0 ) {

				this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
			}
		}

		/**
		 * Draws the enemy
		 */
		draw() {

			this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
		}
	}

	class Enemy3 {

		constructor( context ) {

			// canvas context
			this.context = context;

			// sprite sheet image
			this.image = new Image();
			this.image.src = '../assets/art/characters/enemy3.png';

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
			this.x = Math.random() * ( CANVAS_WIDTH - this.width );
			this.y = Math.random() * ( CANVAS_HEIGHT - this.height );

			// movement speed
			this.speed = 1 + Math.random() * 4; 

			// sine wave based movement angle
			this.angle = Math.random() * 2;
			this.angleSpeed = 0.5 + Math.random() * 2;
			//this.curveSize = (CANVAS_WIDTH/6) + Math.random() * (CANVAS_WIDTH/2);

			// randomize animation speed
			this.animationSpeed = Math.floor(2 + Math.random() * 4);
		}

		/**
		 * Updates the enemy state
		 */
		update() {
			this.x = (CANVAS_WIDTH/2 - this.width/2) + Math.sin( this.angle * Math.PI / 230 ) * CANVAS_WIDTH/2;
			this.y = (CANVAS_HEIGHT/2 - this.height/2) + Math.cos( this.angle * Math.PI / 180 ) * CANVAS_HEIGHT/2;
			this.angle += this.angleSpeed;

			if ( gameFrame % this.animationSpeed == 0 ) {

				this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
			}
		}

		/**
		 * Draws the enemy
		 */
		draw() {

			this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
		}
	}

	class Enemy4 {

		constructor( context ) {

			// canvas context
			this.context = context;

			// sprite sheet image
			this.image = new Image();
			this.image.src = '../assets/art/characters/enemy4.png';

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
			this.x = Math.random() * ( CANVAS_WIDTH - this.width );
			this.y = Math.random() * ( CANVAS_HEIGHT - this.height );
			this.newX = Math.random() * ( CANVAS_WIDTH - this.width );
			this.newY = Math.random() * ( CANVAS_HEIGHT - this.height );

			// movement speed
			this.speed = 10 + Math.random() * 100;

			// randomize animation speed
			this.animationSpeed = Math.floor(2 + Math.random() * 4);

			// interval
			this.interval = Math.floor(50 + Math.random() * 200);
		}

		/**
		 * Updates the enemy state
		 */
		update() {

			if ( gameFrame % this.interval == 0) {
				this.newX = Math.random() * ( CANVAS_WIDTH - this.width );
				this.newY = Math.random() * ( CANVAS_HEIGHT - this.height );
			}

			let dx = this.x - this.newX;
			let dy = this.y - this.newY;

			this.x -= dx / this.speed;
			this.y -= dy / this.speed;

			if ( gameFrame % this.animationSpeed == 0 ) {

				this.frame >= this.maxFrame ? this.frame = 0 : this.frame++;
			}
		}

		/**
		 * Draws the enemy
		 */
		draw() {

			this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
		}
	}


	for ( let i = 0; i < NUM_ENEMIES/4; i++ ) {

		enemies[0].push( new Enemy1( context ) );
		enemies[1].push( new Enemy2( context ) );
		enemies[2].push( new Enemy3( context ) );
		enemies[3].push( new Enemy4( context ) );
	}

	/**
	 * Draws the game scene
	 */
	function animate() {

		// clear the canvas before drawing the current frame
		context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

		enemies.forEach( (enemyGroup) => {

			enemyGroup.forEach( (enemy) => {

				enemy.update();
				enemy.draw();
			});
		});

		gameFrame++;

		// continue animating
		requestAnimationFrame( animate );
	}
	animate();
});

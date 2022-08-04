// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

/**
 * Runs the game on window load.
 * Code inside the anonymous function stays out of global scope
 */
window.addEventListener( 'load', function() {

	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById( 'canvas' );
	const context = canvas.getContext( '2d' );

	// set canvas size
	const CANVAS_WIDTH = canvas.width = 400;
	const CANVAS_HEIGHT = canvas.height = 800;

	const NUM_ENEMIES = 12;
	const enemies = [];

	let gameFrame = 0;

	class Enemy {

		constructor() {

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
			this.x = Math.random() * ( canvas.width - this.width );
			this.y = Math.random() * ( canvas.height - this.height );

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

			context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height );
		}
	}

	for ( let i = 0; i < NUM_ENEMIES; i++ ) {

		enemies.push( new Enemy( 200, 200 ) );
	}

	/**
	 * Draws the game scene
	 */
	function animate() {

		// clear the canvas before drawing the current frame
		context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

		enemies.forEach( ( enemy ) => {
			enemy.update();
			enemy.draw();
		});

		gameFrame++;

		// continue animating
		requestAnimationFrame( animate );
	}
	animate();
});

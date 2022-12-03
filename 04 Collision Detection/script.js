// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

// import enemey classes
//import { Enemy1, Enemy2, Enemy3, Enemy4 } from './enemies.js';

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

		console.warn("Resize event handler doesn't re-calculate game object relative positions");

		// use the new grid size for height since the canvas doesn't scale properly
		gridStyle = this.window.getComputedStyle( document.getElementById('grid') );

		CANVAS_WIDTH = canvas1.width = parseFloat(canvas1Style.width, 10);
		CANVAS_HEIGHT = canvas1.height = parseFloat(gridStyle.height, 10);
		console.log( "Resized Canvas = " + CANVAS_WIDTH + " x " + CANVAS_HEIGHT );
	});

	const NUM_ENEMIES = 12;
	const enemies = [ [], [], [], [] ];

	let gameFrame = 0;

	for ( let i = 0; i < NUM_ENEMIES/4; i++ ) {

		enemies[0].push( new Enemy1( context, CANVAS_WIDTH, CANVAS_HEIGHT ) );
		enemies[1].push( new Enemy2( context, CANVAS_WIDTH, CANVAS_HEIGHT ) );
		enemies[2].push( new Enemy3( context, CANVAS_WIDTH, CANVAS_HEIGHT ) );
		enemies[3].push( new Enemy4( context, CANVAS_WIDTH, CANVAS_HEIGHT ) );
	}

	/**
	 * Draws the game scene
	 */
	function animate() {

		// clear the canvas before drawing the current frame
		context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

		enemies.forEach( (enemyGroup) => {

			enemyGroup.forEach( (enemy1) => {


				enemy1.update( gameFrame, CANVAS_WIDTH, CANVAS_HEIGHT );

				// check collision against other enemies
				enemies.forEach( (enemyGroup2) => {

					enemyGroup2.forEach( (enemy2) => {

						if ( enemy1.isCollided || enemy1 == enemy2 ) { return; }

						if ( isCollidedAABB(
						{ x: enemy1.x, y: enemy1.y, w: enemy1.width, h: enemy1.height },
						{ x: enemy2.x, y: enemy2.y, w: enemy2.width, h: enemy2.height } ) ) {
							
							enemy1.isCollided = true;
							enemy2.isCollided = true;
						}
						else {
							enemy1.isCollided = false;
						}

					});
				});

				enemy1.draw();
			});
		});

		gameFrame++;

		// continue animating
		requestAnimationFrame( animate );
	}
	animate();
});

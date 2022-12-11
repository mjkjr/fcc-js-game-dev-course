// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

// import enemey classes
//import { Enemy1, Enemy2, Enemy3, Enemy4, raven } from './enemies.js';

// import collision detection
//import { isCollidedAABB, isCollidedCircle } from './collision.js';

// import explosion class
//import Explosion from './Explosion.js';

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
	let CANVAS_POSITION = canvas1.getBoundingClientRect();
	console.log( "Canvas Size = " + CANVAS_WIDTH + " x " + CANVAS_HEIGHT );

	this.window.addEventListener( 'resize', (event) => {

		console.warn("Resize event handler doesn't re-calculate game object relative positions");

		// use the new grid size for height since the canvas doesn't scale properly
		gridStyle = this.window.getComputedStyle( document.getElementById('grid') );

		CANVAS_WIDTH = canvas1.width = parseFloat(canvas1Style.width, 10);
		CANVAS_HEIGHT = canvas1.height = parseFloat(gridStyle.height, 10);
		CANVAS_POSITION = canvas1.getBoundingClientRect();
		console.log( "Resized Canvas = " + CANVAS_WIDTH + " x " + CANVAS_HEIGHT );
	});

	let lastTime = 0;
	let timeToNextRaven = 0;
	let ravenInterval = 500;

	let ravens = [ new Raven( context, CANVAS_WIDTH, CANVAS_HEIGHT ) ];
	const explosions = [];

	let gameFrame = 0;

	/**
	 * Handle mouse clicks
	 */
	window.addEventListener( 'click', function(event) {

		//console.log('click!');
		explosions.push( new Explosion( context, CANVAS_POSITION.x + event.x, CANVAS_POSITION.y + event.y ) );
	});

	/**
	 * Runs the logic and draws the game scene
	 * TODO: should be split into: logic/update function (first) & drawing
	 * function (second)
	 */
	function loop( timestamp ) {

		// calculate frame delta time
		let deltaTime = timestamp - lastTime;
		lastTime = timestamp;

		// update raven spawn timer
		timeToNextRaven += deltaTime;
		if ( timeToNextRaven >= ravenInterval ) {

			ravens.push( new Raven( context, CANVAS_WIDTH, CANVAS_HEIGHT ) );
			timeToNextRaven = 0;
		}

		// clear the canvas before drawing the current frame
		context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

		// draw enemies
		ravens.forEach( (raven) => {

			raven.update( gameFrame, CANVAS_WIDTH, CANVAS_HEIGHT );
			raven.draw();
		});

		// draw explosions
		for ( let i = 0; i < explosions.length; ++i ) {

			if ( explosions[i].frame >= 5 ) {

				// remove the completed explosion from the array
				explosions.splice( i, 1 );

				// adjust loop control index
				i--;

			} else {

				explosions[i].update();
				explosions[i].draw();
			}
		}

		gameFrame++;

		// continue animating
		requestAnimationFrame( loop );
	}
	loop(0);

});

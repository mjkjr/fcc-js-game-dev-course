// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

// code inside an Immediately Invoked Function Expression (IIFE) stays out of
// Global scope
(function() {

// canvas handle
const canvas = document.getElementById( 'canvas' );
const context = canvas.getContext( '2d' );

// set canvas size
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

// scrolling speed
let gameSpeed = 6;

const bgLayer1 = new Image();
bgLayer1.src = '../assets/art/background/layer-1.png';
const bgLayer2 = new Image();
bgLayer2.src = '../assets/art/background/layer-2.png';
const bgLayer3 = new Image();
bgLayer3.src = '../assets/art/background/layer-3.png';
const bgLayer4 = new Image();
bgLayer4.src = '../assets/art/background/layer-4.png';
const bgLayer5 = new Image();
bgLayer5.src = '../assets/art/background/layer-5.png';

const slider = document.getElementById( 'slider' );
slider.value = gameSpeed;
const showGameSpeed = document.getElementById( 'showGameSpeed' );
showGameSpeed.innerHTML = gameSpeed;

/**
 * Layer class handles parallax background image layers
 */
class Layer {

	/**
	 * Initializes layer with an image and a speed modifier
	 * @param {Object} image Image object created via new Image()
	 * @param {Number} speedModifier Adjusts the speed relative to other layers
	 */
	constructor( image, speedModifier ) {

		this.x = 0;
		this.y = 0;
		this.width = 2400;
		this.height = 700;
		this.image = image;
		this.speedModifier = speedModifier;
		this.speed = gameSpeed * this.speedModifier;
	}

	/**
	 * Updates layer state
	 */
	update() {

		this.speed = gameSpeed * this.speedModifier;

		if ( this.x <= -this.width) {

			this.x = -this.speed;
		}

		this.x = Math.floor( this.x - this.speed );
	}

	/**
	 * Draws layer to canvas
	*/
	draw() {

		context.drawImage( this.image, this.x, this.y, this.width, this.height );

		// only draw the 2nd image when it's needed
		if ( this.x < CANVAS_WIDTH - this.width ) {
			context.drawImage( this.image, this.x + this.width, this.y, this.width, this.height );
		}
	}
};

const layer1 = new Layer( bgLayer1, 0.2 );
const layer2 = new Layer( bgLayer2, 0.4 );
const layer3 = new Layer( bgLayer3, 0.6 );
const layer4 = new Layer( bgLayer4, 0.8 );
const layer5 = new Layer( bgLayer5, 1.0 );

const gameObjects = [ layer1, layer2, layer3, layer4, layer5 ];

/**
 * Updates the game state
 */
function update() {

	gameObjects.forEach( (obj) => {

		obj.update();
	});
}

/**
 * Draws to the canvas
 */
function animate() {

	update();

	context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

	gameObjects.forEach( (obj) => {

		obj.draw();
	});

	requestAnimationFrame( animate );
}
animate();


slider.addEventListener( 'change', (event) => {

	gameSpeed = event.target.value;
	showGameSpeed.innerHTML = gameSpeed;
});

})();

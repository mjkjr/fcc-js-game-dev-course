// this code was generated while following the freeCodeCamp video course:
// https://www.youtube.com/watch?v=GFO_txvwK_c

// canvas handle
const canvas = document.getElementById( 'canvas1' );
const context = canvas.getContext( '2d' );

// set canvas size
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// player

let playerState = 'idle';
const dropdown = document.getElementById( 'animations' );
dropdown.addEventListener( 'change', (event) => {
	playerState = event.target.value;
});

const playerImage = new Image();
playerImage.src = 'art/shadow_dog.png';
const spriteWidth = 575;//6876 / 12;							// spriteSheet width / # columns
const spriteHeight = 5230 / 10;							// spriteSheet height / # rows

// animation frame counter
let gameFrame = 0;

// animation speed
const staggerFrames = 5;


// sprite sheet animation frame data is calculated below
let spriteAnimations = [];

// sprite sheet animation names & frame counts
const animationStates = [
	{
		name: 'idle',
		frames: 7
	},
	{
		name: 'jump',
		frames: 7
	},
	{
		name: 'fall',
		frames: 7
	},
	{
		name: 'run',
		frames: 9
	},
	{
		name: 'dizzy',
		frames: 11
	},
	{
		name: 'sit',
		frames: 5
	},
	{
		name: 'roll',
		frames: 7
	},
	{
		name: 'bite',
		frames: 7
	},
	{
		name: 'ko',
		frames: 12
	},
	{
		name: 'getHit',
		frames: 4
	}
];

// calculates individual frame data from state data
animationStates.forEach( (state, index) => {

	let frames = { loc: [] };

	for ( let j = 0; j < state.frames; j++) {

		frames.loc.push( { x: j * spriteWidth, y: index * spriteHeight } );
	}

	spriteAnimations[ state.name ] = frames;
});

// animates the canvas
//
function animate() {

	// clear the canvas before drawing
	context.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

	// animate the player

	// calculate sprite sheet X location
	let position = ( Math.floor( gameFrame / staggerFrames ) % spriteAnimations[ playerState ].loc.length );
	let frameX = spriteWidth * position;
	let frameY = spriteAnimations[ playerState ].loc[ position ].y;

	// draw player
	context.drawImage( playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

	// increment frame counter
	gameFrame++;

	// loop this function
	requestAnimationFrame( animate );
}
animate();

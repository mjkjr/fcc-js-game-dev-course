//export { Explosion };

class Explosion {

	constructor(context, x, y) {

		// canvas context
		this.context = context;

		// load the image
		this.image = new Image();
		this.image.src = '../assets/art/effects/boom.png';

		// load the audio
		this.sound = new Audio();
		this.sound.src = '../assets/audio/effects/boom.wav';

		// spritesheet dimensions
		this.frames = 5;
		this.spriteWidth = 1000/this.frames;
		this.spriteHeight = 179;

		// drawing size
		this.width = this.spriteWidth*0.7;
		this.height = this.spriteHeight*0.7;

		// position
		this.x = x;
		this.y = y;

		// rotation angle (360 deg ≈ 6.2 radians)
		this.angle = Math.random() * 6.2;

		// animation frames
		this.frame = 0;

		// animation speed modifier
		this.timer = 0;
	}

	/**
	 * Updates the object state
	 */
	update() {

		if ( this.frame === 0 ) { this.sound.play(); }

		this.timer++;

		if ( this.timer % 4 === 0 ) {
			this.frame++;
		}
	}

	/**
	 * Draws the enemy
	 */
	draw() {

		this.context.save();
		this.context.translate(this.x, this.y);
		this.context.rotate(this.angle);
		this.context.drawImage( this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, -this.width*0.5, -this.height*0.5, this.width, this.height );
		this.context.restore();
	}
}

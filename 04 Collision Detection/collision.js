// collision detection functions

/**
 * Axis Aligned Bounding Box (AABB) collision detection
 * Checks if two rectangles overlap
 * @param {Object} r1 first rectangle
 * @param {Object} r2 second rectangle
 * @return {boolean} true if overlap, otherwise false
 */
function isCollidedAABB( r1, r2 ) {

	if (
		r1.x < r2.x + r2.w &&
		r1.x + r1.w > r2.x &&
		r1.y < r2.y + r2.h &&
		r1.y + r1.h > r2.y
		) {

			return true;
	}

	return false;
}


/**
 * Circlular collision detection
 * Checks if two circles overlap
 * @param {Object} c1 first circle
 * @param {Object} c2 second circle
 * @return {boolean} true if overlap, otherwise false
 */
function isCollidedCircle( c1, c2 ) {

	let dx = c2.x - c1.x;
	let dy = c2.y - c1.y;

	// check if hypotenuse is less than sum of the circles' radii
	if ( Math.sqrt( (dx*dx) + (dy*dy) ) < c1.r + c2.r ) {

		return true;
	}

	return false;
}
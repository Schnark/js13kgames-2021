/*jshint unused: false*/
var WIDTH = 420, HEIGHT = 600,
	SHIPSIZE = 10, PLANET_R = 40,
	circleSpeed = 0.0015, moveSpeed = 0.1,
	planets = [{
		x: 210, //WIDTH / 2
		y: 75, //25 + SHIPSIZE + PLANET_R
		r: 40, //PLANET_R
		t: 0
	}, {
		x: 150,
		y: 210,
		r: 40,
		t: 0
	}],
	playerX = 175, playerY = 60, //planets[0].x - planets[0].r; planets[0].y
	playerAngle = 0.5 * Math.PI, playerPlanet = 0, circleDir = -1,
	lastPlanet = 0,
	startY = 0,
	record;

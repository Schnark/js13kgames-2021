/*global storage*/
(function () {
"use strict";

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	rAF = window.requestAnimationFrame || window.mozRequestAnimationFrame;

var WIDTH = 420, HEIGHT = 600,
	circleSpeed = 0.001, moveSpeed = 0.03,
	planets = [{
		x: 210,
		y: 60,
		r: 30
	}, {
		x: 150,
		y: 150,
		r: 30
	}],
	playerX = 180, playerY = 60, playerAngle = 0.5 * Math.PI, playerPlanet = 0, circleDir = -1,
	lastPlanet = 0,
	startY = 0,
	record = storage.get('record'),
	time;

function drawCircle (x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fill();
}

function drawBackground () {
	var x, y, roundStartY = Math.round(startY);
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	for (y = roundStartY; y < HEIGHT + roundStartY; y++) {
		if (y % 23 === 17) {
			drawCircle((Math.sin(y * 101) + 1) / 2 * WIDTH, HEIGHT - y + startY, Math.random() > 0.995 ? 1 : 0.75, 'white');
		}
		if (y === record) {
			for (x = 25; x < WIDTH; x += 75) {
				drawCircle(x, HEIGHT - y + startY, 1, 'gold');
			}
		}
	}
}

function drawPlanet (x, y, r) {
	drawCircle(x, HEIGHT - y + startY, r - 10, 'blue');
}

function drawPlanets () {
	var i, x, y, r;
	for (i = 0; i < planets.length; i++) {
		x = planets[i].x;
		y = planets[i].y;
		r = planets[i].r;
		if (y + r > startY && y - r < startY + HEIGHT) {
			drawPlanet(x, y, r);
		}
	}
}

function drawSpaceship () {
	drawCircle(playerX, HEIGHT - playerY + startY, 5, 'red');
}

function draw () {
	drawBackground();
	drawSpaceship();
	drawPlanets();
}

function addPlanets () {
	while (planets[planets.length - 1].y < startY + 2 * HEIGHT) {
		addPlanet();
	}
}

function addPlanet () {
	var last = planets[planets.length - 1];
	planets.push({
		x: 40 + Math.round((WIDTH - 80) * Math.random()),
		y: last.y + Math.round(HEIGHT / 4 * Math.random() + 70),
		r: Math.min(last.r, Math.round(10 - planets.length * Math.random() / 5) + 20)
	});
}

function showResult (y) {
	if (y > record) {
		storage.set('record', y);
	}
	alert('You are lost in space. The farthest planet you reached was ' + (Math.round((y - planets[0].y) / 10) / 100) + 'ly away.' + (y > record ? ' That’s a new record!' : ''));
}

function update (dt) {
	var i, dx, dy, angle;
	if (playerPlanet === -1) {
		dy = Math.sin(playerAngle) * dt * moveSpeed;
		playerX += Math.cos(playerAngle) * dt * moveSpeed;
		playerY += dy;
		if (dy > 0) {
			startY += dy / 3;
		}
		if (playerX < 0 || playerX > WIDTH || playerY < startY || playerY > startY + HEIGHT) {
			showResult(planets[lastPlanet].y);
			return true;
		}
		for (i = lastPlanet + 1; i < planets.length; i++) {
			dy = playerY - planets[i].y;
			if (dy < -planets[i].r) {
				break;
			}
			dx = playerX - planets[i].x;
			if (dx * dx + dy * dy <= planets[i].r * planets[i].r) {
				playerPlanet = i;
				lastPlanet = i;
				angle = Math.atan2(dy, dx);
				circleDir = (playerAngle + Math.PI - angle) % (2 * Math.PI) > Math.PI ? 1 : -1;
				playerAngle = (angle + 0.5 * circleDir * Math.PI + 2 * Math.PI) % (2 * Math.PI);
				addPlanets();
				break;
			}
		}
	} else {
		angle = playerAngle - 0.5 * circleDir * Math.PI + dt * circleDir * circleSpeed;
		playerX = planets[playerPlanet].x + Math.cos(angle) * planets[playerPlanet].r;
		playerY = planets[playerPlanet].y + Math.sin(angle) * planets[playerPlanet].r;
		playerAngle = (angle + 0.5 * circleDir * Math.PI + 2 * Math.PI) % (2 * Math.PI);
		dy = planets[playerPlanet].y - planets[playerPlanet].r - 30;
		if (dy !== startY) {
			startY = Math.round((2 * dy + startY) / 3);
		}
	}
}

function loop (t) {
	var dt, end;
	draw();
	if (time) {
		dt = t - time;
		while (dt > 100 && !end) {
			end = update(100);
			dt -= 100;
		}
		end = update(dt);
	}
	time = t;
	if (!end) {
		rAF(loop);
	}
}

addPlanets();

rAF(loop);

window.addEventListener('mousedown', function () {
	playerPlanet = -1;
});

window.addEventListener('touchstart', function () {
	playerPlanet = -1;
});

window.addEventListener('keydown', function (e) {
	if (e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32) {
		playerPlanet = -1;
		e.preventDefault();
	}
});

})();
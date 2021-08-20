/*global draw: true*/
/*global WIDTH, HEIGHT, SHIPSIZE, planets, playerX, playerY, playerAngle, startY, lastPlanet, record*/
draw =
(function () {
"use strict";

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	spaceship = document.createElement('canvas'),
	gradientLeft, gradientRight,
	random = Math.floor(Math.random() * 1000);

function drawCircle (x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fill();
}

function initSpaceship () {
	var ctx = spaceship.getContext('2d');
	spaceship.width = SHIPSIZE * 2;
	spaceship.height = SHIPSIZE * 2;
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(SHIPSIZE, SHIPSIZE, SHIPSIZE, 0, 2 * Math.PI);
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.moveTo(SHIPSIZE, SHIPSIZE);
	ctx.lineTo(2 * SHIPSIZE, SHIPSIZE);
	ctx.stroke();
}

function drawBackground () {
	var x, y, roundStartY = Math.round(startY);
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	for (y = roundStartY; y < HEIGHT + roundStartY; y++) {
		if (Math.sin(7.32 * y) > 0.97) {
			drawCircle(
				(Math.sin(y * 101.451 + random) + 1) / 2 * WIDTH,
				HEIGHT - y + startY,
				Math.random() > 0.995 ? 1 : 0.75, 'white'
			);
		}
		if (y === record) {
			for (x = 25; x < WIDTH; x += 75) {
				drawCircle(x, HEIGHT - y + startY, 1, 'gold');
			}
		}
	}
}

function drawPlanet (x, y, r, type, time) {
	var c = Math.round(Math.sin(time / 1000 + x) * 48 + 200), i;
	switch (type) { //TODO varying pattern instead of just varying color
	case 0:
		c = 'rgb(0,0,' + c + ')';
		break;
	case 1:
		c = 'rgb(' + c + ',' + Math.round(c / 2) + ',0)';
		break;
	case 2:
		c = 'rgb(' + c + ',0,0)';
	}
	drawCircle(x, HEIGHT - y + startY, r - SHIPSIZE - 5, c);
	if (type === 1) {
		for (i = 0; i < 5; i++) {
			drawCircle(
				x + r * Math.cos(time / 1500 + i * 17 + x),
				HEIGHT - y + startY + r * Math.sin(time / 1500 + i * 17 + x),
				SHIPSIZE + 10, 'rgba(256,128,0,0.9)'
			); //TODO proper clouds
		}
	}
}

function drawPlanets (time) {
	var i, x, y, r;
	for (i = lastPlanet; i < planets.length; i++) { //TODO or i = 0 or something more sophisticated?
		x = planets[i].x;
		y = planets[i].y;
		r = planets[i].r;
		if (y - r > startY + HEIGHT) {
			break;
		}
		if (y + r > startY) {
			drawPlanet(x, y, r, planets[i].t, time);
		}
	}
}

function drawSpaceship () {
	ctx.save();
	ctx.translate(playerX, HEIGHT - playerY + startY);
	ctx.rotate(-playerAngle);
	ctx.drawImage(spaceship, -SHIPSIZE, -SHIPSIZE);
	ctx.restore();
}

function draw (time) {
	drawBackground();
	drawSpaceship();
	drawPlanets(time);
	ctx.fillStyle = gradientLeft;
	ctx.fillRect(0, 0, 2 * SHIPSIZE, HEIGHT);
	ctx.fillStyle = gradientRight;
	ctx.fillRect(WIDTH - 2 * SHIPSIZE, 0, 2 * SHIPSIZE, HEIGHT);
}

canvas.width = WIDTH;
canvas.height = HEIGHT;
initSpaceship();
gradientLeft = ctx.createLinearGradient(0, 0, 2 * SHIPSIZE, 0);
gradientLeft.addColorStop(0, 'black');
gradientLeft.addColorStop(1, 'rgba(0,0,0,0)');
gradientRight = ctx.createLinearGradient(WIDTH, 0, WIDTH - 2 * SHIPSIZE, 0);
gradientRight.addColorStop(0, 'black');
gradientRight.addColorStop(1, 'rgba(0,0,0,0)');

return draw;
})();
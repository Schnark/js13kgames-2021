/*global draw: true*/
/*global WIDTH, HEIGHT, SHIPSIZE, planets, playerX, playerY, playerAngle, startY, lastPlanet, record*/
draw =
(function () {
"use strict";

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	spaceship = document.createElement('canvas'),
	gradientLeft, gradientRight,
	random;

function init (shiptype) {
	random = Math.floor(Math.random() * 1000);
	if (shiptype !== -1) {
		[initSpaceship0, initSpaceship1, initSpaceship2][shiptype](spaceship, SHIPSIZE);
	}
}

function drawCircle (x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.fill();
}

function initSpaceship0 (canvas, size, rot) {
	var ctx = canvas.getContext('2d');
	canvas.width = size * 2;
	canvas.height = size * 2;
	if (rot) {
		ctx.translate(size, size);
		ctx.rotate(-rot);
		ctx.translate(-size, -size);
	}
	if (size !== 10) {
		ctx.scale(size / 10, size / 10);
	}
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'silver';
	ctx.moveTo(20, 10);
	ctx.bezierCurveTo(19, 8, 18, 7, 16, 7);
	ctx.lineTo(2, 7);
	ctx.lineTo(2, 13);
	ctx.lineTo(16, 13);
	ctx.bezierCurveTo(18, 13, 19, 12, 20, 10);
	ctx.moveTo(13, 7);
	ctx.bezierCurveTo(10, 4, 8, 2, 5, 2);
	ctx.lineTo(5, 7);
	ctx.moveTo(13, 13);
	ctx.bezierCurveTo(10, 16, 8, 18, 5, 18);
	ctx.lineTo(5, 13);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = '#88f';
	ctx.beginPath();
	ctx.moveTo(15, 8);
	ctx.bezierCurveTo(19, 8, 19, 12, 15, 12);
	ctx.fill();
}

function initSpaceship1 (canvas, size, rot) {
	var ctx = canvas.getContext('2d');
	canvas.width = size * 2;
	canvas.height = size * 2;
	if (rot) {
		ctx.translate(size, size);
		ctx.rotate(-rot);
		ctx.translate(-size, -size);
	}
	if (size !== 10) {
		ctx.scale(size / 10, size / 10);
	}
	ctx.beginPath();
	ctx.fillStyle = '#8f8';
	ctx.strokeStyle = 'red';
	ctx.moveTo(20, 10);
	ctx.bezierCurveTo(-5, -10, -5, 30, 20, 10);
	ctx.fill();
	ctx.stroke();
	ctx.strokeStyle = 'blue';
	ctx.beginPath();
	ctx.moveTo(13, 8);
	ctx.bezierCurveTo(16, 8, 16, 12, 13, 12);
	ctx.stroke();
	ctx.strokeStyle = '#080';
	ctx.beginPath();
	ctx.moveTo(0, 10);
	ctx.lineTo(5, 10);
	ctx.stroke();
}

function initSpaceship2 (canvas, size, rot) {
	var ctx = canvas.getContext('2d');
	canvas.width = size * 2;
	canvas.height = size * 2;
	if (rot) {
		ctx.translate(size, size);
		ctx.rotate(-rot);
		ctx.translate(-size, -size);
	}
	if (size !== 10) {
		ctx.scale(size / 10, size / 10);
	}
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.moveTo(10, 10);
	ctx.bezierCurveTo(8, 8, 4, 5, 2, 5);
	ctx.bezierCurveTo(5, 10, 5, 10, 2, 15);
	ctx.bezierCurveTo(4, 15, 8, 12, 10, 10);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.moveTo(20, 10);
	ctx.bezierCurveTo(19, 8, 19, 8, 17, 8);
	ctx.lineTo(5, 8);
	ctx.lineTo(5, 12);
	ctx.lineTo(17, 12);
	ctx.bezierCurveTo(19, 12, 19, 12, 20, 10);
	ctx.fill();
	ctx.fillStyle = 'red';
	ctx.fillRect(9, 8, 4, 4);
	ctx.fillStyle = 'blue';
	ctx.beginPath();
	ctx.arc(16, 10, 1.5, 0, 2 * Math.PI);
	ctx.fill();
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
		break;
	case 3:
		c = 'rgb(' + c + ',' + Math.round(c / 3) + ',0)';
		break;
	case 4:
		c = 'rgb(' + Math.round(c / 2) + ',' + Math.round(c / 2) + ',' + Math.round(c / 2) + ')';
	}
	drawCircle(x, HEIGHT - y + startY, r - SHIPSIZE - 5, c);
	if (type === 1) {
		for (i = 0; i < 5; i++) {
			drawCircle(
				x + r * Math.cos(time / 1500 + i * 17 + x),
				HEIGHT - y + startY + r * Math.sin(time / 1500 + i * 17 + x),
				SHIPSIZE + 10, 'rgba(256,128,0,0.95)'
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

function drawExamplePlanet (canvas, type) {
	var backupCtx = ctx;
	canvas.width = 60;
	canvas.height = 60;
	ctx = canvas.getContext('2d');
	drawPlanet(30, HEIGHT - 30, 25 + SHIPSIZE, type, 0);
	ctx = backupCtx;
}

canvas.width = WIDTH;
canvas.height = HEIGHT;
gradientLeft = ctx.createLinearGradient(0, 0, 2 * SHIPSIZE, 0);
gradientLeft.addColorStop(0, 'black');
gradientLeft.addColorStop(1, 'rgba(0,0,0,0)');
gradientRight = ctx.createLinearGradient(WIDTH, 0, WIDTH - 2 * SHIPSIZE, 0);
gradientRight.addColorStop(0, 'black');
gradientRight.addColorStop(1, 'rgba(0,0,0,0)');

initSpaceship0(document.getElementById('spaceship0'), 20, Math.PI / 4);
initSpaceship1(document.getElementById('spaceship1'), 20, Math.PI / 4);
initSpaceship2(document.getElementById('spaceship2'), 20, Math.PI / 4);

drawExamplePlanet(document.getElementById('planet0'), 0);
drawExamplePlanet(document.getElementById('planet1'), 1);
drawExamplePlanet(document.getElementById('planet2'), 2);
drawExamplePlanet(document.getElementById('planet3'), 3);
drawExamplePlanet(document.getElementById('planet4'), 4);

draw.init = init;

return draw;
})();
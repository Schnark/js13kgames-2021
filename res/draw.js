/*global draw: true*/
/*global WIDTH, HEIGHT, SHIPSIZE, planets, playerX, playerY, playerAngle, playerPlanet, startY, lastPlanet, record*/
draw =
(function () {
"use strict";

var canvas = document.getElementById('canvas'),
	header = document.getElementById('header'),
	ctx = canvas.getContext('2d'),
	spaceship = document.createElement('canvas'),
	gradientLeft, gradientRight,
	random;

function init (shiptype) {
	random = Math.floor(Math.random() * 1000);
	if (shiptype !== -1) {
		[initSpaceship0, initSpaceship1, initSpaceship2, initSpaceship3, initSpaceship4][shiptype](spaceship, SHIPSIZE);
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
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'silver';
	ctx.beginPath();
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
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(10, 10);
	ctx.bezierCurveTo(8, 8, 4, 5, 2, 5);
	ctx.bezierCurveTo(5, 10, 5, 10, 2, 15);
	ctx.bezierCurveTo(4, 15, 8, 12, 10, 10);
	ctx.fill();

	ctx.fillStyle = 'silver';
	ctx.beginPath();
	ctx.moveTo(20, 10);
	ctx.bezierCurveTo(19, 6, 3, 5, 3, 10);
	ctx.bezierCurveTo(3, 15, 19, 14, 20, 10);
	ctx.fill();

	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(18, 8);
	ctx.bezierCurveTo(21, 10, 21, 10, 18, 12);
	ctx.fill();

	ctx.fillStyle = 'blue';
	ctx.beginPath();
	ctx.arc(13, 10, 1.5, 0, 2 * Math.PI);
	ctx.fill();

	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(1, 10);
	ctx.lineTo(7, 10);
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
	ctx.fillStyle = '#808';
	ctx.fillRect(9, 4, 6, 2);
	ctx.fillRect(9, 14, 6, 2);

	ctx.fillStyle = '#c4c';
	ctx.beginPath();
	ctx.moveTo(20, 10);
	ctx.lineTo(5, 2);
	ctx.lineTo(5, 18);
	ctx.lineTo(20, 10);
	ctx.fill();

	ctx.fillStyle = '#f8f';
	ctx.beginPath();
	ctx.moveTo(18, 10);
	ctx.lineTo(10, 6);
	ctx.lineTo(10, 14);
	ctx.lineTo(18, 10);
	ctx.fill();

	ctx.fillStyle = '#808';
	ctx.fillRect(1, 4.5, 6, 3);
	ctx.fillRect(1, 8.5, 6, 3);
	ctx.fillRect(1, 12.5, 6, 3);
}

function initSpaceship3 (canvas, size, rot) {
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
	ctx.fillStyle = '#080';
	ctx.beginPath();
	ctx.moveTo(2, 5);
	ctx.bezierCurveTo(15, 5, 15, 15, 2, 15);
	ctx.bezierCurveTo(10, 5, 10, 15, 2, 5);
	ctx.fill();

	ctx.fillStyle = '#8f8';
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(20, 10);
	ctx.bezierCurveTo(15, 5, 8, 5, 5, 8);
	ctx.lineTo(5, 12);
	ctx.bezierCurveTo(8, 15, 15, 15, 20, 10);
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
	ctx.lineTo(7, 10);
	ctx.stroke();
}

function initSpaceship4 (canvas, size, rot) {
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
	ctx.fillStyle = 'blue';
	ctx.fillRect(1.5, 2, 8, 1.5);
	ctx.fillRect(1.5, 4.5, 8, 1.5);
	ctx.fillRect(10.5, 2, 8, 1.5);
	ctx.fillRect(10.5, 4.5, 8, 1.5);
	ctx.fillRect(1.5, 16.5, 8, 1.5);
	ctx.fillRect(1.5, 14, 8, 1.5);
	ctx.fillRect(10.5, 16.5, 8, 1.5);
	ctx.fillRect(10.5, 14, 8, 1.5);
	ctx.fillRect(12, 7, 6, 6);
	ctx.fillStyle = 'silver';
	ctx.fillRect(5, 8, 5, 4);
	ctx.fillRect(9.5, 3, 1, 14);
	ctx.fillRect(10, 9.5, 8, 1);
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

function willHitPlanet () {
	var i, x, y, a;
	for (i = playerPlanet + 1; i < planets.length; i++) {
		if (planets[i].y - startY > HEIGHT) {
			return false;
		}
		x = planets[i].x - playerX;
		y = planets[i].y - playerY;
		a = Math.abs(playerAngle - Math.atan2(y, x));
		if (a < Math.PI / 2 && Math.sin(a) * Math.sqrt(x * x + y * y) < planets[i].r) {
			return true;
		}
	}
	return false;
}

function drawPlanet (x, y, r, type, time, currentPlanet) {
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
		break;
	case 5:
		if (currentPlanet && willHitPlanet()) {
			c = 'rgb(64,' + c + ',64)';
		} else {
			c = 'rgb(0,' + Math.round(c / 2) + ',0)';
		}
		break;
	case 6:
		c = 'rgb('  + Math.round(c / 2) + ',0,' + Math.round(c / 2) + ')';
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
			drawPlanet(x, y, r, planets[i].t, time, i === playerPlanet);
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

function resize () {
	var docEl = document.documentElement, width;
	width = Math.floor(Math.min(1, docEl.clientWidth / WIDTH, docEl.clientHeight / HEIGHT) * WIDTH) + 'px'; //TODO 2?
	canvas.style.width = width;
	header.style.width = width;
}

canvas.width = WIDTH;
canvas.height = HEIGHT;
resize();
window.addEventListener('resize', resize);

gradientLeft = ctx.createLinearGradient(0, 0, 2 * SHIPSIZE, 0);
gradientLeft.addColorStop(0, 'black');
gradientLeft.addColorStop(1, 'rgba(0,0,0,0)');
gradientRight = ctx.createLinearGradient(WIDTH, 0, WIDTH - 2 * SHIPSIZE, 0);
gradientRight.addColorStop(0, 'black');
gradientRight.addColorStop(1, 'rgba(0,0,0,0)');

initSpaceship0(document.getElementById('spaceship0'), 20, Math.PI / 4);
initSpaceship1(document.getElementById('spaceship1'), 20, Math.PI / 4);
initSpaceship2(document.getElementById('spaceship2'), 20, Math.PI / 4);
initSpaceship3(document.getElementById('spaceship3'), 20, Math.PI / 4);
initSpaceship4(document.getElementById('spaceship4'), 20, Math.PI / 8);

drawExamplePlanet(document.getElementById('planet0'), 0);
drawExamplePlanet(document.getElementById('planet1'), 1);
drawExamplePlanet(document.getElementById('planet2'), 2);
drawExamplePlanet(document.getElementById('planet3'), 3);
drawExamplePlanet(document.getElementById('planet4'), 4);
drawExamplePlanet(document.getElementById('planet5'), 5);
drawExamplePlanet(document.getElementById('planet6'), 6);

draw.init = init;

return draw;
})();
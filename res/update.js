/*global update: true*/
/*global WIDTH, HEIGHT, SHIPSIZE, PLANET_R,
	circleSpeed, moveSpeed, planets,
	playerX: true, playerY: true, playerAngle: true,
	playerPlanet: true, circleDir: true,
	startY: true, lastPlanet: true*/
update =
(function () {
"use strict";

function addPlanets () {
	while (planets[planets.length - 1].y < startY + 2 * HEIGHT) {
		addPlanet();
	}
}

function addPlanet () {
	var last = planets[planets.length - 1];
	planets.push({
		x: 2 * SHIPSIZE + PLANET_R + Math.round((WIDTH - 4 * SHIPSIZE - 2 * PLANET_R) * Math.random()),
		y: last.y + Math.round(HEIGHT / 4 * Math.random() + 80),
		r: Math.max(Math.min(last.r, PLANET_R - Math.round(planets.length * Math.random() / 5)), 5),
		t: Math.random() < 0.2 ? 2 : Math.random() < 0.2 ? 1 : 0
	});
}

function update (dt) {
	var i, dx, dy, angle, factor;
	if (playerPlanet === -1) {
		dy = Math.sin(playerAngle) * dt * moveSpeed;
		playerX += Math.cos(playerAngle) * dt * moveSpeed;
		playerY += dy;
		if (dy > 0) {
			startY += dy / 3;
		}
		if (playerX < 0 || playerX > WIDTH || playerY < startY || playerY > startY + HEIGHT) {
			return [planets[lastPlanet].y, Math.round((planets[lastPlanet].y - planets[0].y) / 10) / 100];
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
		if (planets[playerPlanet].t === 2) {
			factor = planets[playerPlanet].factor || 1;
			planets[playerPlanet].factor = factor + dt / 1000;
		} else {
			factor = 1;
		}
		angle = playerAngle - 0.5 * circleDir * Math.PI + dt * circleDir * circleSpeed * factor;
		playerX = planets[playerPlanet].x + Math.cos(angle) * planets[playerPlanet].r;
		playerY = planets[playerPlanet].y + Math.sin(angle) * planets[playerPlanet].r;
		playerAngle = (angle + 0.5 * circleDir * Math.PI + 2 * Math.PI) % (2 * Math.PI);
		dy = planets[playerPlanet].y - planets[playerPlanet].r - SHIPSIZE - 25;
		if (dy !== startY) {
			startY = Math.round((2 * dy + startY) / 3);
		}
	}
}

addPlanets();

return update;
})();
/*global storage, draw, update*/
/*global playerPlanet: true, record: true*/
(function () {
"use strict";

var rAF, time;

function showResult (rawY, displayY) {
	if (rawY > record) {
		storage.set('record', rawY);
	}
	alert('You are lost in space. ' +
		'The farthest planet you reached was ' + displayY + 'ly away.' +
		(rawY > record ? '\nThat’s a new record!' : '') +
		'\nReload the page for a new game.');
}

function loop (t) {
	var dt, end;
	draw(t);
	if (time) {
		dt = t - time;
		while (dt > 10 && !end) {
			end = update(10); //10 * moveSpeed === 1
			dt -= 10;
		}
		if (!end) {
			end = update(dt);
		}
	}
	time = t;
	if (!end) {
		rAF(loop);
	} else {
		showResult(end[0], end[1]);
	}
}

record = storage.get('record');

rAF = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
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
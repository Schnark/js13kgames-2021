/*global play: true*/
/*global storage, draw, update, unlock*/
/*global playerPlanet: true, record: true, gold: true*/
play =
(function () {
"use strict";

var rAF, playing, recordName;

rAF = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;

function play (type) {
	var time;
	function showResult (rawY, displayY) {
		var newRecord = false, unlocked = false;
		playing = false;
		if (rawY > record && displayY !== '0ly') {
			storage.set(recordName, [rawY, displayY]);
			document.getElementById(recordName).textContent = displayY;
			newRecord = record !== -1; //if you played the first time, it's not a _new_ record
			record = rawY;
			gold += 3;
		}
		if (displayY !== '0ly') {
			gold += 1;
		}
		gold += Math.round(rawY / 1000);
		storage.set('gold', gold);
		document.getElementById('gold').textContent = gold;
		unlocked = unlock();
		document.getElementById('result').innerHTML =
			'You are lost in space. ' +
			'The farthest planet you reached was ' + displayY + ' away.' +
			(newRecord ? '<br>That’s a new record!' : '') +
			'<br>You currently have ' + gold + ' coins.' +
			(unlocked ? '<br>You just unlocked a new spaceship!' : '');
		document.getElementById('overlay').hidden = false;
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

	if (type !== -1) {
		recordName = 'record' + type;
		record = storage.get(recordName)[0];
	}
	update.init();
	draw.init(type);
	playing = true;
	rAF(loop);
}

window.addEventListener('mousedown', function () {
	if (!playing) {
		return;
	}
	playerPlanet = -1;
});

window.addEventListener('touchstart', function () {
	if (!playing) {
		return;
	}
	playerPlanet = -1;
});

window.addEventListener('keydown', function (e) {
	if (!playing) {
		return;
	}
	if (e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32) {
		playerPlanet = -1;
		e.preventDefault();
	}
});

gold = storage.get('gold');

return play;
})();
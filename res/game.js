/*global storage, play*/
(function () {
"use strict";

var fullscreen, sound;

function start (type) {
	document.getElementById('menu').hidden = true;
	document.getElementById('game').hidden = false;
	document.getElementById('overlay').hidden = true;
	play(type);
}

document.getElementById('record0').textContent = storage.get('record0')[1];
document.getElementById('record1').textContent = storage.get('record1')[1];
document.getElementById('record2').textContent = storage.get('record2')[1];

document.getElementById('button0').addEventListener('click', function () {
	start(0);
});
document.getElementById('button1').addEventListener('click', function () {
	start(1);
});
document.getElementById('button2').addEventListener('click', function () {
	start(2);
});
document.getElementById('button-retry').addEventListener('click', function () {
	start(-1);
});
document.getElementById('button-menu').addEventListener('click', function () {
	document.getElementById('menu').hidden = false;
	document.getElementById('game').hidden = true;
});

fullscreen = document.getElementById('fullscreen');
sound = document.getElementById('sound');

fullscreen.checked = storage.get('fullscreen');
fullscreen.parentElement.addEventListener('mousedown', function (e) {
	e.stopPropagation();
});
fullscreen.parentElement.addEventListener('touchstart', function (e) {
	e.stopPropagation();
});
fullscreen.addEventListener('change', function () {
	storage.set('fullscreen', fullscreen.checked);
});

sound.checked = storage.get('sound');
sound.parentElement.addEventListener('mousedown', function (e) {
	e.stopPropagation();
});
sound.parentElement.addEventListener('touchstart', function (e) {
	e.stopPropagation();
});
sound.addEventListener('change', function () {
	storage.set('sound', sound.checked);
});

})();
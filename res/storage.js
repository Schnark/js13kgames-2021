/*global storage: true*/
storage =
(function () {
"use strict";

//FIXME exchange sessionStorage for localStorage once things are ready for this
if (false) {//to make sure the linter complains about the above FIXME
	alert();
}

var data = {
	record0: [-1, '—'],
	record1: [-1, '—'],
	record2: [-1, '—'],
	gold: 0,
	sound: true,
	fullscreen: false //TODO
}, storageKey = 'schnark-js13k-2021';

try {
	data = JSON.parse(sessionStorage.getItem(storageKey) || 'x');
} catch (e) {
}

function get (key) {
	return data[key];
}

function set (key, value) {
	data[key] = value;
	try {
		sessionStorage.setItem(storageKey, JSON.stringify(data));
	} catch (e) {
	}
}

return {
	get: get,
	set: set
};
})();

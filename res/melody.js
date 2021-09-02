/*global music*/
(function () {
"use strict";

/*jshint quotmark: false*/
//jscs:disable validateQuoteMarks
music.init({
	defs: [
		{
			key: {
				'D,': Math.pow(2, -19 / 12) * 440,
				'E,': Math.pow(2, -17 / 12) * 440,
				'F,': Math.pow(2, -16 / 12) * 440,
				'G,': Math.pow(2, -14 / 12) * 440,
				'A,': 0.5 * 440,
				'B,': Math.pow(2, -10 / 12) * 440,
				C: Math.pow(2, -9 / 12) * 440,
				'^C': Math.pow(2, -8 / 12) * 440,
				D: Math.pow(2, -7 / 12) * 440,
				E: Math.pow(2, -5 / 12) * 440,
				F: Math.pow(2, -4 / 12) * 440,
				'^G': Math.pow(2, -3 / 12) * 440,
				G: Math.pow(2, -2 / 12) * 440,
				A: 440,
				B: Math.pow(2, 2 / 12) * 440,
				c: Math.pow(2, 3 / 12) * 440,
				'^c':  Math.pow(2, 4 / 12) * 440,
				d: Math.pow(2, 5 / 12) * 440,
				'_e': Math.pow(2, 6 / 12) * 440,
				e: Math.pow(2, 7 / 12) * 440,
				f: Math.pow(2, 8 / 12) * 440,
				g: Math.pow(2, 10 / 12) * 440,
				'^g': Math.pow(2, 11 / 12) * 440,
				a: 2 * 440,
				b: Math.pow(2, 14 / 12) * 440,
				"c'": Math.pow(2, 15 / 12) * 440,
				"^c'": Math.pow(2, 16 / 12) * 440,
				"d'": Math.pow(2, 17 / 12) * 440,
				"_e'": Math.pow(2, 18 / 12) * 440,
				"e'": Math.pow(2, 19 / 12) * 440,
				"f'": Math.pow(2, 20 / 12) * 440,
				"g'": Math.pow(2, 22 / 12) * 440
			},
			volume: 0.1,
			baseDur: 60 / 90
		},
		{
			key: {
				'D,': Math.pow(2, -19 / 12) * 440,
				'E,': Math.pow(2, -17 / 12) * 440,
				'F,': Math.pow(2, -16 / 12) * 440,
				'G,': Math.pow(2, -14 / 12) * 440,
				'A,': 0.5 * 440,
				'B,': Math.pow(2, -10 / 12) * 440,
				C: Math.pow(2, -9 / 12) * 440,
				'^C': Math.pow(2, -8 / 12) * 440,
				D: Math.pow(2, -7 / 12) * 440,
				E: Math.pow(2, -5 / 12) * 440,
				F: Math.pow(2, -4 / 12) * 440,
				'^G': Math.pow(2, -3 / 12) * 440,
				G: Math.pow(2, -2 / 12) * 440,
				A: 440,
				B: Math.pow(2, 2 / 12) * 440,
				c: Math.pow(2, 3 / 12) * 440,
				'^c':  Math.pow(2, 4 / 12) * 440,
				d: Math.pow(2, 5 / 12) * 440,
				'_e': Math.pow(2, 6 / 12) * 440,
				e: Math.pow(2, 7 / 12) * 440,
				f: Math.pow(2, 8 / 12) * 440,
				g: Math.pow(2, 10 / 12) * 440,
				'^g': Math.pow(2, 11 / 12) * 440,
				a: 2 * 440,
				b: Math.pow(2, 14 / 12) * 440,
				"c'": Math.pow(2, 15 / 12) * 440,
				"^c'": Math.pow(2, 16 / 12) * 440,
				"d'": Math.pow(2, 17 / 12) * 440,
				"_e'": Math.pow(2, 18 / 12) * 440,
				"e'": Math.pow(2, 19 / 12) * 440,
				"f'": Math.pow(2, 20 / 12) * 440,
				"g'": Math.pow(2, 22 / 12) * 440
			},
			volume: 0.2,
			baseDur: 60 / 90
		},
		{
			key: { //E-flat major
				E: Math.pow(2, -6 / 12) * 220,
				F: Math.pow(2, -4 / 12) * 220,
				G: Math.pow(2, -2 / 12) * 220,
				A: Math.pow(2, -1 / 12) * 220,
				B: Math.pow(2, 1 / 12) * 220,
				c: Math.pow(2, 3 / 12) * 220,
				d: Math.pow(2, 5 / 12) * 220,
				e: Math.pow(2, 6 / 12) * 220,
				f: Math.pow(2, 8 / 12) * 220,
				g: Math.pow(2, 10 / 12) * 220,
				a: Math.pow(2, 11 / 12) * 220,
				b: Math.pow(2, 13 / 12) * 220,
				"c'": Math.pow(2, 15 / 12) * 220,
				"d'": Math.pow(2, 17 / 12) * 220,
				"e'": Math.pow(2, 18 / 12) * 220,
				"f'": Math.pow(2, 20 / 12) * 220,
				"g'": Math.pow(2, 22 / 12) * 220
			},
			volume: 0.2,
			baseDur: 60 / 80
		}
	],
//jscs:disable maximumLineLength
	staffs: [
		["x0 z A0.25 c0.25 d0.25 A0.25 e0.25 g0.25 a0.25 e0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 a0.25 c'0.25 d'0.25 z ebe'5 Acg0.5 Acf FAc FAe0.5 FAd DFc0.5 DFB0.5 DFA0.5 DFG0.5 Gg cd Gg cd Gg cd Gg cd Gg cd Gg cd Gg cd Gg cd Gg cd gc' d_e gc' d_e gc' d_e gc' d_e ga^c' _e ga^c' _e ga^c' _e ga^c'0.75 _e0.75 egbe'0.5 x2 G0.5 B0.5 c c0.5 e0.5 d0.75 B0.25 e0.5 f0.5 e Bd c0.5 d0.5 c B G2 G0.5 B0.5 c c0.5 e0.5 d0.75 B0.25 e0.5 f0.5 g Bg cg0.5 f0.5 e cf e2 b0.5 g0.5 f f e0.5 g0.5 f B b0.5 g0.5 f f g0.5 b0.5 c'2 c'0.5 d'0.5 c'e' bd' ac' gb ee' eg f0.5 e0.5 f g fb2 eg0.5 b0.5 ec' c'0.5 e'0.5 fd'0.75 b0.25 be'0.5 f'0.5 e' bd' c'0.5 d'0.5 c' db eg2 g0.5 b0.5 c' c'0.5 e'0.5 d'0.75 b0.25 e'0.5 f'0.5 g' gg' g'0.5 f'0.5 e' af' ge'2 b0.5 g0.5 f f e0.5 g0.5 f B b0.5 g0.5 f f g0.5 b0.5 c'2 c'0.5 d'0.5 c'e' bd' ac' gb ee' eg f0.5 e0.5 f g fb2 eg0.5 b0.5 ec' c'0.5 e'0.5 fd'0.75 b0.25 be'0.5 f'0.5 e' bd' c'0.5 d'0.5 c' db eg2 g0.5 b0.5 c' c'0.5 e'0.5 d'0.75 b0.25 e'0.5 f'0.5 g' gg' g'0.5 f'0.5 e' af'3"],
		["x1 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 A0.5 B G B0.5 A B0.25 c0.25 A0.25 B0.25 c0.75 G1.25 B0.5 A0.5 G0.25 A0.25 c0.25 e0.25 g0.75 g0.25 a0.5 b g z0.5 CGc e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 e0.25 g0.25 a0.25 A,A0.5 B,B G,G B,B0.5 A,A B,B0.25 Cc0.25 A,A0.25 B,B0.25 Cc0.75 G,G1.25 B,B0.5 A,A0.5 G,G0.25 A,A0.25 Cc0.25 Ee0.25 Gg0.75 Gg0.25 Aa0.5 Bb Gg0.5 z ^GBe^g5 D,D0.5 E,E F,F A,A0.5 B,B Dd0.5 Ee0.5 Ff0.5 Gg0.5 z2 g0.5 c'0.5 f' g0.5 c'0.5 f' g0.5 c'0.5 f'0.5 g'0.5 d'2 A0.5 d0.5 g A0.5 d0.5 g A0.5 d0.5 g0.5 a0.5 e2 A0.5 d0.5 g _e0.5 a0.5 d' A0.5 d0.5 g0.5 a0.5 _e0.5 a0.5 d'0.5 _e'0.5 d0.5 g0.5 ^c'0.5 g0.5 ^c'0.5 g'0.5 d0.5 g0.5 ^c'0.5 g0.5 c'0.5 g'0.5 d0.5 g0.5 ^c'0.5 ^C^c0.5 x2 z Ae z Bf Ge z Ge Ae z Bd ce2 Bd Ae z Bf Ge z E0.5 G0.5 Ae z ca z eg Ge Bf z cg db z Ge Bf z eb a g fa cg Bg Ae Ge Fe Ee Af fa eb d c B Ae z Bf Ge z Ge Ae z Bf ce2 Bd Ae z Bf Ge z E0.5 G0.5 Ae z ca Eg2 Ge Bf z cg db z Ge Bf z eb a g fa cg Bg Ae Ge Fe Ee Af fa eb d c B Ae z Bf Ge z Ge Ae z Bf ce2 Bd Ae z Bf Ge z E0.5 G0.5 Ae z ca3", 0.5]
	]
});
})();
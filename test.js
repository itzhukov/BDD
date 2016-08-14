"use strict";

if (typeof require !== 'undefined'){
	var mocha = require('mocha');
	var chai = require('chai');
} else {
	mocha.setup({
		ui: 'bdd',
		checkLeaks: true,
		bail: false, // Остановить тесты при первой ошибике
	});
}

var assert = chai.assert;
var expect = chai.expect;

describe('Math', function() {
	describe('#abs()', function() {
		it('should return positive value of given negative number', function() {
			expect(Math.abs(-5)).to.be.equal(5);
		});

		it('should return positive value of given positive number', function() {
			expect(Math.abs(3)).to.be.equal(3);
		});

		it('should return 0 given 0', function() {
			expect(Math.abs(0)).to.be.equal(0);
		});
	});
});

describe('Набор тестов 1', () => {
	describe('Подтесты', () => {
		it('lalalla 1', () => {
			assert.equal(2, 2);
		});

		it('lalalla 2', () => {
			assert.equal(2, 22);
		});

		it('lalalla 3', () => {
			assert.equal(3, 3);
		});
	});
});

describe('Набор тестов 2', () => {
	describe('Тестирование функции ', () => {

		for (var x = 1; x <= 15; x++) {
			makeTest();
		}

		function makeTest() {
			var x = getRandomInt(0, 5);
			var n = getRandomInt(1, 7);

			var expected = Math.pow(x, n);

			it("при возведении "+ x +" в степень "+ n +" результат: "+ expected, () => {
				assert.equal(pow(x, n), expected);
			});
		}

		function getRandomInt(min, max) {
			return parseInt(Math.random() * (max - min)) + min;
		}

	});
});

if (typeof require === 'undefined'){
	mocha.run();
}

function pow(x, n) {
	for (var i = 0, result = 1; i < n; i++) {
		result *= x;
	}

	return result;
}
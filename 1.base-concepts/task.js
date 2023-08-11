"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let D = Math.pow(b, 2) - 4 * a * c;
	let x = (-b + Math.sqrt(D)) / (2 * a);
	let y = (-b - Math.sqrt(D)) / (2 * a);

	if (D < 0) {
		return arr;
	} else if (D === 0) {
		x = -b / (2 * a);
		arr.push(x);
	} else {
		arr.push(x, y);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = percent / 100 / 12;
	let credit = amount - contribution;
	let payment = credit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let sum = +(payment * countMonths).toFixed(2);
	return sum;
}
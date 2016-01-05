'use strict';

var express = require('express');
var app     = express();

// addition
function addition(num_1, num_2){
    return num_1 + num_2; 
}

// factorial
function factorial(factor) {
	return (factor <= 1) ? 1 : factor * factorial(factor - 1);
};

// division
function divison(divident, divisor) {
   return divident / divisor;
};

module.exports = {
	app : app,
	factorial : factorial,
  addition  : addition,
  divison   : divison
}
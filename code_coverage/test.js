var app    = require('./app');
var assert = require('assert');


describe('Operations', function() {
 
 
  // Factorial 
  describe('Factorial',function(){
    
    it('5!', function() {
        assert.equal(app.factorial(5), 120);
    });
    
     it('2!', function() {
        assert.equal(app.factorial(2), 2);
    });
    
    it('1!', function() {
        assert.equal(app.factorial(1), 1);
    });
    
    it('0!', function() {
        assert.equal(app.factorial(0), 1);
    });
  });
  
   
  // Addition 
  describe('Addition',function(){
    
    it('5 + -20', function() {
        assert.equal(app.addition(5, -20), -15);
    });
    
     it('20 + 0', function() {
        assert.equal(app.addition(20, 0), 20);
    });
    
    it('4 + -20', function() {
        assert.equal(app.addition(4, -20), -16);
    });
    
    it('22 + 1', function() {
        assert.equal(app.addition(22, 1), 23);
    });
  });
  
    // Addition 
  describe('Addition',function(){
     
    it('1 / 1', function() {
        assert.equal(app.divison(1, 1), 1);
    });
    
     it('2 / 0', function() {
        assert.equal(app.divison(2, 0), 'Infinity');
    });
    
    it('0 / -20', function() {
        assert.equal(app.divison(0, -20), 0);
    });
    
    it('4 / -2', function() {
        assert.equal(app.divison(4, -2), -2);
    });
  });
  
  
});
const { expect } = require("chai");
const { fizzbuzz } = require("./fizzbuzz");

it("0 input should be empty array", function() {
  expect(fizzbuzz(0)).to.eql([]);
});

it("should return 1 on 1", function() {
  expect(fizzbuzz(1)).to.eql([1]);
});

it("should return [1,2] on 2", function() {
  expect(fizzbuzz(2)).to.eql([1, 2]);
});

it("should return equal sized array as input number 100", function() {
    expect(fizzbuzz(100).length).to.eql(100);
  });

it("should return fizz if number is multiple of 3", function() {
  expect(fizzbuzz(3)[2]).to.eql("fizz");
});

it("should return buzz if number is multiple of 5", function() {
  expect(fizzbuzz(5)[4]).to.equal("buzz");
});

it("should return fizzbuzz if number is multiple of 3 and 5", function() {
  expect(fizzbuzz(15)[14]).to.equal("fizzbuzz");
});
  
it("should return fizz if number contains 3", function() {
    expect(fizzbuzz(13)[12]).to.equal("fizz");
});
  
it("should return fizz if number contains 5", function() {
    expect(fizzbuzz(52)[51]).to.equal("buzz");
});

// 35
it("should return buzz if number is 35 (precedence division)", function() {
    expect(fizzbuzz(35)[34]).to.equal("buzz");
});

// 51
it("should return fizz if number is 51 (precedence division)", function() {
    expect(fizzbuzz(51)[50]).to.equal("fizz");
});

// 53
it("should return buzz if number is 53 (precedence left hand side)", function() {
    expect(fizzbuzz(53)[52]).to.equal("buzz");
});

// 352
it("should return fizz if number is 352 (precedence left hand side)", function() {
    expect(fizzbuzz(352)[351]).to.equal("fizz");
});
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(12);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(13);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('12');
    }).to.throw('[12] is not of type "Number" it is of type "string"');
  });

  it('should return the same length of an array when provided with an array which consists only even number', () => {
    const arr = [0, 2, 4];
    const validationResults = validator.getEvenNumbersFromArray(arr);
    expect(validationResults.length).to.be.equal(arr.length);
  });

  it('should throw an error when provided an array which consists a string with elements', () => {
    const arr = [0, '2', 4];
    expect(() => {
      validator.getEvenNumbersFromArray(arr);
    }).to.throw(`[${arr}] is not an array of "Numbers"`);
  });

  it('should return true when provided with an array which consists only numbers', () => {
    const arr = [0, 2, 4, 34];
    const validationResults = validator.isAllNumbers(arr);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an array which consists not only numbers', () => {
    const arr = [0, 2, '4', 34];
    const validationResults = validator.isAllNumbers(arr);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided an array which consists a string with elements', () => {
    const str = '1,2,3';
    expect(() => {
      validator.isAllNumbers(str);
    }).to.throw(`[${str}] is not an array`);
  });

  it('should return true when provided with an integer number', () => {
    const num = 22;
    const validationResults = validator.isInteger(num);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with a non-integer number', () => {
    const num = 1.5;
    const validationResults = validator.isInteger(num);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided element which is not a number', () => {
    const str = '5';
    expect(() => {
      validator.isInteger(str);
    }).to.throw(`[${str}] is not a number`);
  });
});

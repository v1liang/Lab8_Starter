// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number 1', () => {
    expect(functions.isPhoneNumber('(132)-332-9403)')).toBe(true);
  });
test('valid phone number 2', () => {
    expect(functions.isPhoneNumber('415-382-9403')).toBe(true);
  });
test('invalid phone number 1', () => {
    expect(functions.isPhoneNumber('4153829403')).toBe(false);
  });
test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber('34533129403')).toBe(false);
  });

test('valid email 1', () => {
    expect(functions.isEmail('fakemail@gmail.com')).toBe(true);
  });  
test('valid email 2', () => {
    expect(functions.isEmail('pleasework@gmail.com')).toBe(true);
  });
test('invalid email 1', () => {
    expect(functions.isEmail('thisdontwork*gmail.com')).toBe(false);
  });
test('invalid email 2', () => {
    expect(functions.isEmail('yahoo.com')).toBe(false);
  });

test('valid pw 1', () => {
    expect(functions.isStrongPassword('a1234dE895')).toBe(true);
  });  
test('valid pw 2', () => {
    expect(functions.isStrongPassword('DIkfjei_192_')).toBe(true);
  });
test('invalid pw 1', () => {
    expect(functions.isStrongPassword('123456789')).toBe(false);
  });
test('invalid pw 2', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
  });

test('valid date 1', () => {
    expect(functions.isDate('1/2/2003')).toBe(true);
  });  
test('valid date 2', () => {
    expect(functions.isDate('03/01/2021')).toBe(true);
  });
test('invalid date 1', () => {
    expect(functions.isDate('08182001')).toBe(false);
  });
test('invalid date 2', () => {
    expect(functions.isDate('3005/5545/48')).toBe(false);
  });


test('valid hexColor 1', () => {
    expect(functions.isHexColor('#00bfff')).toBe(true);
  });  
test('valid hexColor 2', () => {
    expect(functions.isHexColor('#bfff00')).toBe(true);
  });
test('invalid hexColor 1', () => {
    expect(functions.isHexColor('#yw')).toBe(false);
  });
test('invalid hexColor 2', () => {
    expect(functions.isHexColor('#bfbbB0032')).toBe(false);
  });
  
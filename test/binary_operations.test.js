import {calculate} from '../src/calculation';

test('10 + 20 to equal 30', () => {
  expect(calculate(['10', '+', '20'])).toBe(30);
});

test('500 - 222 to equal 278', () => {
  expect(calculate(['500', '-', '222'])).toBe(278);
});

test('10 * 20 to equal 200', () => {
  expect(calculate(['10', '*', '20'])).toBe(200);
});

test('8888 / 2222 to equal 4', () => {
  expect(calculate(['8888', '/', '2222'])).toBe(4);
});

test('10 % 3 to equal 1', () => {
  expect(calculate(['10', '%', '3'])).toBe(1);
});

test('3 ^ 5 to equal 243', () => {
  expect(calculate(['3', '^', '5'])).toBe(243);
});

test('3√216 to equal 6', () => {
  expect(calculate(['3', 'y√x', '216'])).toBe(6);
});

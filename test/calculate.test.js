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

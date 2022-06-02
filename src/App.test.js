import prime from './algorithms/prime'
import count from './algorithms/count'
import mdc from './algorithms/mdc'
import sort from './algorithms/quicksort'
import fib from './algorithms/fibonacci'
import sum from './algorithms/sum'

test('test 7 is prime', () => {
  expect(prime(7)).toBe(true)
});

test('test 4 is not prime', () => {
  expect(prime(4)).toBe(false)
});

test('test count numbers above five', () => {
  expect(count([1,2,3,4,5], 5)).toBe(4)
});

test('test count numbers under six', () => {
  expect(count([1,2,3,4,5,6,7,8,9,10], 6)).toBe(5)
});

test('test mdc of 4 and 8', () => {
  expect(mdc(4,8)).toBe(4)
});

test('test mdc of 5 and 3', () => {
  expect(mdc(5,3)).toBe(1)
});

test('test sort 5 4 3 2 1', () => {
  expect(sort([5,4,3,2,1], 0, 4).toString()).toBe([1,2,3,4,5].toString())
});

test('test sort 5 895 3 2 99', () => {
  expect(sort([5,895,3,2,99], 0, 4).toString()).toBe([2,3,5,99,895].toString())
});

test('test fibonacci of 5', () => {
  expect(fib(5).toString()).toBe([0,1,1,2,3].toString())
});

test('test fibonacci of 7', () => {
  expect(fib(7).toString()).toBe([0,1,1,2,3,5,8].toString())
});

test('test sum of 1 2 3 4', () => {
  expect(sum([1,2,3,4])).toBe(10)
});

test('test sum of 1 -2 3 -4', () => {
  expect(sum([1,-2,3,-4])).toBe(-2)
});



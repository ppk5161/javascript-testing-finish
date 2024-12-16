import { describe, expect, expectTypeOf, it} from "vitest";
import { calculateAverage, factorial } from "../intro";
// import { fizzBuzz, max } from "../intro";

// describe('max', () => { 
//     it('should return the first argumant it is greater', () => {
//         expect(max(2,1)).toBe(2);
//     })

//     it('should return the first argumant it is greater', () => {
//         expect(max(2,1)).toBe(2);
//     })


//     describe('fizzBuzz', () => {
//         it('should return fizzBuzz if arg is divisible by 3 and 5', () =>
//         expect(fizzBuzz(15)).toBe('FizzBuzz'));

//         it('should return fizzBuzz if arg is divisible by 3 and 5', () =>
//             expect(fizzBuzz(5)).toBe('Buzz'));

//         it('should return fizzBuzz if arg is divisible by 3 and 5', () =>
//             expect(fizzBuzz(13)).toBe('Fizz'));
//     })

describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
         expect(calculateAverage([])).toBe(NaN);
    })

    it('should calculate the average of an array with single element', () => {
        expect(calculateAverage([1,2,3])).toBe(2);
   })


 describe('factorial', () => {

    it('should return 1 if given 0', () => {

        expect(factorial(3)).toBe(1);
    })
 })
})


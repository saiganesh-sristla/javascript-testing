import {describe, expect, it} from 'vitest';
import { fizzBuzz, max } from '../src/intro';

describe('max', () => {
    it('should return first number if it is greater', () => {
        expect(max(2,1)).toBe(2);
    })

    it('should return second number if it is greater', () => {
        expect(max(1,2)).toBe(2);
    })

    it('should return first number if both the numbers are equal', () => {
        expect(max(1,1)).toBe(1);
    })
})

describe('fizzBuzz', () => {
    it('should return fizzBuzz if the number is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return fizz if the number is divisible by both 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })

    it('should return Buzz if the number is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })

    it('should return the same number in string format if the number is not divisible by 3 nor 5', () => {
        expect(fizzBuzz(8)).toBe('8');
    })
})
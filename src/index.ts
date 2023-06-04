/* Typescript Template
 * Template for typescript modules
 * Github: https://github.com/awesomelewis2007/typescript_template
 * By: Lewis Evans
 */

/**
 * Add two numbers together and return the result
 * @param a Number
 * @param b Number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('add expects two numbers')
    }
    return a + b
}

/**
 * Subtract two numbers and return the result
 * @param a Number
 * @param b Number
 * @returns Difference of a and b
 */
export function sub(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameters must be numbers')
    }
    return a - b
}

export default {
    add,
    sub
}
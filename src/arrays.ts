/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let copy = [...numbers];
    copy.length > 1 ? copy = [copy[0], copy[copy.length-1]] : copy.length === 1 ? copy.push(copy[0]) : copy;
    return copy
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x: number): number => x*3 )  
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((x:string): number => Number(x) ? Number(x) : 0 )
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let copy = [...amounts]
    return copy.map((x:string): string => x.startsWith("$") ? x.slice(1) : x).map((str:string): number => Number(str) ? Number(str) : 0)
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.map( (str: string): string => str.endsWith("!") ? str.toUpperCase() : str).filter( (word:string): boolean=> !word.endsWith("?") )
}
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce( (current:number, word:string) => word.length < 4 ? current+1 : current, 0)
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    
    return colors.every( (color: string): boolean => color === 'red' ? true : color === 'blue' ? true : color === 'green' ? true : false)
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = addends.reduce( (str: number, curr: number) => curr+Number(str), 0) 
    return addends.length === 0 ? "0=0" : String (sum + "=" + addends.join("+"))
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negIndex = values.findIndex((val:number): boolean => val < 0 )
    return negIndex !== -1 ? [...values.slice(0, negIndex + 1), 
        values.slice(0,negIndex).reduce( (num: number, curr: number) => curr+num, 0), 
        ...values.slice(negIndex + 1) ] : 
    [...values, (values.reduce((n:number, c:number) => n+c, 0)) ]
}

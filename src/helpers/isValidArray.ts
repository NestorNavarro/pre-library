/**
 * Verifies if the introduced array is of type array and has at least one element or min
 */
const isValidArray = (arr : any, minLength = 0) => arr && Array.isArray(arr) && arr.length > minLength;

export default isValidArray;


/* Space Complexity: O(1)
   Time Complexity: O(n) */
function firstMissingNaturalNumber(arr) {
    let result = 1;

    /* checking whether the input is null or empty array */
    if(arr == null || arr.length == 0) {
        return result;
    } 

    let arrLength = arr.length;
    let isOne = true;

    /* 
        Checking if 1 is present in the array. If not, 1 is the answer
        Replacing negative numbers, zeros and numbers greater than array length by 1s.
    */
    
    for(let i = 0; i < arrLength; i++) {
        if(arr[i] == 1) {
            isOne = false;
        } else if(arr[i] <= 0 || arr[i] > arrLength) {
            arr[i] = 1;
        }
    }

    /* returning 1 if 1 is missing in the provided input array */
    if(isOne) {
        return result;
    }

    /* changing the sign of i th element if we encounter number i and taken care of duplicates as well */
    for(let i = 0; i < arrLength; i++) {
        arr[Math.abs(arr[i])-1] = -1 * Math.abs(arr[Math.abs(arr[i])-1]);
    }

    /* Iterating the array again to return the index of the first positive number */
    for(let i = 0; i < arrLength; i++) {
        if(arr[i] > 0) {
            return i+1;
        }
    }

    /* if no positive number is found, then answer is arrLength + 1 */
    return arrLength + 1;
}

module.exports = firstMissingNaturalNumber;
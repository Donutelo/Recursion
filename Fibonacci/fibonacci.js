/** 
 * Return n numbers of the fibonacci sequence 
 * @param {number} n The n numbers
 * @returns {Array} The fibonacci sequence 
 **/
const fibonacci = function(n) {
    /*
    Without recursion:
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(i);
        } else if (i === 1) {
            result.push(i);
        } else if (i !== 1 && i !== 0){
            result.push(result[i - 2] + result[i - 1]);
        }
    }
        */

    if (n === 1 || n === 0) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    }

    let lastCall = fibonacci(n - 1);
    let length  = lastCall.length;
    let result = [...lastCall, lastCall[length - 1] + lastCall[length - 2]];

    return result;
}

module.exports = fibonacci;
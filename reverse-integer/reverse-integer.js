/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const res = parseInt(String(x).split('').reverse().join(''));
    if (res > 2**31 -1) return 0;
    if (x < 0) return parseInt('-' + res);
    return res;
};
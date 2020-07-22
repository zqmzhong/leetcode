/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            res++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    return res;
};
// @lc code=end

console.log(findContentChildren([1, 2, 3], [3]))

/*
 * @Author: 雪枫-秦明
 * @Date: 2020-12-04 12:34:54
 * @LastEditors: 雪枫-秦明
 * @LastEditTime: 2020-12-04 13:45:02
 * @Description: 要先清晰这个数学规律
 */

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let dp = []
    let p3 = 0
    let p5 = 0
    let p7 = 0
    dp[0] = 1

    for(let i = 1; i < k;i ++) {
        dp[i] = Math.min(dp[p3]*3, dp[p5] * 5, dp[p7] * 7)
        if(dp[i] == dp[p3] * 3) { p3++ }
        if(dp[i] == dp[p5] * 5) { p5++}
        if(dp[i] == dp[p7] * 7) { p7++ }
    }

    return dp[k-1]
};
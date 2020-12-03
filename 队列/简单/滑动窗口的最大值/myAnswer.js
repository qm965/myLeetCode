/*
 * @Author: 雪枫-秦明
 * @Date: 2020-12-03 12:40:37
 * @LastEditors: 雪枫-秦明
 * @LastEditTime: 2020-12-03 13:12:26
 * @Description: 进出窗口就是一个队列
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var queue = nums.slice(0,k),
        over = [];
    if(!queue.length) return [];
    
    over.push(Math.max(...queue));

    for (let i = k;i < nums.length;i++){
        queue.shift()
        queue.push(nums[i])
        over.push(Math.max(...queue));
    }
    console.log(over)
    return over
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)
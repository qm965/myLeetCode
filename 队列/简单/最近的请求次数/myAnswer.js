/*
 * @Author: 雪枫-秦明
 * @Date: 2020-12-03 09:34:08
 * @LastEditors: 雪枫-秦明
 * @LastEditTime: 2020-12-03 09:52:14
 * @Description: 元芳你怎么看
 */

var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while(this.queue[0]<t-3000){
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// test------------------------------
var recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 执行用时：108 ms, 在所有 JavaScript 提交中击败了22.07%的用户
// 内存消耗：43.5 MB, 在所有 JavaScript 提交中击败了5.05%的用户
var nextGreaterElement = function(nums1, nums2) {  // 最笨的方法，如何用栈实现？
    // map也可以换成Array.from方法来生成数据
    var stack = nums1.map((v)=>{
        let hu = nums2.slice(nums2.indexOf(v)).find(h=>h>v)
        return hu ? hu : -1
    })
    return stack
};

// 栈的方法之一：其实就是nums2全部做了次查询，nums1匹配就好，但是如果nums1要查的少，nums2数据多呢，那不是很多浪费了，是否可以优化？？？


// var nextGreaterElement = function(nums1, nums2) {
//     //整体思路：
//     //1.维护一个单调递减的栈，如果遇到比栈顶大的元素就是第一个比自己大的了
//     //2.那么用key表示当前的数，nums[i]表示比key大的第一个数
//     //3.枚举nums1找存在的key里的value值即可
//      let map = new Map()
//      let res = []
//      let m = nums2.length
//      let stack = []
//      for(let i = 0; i < m; i++){
//        //栈顶元素存在，并且当前的元素大于栈顶  
//        while(stack.length && nums2[i] > stack[stack.length - 1]){
//          map.set(stack.pop(), nums2[i]) 
//        }  
//        stack.push(nums2[i])
//      }
//      //栈内还有元素，说明后面没有比自己小的了
//      while(stack.length){
//        map.set(stack.pop(), -1)
//      }
//      nums1.forEach(item => {
//        res.push(map.get(item))
//      })
//      return res
//    };


nextGreaterElement([4,1,2],[1,3,4,2])

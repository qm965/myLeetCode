
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    function sort(a,b){ //降序
        return b-a
    }
    nums = nums.sort(sort)
    if(nums.length==1){
        return nums
    }
    if((nums.length==2) && (nums[0]==nums[1])){
        return nums
    }
    let numsLen = nums.length,over,numsMaxArr,numsMax,numsMin,acc;
    acc = nums.reduce((acc,item)=>acc+item,0)
    for (let index=1;index<numsLen;index++){
        numsMaxArr = nums.slice(0,index)
        numsMax = numsMaxArr.reduce((acc,item)=>acc+item,0)
        if(numsMax/acc > 1/2 && !over){
            over=numsMaxArr
            break;
        }
    }
    return over
};
console.log(minSubsequence([8,8]))
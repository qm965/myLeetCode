/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    return nums2.filter(value=>{
        return nums1.indexOf(value) > -1
    })
};

console.log(intersection([1,2,2,1],[2,2]))
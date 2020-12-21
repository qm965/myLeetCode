/**
 * @param {string[]} A
 * @return {number}
 */
//   做题先好好审题，别一开始就想的太复杂
var minDeletionSize = function(A) {
    let ans = 0
    for (let i = 0; i < A[0].length; i++) {
      for (let j = 0; j < A.length - 1; j++) {
        if (A[j][i] > A[j + 1][i]) {
          ans++
          break
        }
      }
    }
  
    return ans
  };
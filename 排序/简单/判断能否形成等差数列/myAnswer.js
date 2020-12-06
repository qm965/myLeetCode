/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const { length } = arr;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const data = (max-min)/(length-1);
    for (let i=1; i<length;i++){
        if(arr.indexOf(min+data*i)===-1){
            return false
        }
    }
    return true
};

console.log(canMakeArithmeticProgression([3,5,1]))
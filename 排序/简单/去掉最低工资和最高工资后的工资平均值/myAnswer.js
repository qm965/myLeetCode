/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;
    const max = Math.max(...salary)
    const min = Math.min(...salary)
    for(let item of salary){
        sum += item
    }
    return (sum-max-min)/(salary.length-2)
};

average([8000,9000,2000,3000,6000,1000])
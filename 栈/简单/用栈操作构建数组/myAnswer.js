/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    var stack  = [];
        index = 1;
    
    while(index<=n){
        if(!target.length){
            break;
        }
        stack.push('Push')
        if(index === target[0]){
            target.shift()
        }else{
            stack.push('Pop')
        }
        index++
    }
    return stack
};

console.log(Array.from({length: 5},(v,i)=>i+1))
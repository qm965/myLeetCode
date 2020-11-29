/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack = [],
        i = 0,
        data= null,
        { length } = ops;
    while( i<length ){
        data = ops[i];
        switch(data){
            case "C":
                stack.pop();
                break;
            case "D":
                stack.push(stack[stack.length-1]*2);
                break;
            case "+":
                stack.push(stack[stack.length-1] + stack[stack.length-2]);
                break;
            default:
                stack.push(data*1);
        }
        i++;
    }
    
    return stack.reduce((total,item)=>total+item,0)
    
};
console.time()
// console.log(calPoints(["5","2","C","D","+"])
setTimeout(()=>{
    console.timeEnd()
},100)


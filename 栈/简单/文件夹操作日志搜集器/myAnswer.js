/**
 * @param {string[]} logs
 * @return {number}
 */
// 最简单的是用reduce方法处理，一行代码解决
var minOperations = function(logs) {
    var stack = [];
    for (let item of logs ){
        switch(item){
            case '../':
                stack.length && stack.pop()
                break;
            case './':
                break;
            default:
                stack.push(item)
        }
    }
    return stack.length
};

console.log(minOperations(["d1/","../","../","../"]))
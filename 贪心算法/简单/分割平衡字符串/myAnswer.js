/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    /**
     * 利用栈的方法
    */
    var stack = [s[0]],max=0,index=1;
    while(index<s.length){
        if(stack[0]==s[index] || stack.length==0){
            stack.unshift(s[index])
        }else{
            stack.shift()
        }
        stack.length ==0 && max++;
        index += 1
    }
    console.log(max)
    return max
};

balancedStringSplit("RLRRLLRLRL")
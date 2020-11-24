const test1 = 'aabcbccf'

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var stack = [S[0]],
        { length } = S;
    // 可以用for of 啊，别遍历只用基本循环,字符串自带遍历器，获取循环效率更高？
    for (let i=1;i<length;i++) {
        if(S[i]===stack[stack.length - 1 ]){
            stack.pop()
        }else{
            stack.push(S[i])
        }
    }
    return stack.join('')
};

removeDuplicates(test1)
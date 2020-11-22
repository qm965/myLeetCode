// 执行用时：72 ms, 在所有 JavaScript 提交中击败了100.00%的用户
// 内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了14.54%的用户
// 哪里导致的内存消耗过大呢？？
// 也可以用递归，但是效率太差
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const UppercaseReg = /[A-Z]/,
        stack = [s[0]],
        { length } = s;
    
    for ( let i=1;i<length;i++ ) {
        var { length: stackLength } = stack
        if ( stackLength 
            && s[i].toLowerCase() === stack[stackLength-1].toLowerCase()
            && s[i] !== stack[stackLength-1]
        ) {
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.join('')
};
// ----------test----------
console.log(makeGood('aAbbAbaaCc'))
// 思路：奇数长度肯定错误。首先要对这6个符号做匹配标记
// 1. 用正则去做匹配，该如何写？？
// 2. 正确的顺序闭合，中间拆分判断，？？
// 3. 尽量向栈的基本概念上想：先进后出？？


// 执行用时：84 ms, 在所有 JavaScript 提交中击败了73.70%的用户
// 内存消耗：38.1 MB, 在所有 JavaScript 提交中击败了33.79%的用户

const test1 = '()]',
    test2 = '()[]{}',
    test3 = '()',
    test4 = '(]',
    test5 = '([)]',
    test6 = '{[]}';
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var { length } = s;
    var obj = {
        '(': ')',
        ')': '(',
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{'
    },
    leftobj = '([{';
    // 后续优化的点：首先第一个必须为左括号，否则就false，没必要执行了，可以将obj和leftobj整合在一起
    // {
    //     '(':')',
    //     '[':']',
    //     '{': '}'
    // }
    let stack=[];
    for (let i =0;i<length;i++){
        
        var {length: stackLength} = stack
        if (stackLength>=1
            && leftobj.indexOf(stack[stackLength-1])!==-1
            && stack[stackLength-1] === obj[s[i]]
        ){      
            stack.pop()
        }else{
            stack.push(s[i])
            continue;
        }
        
    }
    return !stack.length
};

console.log(isValid(test6))

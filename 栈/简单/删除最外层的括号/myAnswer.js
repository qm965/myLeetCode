// 1. 首先做原语分解，设置原语规则，分隔原语
// 2. 去除最外层括号，再合并返回
// 3. 注意元素只有( )两种

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let stack = [S[0]],
        i = 1,
        startIndex = 0,
        str = '';
    while(i<S.length){
        // 字符串中取值最好用str.charAt(i)
        if(S[i]==='(') stack.push('(');
        else stack.pop();
        if(!stack.length){
            str += S.substring(startIndex + 1,i)
            startIndex = i + 1
        }
        i++
    }
    return str
};
removeOuterParentheses("(()())(())")
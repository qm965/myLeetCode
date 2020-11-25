// 利用变量取代栈，优化空间复杂度

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let num = 0,
    m = 0,
    result = ""

   for(let i = 0 ;i<S.length;i++){
       S.charAt(i) === "(" ? num ++ : num--
       if(num === 0) {
           // 保存原语
           result += S.slice(m+1,i)
            m = i+1
       }
   }

   return result
};

// 作者：ada-42
// 链接：https://leetcode-cn.com/problems/remove-outermost-parentheses/solution/li-yong-bian-liang-qu-dai-zhan-you-hua-kong-jian-f/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
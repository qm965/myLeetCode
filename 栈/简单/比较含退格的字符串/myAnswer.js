
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 不能两个字符串合并处理，审题审题
var backspaceCompare = function (S, T) {
    /* 栈 */
    return processed(S) === processed(T);
  };
  
  const processed = (str) => {
    const stackStr = [];
  
    for (const c of str) {
      if (c === '#') {
        stackStr.pop();
      } else {
        stackStr.push(c);
      }
    }
  
    return stackStr.join('');
  }
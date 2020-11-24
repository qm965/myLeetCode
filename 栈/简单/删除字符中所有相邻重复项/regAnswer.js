// 利用正则表达式求解
// 正则部分内容需要学习清楚啊
var removeDuplicates = function(S) {
    let reg = /(\w)\1/g
    while(reg.test(S)){
        S = S.replace(reg, "")
    }
    return S
};
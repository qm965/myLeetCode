/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const count = parseInt(n/7);
    const last = n%7
    let i=0,sum=0;
    while(i<=count){
        if(i==count){ // 最后一周的特殊处理
            if(last==0)break; // 整除则退出循环
            sum += weekMoney(i+1,last)
        }else{
            sum +=weekMoney(i+1,7)
        }
        i++
    }
    return sum
};
/**
 * 计算每周存的
 * @param {number} initMoney 
 * @param {number} days 
 */
function weekMoney(initMoney,days){
    let sum = initMoney
    for(let i = 1;i<days;i++){
        sum += i+initMoney
    }
    return sum
}
console.log(totalMoney(175))
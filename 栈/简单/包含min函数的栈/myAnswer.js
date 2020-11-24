// 撒了，头部插入头部删除不好吗，length-1的索引方式有点脑残


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minIndexArr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(this.minIndexArr.length && x < this.stack[this.minIndexArr[this.minIndexArr.length -1]]){
        this.minIndexArr.push(this.stack.length -1)
    }else if(!this.minIndexArr.length) {
        this.minIndexArr.push(0)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var { stack,minIndexArr } = this,
    stackData = stack[stack.length-1],
    stacko = stack[minIndexArr[minIndexArr.length -1]];
    stack.pop()
    if(
        stackData == stacko 
        && stack.find(x=>x==stackData)===undefined
    ){
        this.minIndexArr.pop()
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var { stack } = this
    return stack[stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    var { stack,minIndexArr } = this
    return stack[minIndexArr[minIndexArr.length-1]]
};

//Your MinStack object will be instantiated and called as such:
 var obj = new MinStack()
 obj.push(0)
 obj.push(1)
 obj.push(0)
 obj.min()
 obj.pop()
//  obj.top()
 obj.min()
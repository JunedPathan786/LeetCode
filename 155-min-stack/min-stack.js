var MinStack = function() {
    this.st = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.st.length === 0 || this.min[this.min.length - 1] >= val) {
        this.min.push(val);
    }
    this.st.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let ele1 = this.st.pop();
    let ele2 = this.min[this.min.length - 1];

    if (ele1 === ele2) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

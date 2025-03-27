var MyStack = function() {
    this.main = [];
    this.helper = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Move all elements from main to helper
    while (this.main.length > 0) {
        this.helper.push(this.main.shift());
    }

    // Add x to the main queue
    this.main.push(x);

    // Move all elements back from helper to main
    while (this.helper.length > 0) {
        this.main.push(this.helper.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.main.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.main[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.main.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack();
 * obj.push(x);
 * var param_2 = obj.pop();
 * var param_3 = obj.top();
 * var param_4 = obj.empty();
 */

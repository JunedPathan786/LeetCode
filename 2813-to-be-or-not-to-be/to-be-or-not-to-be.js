/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
    
    function toBe(x){
        if(x === val) return true;
        else throw new Error("Not Equal");
    }

    function notToBe(y){
        if(y !== val) return true;
        else throw new Error("Equal");
    }

    return{toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
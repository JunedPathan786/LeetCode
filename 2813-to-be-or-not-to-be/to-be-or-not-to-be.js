/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
    return{
        toBe : (x) => {
            if(x === val) return true;
            else throw new Error("Not Equal");
        },
        notToBe : (y) => {
            if(y !== val) return true;
            else throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
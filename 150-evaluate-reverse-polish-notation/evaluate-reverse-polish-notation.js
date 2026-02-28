/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for(let token of tokens){
        if(isOperator(token)){
            let b = stack.pop()
            let a = stack.pop()

            let result = applyOperator(token , a , b)
            stack.push(result)
        }else{
            stack.push(parseInt(token))
        }
    }
    return stack.pop()

    function isOperator(token , a , b){
        return ['+', '-', '*', '/'].includes(token)
    }

    function applyOperator(operator, a , b){
        switch (operator) {
            case "+" : return a + b
            case "-" : return a - b
            case "*" : return a * b
            case "/" : return Math.trunc(a/b)
            default : throw new Error("Invalid Operator")
        }
    }
};
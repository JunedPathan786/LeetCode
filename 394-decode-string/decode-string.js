/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
    let stack = [];

    for (let char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let encoded = '';
            while (stack[stack.length - 1] !== '[') {
                encoded = stack.pop() + encoded;
            }
            stack.pop();

            let num = '';
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }

            let repeated = encoded.repeat(parseInt(num));
            stack.push(repeated);
        }
    }

    return stack.join('');
}

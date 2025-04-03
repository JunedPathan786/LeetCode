/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let lastIndex = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        lastIndex[idx] = i;
    }

    let present = new Array(26).fill(false);
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

        if (!present[idx]) {
            while (
                stack.length > 0 &&
                stack[stack.length - 1] > ch &&
                lastIndex[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > i
            ) {
                present[stack.pop().charCodeAt(0) - 'a'.charCodeAt(0)] = false;
            }

            stack.push(ch);
            present[idx] = true;
        }
    }

    return stack.join('');
};

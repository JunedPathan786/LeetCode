/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const n = s.length;
    let cleaned = "";

    for (let i = 0; i < n; i++) {
        const c = s[i].toLowerCase();
        if (isAlphaNumeric(c)) cleaned += c;
    }

    for (let i = 0, j = cleaned.length - 1; i < j; i++, j--) {
        if (cleaned[i] !== cleaned[j]) return false;
    }

    return true;
}

function isAlphaNumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

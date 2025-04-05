/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            const str = count.toString();
            for (let ch of str) {
                chars[write++] = ch;
            }
        }
    }

    return write;
};

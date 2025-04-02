/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;

    for(let i = s.length - 1; i >= 0; i--){
        let ch = s.charAt(i);

        if(ch !== ' '){
            count++;
        }else if(count !== 0){
            break;
        }
    }

    return count;
};
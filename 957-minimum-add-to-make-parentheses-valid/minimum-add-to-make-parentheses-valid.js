/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;
    let count = 0;

    for(let i=0; i<s.length; i++){

        if(s[i] === '('){
            open++
        }else{
             if (open > 0) {
                open--; // matches with an opening
            } else {
                count++; // need to insert one '('
            }
        }
    }

    return open + count;
};
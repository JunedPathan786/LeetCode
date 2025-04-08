/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 1;
    let count = 1;

    for(let i=0; i<s.length; i++){
        let curr = s.charAt(i);
        let prev = s.charAt(i-1);

        if(curr === prev){
            count++;
        }else{
            max = Math.max(count, max);
            count = 1;
        }
    }

    max= Math.max(count, max);

    return max;
};
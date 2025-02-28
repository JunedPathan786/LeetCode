/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0){
        return 0;
    }else if(n === 1 || n === 2){
        return 1;
    }else{
        
    let firstTerm = 0;
    let secondTerm = 1;
    let thirdTerm = 1 ;

    for(let i=1; i<=n; i++){
        let fourthTerm = firstTerm + secondTerm + thirdTerm;
        firstTerm = secondTerm ;
        secondTerm = thirdTerm;
        thirdTerm = fourthTerm;
    }
       return firstTerm;
    }

};
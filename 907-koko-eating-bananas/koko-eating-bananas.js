/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let left = 1;
    let right = Math.max(...piles);

    while(left < right){

        let mid = Math.floor(left + (right - left) / 2);

        if(canFinish(piles, mid, h)){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    return left;

    function canFinish(piles, speed, h){

        let hours = 0;

        for(let pile of piles){
            hours += Math.ceil(pile / speed);
        }

        return hours <= h;
    }
};
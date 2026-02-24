/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length  > s2.length) return false

    let s1Map = new Array(26).fill(0)
    let s2Map = new Array(26).fill(0)

    for(let i =0 ; i < s1.length ; i++){
        s1Map[s1.charCodeAt(i) - 97]++
        s2Map[s2.charCodeAt(i) - 97]++
    }


    function matches(map1, map2){
        for(let i =0 ; i <26; i++){
            if(map1[i] !== map2[i]){
            return false
            }
        }
        return true
    }

    if(matches(s1Map, s2Map)) return true
    
    for(let i = s1.length ; i < s2.length; i++){
        s2Map[s2.charCodeAt(i) - 97]++

        s2Map[s2.charCodeAt(i - s1.length) - 97]--

        if(matches(s1Map, s2Map)) return true
    }

    return false
};
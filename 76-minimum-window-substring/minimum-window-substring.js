/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length === 0  || t.length === 0  || s.length  < t.length ){
        return ""
    }

    let mapT = new Map()

    for(let char of t){
        mapT.set(char, (mapT.get(char) || 0) + 1)
    }

    let required = mapT.size
    let left = 0
    let created = 0

    let subStringMap = new Map()
    let ans = [Infinity, 0, 0];

    for(let right = 0; right < s.length; right++){
        let char = s[right]

        subStringMap.set(char, (subStringMap.get(char) || 0) + 1)

        if(mapT.has(char) && subStringMap.get(char) === mapT.get(char)){
            created++
        }

        while(left <= right && created === required){
            if(right - left < ans[0]) {
                ans = [right - left + 1, left, right]
            }

            let leftChar = s[left]
            subStringMap.set(leftChar, subStringMap.get(leftChar) - 1)

            if(mapT.has(leftChar) && subStringMap.get(leftChar) < mapT.get(leftChar)){
                created--
            }

            left++
        }
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1)
};
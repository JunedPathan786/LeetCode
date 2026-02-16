/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length == 0){
            return new Array()
        }

        let ansmap = new Map()

        for(let str of strs){
            let count = new Array(26).fill(0)

            for(let char of str){
                count[char.charCodeAt(0) - 97]++
            }

            let key = count.join("#") 

            if(!ansmap.has(key)){
                ansmap.set(key, [] )
            }
            ansmap.get(key).push(str)
        }
        return Array.from(ansmap.values())
};
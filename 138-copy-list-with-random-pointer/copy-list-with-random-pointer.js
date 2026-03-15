/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
function copyConstructor(head, visitedNode){

    if(!head) return null

    if(visitedNode.has(head)){
        return visitedNode.get(head)
    }

    let node = new _Node(head.val, null, null)

    visitedNode.set(head, node)

    node.next = copyConstructor(head.next, visitedNode)
    node.random = copyConstructor(head.random, visitedNode)

    return node
}

var copyRandomList = function(head) {

    const visited = new Map()

    return copyConstructor(head, visited)

};
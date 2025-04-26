/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function nextLargerNodes(head) {
    let values = [];
    let current = head;
    
    // Convert linked list to array
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    
    let answer = new Array(values.length).fill(0);
    let stack = []; // Stack to keep indices

    for (let i = 0; i < values.length; i++) {
        while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {
            let idx = stack.pop();
            answer[idx] = values[i];
        }
        stack.push(i);
    }
    
    return answer;
}

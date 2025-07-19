//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

const getDecimalValue = function(head) {
    let result = 0;
    let current = head;

    while (current) {
        result = (result << 1) | current.val;
        current = current.next;
    }

    return result;
}
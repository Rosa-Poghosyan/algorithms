//https://leetcode.com/problems/sort-list/description/

const sortList = function(head) {
    if (!head || !head.next) return head;

    let slow = head, fast = head, prev = null;

    // Find the middle of the list
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;

    // Sort each half recursively
    let left = sortList(head);
    let right = sortList(slow);

    if (!left) return right;
    if (!right) return left;
    let mergedHead = null, mergedTail = null;
    if (left.val < right.val) {
        mergedHead = mergedTail = left;
        left = left.next;
    } else {
        mergedHead = mergedTail = right;
        right = right.next;
    }
    while (left && right) {
        if (left.val < right.val) {
            mergedTail.next = left;
            mergedTail = mergedTail.next;
            left = left.next;
        } else {
            mergedTail.next = right;
            mergedTail = mergedTail.next;
            right = right.next;
        }
    }
    if (left) mergedTail.next = left;
    if (right) mergedTail.next = right;
    return mergedHead;

}
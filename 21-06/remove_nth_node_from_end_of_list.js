//https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

const removeNthFromEnd = function(head, n) {
    let dummy = { next: head };
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}
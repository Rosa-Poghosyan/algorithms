//https://leetcode.com/problems/reverse-linked-list-ii/description/

const reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = { next: head };
    let prev = dummy;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }
    let current = prev.next;
    let then = current.next;

    for (let i = 0; i < right - left + 1; i++) {
        current.next = then.next;
        then.next = prev.next;
        prev.next = then
        then = current.next;

    }

    return dummy.next;
}
//https://leetcode.com/problems/swap-nodes-in-pairs/description/

const swapPairs = function(head) {
    if (!head || !head.next) return head;

    let dummy = { next: head };
    let prev = dummy;
    let current = head;

    while (current && current.next) {
        let first = current;
        let second = current.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;
        prev = first;
        current = first.next;
    }

    return dummy.next;

}
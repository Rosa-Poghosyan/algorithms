//https://leetcode.com/problems/odd-even-linked-list/description/


const oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even && even.next) {
        odd.next = even.next; // Link odd nodes
        odd = odd.next; // Move to the next odd node
        even.next = odd.next; // Link even nodes
        even = even.next; // Move to the next even node
    }

    odd.next = evenHead; // Connect the end of odd list to the head of even list

    return head;
}
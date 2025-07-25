//https://leetcode.com/problems/middle-of-the-linked-list/description/

const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
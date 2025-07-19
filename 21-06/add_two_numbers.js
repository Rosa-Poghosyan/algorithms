//https://leetcode.com/problems/add-two-numbers/description/

const addTwoNumbers = function(l1, l2) {
    let dummy = {next: l1, val: 0};
    let current = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = {val: sum % 10, next: null};
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
}
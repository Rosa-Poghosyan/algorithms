//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

const deleteDuplicates = function(head) {

    let current = head;

    while(current && current.next){
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;

}
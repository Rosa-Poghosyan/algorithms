//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

const deleteMiddle = function(head) {
	if(!head || !head.next) return null;
	
	let prev = null;
	let slow = head;
	let fast = head;
	
	while(fast && fast.next){
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
		
	}
    
	if(prev) {
		prev.next = slow ? slow.next : null;
	}
	return head;
}
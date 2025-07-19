//https://leetcode.com/problems/rotate-list/

const rotateRight = function(head, k) {
    if(!head || !head.next) return head;
	
	let length = 1;
	let current = head;
	while(current.next){
		current = current.next;
		++length;
	}
	
	current.next = head;
	
	k = k % length;
	
	let newTail = length -k - 1;
	current = head;
	for(let i = 0; i < newTail; ++i) {
		current = current.next;
	}
	
	let newHead = current.next;
	current.next = null;
	return newHead;
	
}
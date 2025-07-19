//https://leetcode.com/problems/remove-linked-list-elements/description/

const removeElements = (head, val) => {
	
	let dummy = {next: head}
	let prev = dummy;
	let current = head;
	
	while(current) {
		if(current.val  === val){
			prev.next = current.next;
			
		}else {
			prev = current;
		}
		current = current.next
	}
	
	return dummy.next;
    
}
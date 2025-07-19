//https://leetcode.com/problems/merge-two-sorted-lists/description/

const mergeTwoLists = (list1, list2) => {
	if(!list1) return list2;
	if(!list2) return list1;
	
	let mergedHead = null;
	let mergedTail = null;
	
	if(list1.val < list2.val){
		mergedHead = mergedTail = list1;
		list1 = list1.next;
	} else {
		mergedHead = mergedTail = list2;
		list2 = list2.next;
	}
	
	while(list1 && list2){
		if(list1.val < list2.val){
			mergedTail.next = list1;
			list1 = list1.next;
		} else {
			mergedTail.next = list2;
			list2 = list2.next;
		}
		mergedTail = mergedTail.next;
	}
	
	if(list1){
		mergedTail.next = list1;
	}
	if(list2){
		mergedTail.next = list2;
	}
	
	return mergedHead;
}
//https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/

const isCompleteTree = (root) => {
    if(!root) return true;
    const queue = [root];
    let end = false;
    while(queue.length) {
        const node = queue.shift();
        if(!node) {
            end = true;
        } else {
            if(end) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    console.log("********")
    return true;
}

let root = [1,2,3,4,5,null,7]

console.log(isCompleteTree(root)); // Output: true
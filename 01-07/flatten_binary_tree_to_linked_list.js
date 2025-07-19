//https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

const flatten = function(root) {
    if (!root) return null;

    let current = root;
    const stack = [];

    while (current || stack.length) {
        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            current.right = current.left;
            current.left = null;
        } else if (stack.length) {
            current.right = stack.pop();
        }
        current = current.right;
    }

    return root;
}
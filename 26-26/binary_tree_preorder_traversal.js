//https://leetcode.com/problems/binary-tree-preorder-traversal/description/

const preorderTraversal = function(root) {
    if(!root) return [];
    const left = preorderTraversal(root.left);
    const right = preorderTraversal(root.right);
    return [root.val, ...left, ...right];
}
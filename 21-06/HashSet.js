//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

const maxDepth = function(root) {
    if (!root) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
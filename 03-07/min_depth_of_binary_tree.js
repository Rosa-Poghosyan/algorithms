//https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

const minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1; // Leaf node

    let leftDepth = root.left ? minDepth(root.left) : Infinity;
    let rightDepth = root.right ? minDepth(root.right) : Infinity;

    return Math.min(leftDepth, rightDepth) + 1;
}
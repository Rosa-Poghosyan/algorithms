//https://leetcode.com/problems/deepest-leaves-sum/description/

const deepestLeavesSum = function(root) {
    let maxDepth = 0;
    let sum = 0;

    const dfs = (node, depth) => {
        if (!node) return;

        if (!node.left && !node.right) {
            if (depth > maxDepth) {
                maxDepth = depth;
                sum = node.val;
            } else if (depth === maxDepth) {
                sum += node.val;
            }
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);
    return sum;
};
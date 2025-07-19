//https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

const sumNumbers = function(root) {
    if (!root) return 0;
    let totalSum = 0;
    const dfs = (node, currentSum) => {
        if (!node) return;
        currentSum = currentSum * 10 + node.val;
        if (!node.left && !node.right) {
            totalSum += currentSum;
        }

        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
    };
    dfs(root, 0);
    return totalSum;
}
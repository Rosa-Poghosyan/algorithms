//https://leetcode.com/problems/path-sum/description/

const hasPathSum = function(root, targetSum) {
    if (!root) return false;


    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    const newTargetSum = targetSum - root.val;
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
	
};

const hasPathSum1 = function(root, targetSum) {
    if (!root) return false;

    const dfs = (node, sum) => {
        if (!node) return false;

        sum += node.val;

        if (!node.left && !node.right) {
            return sum === targetSum;
        }

        return dfs(node.left, sum) || dfs(node.right, sum);
    };

    return dfs(root, 0);
};


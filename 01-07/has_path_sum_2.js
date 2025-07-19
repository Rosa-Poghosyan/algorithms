const pathSum = function(root, targetSum) {
    if (!root) return [];

    const paths = [];

    const dfs = (node, currentPath, sum) => {
        if (!node) return;

        currentPath.push(node.val);
        sum += node.val;

        if (!node.left && !node.right && sum === targetSum) {
            paths.push([...currentPath]); // push a copy
        }

        dfs(node.left, currentPath, sum);
        dfs(node.right, currentPath, sum);

        currentPath.pop(); // backtrack
    };

    dfs(root, [], 0);
    return paths;
};
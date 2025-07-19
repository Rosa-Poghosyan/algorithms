//https://leetcode.com/problems/binary-tree-paths/description/

const binaryTreePaths = function(root) {
    if (!root) return [];

    const paths = [];

    const findPaths = (node, currentPath) => {
        if (!node) return;

        currentPath.push(node.val);
        if (!node.left && !node.right) {
            paths.push(currentPath.join('->'));
        } else {
            findPaths(node.left, currentPath);
            findPaths(node.right, currentPath);
        }

        currentPath.pop();
    };

    findPaths(root, []);
    return paths;
}
//https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/

const levelOrderBottom = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.unshift(level); // Add the current level at the beginning
    }

    return result;
}
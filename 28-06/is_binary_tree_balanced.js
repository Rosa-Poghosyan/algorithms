//https://leetcode.com/problems/balanced-binary-tree/description/

const isBalanced = function(root) {
    if (!root) return true;

    const checkBalance = (node) => {
        if (!node) return 0;

        const leftHeight = checkBalance(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = checkBalance(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    };

    return checkBalance(root) !== -1;
}
const diameterOfBinaryTree = (root) => {
    let diameter = 0;

    const depth = (node) => {
        if (!node) return 0;
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        diameter = Math.max(diameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    };

    depth(root);
    return diameter;
}
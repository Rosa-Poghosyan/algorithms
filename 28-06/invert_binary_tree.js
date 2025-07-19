const invertTree = function(root) {
    if (!root) return null;

    // Swap left and right
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};
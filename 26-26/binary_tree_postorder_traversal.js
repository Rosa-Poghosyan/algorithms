//

const postorderTraversal = function(root) {
    if (!root) return [];
    const left = this.postorderTraversal(root.left);
    const right = this.postorderTraversal(root.right);
    return [...left, ...right, root.val];
};
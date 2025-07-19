//https://docs.google.com/spreadsheets/d/1aZcXGF1-WKU2FGOK2JRIab-HQhLentdF1D4X_41X8Ko/edit?gid=0#gid=0

const inorderTraversal = function(root) {
    if(!root) return [];
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);
    return [...left, root.val, ...right];
}
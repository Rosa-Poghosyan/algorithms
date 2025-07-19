//https://leetcode.com/problems/cousins-in-binary-tree/description/


const isCousins = function(root, x, y) {
    if (!root) return false;

    const queue = [root];
    let foundX = false, foundY = false;

    while (queue.length > 0) {
        const levelSize = queue.length;
        foundX = foundY = false;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node.val === x) foundX = true;
            if (node.val === y) foundY = true;

            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val === y) ||
                    (node.left.val === y && node.right.val === x)) {
                    return false;
                }
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (foundX && foundY) return true;
        if (foundX || foundY) return false;
    }

    return false;
}
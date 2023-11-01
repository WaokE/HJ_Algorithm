/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    var max = 0;
    var res = [];
    var num = 0.1;
    var count = 0;
    var update = () => {
        if (count === max) {
            res.push(num);
        } else if (count > max) {
            max = count;
            res = [num];
        }
    };
    preOrder(root, node => {
        if (node.val === num) {
            count += 1;
        } else {
            update();
            num = node.val;
            count = 1;
        }
    });
    update();
    return res;
};

var preOrder = function(root, visit) {
    root.left && preOrder(root.left, visit);
    visit(root);
    root.right && preOrder(root.right, visit);
};
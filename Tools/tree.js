// 非线性结构，仅有唯一一个根节点，没有则为空树。
// 除根节点，每个节点仅有唯一一个父节点。
// 节点间不能形成闭环

/**
 * 节点的深度： 从根节点到该节点所经历的边的个数
 * 节点的高度： 节点到叶节点的最长路径
 */

/**
 * 平衡二叉树： 每一个节点的左右子树的高度相差不能大于1
 */

/**
 * 链式存储法 表示 二叉树
 * 当前节点： val
 * 左节点： left
 * 右节点： right
 */
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  let Node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
  let root = null;
}

/**
 * 数组存储法 (适用于完全二叉树)
 * 所有节点满足：
 * 位置为i的节点，它的父节点位置为i/2
 * 它的左子节点为 2i
 * 它的右子节点为 2i+1
 * 相较于链式存储法不需要为每个节点创建它的左右指针，更节省内存
 */

/**
 * 二叉树的遍历
 * 前序遍历：对于二叉树中的任意一个节点，先打印该节点，然后是它的左子树，最后是右子树
 *          A
*        B     C
       D   E      F
                          A --> B --> D --> E --> C --> F
  核心代码：
  var preOrderTraverseNode = (node) => {
    if (node) {
      result.push(node.val);
      preOrderTraverseNode(node.left);
      preOrderTraverseNode(node.right);
    }
  };


  * 中序遍历: 对于二叉树中的任意一个节点，先打印它的左子树，然后是该节点，最后是右子树
            A
*        B     C
       D   E      F
                          D --> B --> E --> A --> C --> F

  * 后序遍历：对于二叉树中的任意一个节点，先打印它的左子树，然后是右子树，最后是该节点
            A
*        B     C
       D   E      F
                          D --> E --> B --> F --> C --> A

 */

// 前序遍历 递归
// var preorderTraversal = (root) => {
//   let result = [];
//   var preOrderTraverseNode = (node) => {
//     if (node) {
//       result.push(node.val);
//       preOrderTraverseNode(node.left);
//       preOrderTraverseNode(node.right);
//     }
//   };
//   preOrderTraverseNode(root);
//   return result;
// };

// 前序遍历 迭代
const preorderTraversal = (root) => {
  const list = [];
  const stack = [];
  // the root node is not empty and is pushed
  if (root) stack.push(root);
  while (stack.length > 0) {
    const curNode = stack.pop();
    // in the first step,the root node is accessed first
    list.push(curNode.val);
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
  }
  return list;
};

// 中序遍历

/**
 * 队列(Queue)：先进先出(FIFO)原则的有序集合
 * 查找： 从对头开始查找，时间复杂度为 O(n)
 * 插入或者删除： 进栈与出栈的时间复杂度为O(1)
 */
function Queue() {
  let items = [];
  // 进队
  this.enqueue = function (e) {
    items.push(e);
  };
  // 出队
  this.dequeue = function () {
    return items.shift();
  };
  // 是否是空队
  this.isEmpty = function () {
    return items.length === 0;
  };
  // 获取队头元素
  this.front = function () {
    return item[0];
  };
  // 清空队
  this.clear = function () {
    items = [];
  };
  // 获取队列长度
  this.size = function () {
    return items.length;
  };
}

/**
 * 双端队列(Deque): 在原有队列的基础上扩充了：队头、队尾都可以进队出队
 */
function Deque() {
  let items = [];
  this.addFirst = function (e) {
    items.unshift(e);
  };
  this.removeFirst = function () {
    return items.shift();
  };
  this.addLast = function (e) {
    items.push(e);
  };
  this.removeLast = function () {
    return items.pop();
  };
  this.isEmpty = function () {
    return items.length === 0;
  };
  this.front = function () {
    return items[0];
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return items.length;
  };
}

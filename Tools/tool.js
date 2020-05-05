/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, zoe. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: zoe
 * @Date: 2020-03-26 10:55:46
 * @Version: xxx.v1.0
 * @LastEditors: zoe
 * @LastEditTime: 2020-05-03 16:44:49
 * @Description: 工具
 */

/**
 * @description: 防抖
 * @param {number} delay 延迟执行函数
 * @param {boolean} true 立即执行 false 延迟执行
 * @return:
 * @author: zoe
 */
function debounce(fn, delay = 1000, immediate) {
  let timer = null;
  return (...arguments) => {
    timer && clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) fn.apply(this, arguments);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    }
  };
}

/**
 * @description: 节流
 * @param {number} delay 延迟执行毫秒
 * @param {number} type 1 时间戳  2 定时器
 * @return:
 * @author: zoe
 */
function throttle(func, wait, type) {
  let previous, timeout;
  switch (type) {
    case 1:
      previous = 0;
      break;
    case 2:
      timeout = null;
      break;
  }
  return () => {
    if (type === 1) {
      let now = Date.now();
      if (now - previous > wait) {
        func.apply(this, arguments);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(this, arguments);
        }, wait);
      }
    }
  };
}

/**
 * @description: 深拷贝对象
 * @param {type}
 * @return:
 * @author: zoe
 */
function deepClone(obj) {
  // 过滤一些特殊情况
  if (Object.is(obj, null)) return null;
  if (Object.is(obj, undefined)) return undefined;
  if (Object.is(obj, "")) return "";
  if (typeof obj !== "object") return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  let newObj = new obj.constructor(); // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

/**
 * @description: 柯里化通用版
 * @param {type}
 * @return:
 * @author: zoe
 */
function curry(fn, args) {
  var length = fn.length; // 待柯里化的函数的参数长度
  var args = args || []; // 传入参数值
  return function () {
    // Array.prototype.slice.call(arguments)是用来将参数由类数组转换为真正的数组；
    // var newArgs = args.concat(Array.prototype.slice.call(arguments));
    let newArgs = args.concat([...arguments]);
    if (newArgs.length < length) {
      return curry.call(this, fn, args);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}

/**
 * @description: 数组去重
 * @param {type}
 * @return:
 * @author: zoe
 */

function arrayDup(array) {
  let newArray = [];
  array.forEach((item) => {
    if (newArray.indexOf(item) == "-1") {
      newArray.push(item);
    }
  });
  return newArray;
}

/**
 * @description: 数组对象去重
 * @param {type}
 * @return:
 * @author: zoe
 */

function objectDup(arr, key) {
  if (typeof key != "string") return;
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

/**
 * @description: fetch封装
 * @param {String} URL
 * @param {Obecjt} data
 * const getTest = await HttpUtils.get(URL) || {}
 * @return:
 * @author: zoe
 */

class HttpUtils {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response = response.json()))
        .then((result) => resolve(resilt))
        .catch((error) => reject(error));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }
}

/**
 * @description: es5迭代器
 * @param {type}
 * @return:
 * @author: zoe
 */

function iteratorGenerator(list) {
  var idx = 0;
  var len = list.length;
  return {
    next: function () {
      var done = idx >= len;
      var value = !done ? list[idx++] : undefined;
      return {
        done: done,
        value: value,
      };
    },
  };
}
// var a = iteratorGenerator(["1", "2", '3']);
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

/**
 * @description: 斐波那契数列普通递归
 * @param {type}
 * @return:
 * @author: zoe
 */
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

/**
 * @description: 斐波那契数列Map
 * @param {type}
 * @return:
 * @author: zoe
 */
const fibMap = (function (n) {
  let map = new Map();
  return function (n) {
    let mapV = map.get(n);
    if (mapV) return mapV;
    if (n === 1 || n === 2) return 1;

    let f1 = fibMap(n - 1);
    let f2 = fibMap(n - 2);

    map.set(n - 1, f1);
    map.set(n - 2, f2);

    return f1 + f2;
  };
})();

/**
 * @description: 斐波那契数列循环
 * @param {type}
 * @return:
 * @author: zoe
 */
function fibLoop(n) {
  let array = [];

  array[0] = 0;
  array[1] = 1;

  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}

/**
 * @description: 斐波那契数列尾调用
 * @param {type}
 * @return:
 * @author: zoe
 */
const fibTail = (function () {
  return function (count, n = 0, m = 1) {
    if (count === 0) return n;
    return fibTail(count - 1, m, n + m);
  };
})();

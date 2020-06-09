// const one = () => Promise.resolve("One");

// async function fn() {
//   console.log("in fun");
//   const res = await one();
//   console.log("res before");
//   console.log(res);
//   console.log("res after");
// }

// console.log("before func");
// fn();
// console.log("after func");

// function deepClone(obj) {
//   // 过滤一些特殊情况
//   if (Object.is(obj, null)) return null;
//   if (Object.is(obj, undefined)) return undefined;
//   if (Object.is(obj, '')) return '';
//   if (typeof obj !== 'object') return obj;
//   if (obj instanceof RegExp) return new RegExp(obj);
//   if (obj instanceof Date) return new Date(obj);
//   let newObj = new obj.constructor(); // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
//   for (let key in obj) {
//     console.log(key);
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepClone(obj[key]);
//     }
//   }
//   return newObj;
// }

// const a = {};

// console.log(a?.b ?? 7);

// function create(fn, ...args) {
//   let obj = {};
//   obj.__proto__ = fn.prototype;
//   let result = fn.apply(obj, args);
//   return result instanceof Object ? result : obj;
// }

// function P(name) {
//   this.name = name;
// }

// const a = create(P, '123');
// console.log(a);

// var obj = {
//   name: '小鹿',
//   age: '22',
//   adress: '小鹿动画学编程',
// };

// function print() {
// console.log(this); // 打印 this 的指向
// console.log(arguments); // 打印传递的参数
// }
// print();

// 通过 call 改变 this 指向
// print.call(obj, 1, 2, 3);

// // 通过 apply 改变 this 指向
// print.apply(obj, [1, 2, 3]);

// // 通过 bind 改变 this 的指向
// let fn = print.bind(obj, 1, 2, 3);
// fn();

// function fn(name) {
//   this.name = name;
//   this.type = 'sss';
// }

// let f = new fn('123');
// let f1 = new fn('34');
// f.__proto__.type = "vvv"
// console.log(f);
// console.log(f1);
// console.log(fn.prototype);
// console.log(f.__proto__);

// console.log(f instanceof fn)

// console.log(a);
// var a = 1;

// const arr = [1, 2];
// let b = arr.reduce((acc, item) => {
//   return acc + item;
// });

// console.log(b);

// const collection = {
//   name: 'acdc',
//   age: '1000',
//   get name() {
//     console.log('getter');
//   },
//   set age(value) {
//     console.log('setter');
//   },
// };

// collection.name;
// collection.age;

// class Acdc {
//   constructor() {
//     this.name = '艾西底系';
//   }

//   get ff() {
//     console.log('getter');
//     return this.name;
//   }
//   set f(value) {
//     console.log('set');
//     return (this.name = value);
//   }
// }

// const acdc = new Acd

// var cuttingRope = function (number) {
//   if (number === 2 || number === 3) return number - 1;
//   let a = number % 3;
//   let b = parseInt(number / 3);
//   if (a === 0) {
//     return 3 ** b;
//   } else if (a === 1) {
//     return 2 * 2 * 3 ** (b - 1);
//   } else {
//     return 2 * 3 ** b;
//   }
// };

// console.log(cuttingRope(10))

// Function.prototype.mbind = function (thisArg, ...args) {
//   var self = this;
//   var fbound = function () {
//     self.apply(this instanceof self) ? this : thisArg,
//       args.concat(Array.prototype.slice.call(arguments));
//   };
//   fbound.prototype = Object.create(self.prototype);

//   return fbound;
// };

// function debounce(fn, wait, immedite) {
//   let timer = null;
//   return () => {
//     timer && clearTimeout(timer);
//     if (immedite) {
//       let callNow = !timer;
//       timer = setTimeout(() => {
//         timer = null;
//       }, wait);

//       if (callNow) fn.apply(this, arguments);
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(this, arguments);
//       }, wait);
//     }
//   };
// }

// function throttle(fn, wait, type) {
//   let preious, timer;
//   switch (type) {
//     case 1:
//       preious = 0;
//       break;
//     case 2:
//       timer = null;
//       break;
//   }
//   return () => {
//     if (type === 1) {
//       let now = Date.now();
//       if (now - preious > wait) {
//         fn.apply(this, arguments);
//         preious = now;
//       }
//     }
//     if (type === 2) {
//       if (!timer) {
//         timer = setTimeout(() => {
//           fn.apply(this, arguments);
//           timer = null;
//         }, wait);
//       }
//     }
//   };
// }
// const arr = [1, 2, [3, [4, [5]]]];
// console.log(arr.flat(Infinity));

// function create(foo, ...args) {
//   let obj = Object.create(foo.prototype);
//   let result = foo.apply(obj, args);
//   return Object.prototype.toString.call(result) === '[object Object]'
//     ? result
//     : obj;
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const arr = [
//   {
//     id:1,
//     name: "jojo"
//   }
// ]

// function ForIn(obj, callBack) {
//   Object.entries(obj).forEach((item) => {
//     callBack(...item);
//   });
// }

// ForIn(obj, (key, value) => {
//   console.log(key, value);
// });

// for (const [key, value] of Object.entries(obj)) {
//   if (value > 1) {
//     break;
//   }
//   console.log(key, value);
// }

// for (const item of arr) {
//   console.log(item)
// }

// let a = {
//   n: 1,
// };

// let b = a;
// a.x = a = {
//   n: 2,
// };
// console.log(a)
// console.log(a.x);
// console.log(b); // { n: 1, x: { n: 2 } }
// var str = 'abc123';
// var num = parseInt(str);
// if (num == NaN) {
//   console.log(NaN);
// } else if (typeof num == 'number') {
//   console.log('object');
// }

// let a = '10';
// switch (a) {
//   case 10:
//     a++;
//     break;
//   default:
//     a--;
//     break;
// }
// console.log(a)
import { Fn } from 'demo.js';

console.log(new Fn());

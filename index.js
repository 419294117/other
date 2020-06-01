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

// const acdc = new Acdc();

function throttle(fn, wait, type) {
  let preious, timer;
  switch (type) {
    case 1:
      preious = 0;
      break;
    case 2:
      timer = null;
      break;
  }

  return () => {
    if (type === 1) {
      let now = Date.now();
      if (now - preious > wait) {
        fn.apply(this, arguments);
        preious = now;
      }
    }
    if (type === 2) {
      if (!timer) {
        setTimeout(() => {
          fn.apply(this, arguments);
          timer = null;
        }, wait);
      }
    }
  };
}

function debounce(fn, delay = 1000, immediate) {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

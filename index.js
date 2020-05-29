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

const a = {};

console.log(a?.b ?? 7);

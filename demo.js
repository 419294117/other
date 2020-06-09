// (function () {
//   var root =
//     // web worker环境
//     (typeof selft == 'object' && self.self == self && self) ||
//     // node环境
//     (typeof global == 'object' && global.global == global && global) ||
//     // node vm环境
//     this ||
//     // 小程序环境
//     {};
//   var _ = function (obj) {
//     if (!(this instanceof _)) return new _(obj);
//     this._wrapped = obj;
//   };
// })();

export function Fn(name) {
  this.name = name;
}

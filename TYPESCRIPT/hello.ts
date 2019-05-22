//原始数据类型包括：布尔值、数值、字符串、null、underfined以及symbol
//let isDone: boolean = false;
//new Boolean()返回的是一个Boolean值
//let Bool: boolean = Boolean(1);


//数值 使用number定义数值类型
// let n1: number = 1;
// let n2: number = NaN;
// console.log(n1 + 1);


//字符串 使用string定义字符串类型
// let str: String = 'tom';
// let age: String = '25';

// let me: String = `I'm ${str},i'm ${age} years old`
// console.log(me);

//空值  JS没有空值(void)，在TS中，通常使用void来表示没有任何返回值的函数 void不能赋值给number
// function nore():void{
//     console.log("void");
// }
// nore();

// null和underfind  null类型的变量只能赋值给null类型，underfind同理，
// let num: Number = undefined
// let u:undefined
// let num: Number = u;

//任意值 any 表示允许赋值为任意类型
// let me: any = 'code'
// me = 7;

// 任意值的属性和方法 可以调用任何方法，可以访问任何属性
// 如果变量在创建时未声明任何类型，那么为任意型。
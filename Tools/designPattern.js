/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, zoe. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product: 
 * @Mode Name: 
 * @Autor: zoe
 * @Date: 2020-03-27 11:18:30
 * @Version: xxx.v1.0
 * @LastEditors: zoe
 * @LastEditTime: 2020-03-27 11:43:26
 * @Description: 设计模式
 */

/**
 * @description: 工厂模式：简单工厂
 * @param {type} 
 * @return: 
 * @author: zoe
 */

class Perosn {
    constructor(age, name, work) {
        this.age = age;
        this.name = name;
        this.work = work;
    }
}

function Factory(age, name, acrrse) {
    let work;
    switch (acrrse) {
        case "a":
            work = "a";
            break;
    }
    return new Person(age, naem, work);
}

/**
 * @description: 工厂模式：抽象工厂
 * @param {type} 
 * @return: 
 * @author: zoe
 */

class MobilePhone {

}

/**
 * @description: 单例模式
 * @param {type} 
 * @return: 
 * @author: zoe
 */

class SingleDog {
    show() {
        console.log("单例");
    }
    static getInstance() { // 单例实现
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }
}
// 闭包实现
SingleDog.ClosureGetInstance = (function () {
    let instance = null;
    if (!instance) {
        instance = new SingleDog();
    }
    return instance;
})()

//  vuex 单例模式
function install(_Vue) {
    let Vue = null;;
    if (Vue && _Vue === Vue) {
        if (process.env.NODE_ENV !== "production") {
            console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
        }
        return;
    }
    Vue = _Vue;
    applyMixin(Vue);
}

// localStorage 单例模式
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        localStorage.getItem(key);
    }
}
// 闭包版
Storage.ClosureGetInstance = (function () {
    let instance = null;
    if (!instance) {
        instance = new Storage();
    }
    return instance;
})();


/**
 * @description: 原型模式
 * @param {type} 
 * @return: 
 * @author: zoe
 */
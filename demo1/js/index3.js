"use strict";
// 函数的写法
// 函数声明和匿名函数
function run() {
    return 123;
}
var run2 = function () {
    return 12;
};
// ts定义函数写法
function run3() {
    return 12;
}
var run4 = function () {
    return 34;
};
// ts中定义方法传参
function getInfo(name, age) {
    return name + "--" + age;
}
// 没有返回值
function run6() {
    console.log(1);
}
// 可选参数--必须配置在参数的最后面！！！
function getInfo1(name, age) {
    return 'aa';
}
getInfo1('hh', 20);
getInfo1('hh');
// 默认参数 ,其实跟可选参数差不多，位置随意放
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    return 'a';
}
getInfo2('hh');
getInfo2('hh', 18);
// 剩余参数
// 三点运算符接收形参传过来的值
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
sum(1, 2, 3);
sum(1, 2, 3, 4, 5, 6);
function sum1(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
sum(1, 2, 3); //a为1，result为2 3
// 函数重载：同一个函数，传入不同的参数，执行不同的结果
//es5中出现同名的方法，下面会覆盖上面的方法 ，但是ts中不会

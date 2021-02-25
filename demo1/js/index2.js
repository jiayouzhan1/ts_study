"use strict";
// 数据类型
var flag = true;
flag = false;
var numd = 123;
var anum = 33;
console.log(anum);
// 数组类型的两种定义方法
var arr1 = [111, 222];
var str1 = ['s', 'a'];
var arr2 = [1, 3, 4];
var str2 = [1, 's', true];
// 元组类型  tuple: 数组的一种，可以指定数组的的多种类型
var arr3 = ['s', 1];
// 枚举  定义标识符 用于标识状态和固定值
// pay_status  0 未支付 1 支付  3 交易成功
var Flage;
(function (Flage) {
    Flage[Flage["success"] = 1] = "success";
    Flage[Flage["error"] = 2] = "error";
})(Flage || (Flage = {}));
console.log(Flage.error);
var F = Flage.success;
console.log(F);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["bule"] = 5] = "bule";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
var c = Color.orange;
console.log(c); //6
// any 任意类型的用处
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined(never类型的子类型)
// 定义未赋值就是undefined
var num;
// 一个变量多种类型
var num1;
// void类型：没有任何类型，用于定义方法，且没有返回任何类型
function run5() {
    console.log('run');
}
function run1() {
    return 123;
}
// never类型，包括null和undefeated，声明后只能被nerver类型赋值
var a1;
a1 = undefined;

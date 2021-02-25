// 数据类型

var flag:boolean = true
flag = false
var numd = 123
var anum:number=33
console.log(anum)
// 数组类型的两种定义方法
let arr1:number[]=[111,222]
let str1:string[]=['s','a']
let arr2:Array<number>=[1,3,4]
let str2:any[]=[1,'s',true]
// 元组类型  tuple: 数组的一种，可以指定数组的的多种类型
let arr3:[string,number]=['s',1]
// 枚举  定义标识符 用于标识状态和固定值
// pay_status  0 未支付 1 支付  3 交易成功
enum Flage{success=1,error=2}
console.log(Flage.error)
var F:Flage=Flage.success
console.log(F)
enum Color{red,bule=5,orange}
var c:Color=Color.orange
console.log(c)//6

// any 任意类型的用处
var oBox:any=document.getElementById('box')
oBox.style.color='red'
// null 和 undefined(never类型的子类型)
// 定义未赋值就是undefined
var num:number | undefined;
// 一个变量多种类型
var num1:number | undefined | null;

// void类型：没有任何类型，用于定义方法，且没有返回任何类型
function run5():void{
    console.log('run')
}
function run1():number{
    return 123
}
// never类型，包括null和undefeated，声明后只能被nerver类型赋值
var a1:undefined;
a1=undefined



  
  



 











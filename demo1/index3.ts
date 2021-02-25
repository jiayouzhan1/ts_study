// 函数的写法

// 函数声明和匿名函数
function run(){
    return 123
}
var run2=function(){
    return 12
}
// ts定义函数写法
function run3():number{
    return 12
}
var run4=function():number{
    return 34
}
// ts中定义方法传参
function getInfo(name:string,age:number):string{
    return `${name}--${age}`
}
// 没有返回值
function run6():void{
    console.log(1)
}
// 可选参数--必须配置在参数的最后面！！！
function getInfo1(name:string,age?:number):string{
    return 'aa'
}
getInfo1('hh',20)
getInfo1('hh')
// 默认参数 ,其实跟可选参数差不多，位置随意放
function getInfo2(name:string,age:number=20):string{
    return 'a'
}
getInfo2('hh')
getInfo2('hh',18)
// 剩余参数
// 三点运算符接收形参传过来的值
function sum(...result:number[]){
    var sum=0
    for(var i=0;i<result.length;i++){
        sum+=result[i];
    }
    return sum;
}
sum(1,2,3)
sum(1,2,3,4,5,6)
function sum1(a:number,...result:number[]){
    var sum=0
    for(var i=0;i<result.length;i++){
        sum+=result[i];
    }
    return sum;
}
sum(1,2,3)//a为1，result为2 3
// 函数重载：同一个函数，传入不同的参数，执行不同的结果
//es5中出现同名的方法，下面会覆盖上面的方法 ，但是ts中不会














 














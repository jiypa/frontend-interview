// 作用域分为静态作用域（词法作用域）和动态作用域两种
// 静态作用域：函数的作用域基于函数创建的位置
// 动态作用域：函数的作用域基于函数调用的位置
// JS 中采用的是静态作用域
var value = 1;
var msg = 'success';

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    function getmsg() {
        // 如果在当前函数的静态作用域内没有找到该变量，就会沿着作用域链查找，直到找到该变量
        console.log(msg);
    }
    foo();
    getmsg();
}

bar(); // 1
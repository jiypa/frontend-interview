// 每个执行上下文都有三个非常重要的属性：变量对象、作用域链、this
// 全局上下文中的变量对象就是全局对象
// 函数上下文中的变量对象被称为活动对象（被激活的变量对象），活动对象在进入函数上下文时被创建，它通过函数的 arguments 属性初始化，arguments 属性值是 Arguments 对象

console.log(this); // 浏览器中结果为 Window，Node 中结果为 {}
console.log(this instanceof Object); // true

function foo(a) {
    var b = 2;
    function c() {}
    var d = function() {};

    b = 3;

}
  
foo(1);

// 上述函数在刚进入执行上下文时的活动对象如下所示：
// AO = {
//     arguments: {
//         0: 1,
//         length: 1
//     },
//     a: 1,
//     b: undefined,
//     c: reference to function c(){},
//     d: undefined
// }

// 上述函数代码执行完后活动对象如下所示：
// AO = {
//     arguments: {
//         0: 1,
//         length: 1
//     },
//     a: 1,
//     b: 3,
//     c: reference to function c(){},
//     d: reference to FunctionExpression "d"
// }

// 总结：
// 全局上下文的变量对象初始化是全局对象
// 函数上下文的变量对象初始化只包括 Arguments 对象
// 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
// 在代码执行阶段，会再次修改变量对象的属性值
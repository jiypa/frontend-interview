function Person() {
    
}

const person = new Person();
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(person.__proto__ === Person.prototype); // true

// 原型对象的 constructor 属性指向构造函数
console.log(Person.prototype.constructor === Person); // true
console.log(person.constructor === Person); // true
console.log(person.__proto__.constructor === Person); // true

console.log(Object.prototype.__proto__); // null
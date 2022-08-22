class Person{
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getInfo = () => {
        return `姓名：${this.name}， 年龄：${this.age}， 性别：${this.sex}`;
    }
}

class Male extends Person{
    constructor(name, age, height) {
        // 构造函数中使用的 super() 只能在构造函数中使用，并且必须在使用 this 关键字前调用
        super(name, age, '男');
        this.height = height;
    }

    getInfo = () => {
        return `姓名：${this.name}， 年龄：${this.age}， 性别：${this.sex}，身高：${this.height}`;
    }
}

class Female extends Person{
    constructor(name, age, height) {
        super(name, age, '女');
        this.height = height;
    }

    getInfo = () => {
        return `姓名：${this.name}， 年龄：${this.age}， 性别：${this.sex}，身高：${this.height}`;
    }
}

const {getInfo, ...info} = new Female('Kitty', 22, 1.68);

console.log(info);
console.log(getInfo());
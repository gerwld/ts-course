"use strict";
const user = {
    address: '123',
    age: 12,
    name: 'sedfw',
};
const address = {
    index: 12,
    street: 'ewrwer',
};
const common = Object.assign(Object.assign({}, address), user);
let array;
// let array:Array<string>; same thing but by using generics
array = ["123", "123123"];
let numbers = [1, 2, 3, 4,]; // readonly array with number generic
const newArray = [1, "2", null];
function getChannelFunc(name = "something-arg") {
    return { name };
}
// less convinient
const getChannelArrow = (name = "something-arg") => {
    return { name };
};
// more convinient
const getChannelArrowSameShitButBetter = (name) => {
    return { name };
};
// getChannel(3);
// оператор остатка - rest parametr (...numbers)
const getNumbers = (...numbers) => {
    return numbers;
};
// сама функция
// cуть - покрыть все варианты ввода - вывода (типов принимаемых и воз. данных)
function getCar(name, price) {
    return price ? `Naming ${name}, Price ${price}` : `Naming ${name}`;
}
// оба варианта срабатывают
const car1 = getCar("mts", 234);
const car2 = getCar("mts");
// выдаст ошибку в компиляторе
// const car3 = getCar("mts", false) 
// -- КЛАССЫ
class Car {
    // инициализация данных (полей) в конструкторе
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }
    getInfo() {
        return `${this.name} ${this.price}`;
    }
    // не доступна извне
    getInfoPrivate() {
        return `${this.name} ${this.price}`;
    }
    // так же недоступна извне, но доступна с екстендед класса, например class Bus extends Car
    getInfoPrivateForExtend() {
        return `${this.name} ${this.price}`;
    }
}
// работает без ошибок
const Toyota = new Car("Toyota", 999);
console.log(Toyota.getInfo());
// console.log(Toyota.getInfoPrivate())
class Bus extends Car {
    constructor(tires) {
        super("BUSIK", 20);
        this.tires = tires;
    }
    getBusInfo() {
        return `Tires count: ${this.tires}` + this.getInfo();
    }
}
const imBussing = new Bus(6);
// console.log(imBussing.getBusInfo())

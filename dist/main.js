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

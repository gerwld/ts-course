type TypeUser = {
   name: string;
   age: number;
   address: string;
};

type TypeAddress = {
   street: string;
   index: number;
};

const user: TypeUser = {
   address: '123',
   age: 12,
   name: 'sedfw',
};

const address: TypeAddress = {
   index: 12,
   street: 'ewrwer',
};

const common: TypeAddress & TypeUser = { ...address, ...user };


let array:string[];
// let array:Array<string>; same thing but by using generics

array = ["123", "123123"]

let numbers:ReadonlyArray<number> = [1,2,3,4,] // readonly array with number generic

// numbers[0] = "3";

type TypeArray = [number, string, null]
const newArray:TypeArray = [1, "2", null]

type TypeChannelReturn = {
   name: string
}

function getChannelFunc(name:string = "something-arg"):TypeChannelReturn {
   return {name};
}

type TypeChannelFunction = (name: string) => TypeChannelReturn;
// less convinient
const getChannelArrow = (name:string = "something-arg"):TypeChannelReturn => {
   return {name};
}
// more convinient
const getChannelArrowSameShitButBetter:TypeChannelFunction = (name) => {
   return {name};
}
// getChannel(3);

// оператор остатка - rest parametr (...numbers)
const getNumbers = (...numbers: number[]) => {
   return numbers;
}

// function overloads signatures (несколько сигнатур перегрузки)
function getCar(name: string):string;
function getCar(name: string, price: number):string;

// сама функция
// cуть - покрыть все варианты ввода - вывода (типов принимаемых и воз. данных)
function getCar(name: string, price?: number):string  {
   return price ? `Naming ${name}, Price ${price}` : `Naming ${name}`;
}

// оба варианта срабатывают
const car1 = getCar("mts", 234)
const car2 = getCar("mts")

// выдаст ошибку в компиляторе
// const car3 = getCar("mts", false) 


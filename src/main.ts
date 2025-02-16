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



// -- КЛАССЫ

class Car {
   // инициализация данных (полей) в конструкторе
   constructor(name: string, price: number) {
      this.price = price;
      this.name = name;
   }

   name: string
   price: number


   getInfo():string {
      return `${this.name} ${this.price}`
   }
   // не доступна извне
   private getInfoPrivate():string {
      return `${this.name} ${this.price}`
   }
   // так же недоступна извне, но доступна с екстендед класса, например class Bus extends Car
   protected getInfoPrivateForExtend():string {
      return `${this.name} ${this.price}`
   }
}

// работает без ошибок
const Toyota = new Car("Toyota", 999);
console.log(Toyota.getInfo())
// console.log(Toyota.getInfoPrivate())

class Bus extends Car {
   constructor(tires: number) {
      super("BUSIK", 20)
      this.tires = tires;
   }

   tires:number
   getBusInfo():string {
      return `Tires count: ${this.tires}` + this.getInfo();
   }
}
const imBussing = new Bus(6);
// console.log(imBussing.getBusInfo())


// Интерфейсы
// предназначены в первую оч. для описания структур обьектов и классов
// Типы - более универсальная конструкция, подходящая практически для всего, поэтому они более гибкие (обьединение, &| итд)
// для обьектов и классов интерфейсы лучше, тк быстрее компилируются, имеют автоматический мержинг, екстенд, код выглядит чище.
// для функций подойдет то и то.

interface IUser {
   name: string,
   age: number,
   email: string
}

// --- екстенд в тайпах 

type TypeUserBase = {
   username: string,
}

// екстенд типа через &
type TypeUser2 = {
   name: string,
   age: number,
   email: string
} & TypeUserBase


const user2:TypeUser2 =  {
   age: 22,
   name: "Seba",
   email: "1@gmail.com",
   username: "sebs1"
}

// --- екстенд в интерфейсах, похоже на екстенд класса 

interface IUserBase {
   username: string,
}

interface IUser2 extends IUserBase {
   name: string,
   age: number,
   email: string
}

const user3:IUser2 = {
   age: 22,
   name: "Seba",
   email: "1@gmail.com",
   username: "sebs1"
}

const users:IUser2[] = [user2, user3]


// енамы (c конст выходит проще конструкция для обработки на этапе компиляции)
const enum EnumRoles {
   ADMIN, GUEST, USER
}


interface IUser3 extends IUserBase {
   role: EnumRoles,
   name: string,
   age: number,
   email: string
}

const user4: IUser3 = {
   age: 21,
   name: "Adam",
   email: "@fbd",
   role: EnumRoles.ADMIN,
   username: "apple"
}

// --- assertion (явное указание типа, принудительное)

const inputElement = document.querySelector("some-selector");
const value1 = (inputElement as HTMLInputElement).value;
const value2 = (<HTMLInputElement>inputElement).value;

// GCD Operator (!) обозначает что значение не может быть null
const getLength = (text:string | null) => {
   return text!.length;
};



// --- дженерики
// условно, это прокидывание как параметр функции. 
// сейчас не известно - задай при вызове что там будет на входе и выходе.

// c функцией
function entity<T>(args: T): T {
   return args;
}
entity<number>(2);
entity<string>("2");

const entity2 = <T>(arg:T):T => {
   return arg
}

entity2<number>(5);
entity2<string>("5");

// c классом
class Channel<T> {
   private name

   getName():T {
      return this.name;
   }

   constructor(name: T) {
      this.name = name;
   }
}

new Channel<string>("SlivkiShow").getName();
new Channel<number>(123).getName();


// c интерфейсом
interface IPair<K, V> {
   key: K,
   value: V
}

const pair1:IPair<string, number> = {
   key: "12",
   value: 123
} 

// как бы екстендим неизвестное еще значение типа у дженерика T его же значение length
// и задаем ему тип намбер. {blackbox}.length, где typeof length == "number"
type TypeLength = {
   length: number
}

function getNameLength<T extends TypeLength>(name: T):number {
   return name.length;
}

let arr = [0,1,2];
getNameLength("123123");
getNameLength<number[]>(arr);


interface ICar {
   // ? делает поле не обьязательным
   id?: number | string
   name: string
   price: number
   yearProduced: number
}

// омит позволяет убрать какой-либо ключ с интерфейса
interface ICarCreate extends Omit<ICar, 'id'> {}

// пик позволяет взять только один ключ с расширяющего (екстендженого) интерфейса
interface ICarId extends Pick<ICar, 'id'> {}

// партиал дает возможность сделать все ключи не обьязательными
interface IOptionalCar extends Partial<ICar> {}
// обратное - все объязательные
interface IReqCar extends Required<ICar> {}

// ридонли дает возможность сделать все ключи не изменяемыми (только чтение)
interface IReadOnlyCar extends Readonly<ICar> {}

// ридонли дает возможность сделать все ключи не изменяемыми (только чтение)
type TypeCarRecord = 
   // тоже самое что к этим ключам задать number | string по отдельности
   Record<'name' | 'price', number | string> 


// еще существует ReturnType, Extract 
// NotNullable - убирает null и undefined
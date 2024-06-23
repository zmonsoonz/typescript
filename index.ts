//Types

//Создаем тип для объекта
type ObjType = {
    name: string,
    age: number
};
type Adress = {
    country: string
};
//Можно объединять типы
let user: ObjType & Adress = {
    name: "Max",
    age: 20,
    country: 'Russia'
};
type ArrType = [number, string, boolean]; //кортеж (определенное кол-во элементов)
let array: ArrType = [2, "hi", false];

//Classes
class Car {
    name:string
    price: number
    
    constructor(name:string, price:number) {
        this.name = name,
        this.price = price
    }

    getInfo():string {
        return `${this.name} ${this.price}`
    }
}
console.log(new Car('bmw', 12000).getInfo());

//Interface
interface ObjInterface {
    name: string,
    age: number
}
//интерфесы в отличие от типов расширяются через extends, а не объединяются

//Enum
enum EnumRoles {
    admin, user, guest
}
//можно обращаться EnumRoles.admin или EnumRoles[0] (обратно)
console.log(EnumRoles[0]);

//Generic

function entity<T>(args: T): T {
    return args
}
entity<string>('323')
//можно использовать несколько genericов 
interface Pair<K, V>{
    key: K,
    value: V
}
let pair1:Pair<string, number> = {
    key: 'key',
    value: 4
}

//Decorators

function LogClass(constructor: Function) {
    console.log(constructor.name)
}
@LogClass
class Plane {
    private id: number

    constructor(id:number) {
        this.id = id
    }
}
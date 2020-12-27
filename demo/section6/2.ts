// // 泛型类
// class GenericNumber<T>{
//     zeroValue: T
//     add: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>()

// myGenericNumber.zeroValue = 0
// myGenericNumber.add = function (x, y) {
//     return x + y
// }

// let stringNumber = new GenericNumber<string>()
// stringNumber.zeroValue = '156'
// stringNumber.add = function (x, y) {
//     return x + y
// }
// // 泛型约束
// interface ILength {
//     length: number
// }

// function loggingIdentity<T extends ILength>(arg: T): T {
//     console.log(arg.length);
//     return arg
// }

// //  
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key]
// }

// let x = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// getProperty(x, 'a')

// // 工厂函数
// function create<T>(c: { new(): T }): T {
//     return new c()
// } 
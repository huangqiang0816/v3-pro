// // function identity(arg: any): any {
// //     return arg + ''
// // }

// function identity<T>(arg: T): T {
//     return arg
// }

// let output = identity<string>('test')
// let myString = identity('test')

// // 泛型变量
// // 
// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg
// }
// loggingIdentity([1, 2, 3, 4])

// // 泛型函数
// // interface GenericIdentityFn {
// //     <T>(arg: T): T
// // }
// interface GenericIdentityFn<T> {
//     (arg: T): T
// }
// // let myIdentity: <T>(arg: T) => T = identity
// // let myIdentity: { <T>(arg: T): T } = identity
// let myIdentity: GenericIdentityFn<number> = identity
// myIdentity(465)
// 
// let x: [string, number]
// x = ['1', 10]

// // 枚举类型

// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 4
// }
// let c: Color = Color.Green
// console.log(c);

declare function creatre(params: object | null): void

creatre({ prop: 0 })

let someValue:any = 'this is a string'
// let stringLen:number = (<string>someValue).length
let stringlen:number = (someValue as string).length
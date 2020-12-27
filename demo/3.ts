//接口继承
interface Shape {
    color: string
}
interface PenStroke {
    penWidth: number
}

interface Square1 extends Shape, PenStroke {
    slideLength: number
}

let squre = {} as Square1
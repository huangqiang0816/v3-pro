// interface LabelledValue {
//     label: string
// }

// function printLabel(labelobj: LabelledValue) {
//     console.log(labelobj.label);
// }
// let myobj = {
//     size: 10, label: 'Size 10 Object'
// }
// printLabel(myobj)


/**
 * 可选属性
 */
interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: 'black' })


interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {
    x: 10,
    y: 20
}

let a: number[] = [1, 2, 3, 4, 5]
let ro:ReadonlyArray<number> = a
// ro.length = 4
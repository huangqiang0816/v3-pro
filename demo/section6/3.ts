// 类型推断
let x = [0, 1, null]

class Animal {
    numsLegs: number
}
class Bee extends Animal {

}

class Lion extends Animal {

}

let zoo = [new Bee(), new Lion()]
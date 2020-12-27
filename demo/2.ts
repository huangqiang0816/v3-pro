// 类实现接口
// 类构造器
interface ClockInterface {
    tick()
}

interface ClockContructor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('ddd');
    }
}

class AnakogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick toc');

    }
}

let digital = createClock(AnakogClock, 12, 17)

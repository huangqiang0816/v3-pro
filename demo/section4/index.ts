class Greeter {
    greeting: string

    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return 'Hello' + this.greeting
    }
}

let gretter = new Greeter('world')
gretter.greet()
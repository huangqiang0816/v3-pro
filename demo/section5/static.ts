class Greter {
    static standarGreeting = 'Hello here'

    greeting: string

    constructor(message?: string) {
        this.greeting = message
    }
    greet() {
        if (this.greeting) {
            return 'Hello' + this.greeting
        } else {
            return Greter.standarGreeting
        }
    }
}
let greeter: Greeter
gretter = new Greeter('')
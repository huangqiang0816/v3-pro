class Person{
    protected name: string
    // 只能在继承类中去访问 
    protected constructor(name: string) {
        this.name = name
    }
}

// class Employee extends Person{

// }

// let one = new Person('zjans')
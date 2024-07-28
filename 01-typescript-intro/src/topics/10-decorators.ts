function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {
    // @classDecorator
    public myProperty:string = "myProperty";

    print() {
        console.log(this.myProperty);
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

export{SuperClass};

class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    //* Otra manera (la mas comun en TS) de definir una clase
    // constructor (
    //     public name: string,
    //     private address: string = 'no Address'
    // ) {};
}

/*Declaracion usando HERENCIA
class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string 
    ) {
        // llamar al constructor de la clase Padre
        super(realName, 'New York');
    }
}
const ironMan = new Person('Pedro', 'Calle 80');
const wolverine = new Hero('Francisco', 45, 'Tony');
console.log(ironMan, wolverine);
*/

/* Declaracion usando composicion */
class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        
    }
}

const person = new Person('Diana', 'New York');
const hero = new Hero('Iron Man', 45, 'Tony', person);

console.log(hero);

export {
    Person,
    Hero
}
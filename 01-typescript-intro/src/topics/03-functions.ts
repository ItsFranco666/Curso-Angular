function addNumbers(a:number, b:number, c:number): number{
    if(b % 2) {
        return a + b
    } else {
        return a + c;
    }
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a * b}`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result = addNumbers(1,2,3)
// const result2 = addNumbersArrow(1,2)
// const result3 = multiply(5);
// console.log({result}, {result2}, {result3});

/* Objetos como parametros */
interface Character {
    name: string;
    hp: number;
    showHp: () => void; // funcion
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 80,
    showHp() {
        console.log(`${this.name} has ${this.hp} HP`); // this hace referencia al objeto
    }
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();

export{ result };
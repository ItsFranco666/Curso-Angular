const name: string = 'Andres';
/** Reasignar tipo de variable */
let hpPoints: number | 'FULL' = 95;
hpPoints = 100;
hpPoints = 'FULL';

let isAlive: boolean = true;

console.log({
    name,
    hpPoints,
    isFull: hpPoints === 'FULL',
    isAlive
})

/** Se le indica que sera un modulo */
export {};

let skills: string[] = ['Bash', 'Counter', 'Healing']

/** Permite definir un tipo especifico de datos para los atributos de un objeto */
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Healing';

console.table(strider);

export {};
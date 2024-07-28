export interface Passenger {
  name: string;
  children?: string[]; // es mejor no tener la propiedad que tenerla vacia
}

const passenger1: Passenger = {
    name: "John Doe",
    children: ["Jane Doe", "Jim Doe"]
}

console.log(passenger1);

const passenger2: Passenger = {
    name: "Jane Doe"
}

console.log(passenger2);

const printChilder = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0; // si tiene hijos llama la funcion length de lo contrario solo mostrara 0
    console.log(howManyChildren)
}

printChilder(passenger1);
printChilder(passenger2);

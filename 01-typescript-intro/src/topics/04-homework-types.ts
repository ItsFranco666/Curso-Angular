/*
    ===== Código de TypeScript =====
*/

/** Al momento de definir uhn objeto dentro de otro objeto de una interfaz, es mejor
 * separarlo en objetos en interfaces*/
interface SuperHero {
  name: String;
  age: number;
  address: Address;
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};

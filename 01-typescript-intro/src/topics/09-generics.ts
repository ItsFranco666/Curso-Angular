function whatsMyType<T>( argument: T): T {
    return argument
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType(123);
let amIArray = whatsMyType([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toString());
console.log(amIArray.join('-'));

export{
    whatsMyType
};
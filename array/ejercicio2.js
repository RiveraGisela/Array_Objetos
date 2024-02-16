/*Crea un array vacío.
• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
• Elimina el último elemento del array.
• Elimina un elemento específico del array por su índice.
• Imprime el array final después de las modificaciones.*/

let animals =[]
animals.push('dog','cat','pig');
animals.unshift('elephant')
console.log (animals);

console.log(animals.pop());
console.log(animals);

animals.splice(1,1);
console.log(animals);






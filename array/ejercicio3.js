/*Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).*/

let things = ["Monica", 24814, true, false, 0, 1, "Lupe", 12213];
let buscar = things.filter(x => x == "Lupe");
console.log(buscar);

let  indice =  things.indexOf(true);
console.log(indice);








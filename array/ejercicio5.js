/*• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un 
mensaje).*/

let person = [
    {nombre: "Lucy",
    edad: 14},
    { nombre:"Sebastian",
    edad: 28},
    { nombre: "Monica",
    edad: 45},
    { nombre: "Daniel",
    edad: 25}

];

let mayorEdad = person.filter (x => x.edad >= 18 );
for ( let i = 0; i < mayorEdad.length; i++){
console.log(mayorEdad); 
};
/*Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común.*/

let animal= [
    {
        specie:"canino",
        color:"negro",
        size: "grande"
    },
    {
        specie:"felino",
        color: "blanco",
        size: "mediano"
    },
    {
        specie: "felino",
        color: "gris",
        size: "mediano"
    
    },
    {
        specie:"canino",
        color:"cafe",
        size:"grande"
    }

];

let comun = animal.filter (x => x.specie == "felino" );
for ( let i = 0; i < comun.length; i++){
console.log(comun); 
};
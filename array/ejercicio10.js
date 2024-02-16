/*Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una 
propiedad del objeto.*/
 
let types = ["amarillo", "azul","gris","verde","blanco","negro" ];
let color =[];
for(let g =0; g < types.length; g++){
    color[`color ${g+1}`] =types[g];
    
}
console.log(color);


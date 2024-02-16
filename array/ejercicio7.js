/* Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.*/

let things =[ "arbol", "cafe", "silla", "arbol", "mesa", "silla"];
let delete_du =[];
for (let i = 0; i < things.length; i++){
    const item = things[i];
    if (!delete_du.includes(item)){
        delete_du.push(item);
    }
}
console.log(delete_du);
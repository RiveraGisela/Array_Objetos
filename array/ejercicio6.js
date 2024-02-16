/* Crea dos arrays con diferentes elementos.
• Combina los dos arrays en un solo array nuevo.
• Mantén el orden original de los elementos en el array combinado.*/

let food =["arroz","fijoles","lentejas","panela"];
let animal =["buho","elefante", "pollo", "tortuga"];
let food_animal =[...food,...animal];
console.log(food_animal);
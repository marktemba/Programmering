
/*opgave 2
var tal = parseInt(prompt("første tal tak"));
var tal2 = parseInt(prompt("andet tal tak"));

alert (tal + tal2);
*/

//TODO: Udvid programmet så det også beregner bundskatten på 7.0%

let indkomst = Number(prompt('Indtast din indkomst:'));

let ambi, pension, bundskat, samletSkat;

bundskat = (indkomst *7.0)/100;
ambi = (indkomst *8.0)/100;
pension = (indkomst * 2.0)/100;
//Skriver til konsollen istedet for at lave en popup - Tryk F12 i Chrome for at se konsollen og udvikler værktøjer
console.log("Arbejdsmarkedsbidrag: " + ambi);
console.log("Særlig pensionsopsapring: " + pension);
console.log("Bundskat: " + bundskat);
console.log(typeof 1);
console.log(typeof "Navn");


samletSkat = (ambi + bundskat);
console.log("Samlet skat: " + samletSkat); //TODO: Hvorfor regner den forkert - fiks fejlen!


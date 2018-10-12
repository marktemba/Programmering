let a = Number(prompt("Indtast A"));
let b = Number(prompt("Indtast B"));
let c = Number(prompt("Indtast C"));
let d = Number((b*b)-(4*a*c));

switch (true) {
    case d > 0:
        alert("Der er to rødder: X = " + (((-b+(res = Math.sqrt(d))/2*a) +
            " eller X = " + (((-1*b)-(res = Math.sqrt(d)))/(2*a)));
        break;
    case d === 0:
        alert("Der er en rod: " + ("X = "+(((-b+(res = Math.sqrt(d)))/(2*a))));
        break;
    case d < 0:
        alert("Der er ingen rødder");
        break;
}
//console.log("X = " + (((-1*b)+(res = Math.sqrt(d)))/(2*a)));
//alert("eller X = " + (((-1*b)-(res = Math.sqrt(d)))/(2*a)));


/* ***LØSNING fra git***
let a = Number(prompt("a"));
let b = Number(prompt("b"));
let c = Number(prompt("c"));



let d = b*b-4*a*c;

if (d>0) {

    let x1 = (-b + Math.sqrt(d)) / 2 * a;
    let x2 = (-b - Math.sqrt(d)) / 2 * a;
    alert("Der er to rødder: x1:" + x1 + ", x2:" +x2);
} else if (d === 0){
    let x = -b/2*a;
    alert("Der er én rod: " + x);
} else {
    alert("Der er ingen rødder!");
}
*/
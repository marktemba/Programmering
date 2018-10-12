let a = Number(prompt("Indtast A"));
let b = Number(prompt("Indtast B"));
let c = Number(prompt("Indtast C"));
let d = Number((b*b)-(4*a*c));

console.log("X = " + (((-1*b)+(res = Math.sqrt(d)))/(2*a)));
alert("eller X = " + (((-1*b)-(res = Math.sqrt(d)))/(2*a)));

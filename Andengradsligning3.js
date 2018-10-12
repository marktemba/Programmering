let a = Number(prompt("Indtast A"));
let b = Number(prompt("Indtast B"));
let c = Number(prompt("Indtast C"));
let d = Number((b*b)-(4*a*c));

switch (true) {
    case (a === 0 && b === 0):
        alert("Det er en vandret linje - der er ingen rødder");
    break;
    case (a === 0):
        alert("Det er en ret linje, skæringen med x-aksen er: " + -c/b);
    break;
    default:
    switch (true)
    {
    case d > 0:
        alert("Der er to rødder: X = " + ((-b + (res = Math.sqrt(d))) / (2 * a)) +
            " eller X = " + (((-b - (res = Math.sqrt(d)) / 2 * a))));
        break;
    case d === 0:
        alert("Der er en rod: " + ("X = " + ((-b) + (res = Math.sqrt(d)) / 2 * a)));
        break;
    case d < 0:
        alert("Der er ingen rødder");
        break;
    }
}
//console.log("X = " + (((-1*b)+(res = Math.sqrt(d)))/(2*a)));
//alert("eller X = " + (((-1*b)-(res = Math.sqrt(d)))/(2*a)));

// Hint: Skæringen med x-aksen for en ret linje (a = 0): y= ax2 + bx + c  ⇔  y = bx +c =>
// 0 = bx + c ⇔ x = -c/b
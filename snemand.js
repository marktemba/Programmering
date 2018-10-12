//let temperature = Number(prompt("Indtast temperaturen:"));
//let sunshine = confirm("Lad solen skinne?"); //confirm returnerer true eller false;
//let colour = prompt('Hvilken farve skal snemanden');

let radius = Number(prompt("Hvor stor skal din snemand være?"));
let x = 300;
let y = 200;
let newcircle = 1;

function circle() {
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(x, y, radius, 0, Math.PI * 2);
    if (newcircle===1) {
        canvas.strokeStyle = 'red';
        canvas.stroke();
        newcircle=radius;
        //mouth();
    } else {
        canvas.fillStyle = 'red';
        canvas.fill();
}}
/*
function mouth(x,y, size, happy){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    canvas.beginPath();
    if (happy) {
        canvas.arc(x,y, size,(1/4)*Math.PI,(3/4)*Math.PI)
    } else {
        canvas.arc(x,y+(5/3)*size,size,(-3/4)*Math.PI,(-1/4)*Math.PI)
    }
    canvas.stroke();
*/

circle()

//tegne øjnene
y -= radius/2;
x -= radius/2;
radius /= 5;
circle();
x += 5*radius;
circle();

// tegne resten af kroppen
y=200;
x=300;
radius=newcircle;
y += 2.5*radius;
radius += 20;
circle();

y += 2.2*radius;
radius += 20;
circle();
/*

function hat(x,y){
    let canvas = document.getElementById("snowcanvas").getContext('2d');
    //TODO: Tegn eventuelt snemandends hat se: https://www.w3schools.com/tags/canvas_rect.asp
}
/*
 *
 * @param x - angiver x placeringen
 * @param y - angiver y placeringen
 * @param size - angiver mundens bredde
 * @param happy - angiver om det er en glad eller sur mund
 */

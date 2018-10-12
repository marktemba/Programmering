//Sådan tegner man en cirkel i 20, 20 med radius 10
function circle(x, y, z) {
    let canvas = document.getElementById("mycanvas").getContext('2d');
    canvas.beginPath();
    canvas.arc(x, y, z, 0, Math.PI * 2);
    canvas.fillStyle = 'red';
    canvas.fill();
}

x = Number(prompt("Enter x"));
y = Number(prompt("Enter y"));
z = Number(prompt("Enter z"));

circle(x,y,z);

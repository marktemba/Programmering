alder = prompt("Indtast alder");
udkl = prompt("Indianer eller cowboy?");

if (alder <= 18 && alder >= 14 && ((udkl === "indianer") || (udkl === "cowboy"))) {
        alert("Du må godt komme ind");
    }
    else {alert("Du må ikke komme ind")}
pword = prompt("Indtast password - min 5 og max 8 karakterer");
if (pword.length < 5){
    alert("Password er for kort");
} else if (pword.length > 8) {
    alert("password er for lang");
}
else {alert("Det er en fin password længde");
}
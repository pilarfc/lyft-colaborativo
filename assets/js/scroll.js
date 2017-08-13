var cabezal = document.getElementById("cabezal");
var botonSignUp = document.getElementById("botonSingUpNav");
var botonLogIn = document.getElementById("botonLogInNav");
var logo = document.getElementById("navLogo");

function cabezalCambio() {
    if (window.scrollY > 100) {
        cabezal.style.backgroundColor = "white";
        cabezal.style.color = "gray";
        botonLogIn.style.color = "gray";
        botonLogIn.style.borderColor = "gray";
        botonSignUp.style.display = "inline-block";
        logo.src = "assets/img/logo-pink.png";
    } else if (window.scrollY < 100) {
        cabezal.style.backgroundColor = "rgba(255, 255, 255, 0)";
        cabezal.style.color = "white";
        botonLogIn.style.color = "white";
        botonLogIn.style.borderColor = "white";
        botonSignUp.style.display = "none";
        logo.src = "assets/img/logo-white.png";
    }
}

document.addEventListener("scroll", cabezalCambio);

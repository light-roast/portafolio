//Calcula la edad
let edad = document.getElementById('edad');
let fechaExacta = new Date();
let mesExacto = fechaExacta.getMonth();
let anoActual = fechaExacta.getFullYear();

if (mesExacto > 1) {
let edadp = anoActual - 1994;
edad.innerHTML= edadp;
} else {
let edadp = anoActual - 1995;
edad.innerHTML= edadp;
};

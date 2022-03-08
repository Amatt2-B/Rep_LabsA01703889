function checarContraseña(){
    let contraseña = document.getElementById("contraseña").value;
    let confirm_contraseña = document.getElementById("confirm_contraseña").value;
    console.log(" Contraseña: ", contraseña, '\n', "Confirmar contraseña: ", confirm_contraseña);
    let mensaje = document.getElementById("mensaje");
    
    if(contraseña.length != 0){
        if(contraseña == confirm_contraseña){
            mensaje.textContent = "Las contraseñas coinciden";
            mensaje.style.backgroundColor = "#1dcd59";
        }
        else{
            mensaje.textContent = "La contraseña no coincide";
            mensaje.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("La contraseña no puede estar vacía");
        mensaje.textContent = "";
    }
}


var total = 0;
var cantidad_Mozarella = 0;
var cantidad_Jamon = 0;
var cantidad_Tomate= 0;

const añadirMozarella = document.getElementById("añadirMozarella");
const añadirJamon = document.getElementById("añadirJamon");
const añadirTomate = document.getElementById("añadirTomate");
const removerMozarella = document.getElementById("removerMozarella");
const removerJamon = document.getElementById("removerJamon");
const removerTomate = document.getElementById("removerTomate");

function añadir_Mozarella() {
    let precio_Mozarella = parseInt(document.getElementById("precio_Mozarella").innerHTML);
    total = total + precio_Mozarella;
    document.getElementById("total").innerHTML = total;
    cantidad_Mozarella++;
    document.getElementById("cantidad_Mozarella").innerHTML = cantidad_Mozarella;
}

function añadir_Jamon() {
    let precio_Jamon = parseInt(document.getElementById("precio_Jamon").innerHTML);
    total = total + precio_Jamon;
    document.getElementById("total").innerHTML = total;
    cantidad_Jamon++;
    document.getElementById("cantidad_Jamon").innerHTML = cantidad_Jamon;
}

function añadir_Tomate() {
    let precio_Tomate = parseInt(document.getElementById("precio_Tomate").innerHTML);
    total = total + precio_Tomate;
    document.getElementById("total").innerHTML = total;
    cantidad_Tomate++;
    document.getElementById("cantidad_Tomate").innerHTML = cantidad_Tomate;
}

function rem_Mozarella() {
    let precio_Mozarella = parseInt(document.getElementById("precio_Mozarella").innerHTML);
    total = total - precio_Mozarella;
    document.getElementById("total").innerHTML = total;
    cantidad_Mozarella--;
    document.getElementById("cantidad_Mozarella").innerHTML = cantidad_Mozarella;
}


function rem_Jamon() {
    let precio_Jamon = parseInt(document.getElementById("precio_Jamon").innerHTML);
    total = total - precio_Jamon ;
    document.getElementById("total").innerHTML = total;
    cantidad_Jamon--;
    document.getElementById("cantidad_Jamon").innerHTML = cantidad_Jamon;
}

function rem_Tomate() {
    let precio_Tomate = parseInt(document.getElementById("precio_Tomate").innerHTML);
    total = total - precio_Tomate;
    document.getElementById("total").innerHTML = total;
    cantidad_Tomate--;
    document.getElementById("cantidad_Tomate").innerHTML = cantidad_Tomate;

}


añadirMozarella.onclick = añadir_Mozarella;
añadirJamon.onclick = añadir_Jamon;
añadirTomate.onclick = añadir_Tomate;
removerMozarella.onclick = rem_Mozarella;
removerJamon.onclick = rem_Jamon;
removerTomate.onclick = rem_Tomate;
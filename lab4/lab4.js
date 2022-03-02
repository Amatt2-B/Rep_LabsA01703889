let boton_prob1 = document.getElementById("problema1");
function prob1(){
    document.write("Reinicia la pagina para regresar");
    let num = prompt("Ingresa un número: ");
    document.write("<style> table,th,td{border: 1px solid black;}</style>")
    document.write("<table><thead><tr><th> N </th><th> N^2 </th><th> N^3 </th></tr></thead>");
    for (let i = 1; i <= num; i++){
        document.write("<tr><th>" + i + "</th><th>" + i*i + "</th><th>" + i*i*i + "</th></tr>")
    }
    document.write("</table>");
}

let boton_prob2 = document.getElementById("problema2");
function prob2(){
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let resultado = num1 + num2;

    let tiempoInicio = Date.now();
    let respuesta = prompt ("Resuelva la siguiente suma: " + num1 +" + " + num2);
    let tiempoFinal = Date.now();

    let tiempo = (tiempoFinal- tiempoInicio) / 1000;

    let res_prob = `Tu respuesta es ${respuesta == resultado ? 'correcta' : 'incorrecta'} y tardaste ${tiempo} segundos en responder.`;
    document.getElementById("res_prob2").innerHTML = res_prob;
}

let boton_prob3 = document.getElementById("problema3");
var x = [-48 , 1 , 44 , 0 , -10 , 13 , -8 , 19 , -40 , -0 , -23 , -8 , 41 , -43 , 16 , 0 , 25 , 40 , -45 , -35 ];
function prob3(arreglo){
    let negativos = 0;
    let ceros = 0; 
    let positivos = 0;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] < 0){
            negativos++;
        } 
        else if (arreglo[i] == 0){
            ceros++;
        }
        else {
            positivos++;
        }
    }
    let res_prob = `Arreglo: ${x}<br> Numeros -s: ${negativos}<br> 0s: ${ceros}<br> Numeros +s: ${positivos}<br>`;
    document.getElementById("res_prob3").innerHTML = res_prob;
}

let boton_prob4 = document.getElementById("problema4");
let y = [[22 , 70 , 56 , 6 , 84 , 66 ],[33 , 99 , 18 , 57 , 14 , 25],[62 , 92 , 4 , 97 , 8 , 74 ],[71 , 50 , 64 , 97 , 73 , 74 ],[12 , 20 , 24 , 57 , 59 , 26],[90 , 130 , 351 , 20 , 47 , 375]];
let matriz = "[22 , 70 , 56 , 6 , 84 , 66 ],[33 , 99 , 18 , 57 , 14 , 25],[62 , 92 , 4 , 97 , 8 , 74 ],[71 , 50 , 64 , 97 , 73 , 74 ],[12 , 20 , 24 , 57 , 59 , 26],[90 , 130 , 351 , 20 , 47 , 375]<br>"
function prob4(matrix){
    let promedios = 0;
    let promedios_array = new Array; 
    for (let i = 0; i < matrix.length; i++) {
        let suma = 0;
        let contador = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
        contador += suma;
        promedios = contador/matrix.length;
        promedios_array.push((" " + promedios.toFixed(2))); 
    }
    let res_prob = `Matriz original: <br> ${matriz} <br> Los promedios son: ${promedios_array}`;
    document.getElementById("res_prob4").innerHTML = res_prob;
}

var numero = Math.floor( Math.random() * 100);

function inverso(numero){

  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )

  respuesta = "Número = " + numero +"<br></br>" + "Invertido: " + invertido
  return respuesta

}
document.getElementById("resultados5").innerHTML = inverso(numero);


boton_prob1.onclick = prob1;
boton_prob2.onclick = prob2;
boton_prob3.onclick = prob3(x);
boton_prob4.onclick = prob4(y);
$cambio = document.getElementById("cambio");
$cambio2 = document.getElementById("cambio2");
$cambio3 = document.getElementById("cambio3");
$cambio4 = document.getElementById("cambio4");
$cambio5 = document.getElementById("cambio5");
$cambio6 = document.getElementById("cambio6");
$cambio7 = document.getElementById("cambio7");
$cambio8 = document.getElementById("cambio8");//imagen

//toltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//variables de animacion
const animacion1 = document.getElementById("animacion1");//botones
const animacion2 = document.getElementById("animacion2");
const animacion3 = document.getElementById("animacion3");
const animacion4 = document.getElementById("animacion4");
const animacion5 = document.getElementById("animacion5");

//definicion de ciclos(Set Interval):
let an1;
let p2;
let mix3;
let mix4;
let enUno5;

//iniciar funciones
animacion1.addEventListener("click",apagUnoxuno);
animacion2.addEventListener("click",prendido);
animacion3.addEventListener("click",mixto1);
animacion4.addEventListener("click",mixto2);
animacion5.addEventListener("click",encUnoxUno);

//funciones para crear las animaciones 
function apagUnoxuno() //Apagado de uno por uno
{
    console.log("entra a apagUnoxuno");
    clearInterval(p2);
    clearInterval(mix3);
    clearInterval(mix4);
    clearInterval(enUno5);
    an1 = setInterval(function() {
    apagarunoauno()
   }, 2100); 
}
//Animacion1
function apagarunoauno(){
        $cambio.src = "img/prendido.PNG"
        $cambio2.src = "img/prendido.PNG"
        $cambio3.src = "img/prendido.PNG"
        $cambio4.src = "img/prendido.PNG"
        $cambio5.src = "img/prendido.PNG"
        $cambio6.src = "img/prendido.PNG"
        $cambio7.src = "img/prendido.PNG"
        $cambio8.src = "img/prendido.PNG"
        setTimeout(function(){
            $cambio.src="img/apagado.png"
        },500)
        setTimeout(function(){
            $cambio2.src="img/apagado.png"
        },700)
        setTimeout(function(){
            $cambio3.src="img/apagado.png"
        },900)
        setTimeout(function(){
            $cambio4.src="img/apagado.png"
        },1100)
        setTimeout(function(){
            $cambio5.src="img/apagado.png"
        },1300)
        setTimeout(function(){
            $cambio6.src="img/apagado.png"
        },1500)
        setTimeout(function(){
            $cambio7.src="img/apagado.png"
        },1700) 
        setTimeout(function(){
            $cambio8.src="img/apagado.png"
        },1900)
}

//click a boton prendido
function prendido() //Melani PRENDER
{    
    console.log("entra a prendido");     
    clearInterval(an1);
    clearInterval(mix3);
    clearInterval(mix4);
    clearInterval(enUno5);
   p2 = setInterval(function() {
   prender2()
  }, 1500);

}
//codigo animacion #2
function prender2(){
    $cambio.src = "img/prendido.PNG"
    $cambio2.src = "img/prendido.PNG"
    $cambio3.src = "img/prendido.PNG"
    $cambio4.src = "img/prendido.PNG"
    $cambio5.src = "img/prendido.PNG"
    $cambio6.src = "img/prendido.PNG"
    $cambio7.src = "img/prendido.PNG"
    $cambio8.src = "img/prendido.PNG"
    setTimeout(function(){
     $cambio.src = "img/apagado.png"
     $cambio2.src = "img/apagado.png" 
     $cambio3.src = "img/apagado.png"
     $cambio4.src = "img/apagado.png" 
     $cambio5.src = "img/apagado.png"
     $cambio6.src = "img/apagado.png" 
     $cambio7.src = "img/apagado.png"
     $cambio8.src = "img/apagado.png" 
    },1000);
}

//Animacion #3
function mixto1() //mixto1 Litzy
{
    console.log("entra a mixto 1")
     clearInterval(p2);
     clearInterval(an1);
     clearInterval(mix4);
     clearInterval(enUno5);
     mix3 = setInterval(function() {
        mix1()
       }, 1500);
}
function mix1(){
    $cambio.src = "img/prendido.PNG"
        $cambio3.src = "img/prendido.PNG"
        $cambio5.src = "img/prendido.PNG"
        $cambio7.src = "img/prendido.PNG"
        setTimeout(function(){
         $cambio.src = "img/apagado.png"
         $cambio2.src = "img/apagado.png" 
         $cambio3.src = "img/apagado.png"
         $cambio4.src = "img/apagado.png" 
         $cambio5.src = "img/apagado.png"
         $cambio6.src = "img/apagado.png" 
         $cambio7.src = "img/apagado.png"
         $cambio8.src = "img/apagado.png" 
        },700)
}
//Animacion #4
function mixto2()// Melani animacion4
{
    console.log("entra a mixto 2")
    clearInterval(an1);
    clearInterval(p2);  
    clearInterval(mix3);
    clearInterval(enUno5);
    mix4 = setInterval(function() {
       mixtos2()
      }, 1500);
}

function mixtos2(){
    $cambio2.src = "img/prendido.PNG"
    $cambio4.src = "img/prendido.PNG"
    $cambio6.src = "img/prendido.PNG"
    $cambio8.src = "img/prendido.PNG"
 setTimeout(function(){   
    $cambio.src = "img/apagado.png"
    $cambio2.src = "img/apagado.png" 
    $cambio3.src = "img/apagado.png"
    $cambio4.src = "img/apagado.png" 
    $cambio5.src = "img/apagado.png"
    $cambio6.src = "img/apagado.png" 
    $cambio7.src = "img/apagado.png"
    $cambio8.src = "img/apagado.png" 
    },700)
}
//Animacion #5
function encUnoxUno()//encendido uno a nuno Litzy
{
    console.log("entra a encendido uno a uno")
    clearInterval(an1);
    clearInterval(p2);  
    clearInterval(mix3);
    clearInterval(mix4);
    enUno5 = setInterval(function() {
       enUxU()
      }, 2500);
}

function enUxU(){
    $cambio.src = "img/apagado.PNG"
    $cambio2.src = "img/apagado.PNG"
    $cambio3.src = "img/apagado.PNG"
    $cambio4.src = "img/apagado.PNG"
    $cambio5.src = "img/apagado.PNG"
    $cambio6.src = "img/apagado.PNG"
    $cambio7.src = "img/apagado.PNG"
    $cambio8.src = "img/apagado.PNG"
    setTimeout(function(){
        $cambio8.src="img/prendido.png"
    },300)
    setTimeout(function(){
        $cambio7.src="img/prendido.png"
    },500)
    setTimeout(function(){
        $cambio6.src="img/prendido.png"
    },700)
    setTimeout(function(){
        $cambio5.src="img/prendido.png"
    },900)
    setTimeout(function(){
        $cambio4.src="img/prendido.png"
    },1100)
    setTimeout(function(){
        $cambio3.src="img/prendido.png"
    },1300)
    setTimeout(function(){
        $cambio2.src="img/prendido.png"
    },1500) 
    setTimeout(function(){
        $cambio.src="img/prendido.png"
    },1700)
    setTimeout(function(){
        $cambio.src = "img/apagado.png"
        $cambio2.src = "img/apagado.png"
        $cambio3.src = "img/apagado.png"
        $cambio4.src = "img/apagado.png" 
        $cambio5.src = "img/apagado.png"
        $cambio6.src = "img/apagado.png"
        $cambio7.src = "img/apagado.png"
        $cambio8.src = "img/apagado.png" 
    },1900)
}


function detener(){
    console.log("secuencias detenidas")
    clearInterval(p2);
    clearInterval(an1);
    clearInterval(mix3);
    clearInterval(mix4);
    clearInterval(enUno5);
}


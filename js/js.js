//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var singasofa = false;
//al cargar por completo la página...
var siempreV = null;
<<<<<<< HEAD
var siempreA = null;
=======

>>>>>>> dce3853efa1783322934b7eecaff3e8945146440
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("gastofuel");

	
	//definición de eventos
	//mostrar menú móvil
<<<<<<< HEAD

=======
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
>>>>>>> dce3853efa1783322934b7eecaff3e8945146440
	//encender/apagar el motor al hacer click en la pantalla
	document.getElementById('BotonOn').onclick = function () {
 	  if (a==g){
  		motorOn();
  		
 	  } else {
  		motorOff();

 	  }
	}
	/*encender/apagar al apretar/soltar una tecla
	* document.onkeydown = motorOn;
	*document.onkeyup = motorOff;
	*/
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	if (v > 0) {
		siempreV = v;
	}else{
		siempreV = -v;
	}
<<<<<<< HEAD

	if (y > 0) {
		siempreA = y;
	}else{
		siempreA =(-1)*y;
	}



	velocidad.innerHTML=siempreV.toFixed(2);
	altura.innerHTML= siempreA.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<73){ 
=======

	velocidad.innerHTML=siempreV.toFixed(2);
	altura.innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
>>>>>>> dce3853efa1783322934b7eecaff3e8945146440
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
	}
}
function motorOn(){


	if (!singasofa){
			//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
}else{
	motorOff();
}

}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ){
	c = 0;
	//combustible.innerHTML=c;	
	singasofa = true;
<<<<<<< HEAD
	motorOff(); /**Que se apage el motor cuando el fuel sea 0**/
}
	combustible.style.height = c +"%";
=======
}

	combustible.style.height = c +"%";

>>>>>>> dce3853efa1783322934b7eecaff3e8945146440
}
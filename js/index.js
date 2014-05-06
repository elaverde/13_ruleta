//////////////////////autor Edilson Laverde Molina 30/04/14 22:02

//sonidos
var fail = new Howl({
  urls: ['sound/fail.mp3']
})
var applause = new Howl({
  urls: ['sound/applause.mp3']
})
var rotationSnap = 100;
var ultimo= 3;
var anterior=0;
function val360(values){
if (values<0){
while (values<0)
{
  values+=360;
}

}	
while (values>=360)
{
  values-=360;
}	
  return values;
}

function sector(values){
	values=val360(values);
	if (values>0 && values<90){
	$('body').css("background-color","#8E45B7").fadeTo('slow', 1);
	}
	if (values>91 && values<180){
	$('body').css("background-color","#F452AF").fadeTo('slow', 1);;	
	}
	if (values>181 && values<270){
	$('body').css("background-color","#F8DE41").fadeTo('slow', 1);;	
	}
	if (values>271 && values<360){
	$('body').css("background-color","#1575CF").fadeTo('slow', 1);;	
	}

if (contesto==true || nivel==0){
$("#retro").hide("fast");	
$.test_paso(nivel);
$("#respuestas").show("slow");
nivel+=1;
contesto=false;
}
else {
alert ("no has contestado no puedes avanzar sin contestar")
}
	
}
Draggable.create("#dial", {
    type:"rotation", 
	throwProps:true, 
    snap:function(endValue) { 
     ultimo-=1;
	 console.log(ultimo);
	 if (ultimo==0){
	 ultimo=3;
	 setTimeout(function(){
	 sector(endValue);	 
	 }, 1500);
	 } 	 
		return Math.round(endValue);
	
    }
	,
	onDragEnd:function() {
	//	console.log("velocity is: " + ThrowPropsPlugin.getVelocity(this.target, "rotation"));
	}
});



//////////////////////autor Edilson Laverde Molina 20/03/14 17:02
var score=0;
var nivel=0;
var contesto=false;
//nucleo contructor
jQuery.test= function (args){
	vboxopciones = jQuery.extend({
	},args);	
}
//precargador de imagenes
jQuery.preloadImages = function() {
	for(var i = 0; i<arguments.length; i++){
	jQuery("<img>").attr("src", arguments[i]);
	}
}
//validador
jQuery.test_paso=function(q){


	
$("#retro").removeClass("animated bounceInLeft");	
$("#question").text(vboxopciones[q].pregunta);
$("#r1").text("a). "+vboxopciones[q].r1);
$("#r2").text("b). "+vboxopciones[q].r2);
$("#r3").text("c). "+vboxopciones[q].r3);
$("#r4").text("d). "+vboxopciones[q].r4);
$("#respuestas").show("slow");
$(".error").unbind( "click" );
	$(".error").click(function (){
	if (score!=0){
		score-=1;
	}
	fail.play();	
		$("#score").text(score+' - Puntos');
	    $("#retro").attr("src","img/mal.png")
		$("#retro").addClass("animated bounceInLeft");
		$("#retro").css("display","block");	
		$(this).unbind("click");
		$("#r"+vboxopciones[q].rta).unbind("click");
	contesto=true;
	if (q==4){
		applause.play();
		alert ('Fin juego'); 
        }
	});

	
$("#r"+vboxopciones[q].rta).unbind( "click" );
	$("#r"+vboxopciones[q].rta).click(function (){
		applause.play();
		score+=3;
		$("#score").text(score+' - Puntos');
	    $("#retro").attr("src","img/bien.png")
		$("#retro").addClass("animated bounceInLeft");
		$("#retro").css("display","block");
		$(this).unbind("click");
		$(".error").unbind("click");
		contesto=true;
		if (q==4){
		applause.play();
		alert ('Fin juego'); 
        }
	});
}



//contrutor test
jQuery(document).ready(function($){


	$.test([
	{
		pregunta: '1.  23 + 65 =', 
		r1:'88',
		r2:'76',
		r3:'86',
		r4:'78',
		rta:1	
	},
	{
		pregunta: '2.  27 - 5 + 42 =', 
		r1:'57',
		r2:'74',
		r3:'64',
		r4:'84',
		rta:3	
	},
	{
		pregunta: '3. ¿Cuál de los siguientes números es primo?', 
		r1:'2',
		r2:'4',
		r3:'6',
		r4:'8',
		rta:1	
	},
	{
		pregunta: '4. Si "r" es el radio de una circumferencia, ¿cuál de las siguientes fórmulas nos da la longitud de su circumferencia?', 
		r1:'2Πr²',
		r2:'2Πr',
		r3:'Πr',
		r4:'Πr²',
		rta:4	
	},
	{
		pregunta: '5.  5 x 4 =', 
		r1:'20',
		r2:'10l',
		r3:'9',
		r4:'6',
		rta:1	
	}
	]);

});


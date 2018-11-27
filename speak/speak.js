/////////////var nomduplugin="meteomathilde"//ou autre nom....
/////////////var valeurduspeak='phrase qui doit etre dite par sarah.speak ou screabspeak'//phrase à dire
/////////////SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
//3 phrases à mettre apres un screakspeak ou sarah.speak

var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak  

var exec = require('child_process').exec;

var nomduplugin=data.nomduplugin
var valeurduspeak=data.valeurduspeak
var TexteRéponse=[]


//console.log('phrase dite : '+valeurduspeak)


//plug meteo
if(nomduplugin=='meteomathilde'){
	
	valeurduspeaksplit=valeurduspeak.split(',')//on fait un tableau de meteo temperature,vent....
	for(var i=0;i<valeurduspeaksplit.length;i++){
		valeurduspeaksplit[i]=" "+valeurduspeaksplit[i].trim()+" "
	}
	//console.log(valeurduspeaksplit)
	
	if(valeurduspeak.search(new RegExp(' nuageux ',"gi"))>-1){//météo
		TexteRéponse.push("le ciel est couvert","la pluie va peut etre arriver","le temps est maussade");
	}//fin if nuageux

	if(valeurduspeak.search(new RegExp('OUEST',"gi"))>-1){//météo
		TexteRéponse.push("le vent est au cerse");
	}//fin if nuageux

	if(valeurduspeak.search(new RegExp(' est ',"gi"))>-1){//météo
		TexteRéponse.push("le vent est au marin");
	}//fin if nuageux
	if(valeurduspeak.search(new RegExp(' partiellement ',"gi"))>-1){//météo
		TexteRéponse.push("le temps est incertain");
	}//fin if nuageux

	valeurduspeaksplitreplace=valeurduspeaksplit[0].replace(new RegExp("[^0-9]", 'ig'),"")
	if(valeurduspeaksplitreplace<15){ //météo
		TexteRéponse.push("la température est froide");
	}//fin if nuageux

	valeurduspeaksplitreplace=valeurduspeaksplit[4].replace(new RegExp("[^0-9]", 'ig'),"")
	if(valeurduspeaksplitreplace>30){ //météo
		TexteRéponse.push("le vent est fort");
	}
	if(valeurduspeak.search(new RegExp('neige',"gi"))>-1){//météo
		TexteRéponse.push("prépare la luge",'sort les skis');
	}//fin if nuageux
}//fin meteomathilde


//plug horoscopemathilde
if(nomduplugin=='horoscopemathilde'){

	TexteRéponse.push("tu crois en ceci ?","ne crois pas tout ce que l'on te dis","ce n'est qu'une supposition")

}// fin horoscopemathilde



//plug infomathilde
if(nomduplugin=='infomathilde'){

	TexteRéponse.push("le monde est fou","j'espère que tout vas s'arranger","demain est en autre jour, cela ira mieux")

}// fin infomathilde

//plug mathildeurl
if(nomduplugin=='mathildeurl'){

	TexteRéponse.push("bonne lecture","n'y passe pas trop de temps","j'ai trouvé ceci","je t'affiche celà de suite")

}// fin mathildeurl


//plug merci
if(nomduplugin=='merci'){

	TexteRéponse.push("mais de rien","cela me fait plaisir","à ton service")

}// fin merci

//plug multimedia
if(nomduplugin=='multimedia'){

	TexteRéponse.push("bonne lecture","n'y passe pas trop de temps","j'ai trouvé ceci","je t'affiche celà de suite")

}// fin multimedia


//plug programmemathilde
if(nomduplugin=='programmemathilde'){
	
	if(valeurduspeak==""){
	TexteRéponse.push("je n'ai pas trouvé","tu devrais l'installer avant","est tu sur qu'il est dans tes programmes ?")
	}

}// fin programmemathilde

//plug radio
if(nomduplugin=='radio'){
	
	TexteRéponse.push("bonne écoute","bon choix","un peux de détente musical")
	
}// fin radio

//plug reveil
if(nomduplugin=='reveil'){

	TexteRéponse.push("as tu bien dormis ?","bonne journée à toi","tu as beaucoup de travail aujourd'hui ?")

}// fin reveil

//plug smsmathilde
if(nomduplugin=='smsmathilde'){

	TexteRéponse.push("en esperant que la personne le lise","si son portable est allumé","la personne va peut etre répondre")

}// fin smsmathilde

//plug smsmathilde
if(nomduplugin=='time'){

var date = new Date();
if (date.getHours()<6){ TexteRéponse.push("il est tot","que fait tu debout à cette heure si matinal ?","tu ne devrais pas etre couché ?") }
if (date.getHours()>22){ TexteRéponse.push("il est tard","tu devrais aller te coucher","tu vas avoir du mal à te lever") }
if ( (date.getHours()>10) && (date.getHours()<13) ){ TexteRéponse.push("bientot l'heure de l'apéro","bientot l'heure de manger") }
if ( (date.getHours()>18) && (date.getHours()<21) ){ TexteRéponse.push("bientot l'heure de l'apéro","bientot l'heure de manger") }

}// fin smsmathilde








//ne pas modifier
console.log('nombre de réponse aléatoire : ' + TexteRéponse.length) ;
console.log('réponse possible : ' + TexteRéponse)

var valeurduspeak=valeurduspeak.replace(/:/gi, ";");


if(TexteRéponse.length>0){//choix de la réponse
var ChoixRéponse = Math.floor(Math.random() * TexteRéponse.length);
console.log('réponse choisi : ' + ChoixRéponse)
TexteRéponse[ChoixRéponse]=TexteRéponse[ChoixRéponse].replace(/:/gi, ";");
ScribeSpeak(valeurduspeak+ TexteRéponse[ChoixRéponse])
callback() ; return false
}
else{
	ScribeSpeak(valeurduspeak)
}

//ScribeSpeak	("je n'ai rien à dire")
callback() ; return false
}
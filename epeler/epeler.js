var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('épeler');SCRIBE.icone("icones/eppeler.png",myIPretour);

var epeler=JSON.stringify(SARAH.context.scribe.lastReco) ; var epeler=JSON.parse(epeler)

//console.log("recu de epeler : "+epeler)

var epeler=epeler.split(" ") ; var epelerlenght=epeler.length
//console.log(epeler+epelerlenght) ; console.log(epeler[epelerlenght-1])
var derniermot=epeler[epelerlenght-1] ; var derniermot1=derniermot.split("")

console.log(derniermot1)


var motspeak=""
for (var i=0;i<derniermot1.length;i++){
motspeak=motspeak+derniermot1[i]+";;;;"
}

ScribeSpeak(derniermot+" en "+derniermot.length+" lettres ;;;;"+motspeak+derniermot)

callback();return false
//ScribeSpeak(derniermot+" en "+derniermot.length+" lettres ")
//SCRIBE = SARAH.context.scribe;
//SCRIBE.texteplugin(derniermot);
//SCRIBE.activePlugin('EPPELER');

//var i=0 
eppeler=function(derniermot1,derniermot,i){//console.log(derniermot1[i])
	ScribeSpeak(derniermot1[i],function(){
		setTimeout(function() {
			i++;
			if(i==derniermot1.length){
				ScribeSpeak(derniermot); 
				callback();
				return false
			}
			else(
				eppeler(derniermot1,derniermot,i)
				)
		},250)
	})
}//fin fnct

//eppeler(derniermot1,derniermot,i)

}
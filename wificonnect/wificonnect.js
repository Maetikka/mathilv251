var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(data, callback, config,SARAH){


SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('wificonnect');

var exec = require('child_process').exec;

var réponse=data.réponse
var ip=data.ip
var non=data.non
var oui=data.oui
var surveillance=data.surveillance
var timersortie=data.timersortie
var timerfrequence=data.timerfrequence
var conteur=-data.timerfrequence

try{
var datasequence=data.sequence.split(';')
}
catch(err){datasequence=""}
//console.log("eeeeeeeeeeeeeeeeeeeeeeee"+réponse+ip+non+oui+surveillance+timersortie+timerfrequence+conteur)
console.log('les actions à venir '+datasequence)

ScribeSpeak(réponse)



if(surveillance=="on"){

var attente = setInterval(function(){
	conteur=conteur+60 
	exec('ping '+ ip, function(error, stdout, stderr) {
	//console.log(timerfrequence+timersortie+conteur)		
		//console.log("!!",stdout,"??")
		if(error){console.log(error);callback();return false}
	    
	    if(stdout.search('Impossible')>-1){}//rien on continue
	    
	    else {
	    	if(conteur>timersortie){
			    	var date = new Date();
		 		    var text = 'il est ' + date.getHours() + ' heure ';
		  			if (date.getMinutes() > 0){ 
		    		text += date.getMinutes();
		  			}

			    	ScribeSpeak(text+" : "+ oui);
			    	console.log(text+" : "+ oui);





//datasequence
	var compteur=0
		var actionemulate=""
			
			function actif(actionemulate,compteur,datasequence){
			
				if(compteur==datasequence.length){console.log('FIN des actions receive sms');callback();return false}
			
						var actionemulate='"'+datasequence[compteur].trim()+'"';//console.log(action[compteur]+"fffffffffff")
						//console.log(difference+"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
						
								console.log("EN COURS DE TRAITEMENT, TEMPO 20 Secondes entre les actions par sécurité !!!!!")		
								//var actionemulate=actionemulate.replace('Mathilde','Sarah')
								var actionemulate=actionemulate.replace(/"/ig,'')
								var url1 = 'http://127.0.0.1:8888/?emulate='+actionemulate;
								console.log("on émule ceci : "+url1)
								//var request1 = require('request') ; 	
								
    //do what you need here
									setTimeout(function(){
									SARAH.run('cortana', { 'reco' : actionemulate , 'lastReco' : actionemulate});		
										//request1(url1)
										compteur=compteur+1;
										console.log(compteur+"    "+datasequence.length)						
										if(compteur==datasequence.length){callback();return false}
										else{	 actif(actionemulate,compteur,datasequence)}
									}, 20000);							 

					
						//compteur=compteur+1; actif(actionemulate,compteur,difference,config )}			
			}//fin fnct actif

			actif(actionemulate,compteur,datasequence )




















			    	//do what you want here


			    	clearInterval(attente);
			    	callback();return false
			}//fin if
	    }//fin else
	})
}, timerfrequence*1000);

}//fin if

else{
exec('ping '+ ip, function(error, stdout, stderr) {//console.log(stdout,"rrrrrrrrrrrrrrrrr",error,"sssss",stderr,"llll")

	if(error){console.log(error);callback();return false}
    if(stdout.search('Impossible')>-1){ScribeSpeak(non)}
    else {ScribeSpeak(oui)}
})
}//fin else
callback();return false
}
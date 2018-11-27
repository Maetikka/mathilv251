var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe ; ScribeAskMe = SARAH.ScribeAskMe ; ScribeSpeak = SARAH.ScribeSpeak;maConfig = config.modules.scribe
var exec = require('child_process').exec ; var path = require('path');

var nircmd = path.resolve('%CD%', './plugins/navigation/nircmd/nircmd.exe').replace('\\%CD%', '');

var data1=data.valeur
//console.log('data recus : '+data.valeur)

try{

if(data.need=="s_restart"){

	
	var process = '%CD%/plugins/navigation/bin/SARAH_Restart.vbs';
	//console.log("Process : " + process);	
	var child = exec(process)
	callback(); return false
}

if(data.valeurchemin!==undefined){
	//console.log("explorer "+data.valeurchemin)
	SARAH.runApp('explorer',' '+data.valeurchemin); 
	callback(); return false
}//fin if data.valeurchemin

if(data.valeururl!==undefined){
	//console.log("explorer "+data.valeururl)
	SARAH.runApp('firefox',' '+data.valeururl); 
	callback(); return false
}//fin if data.valeururl

if(data.valeurbat!==undefined){
	//console.log("execution bat :  "+data.valeurbat)
	var process = data.valeurbat;
	var child = exec(process)
	callback(); return false
}//fin if data.valeurbat


//sécurité
if(data.valeur.search("initshutdown")>-1){
console.log("confirmation !!!!!!!!!!!!!!!")

ScribeAskMe("dois je oui ou non executer ceci ?", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase.search('oui')>-1) {
        ScribeSpeak('ok action en cours')
        init(data1)
        callback(); return false
       }//fin if oui
       if (phrase.search('non')>-1) {
        ScribeSpeak('ok action annulé')
        callback(); return false
       }//fin if oui
      //else ScribeSpeak("action annulé.");callback(); return false
    }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? ", 'essais': 2}
  );

//return false
callback(); return false
}//fin if sécurité


else{init(data1);callback();return false}








function depart(data1){
	
var data1=" "+data1
var data2=data1.split(';') ; var exec = require('child_process').exec ; var path = require('path');

var nircmd = path.resolve('%CD%', './plugins/navigation/nircmd/nircmd.exe').replace('\\%CD%', '');

var procclick1=nircmd + ' sendmouse left click '//focus fenetre
//var chilclick=exec(procclick1)

		for(var z=0;z<data2.length;z++){
				var dt = new Date();
				dt.setTime(dt.getTime() + 100);
				while (new Date().getTime() < dt.getTime())

				var proc=nircmd+' '+data2[z].trim()
				var child=exec(proc)
				//console.log(proc)
		}//fin for z

callback(); return false


}//fin fnct depart



function init(data1){

var procclick=nircmd + ' sendmouse move 0 -222220 '
//var chilclick=exec(procclick)
 
	setTimeout(function(){ depart(data1) ; }, 1000);//départ

callback();return false  

}//fin fnct init

}//fin try
catch(err){console("erreur : "+err)}
}//fin
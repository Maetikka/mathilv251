var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;
alarmeaudiospeak='off'

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe; 
ScribeAskMe = SARAH.ScribeAskMe; 
ScribeSpeak = SARAH.ScribeSpeak
var configalarme = config.modules.alarme;

//console.log(data.alarmerrrr)


//console.log(data.alarme)
//if(data.alarme=="activation"){console.log("stop !!!!!!!");SCRIBE.alarmeaudio('off');callback();return false}
//callback();return false

//callback();return false

if (data.alarme=="off"){
	SCRIBE.alarmeaudio('off');
SCRIBE.ImgAlarme('icones/off.png')
	ScribeSpeak('code bon , alarme désactivée , bonne journée');
SARAH.run('smsmathilde', { 'qui' : configalarme.qui , 'numero' : configalarme.numero , 'texte' : "code bon : alarme désactivé : bonne journée" , 'push' : "liste"})
	callback();return false
}

if (data.alarme=="on"){

	console.log("temps de sortie de la pièce en secondes : "+configalarme.timer+" : confidence : "+configalarme.confidence)
    ScribeSpeak("temps de sortie de la pièce en secondes : "+configalarme.timer)
    var timer=configalarme.timer*1000;var confidence=configalarme.confidence;var motdepasse=configalarme.motdepasse
 
 		setTimeout(function (timer,confidence) {
 		var	exec = require('child_process').exec;var path = require('path');
		


				var fs = require('fs');var exec = require('child_process').exec;var path = require('path');var util = require('util');
				//var SCRIBE = SARAH.context.scribe; var ScribeAskMe = SARAH.ScribeAskMe;  var ScribeSpeak = SARAH.ScribeSpeak

				var filePath = path.resolve('%CD%', './plugins/scribe/static/main.js').replace('\\%CD%', '');
				var filePathon = path.resolve('%CD%', './plugins/alarme/mainon.js').replace('\\%CD%', '');
				var filePathoff = path.resolve('%CD%', './plugins/alarme/mainoff.js').replace('\\%CD%', '');
				 
				//var main = fs.readFileSync(filePathon,'utf8')
				//fs.writeFileSync(filePath,main)
				console.log('alarme enclenché !!!!!!!!!!!!!!!!!')

						var __nircmd = path.resolve('%CD%', './plugins/alarme/nircmd.exe').replace('\\%CD%', '');	
						//console.log(__nircmd)
						var child22=exec(__nircmd + ' win max ititle "Google Chrome"')
						var procc= __nircmd +' win trans ititle "Google Chrome" 255' ; var childd = exec(procc)	
						var proc1=__nircmd + ' win activate ititle "chrome"'
						var proc2=__nircmd + ' win max ititle "Google Chrome"'
						var proc3=__nircmd + ' sendkey f5 press'
						
//setTimeout(function(){exec(proc1);console.log(proc1); }, 2000);
//setTimeout(function(){exec(proc3);console.log(proc3); }, 4000);

						//var	child1=exec(proc1,function(){var child2=exec(proc2,function(){var child3=exec(proc3)})})
						//var	child1=exec(proc1,function(){var child2=exec(proc2,function(){var child3=exec(proc3)})})
SCRIBE.alarmeaudio('Active','01010101010');
SCRIBE.ImgAlarme('icones/on.png')
  		},timer)
callback();return false
}//fin if on

if(data.alarme=="activation"){
	
//var exec = require('child_process').exec
//var process = '%CD%/plugins/alarme/SARAH_Restart.vbs';
	
//	var child = exec(process)

SCRIBE.alarmeaudio('Activé par du bruit');



				var timer=configalarme.timer*1000;var confidence=configalarme.confidence;var motdepasse=configalarme.motdepasse
				var	exec = require('child_process').exec;var path = require('path');
				var fs = require('fs');var exec = require('child_process').exec;var path = require('path');var util = require('util');
				//var SCRIBE = SARAH.context.scribe; var ScribeAskMe = SARAH.ScribeAskMe;  var ScribeSpeak = SARAH.ScribeSpeak

				var filePath = path.resolve('%CD%', './plugins/scribe/static/main.js').replace('\\%CD%', '');
				var filePathon = path.resolve('%CD%', './plugins/alarme/mainon.js').replace('\\%CD%', '');
				var filePathoff = path.resolve('%CD%', './plugins/alarme/mainoff.js').replace('\\%CD%', '');
				 
				//var main = fs.readFileSync(filePathoff,'utf8')
				//fs.writeFileSync(filePath,main)
				console.log('alarme déclenché par le bruit !!!!!!!!!!!!!!!!!')

						var __nircmd = path.resolve('%CD%', './plugins/alarme/nircmd.exe').replace('\\%CD%', '');	
						//console.log(__nircmd)	
						var child22=exec(__nircmd + ' win max ititle "Google Chrome"')	
						var proc1=__nircmd + ' win activate ititle "chrome"'
						var proc2=__nircmd + ' win max ititle "Google Chrome"'
						var proc3=__nircmd + ' sendkey f5 press'
						//var	child1=exec(proc1,function(){var child2=exec(proc2,function(){var child3=exec(proc3)})})
						
						//setTimeout(function(){exec(proc1); }, 500);
						//setTimeout(function(){exec(proc2); }, 1000);
						//setTimeout(function(){exec(proc3); }, 1500);

//SARAH.play(path.resolve('%CD%', './plugins/alarme/son.mp3').replace('\\%CD%', ''))


						//ScribeSpeak("alarme d'éclenché par du bruit")

//SARAH.play(path.resolve('%CD%', './plugins/alarme/son.mp3').replace('\\%CD%', ''))
	//,function() {xmlinconnu(query,reco)})
function ask(question,motdepasse,configalarme) {

 ScribeAskMe(question, [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
     
//console.log(answer+phrase+match+wholeMatch)


if(phrase.search(motdepasse)>-1){
	//SARAH.pause(path.resolve('%CD%', './plugins/alarme/son.mp3').replace('\\%CD%', ''))
	ScribeSpeak("code bon : alarme désactivé : bonne journée");
alarmeaudiospeak='off'
SARAH.run('smsmathilde', { 'qui' : configalarme.qui , 'numero' : configalarme.numero , 'texte' : "code bon : alarme désactivé : bonne journée" , 'push' : "liste"})
var __nircmd = path.resolve('%CD%', './plugins/alarme/nircmd.exe').replace('\\%CD%', '');	
						//console.log(__nircmd)	
						var child22=exec(__nircmd + ' win max ititle "Google Chrome"')	
						var proc1=__nircmd + ' win activate ititle "chrome"'
						var proc2=__nircmd + ' win max ititle "Google Chrome"'
						var proc3=__nircmd + ' sendkey f5 press'
						//var	child1=exec(proc1,function(){var child2=exec(proc2,function(){var child3=exec(proc3)})})
SCRIBE.alarmeaudio('off')						
						//setTimeout(function(){exec(proc1); }, 500);
						//setTimeout(function(){exec(proc2); }, 1000);
						//setTimeout(function(){exec(proc3); }, 1500);
var exec = require('child_process').exec
var process = '%CD%/plugins/alarme/SARAH_Restart.vbs';
	
	//var child = exec(process)

	callback();return false}
else{//SARAH.pause(path.resolve('%CD%', './plugins/alarme/son.mp3').replace('\\%CD%', ''))

	ask(question,motdepasse,configalarme)
//callback();return false
}
      //if (phrase!=='undefined') {callback();return false}//fin if !=='undefined'
            
    }//fin fnct answer
  );//ask(question,motdepasse)
 //callback();return false
}//fin fnct ask
//SARAH.play(path.resolve('%CD%', './plugins/alarme/son.mp3').replace('\\%CD%', ''))



//SARAH.run('smsmathilde', { 'qui' : data.qui , 'numero' : data.numero , 'texte' : "alarme enclenché par du bruit" , 'push' : "liste"})

var question="alarme activée ; SMS envoyé : le code s'il vous plait" ;
alarmeaudiospeak='on'
ScribeSpeak(question)
//ask(question,motdepasse)
SARAH.run('smsmathilde', { 'qui' : configalarme.qui , 'numero' : configalarme.numero , 'texte' : "alarme activé par du bruit , le code svp" , 'push' : "liste"})

callback();return false
}

callback();return false
}

//<script src="volume-meter.js"></script>



//<script src="main.js"></script>
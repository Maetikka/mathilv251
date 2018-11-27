var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.init = function(SARAH,config) {
 var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
  var path = require('path');
  var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
    var process=nircmd + ' filldelete "' + dir + '\\minuteurmathilde\\memoire\\*.*"'﻿
  var exec = require('child_process').exec;                       
  exec(process)
console.log('mis à zéro du minuteurmathilde')
}

exports.action = function(data, callback, config, SARAH){
//reponse1="" ; reponse=""
SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('minuteur');
 SCRIBE.icone("icones/minuteur.png",myIPretour);

var path = require('path');var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');var exec = require('child_process').exec; 
// on récupére la phrase
var reponse1=JSON.stringify(SARAH.context.scribe.lastReco) ;var reponse1=JSON.parse(reponse1)
//console.log('recu de minuteur: '+reponse1)
var rgxp = /minuteur (.+)/i; var reponse1 = reponse1.match(rgxp)
// console.log('la reponse 1: '+reponse1)
try{
 var reponse1=reponse1[1]; var reponse1=" "+reponse1+" ";//console.log("*"+reponse1+"*")
}
catch(err){reponse1=""}

//console.log('la reponse 11: '+reponse1)

var reponse=reponse1.replace(new RegExp(' une ', 'ig')," 01 ")//protection une par 01
var reponse=reponse.replace(new RegExp(' trente ', 'ig')," 30 ")//protection une par 01
var reponse=reponse.replace(new RegExp(" un quart d'heure ", 'ig')," 1500 ")//protection 
var reponse=reponse.replace(new RegExp(" trois quart d'heure ", 'ig')," 4500 ")//protection 
var reponse=reponse.replace(new RegExp(" une demi-heure ", 'ig'),"3000 ")//protection 
var reponse=reponse.replace(new RegExp(' 2 ', 'ig')," 02 ")
var reponse=reponse.replace(new RegExp(' 3 ', 'ig')," 03 ")
var reponse=reponse.replace(new RegExp(' 4 ', 'ig')," 04 ")
var reponse=reponse.replace(new RegExp(' 5 ', 'ig')," 05 ")
var reponse=reponse.replace(new RegExp(' 6 ', 'ig')," 06 ")
var reponse=reponse.replace(new RegExp(' 7 ', 'ig')," 07 ")
var reponse=reponse.replace(new RegExp(' 8 ', 'ig')," 08 ")
var reponse=reponse.replace(new RegExp(' 9 ', 'ig')," 09 ")
var reponse1=reponse

//console.log('la reponse 1: '+reponse)
//on enleve les mots on garde les chiffres
var reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
//console.log('la reponse : '+reponse)
 
 if(reponse==""){

            try{
            var files = fs.readdirSync(path.resolve('%CD%', './plugins/minuteurmathilde/memoire').replace('\\%CD%', ''),"utf8")
            var file=files
            var files = JSON.stringify(files)
            console.log(files)

                if(file.length==0){
                    ScribeSpeak('pas de minuteur')
                }  

                    for (count=0;count<file.length;count++){
                        
                        var  file1=file[count];console.log("le fileeeeeeeeee"+file1)
                         var files=file1.replace(new RegExp('.json', 'ig'),"")

                         var date = new Date();
                         var heures=date.getHours()*60*60000
                        var  minutes=date.getMinutes()*60000
                         var secondes=date.getSeconds()*1000
                         var timemaintenant=heures+minutes+secondes
                                                
                         var lecture = fs.readFileSync(path.resolve('%CD%', './plugins/minuteurmathilde/memoire/'+file1).replace('\\%CD%', ''),'utf-8')
                         //console.log("eeeeeeeeeeeeee"+JSON.stringify(lecture)[0])
                         //console.log("ffffffffffffff"+JSON.parse(lecture)[3])
                         //console.log("le temps de fin"+lecture+" le temps de maintenant "+timemaintenant)
                         var tempsfin=(JSON.parse(lecture)[3]-timemaintenant)/60000    ;console.log("il reste"+tempsfin)       
                         //tempsfin=""
                         //console.log(Math.floor(((tempsfin-Math.floor(tempsfin))*60))+"secondes")

            ScribeSpeak("minuteur "+files+" il reste "+Math.floor(tempsfin)+ "minutes" + Math.floor(((tempsfin-Math.floor(tempsfin))*60)) + "secondes")
                                     // SCRIBE = SARAH.context.scribe;
                                      //SCRIBE.texteplugin( "minuteur "+files+" il reste "+Math.floor(tempsfin)+ "minutes" + Math.floor(((tempsfin-Math.floor(tempsfin))*60)) + "secondes");
                                      //SCRIBE.icone("icones/minuteur.png");
                                      //SCRIBE.activePlugin('MINUTEUR');
                    }//fin for
            }//fin try
            catch(err){ScribeSpeak("je n'ai pas compris");callback();return false};//
callback(); return false
}//fin if reponse

//console.log("length"+reponse.length)

if(reponse.length==1){
	
    if(reponse1.search("minute")>-1){var tempsreveil=reponse*60000// que minute//8minute
    var tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){var tempsreveil=reponse*60000// que minute//8minute
    var tempsname=reponse+" minute "
    }
}

if(reponse.length==1){
	
    if(reponse1.search("seconde")>-1){var tempsreveil=reponse*1000// que minute//8minute
    var tempsname=reponse+" seconde "
    }
if(reponse1.search("secondes")>-1){var tempsreveil=reponse*1000// que minute//8minute
    var tempsname=reponse+" secondes "
    }
}

if(reponse.length==2){
	if(reponse1.search("minute")>-1){var tempsreveil=reponse*60000//que minute//18minutes
    var tempsname=reponse+" minute "
    }
    if(reponse1.search("minutes")>-1){var tempsreveil=reponse*60000//que minute//18minutes
    var tempsname=reponse+" minutes "
    }
}

if(reponse.length==2){
	if(reponse1.search("seconde")>-1){var tempsreveil=reponse*1000//que minute//18minutes
    var tempsname=reponse+" seconde "
    }
    if(reponse1.search("secondes")>-1){var tempsreveil=reponse*1000//que minute//18minutes
    var tempsname=reponse+" secondes "
    }
}

 if(reponse.length==3){
 	var temp=reponse[0]*60000;
    var tempsreveil=temp;//console.log(temp)
    var temp=reponse-reponse[0]*100;//console.log(temp)
    var temp=temp*1000;console.log(temp)
    var tempsreveil=tempsreveil+temp
    var tempsname=reponse[0]+" minute "+reponse[1]+""+reponse[2]+" secondes"
 } // 1 minute + 2 secondes//1h18
 
 if(reponse.length==4){
 	var temp=reponse[0]*600000+reponse[1]*60000
    var tempsreveil=temp;//console.log(temp)
    
    var temp=reponse[2]*10000+reponse[3]*1000;//console.log(temp)
    //temp1=reponse[1]*100;//console.log('rr'+temp1)
    //temp=temp-temp1;//console.log('r'+temp)
    //temp=temp*60000;//console.log(temp)
    var tempsname=reponse[0]+""+reponse[1]+" minutes "+reponse[2]+""+reponse[3]+" secondes"
    var tempsreveil=tempsreveil+temp
  }// 2 heure + 2 minutes  

//console.log(tempsreveil) ; console.log(tempsname)

var date = new Date();
var heures=date.getHours()*60*60000
var minutes=date.getMinutes()*60000
var secondes=date.getSeconds()*1000

var timedepart=heures+minutes+secondes
console.log(timedepart)
var timefin=timedepart+tempsreveil

var path = require('path');
var filePath = path.resolve('%CD%', './plugins/minuteurmathilde/memoire').replace('\\%CD%', '');

 var objet=[]
 objet.push(tempsname);
 objet.push(tempsreveil)
 objet.push(timedepart)
 objet.push(timefin)  
 //console.log('rrrrrrrrrrrrrrrrrrrrrr'+objet[0])
 var new_jsonStr = JSON.stringify(objet);
 fs.writeFile(filePath+'/'+reponse1+'.json',new_jsonStr ,'utf-8')

// on créer la fonction  pour le mp3
/////////////////////////////////////////

ScribeSpeak("je lance le minuteur "+reponse1)
//SCRIBE = SARAH.context.scribe;
//SCRIBE.texteplugin( "minuteur "+reponse1);
//SCRIBE.icone("icones/minuteur.png");
//SCRIBE.activePlugin('MINUTEUR');
var holo=path.resolve('%CD%','./plugins/holo').replace('\\%CD%', '')
//var exec = require('child_process').exec;
//SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --repeat --no-audio --no-osd --no-video-title-show '+holo+'/holominuteur.mp4"')

// on fait appel à la fonction minuteur

tim=function(reponse1,tempsreveil,myIPretourMinuteur){
setTimeout(function() {

PiecesInterphone=myIPretourMinuteur

  ScribeSpeak("fin du minuteur "+reponse1 , function() {


                var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
                var path = require('path');
                var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
                var process=nircmd + ' filldelete "' + dir + '\\minuteurmathilde\\memoire\\'+reponse1+'.json"'﻿
                console.log(process)
                var exec = require('child_process').exec;                       
                exec(process)

        //callback({'tts':"le minuteur pour"+ tempsname})
    //SARAH.play('./plugins/minuteurmathilde/sample/trompette1.mp3');
  var sonnerie=[]
  //sonnerie.push("")
path = require('path');
  sonnerie.push(path.resolve('%CD%', './plugins/minuteurmathilde/sample/trompette1.mp3').replace('\\%CD%', ''))
  sonnerie.push(path.resolve('%CD%', './plugins/minuteurmathilde/sample/trompette1.mp3').replace('\\%CD%', ''))
  console.log(sonnerie)
   
  //console.log(sonnerie)
  console.log(myIPretour)
   SCRIBE.musique(sonnerie,myIPretourMinuteur);PiecesInterphone=""
    callback();return false
    } )
 
}, tempsreveil);
callback()
 
}
myIPretourMinuteur=myIPretour
tim(reponse1,tempsreveil,myIPretourMinuteur)
};



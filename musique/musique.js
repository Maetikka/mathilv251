var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('musique');

//
if(data.ArretMusiqueLieux=="stop"){
 SCRIBE.musique("   ",myIPretour) 
 callback();return false
}
if(data.ArretMusiqueLieux!==undefined){
 SCRIBE.musique("   ",data.ArretMusiqueLieux) 
 callback();return false
}
function textemusique() {



///////////

ScribeAskMe("quelle type de musique", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
         // console.log(data.myIPretour,' IP Appelant !!!!!!!!!!!!!!!!');

//PiecesInterphone=data.PiecesInterphone
//console.log('ip retour'+PiecesInterphone+phrase)

//ScribeSpeak(phrase)
//PiecesInterphone="" 
//callback();return false
departmusique(phrase)
      }
    
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    }, {'timeout':10000, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris", 'essais': 2}
  );





///////////

}
textemusique()






function departmusique(phrase){


//configcortana = config.modules.cortana; debug = configcortana.debug
arret=""
configmusique = config.modules.musique; chemin=configmusique.chemin
  if (!configmusique.chemin){
    console.log("merci config missing");
    ScribeSpeak("J'ai besoin du chemin du dossier musique dans le dossier prop");
    callback();return false;
  }
console.log(chemin)
musique1="stop"
var musique=JSON.stringify(SARAH.context.scribe.lastReco).toLowerCase();var musique=JSON.parse(musique)

countmusique=0; 

var listeMusique=[]




try{  if( (liste[a]!=="") || (liste[a]!==undefined) ) {
        SARAH.pause(liste[a]);
        musique1="stop";
        console.log("on arrete toute musique")
      }
}
catch(err){console.log('pas de memorisation en 1') ;liste=[]}





function recur(pathe){

var recursiveReadSync= require(path.resolve('%CD%','./plugins/modules/recursive').replace('\\%CD%', ''))  , files ; console.log(pathe)
    try {   files = recursiveReadSync(pathe)} 
    catch(err){ }
    
    liste = []
    len = files.length;
          
          for(var i = 0  ;i < len; i++){ 
     
             if ((files[i].search(new RegExp("\\b" + ".mp3" + "\\b","gi")) >-1)||
                 (files[i].search(new RegExp("\\b" + ".wav" + "\\b","gi")) >-1)
             )//fin if
             { liste.push(files[i]) }

          }//fin for

    max=liste.length;min=0
    a= Math.floor(Math.random() * (max - min +1)) + min

    console.log('on est a ::::'+countmusique)

SCRIBE = SARAH.context.scribe;
try
{
var tempomusique=liste[a];
//var tempomusique=tempomusique.replace(new RegExp('\\','gi'),'') ;
var tempochemin=chemin
var tempochemin=tempochemin.replace(new RegExp('/','gi'),'\\');console.log(tempochemin,'rrrrrrrrrrrrrr')
var tempomusique=tempomusique.replace(tempochemin,"");
//var tempomusique=tempomusique.replace(tempomusique,'')
//reco=data.reco.replace(new RegExp(nommathilde,"gi"),"") ; 
SCRIBE.texteplugin(tempomusique);console.log(liste[a],'!!!!!!!11111111!!!!!!!!!',tempomusique)
listeMusique.push(liste[a])
//listeMusique.push(tempomusique)
SCRIBE.icone("icones/musique.png",myIPretour);
//SCRIBE.activePlugin('MUSIQUE LOCALE');
}
catch(err){}
 // SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '-f --loop --no-audio "holobleu.mp4"')                 
console.log(liste[a])
//callback()
//return false


 // exec("taskkill /f /im VLC.exe",function(){
 var maxholo=7;var minholo=1
var randomholo= Math.floor(Math.random() * (maxholo - minholo +1)) + minholo;
console.log("*"+randomholo)   
//holo=path.resolve('%CD%','./plugins/holo').replace('\\%CD%', '')
//var exec = require('child_process').exec;
//SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --repeat --no-audio --no-osd --no-video-title-show '+holo+'/holo'+randomholo+'.mp4"')
//})

       // SARAH.play(liste[a],function(){
  //exec("taskkill /f /im VLC.exe")
          console.log(musique);countmusique=countmusique+1;console.log('on est à plus ::::'+countmusique)
                
                if(countmusique==10){console.log('fin des 10 chansons');

                if(data.MusiqueLieux!==undefined){myIPretour=data.MusiqueLieux}

                SCRIBE.musique(listeMusique,myIPretour);

                console.log("envoyééééé "+listeMusique+myIPretour)
                
                countmusique=0; musique1="";liste=""
                console.log(listeMusique)
                //SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --repeat --no-osd --no-video-title-show --no-audio '+holo+'/holoattente.mp4"')
               callback();return false}
                
                if  (musique1== "stop"){console.log("stop par musique1 stop") ;countmusique=0; musique1="";liste="";//SCRIBE.musique("",myIPretour)
               // SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --loop --no-audio '+holo+'/holoattente.mp4"')
                callback();return false
              }
                
                else{
                  //try{
                  //var fichiermusique=fs.readFileSync(liste[a]); fs.writeFileSync('./plugins/scribe/static/'+countmusique+".mp3",fichiermusique)
                  //}
                  //catch(err){countmusique=countmusique-1}
                  recur(pathe) ; return false
                }
       // })


    return false 
  
}//fin fnt
 



























setTimeout(function(){
      
if (musique.search(new RegExp("\\b" + "hard rock" + "\\b","gi")) >-1){
  console.log('hard-rock') 
  pathe=chemin+"hard-rock" ;  type="hard-rock" ; musique1=""
		recur(pathe)
  callback(); return false
}

if ((musique.search(new RegExp("\\b" + "pop" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "pop-rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "pop rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "rock" + "\\b","gi")) >-1)||
    (musique.search(new RegExp("\\b" + "rock'n roll" + "\\b","gi")) >-1)
   ){
        console.log('pop-rock')
        pathe=chemin+"pop-rock" ; type="pop-rock" ; musique1=""
			recur(pathe)
		callback(); return false
}

if (musique.search(new RegExp("\\b" + "romantique" + "\\b","gi")) >-1){
  console.log('blues')
  pathe=chemin+"romantique" ; type="blues" ; musique1=""
	recur(pathe)
  callback(); return false
}

if (musique.search(new RegExp("\\b" + "blues" + "\\b","gi")) >-1){
  console.log('blues')
  pathe=chemin+"blues" ; type="blues" ; musique1=""
	recur(pathe)
callback(); return false
}

if (musique.search(new RegExp("\\b" + "disco" + "\\b","gi")) >-1){
  console.log('disco')
  pathe=chemin+"disco" ; type="disco" ; musique1=""
	recur(pathe)
  callback(); return false  
}

if (musique.search(new RegExp("\\b" + "jazz" + "\\b","gi")) >-1){
  console.log('jazz')
  pathe=chemin+"jazz" ; type="jazz" ; musique1=""
	recur(pathe)
 callback(); return false
}

if (musique.search(new RegExp("\\b" + "attente" + "\\b","gi")) >-1){
  console.log('attente')
  pathe=chemin+"attente" ; type="attente" ; musique1=""
	recur(pathe)
  callback() ; return false
}

else {
	console.log('pas de correspondance est ce un chanteur ?')




function recur1(){

    fs1 = require('fs')
    p1 = require('path')
    path1=chemin

        function recursiveReaddirSync2(path1,musique) {

            var list1 = [] , files1 = fs1.readdirSync(path1) , stats1
	           
	            files1.forEach(function (file1) {//console.log(file1+"******************************************")
	            	
	            	stats1 = fs1.lstatSync(p1.join(path1, file1));
	                                         
	                    if(stats1.isDirectory()) {

	                            file1=file1.toLowerCase()                                       
	                            list1 = list1.concat(recursiveReaddirSync2(p1.join(path1, file1),musique));
	                                           
	                            if (musique.search(file1)>-1){
	                                    var path3=path1+"\\"+file1;arret=file1
	                                    console.log('trouvé : '+path3);musique1="";recur(path3);callback();return false
	                            }
	                            else if(arret==""){path3="";arret="off"} 
	                    }                              
	            });
         }

      recursiveReaddirSync2(path1,musique) 
              
if(arret=='off'){
//holo=path.resolve('%CD%','./plugins/holo').replace('\\%CD%', '')

 // SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '-f --loop --no-audio "holobleu.mp4"')                 
var exec = require('child_process').exec;
  //SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --no-video-title-show --repeat --no-osd --no-audio '+holo+'/holoattente.mp4"')}
  callback();return false   
      }//fin fnt recur1
callback();return false
}
recur1()

callback(); return false
 
}//fin else








},100)//fin set timout







}






callback();return false


}
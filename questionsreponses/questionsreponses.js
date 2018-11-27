var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;


exports.action = function(data, callback, config,SARAH){


 maConfig = config.modules.scribe
 SCRIBE = SARAH.context.scribe ; ScribeAskMe = SARAH.ScribeAskMe;
 ScribeSpeak = SARAH.ScribeSpeak ; SCRIBE.activePlugin('question/réponse');
 path = require('path');
 request = require('request') ; cheerio = require('cheerio') ; exec = require('child_process').exec
 fs = require('fs')
//callback();return false


      //var phrase=JSON.stringify(SARAH.context.scribe.lastReco);
      //var phrase=phrase.replace(new RegExp("-","gi")," ") ; 
      //var phrase=phrase.replace(new RegExp('"',"gi")," ") ; 
      //var phrase=phrase.trim()
      //console.log("recu de scribe "+phrase+"*")
   
 //var testphrase = require(path.resolve('%CD%', './plugins/modules/testphrase').replace('\\%CD%', '')) ;

//var resultat= testphrase(phrase+" "+data.réponse)

//for(var i=0;i<resultat.length;i++){
//console.log("resultats : "+resultat[i])
//}
//console.log(data.réponse+"**")
  


ScribeSpeak(data.réponse)



















callback(); return false
}
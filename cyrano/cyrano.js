var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;




exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe;  ScribeAskMe = SARAH.ScribeAskMe;ScribeSpeak = SARAH.ScribeSpeak;SCRIBE.activePlugin('SYNONYMES');SCRIBE.icone("icones/SYNONYMES.png",myIPretour);

var data1='{"cyrano":[]}'; fs = require('fs');

var nomchercher=JSON.stringify(SARAH.context.scribe.lastReco) ;var nomchercher=JSON.parse(nomchercher)
 //console.log('recus de cortana : *'+nomchercher+'*')

try{	
var rgxp = /synonyme de (.+)/i; var nomchercher = nomchercher.match(rgxp)[1].trim();
}
catch(err){
var rgxp = /synonymes de (.+)/i; var nomchercher = nomchercher.match(rgxp)[1].trim();
}

//console.log('nom envoyé à module : *'+nomchercher+'*')
      
path=require('path')
  
var synonyme = require(path.resolve('%CD%','./plugins/modules/testsynonyme/testsynonyme.js').replace('\\%CD%', ''));

  synonyme(nomchercher,function(callback1){
  	console.log("réponse : "+callback1)
  ScribeSpeak(callback1) ;
 	//SCRIBE = SARAH.context.scribe;
	//SCRIBE.texteplugin(" "+callback1+" ");
	//SCRIBE.activePlugin('SYNONYMES');
  callback(); return false
  })
  
  callback() ; return false

}
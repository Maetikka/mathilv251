var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;


exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('multimedia');


var request = require('request');
var cheerio = require('cheerio');
var exec = require('child_process').exec;

var recherche=JSON.stringify(SARAH.context.scribe.lastReco);var recherche=JSON.parse(recherche)

//console.log("recus dans multimedia : "+recherche)

 var recherche=recherche.replace(new RegExp("\\b" + "de" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "des" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "la" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "les" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "le" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "l'" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "au" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "à" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "du" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "aux" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "un" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "une" + "\\b","gi"),"");
 var recherche=recherche.replace(new RegExp("\\b" + "d'" + "\\b","gi"),"");
//console.log('la phrase traitée : '+recherche);




if (recherche.search("vidéos") >-1){
    var rgxp = /vidéos (.+)/i; var recherche = recherche.match(rgxp);
    var recherche=recherche[1]
 
    var recherche=recherche.replace(new RegExp(" ","gi"),"+")
        
        var proc = 'start firefox -new-window https://www.youtube.com/results?search_query='+ recherche;
        exec(proc)     
  
  var nomduplugin="multimedia"//ou autre nom....
  var valeurduspeak=''//phrase à dire
  SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});     
  
  callback()
  return false
}

if (recherche.search("vidéo") >-1){
    var rgxp = /vidéo (.+)/i; var recherche = recherche.match(rgxp);
    var recherche=recherche[1]
 
    var recherche=recherche.replace(new RegExp(" ","gi"),"+")
   // SARAH.chromeless('http://www.google.com', 80);
          var proc = 'start firefox -new-window https://www.youtube.com/results?search_query='+ recherche;
          //exec(proc)
  var nomduplugin="multimedia"//ou autre nom....
  var valeurduspeak=''//phrase à dire
  SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak}); 

  callback()
  return false
}

if (recherche.search("images") >-1){ 
    var rgxp = /images (.+)/i; var recherche = recherche.match(rgxp);
    var recherche=recherche[1]

    var recherche=recherche.replace(new RegExp(" ","gi"),"+")
          
        var proc = '%CD%/plugins/cortana/bin/searchimages.vbs ' + recherche 
        exec(proc);
  
  var nomduplugin="multimedia"//ou autre nom....
  var valeurduspeak=''//phrase à dire
  SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak}); 

  callback()
  return false
}

if (recherche.search("image") >-1){ 
    var rgxp = /image (.+)/i; var recherche = recherche.match(rgxp);
   var  recherche=recherche[1]
 
    var recherche=recherche.replace(new RegExp(" ","gi"),"+")
  
      var proc = '%CD%/plugins/cortana/bin/searchimages.vbs ' + recherche
      exec(proc)
  
  var nomduplugin="multimedia"//ou autre nom....
  var valeurduspeak=''//phrase à dire
  SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak}); 
  
  callback()
  return false
}

//console.log("riennnnnnnnnnnnnnnnnnnnnnnnnnnnn erreur")
          callback()
return false


}
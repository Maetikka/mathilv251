var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config, SARAH){

var nomduplugin="merci"//ou autre nom....
var valeurduspeak=''//phrase à dire si rien pour l'instant alors ''
SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
  

callback() ; return false
}
///ouvertur url
var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; SCRIBE.activePlugin('url');

var url=JSON.stringify(SARAH.context.scribe.lastReco) ; var urlchercher=JSON.parse(url)
var rgxp = /site (.+)/i; var urlchercher = urlchercher.match(rgxp);
var urlchercher=urlchercher[1]
 

 var urlchercher=urlchercher.replace(new RegExp("\\b" + "de" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "des" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "la" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "les" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "le" + "\\b","gi"),"");
var urlchercher=urlchercher.replace(new RegExp("\\b" + "l'" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "au" + "\\b","gi"),"");
//var urlchercher=urlchercher.replace(new RegExp("\\b" + "à" + "\\b","gi"),"");
var  urlchercher=urlchercher.replace(new RegExp("\\b" + "du" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "aux" + "\\b","gi"),"");
var  urlchercher=urlchercher.replace(new RegExp("\\b" + "un" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "une" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + "d'" + "\\b","gi"),"");


//console.log('url à chercher'+urlchercher);
 request = require('request');cheerio = require('cheerio');

      request({'uri':'https://www.google.fr/search?q='+urlchercher+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei', 'headers':{'Accept-Charset': 'windows-1252'},'encoding':'binary' }, function (error, response, html) {
             var $ = cheerio.load(html);
             var url = $('.g .s cite').first().text().trim();
             console.log('url brut : '+url) 
             var url=url.replace(new RegExp("\\b" + "- " + "\\b","gi"),""); 
             var url=url.replace(new RegExp(" ","gi"),"");
                  
             chrome(url)
             
             callback(); return false
                
        });//fin request

function chrome(url){
  //console.log('on envoie'+url);
  var exec = require('child_process').exec;
  var proc = 'start firefox -new-window '+url ;
  //var process = '"C:\\Program Files\\Mozilla Firefox\\firefox.exe" '+url
  //console.log(proc)
  var child = exec(proc);

var nomduplugin="mathildeurl"//ou autre nom....
var valeurduspeak=''//phrase à dire
SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});


  callback() ;  return false
}//fin fnct chrome

} 



var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;


exports.cron = function(SARAH){
setTimeout(function(){ 
var request=require('request')

request({ uri : 'http://127.0.0.1:8888/?emulate=abraca nepastouchercroninfomiroir&source=application'})

 }, 30000);

}



///////////////////////////////////////////////////
//////////////////////////////////////////////////////





exports.action = function(data, callback, config,SARAH){
SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
//SCRIBE.activePlugin('info mathilde');
SCRIBE.icone("icones/info.png");SCRIBE.activePlugin('INFORMATIONS MONDIALES');
var moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));moment.locale('fr')
var informationtexte=[]
fs = require('fs') ; request = require('request') ; cheerio = require('../modules/cheerio')

//lecture du news google
 request({ 'uri' : 'http://www.bfmtv.com/breves-et-depeches/', 'headers':{'Accept-Charset': 'windows-1252'} }, function(error, response, html){

       var $ = cheerio.load(html);
  
           var scrapinfo=$('h2.title-large.no-margin.padding-bottom');
//console.log("e"+scrapinfo.length)
// console.log("rrrrrrrrrrrrrr"+scrapinfo.text()) 

         // $('a').each(function(i, element){console.log(element)
             //var a = $(this).text();
             for(var xx=0;xx<10;xx++){
             var a=$('h2.title-large.no-margin.padding-bottom').eq(xx).text().trim()
             
            //console.log(a)
             informationtexte.push(a)         
//            var longueurscrap = objetscrap.information.length;//console.log(longueurscrap)
       //   })//fin fnct each
  
      }
    

console.log(informationtexte)

SCRIBE.INFOMODIALE(moment().calendar()+informationtexte)
var informationtextejson= JSON.stringify(informationtexte)
if(data.infomiroir=="0"){ SARAH.run('speak', { 'nomduplugin' : "infomathilde" , 'valeurduspeak' : informationtextejson})};

})//fin request
callback();return false
}

 

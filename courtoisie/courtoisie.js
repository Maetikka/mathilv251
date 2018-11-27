

exports.cron = function(callback, task, SARAH){

setTimeout(function(){ 
try{

var SCENARIOtext='on diras à '
var request = require('request') ; var cheerio = require('cheerio');

var colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))
var moment=require(path.resolve('%CD%', './plugins/modules/moment').replace('\\%CD%', ''));moment.locale('fr');

 var jour = path.resolve('%CD%', './plugins/courtoisie/'+moment().format("dddd")+'.json').replace('\\%CD%', '');//lis le nom des plugins
    var contents = JSON.parse(fs.readFileSync(jour,'utf8'))//.toString() ;
   
//speak journalier
for( var i=0 ; i< contents.length; i++){

       var timenow=moment().valueOf() ;// console.log("now  "+timenow)

       var timefutur=moment(contents[i],"HHmm").valueOf() ;// console.log("futur"+timefutur)

       var difference=timefutur-timenow ; //console.log("dif"+difference)
   
       var contentsspeak=contents[i+1]

       var time=contents[i]
   
            function timer(contentsspeak,difference,time){ 
              
              setTimeout(function(){

                var nomduplugin="courtoisie"//ou autre nom....
                var valeurduspeak=contentsspeak//phrase à dire
                SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                console.log(contentsspeak); 
              
              }, difference);

            }
    
      if(difference>0){console.log('on diras à : '+time+" : "+contentsspeak.yellow);SCENARIOtext=SCENARIOtext+" : "+time+" : "+contentsspeak; timer(contentsspeak,difference)}
    
    //}//fin if

i=i+1

}//fin for


//speak month
var month=moment().format('MMMM');//console.log(month)
var nbday=moment().format("DD");//console.log(nbday)

var cheminfichiermonth = path.resolve('%CD%', './plugins/courtoisie/'+month+'.json').replace('\\%CD%', '');//lis le nom des plugins
var fichiermonth = JSON.parse(fs.readFileSync(cheminfichiermonth,'utf8'))//.toString() ;
//console.log(fichiermonth)

var contentsspeak=""
for( var j=0 ; j< fichiermonth.length; j++){

       var timenow=moment().valueOf() ;// console.log("now  "+timenow)

       var timefutur=moment(fichiermonth[j+1],"HHmm").valueOf() ;// console.log("futur"+timefutur)

       var difference=timefutur-timenow ;// console.log("dif"+difference)
 
       var contentsspeak=fichiermonth[j+2]

       var time=fichiermonth[j+1]
       var contentsspeak=fichiermonth[j+2];//console.log("+++++++++++++"+contentsspeak)
 
            function timer2(contentsspeak,difference,time){ 
              
              setTimeout(function(){

                var nomduplugin="courtoisie"//ou autre nom....
                var valeurduspeak=contentsspeak//phrase à dire
                SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                console.log(contentsspeak); 
              
              }, difference);

            }
    
      if((difference>0)&&(nbday==fichiermonth[j])){console.log('on diras à dans la journée : '+time+" : "+contentsspeak.yellow);SCENARIOtext=SCENARIOtext+" : "+time+" : "+contentsspeak; timer2(contentsspeak,difference)}
    
    //}//fin if

j=j+2

}//fin for

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
//SCRIBE.activePlugin('info mathil
SCRIBE.SCENARIO(SCENARIOtext)
}catch(err){console.log(err)}
}, 60000);
}
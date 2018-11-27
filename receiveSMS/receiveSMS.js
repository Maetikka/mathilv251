exports.init = function (SARAH){
//conteurstream=0
  var configreceivesmsinit=SARAH.ConfigManager.getConfig();
  var configreceivesmsinit= configreceivesmsinit.modules.receiveSMS.appli;
  //configreceivesmsinit=configreceivesmsinit.appli
console.log('*********'+configreceivesmsinit)
SARAH.run('receiveSMS', { 'itemsurveillancearret' : 'off' });
}


exports.action = function(data, callback, config, SARAH){
//conteurstream=conteurstream+1

//try{ if(data.itemsurveillancearret=="on"){delete(pusherbullet);SARAH.speak("j'arrete de surveiller les messages"); stream.close();callback();return false}}
//catch(err){}

try{
  if(data.itemsurveillancearret=="off"){
   var configreceivesms=config.modules.receiveSMS; appli = configreceivesms.appli;appli = appli.split(';');itemsurveillance = appli
  }

}
catch(err){}

if(!data.itemsurveillancearret){}
  else{itemsurveillancearret=data.itemsurveillancearret}

if(!data.itemsurveillance){
}
else{
  if(data.itemsurveillance=="Google "){data.itemsurveillance='Google+'}

  if(itemsurveillance.indexOf(data.itemsurveillance)>-1){itemsurveillance.splice(itemsurveillance.indexOf(data.itemsurveillance),1)}
    else{itemsurveillance.push(data.itemsurveillance)}

}

try{

if (pusherbullet){
  console.log("déja en surveillance je relance");SARAH.speak("déja en surveillance je relance");stream.close()}
}//fin if

catch(err){}

////////////////////////////////////////////////
////////////////////////////////////////////////


var configreceivesms=config.modules.receiveSMS
var key=configreceivesms.key
var codesms = configreceivesms.codesms
var timersmsdebut=configreceivesms.timersmsdebut
var timersmsfin=configreceivesms.timersmsfin

appli = configreceivesms.appli

appli = appli.split(';')
itemsurveillance = appli
var configcortana = config.modules.cortana
var nommathilde = configcortana.nommathilde

console.log(appli+" applis surveillés")

var PushBullet = require('./lib/pushbullet')
var request=require('request')
pusherbullet = new PushBullet(key);
 stream = pusherbullet.stream();

////////////////////////////////////////////////
////////////////////////////////////////////////

  stream.on('connect', function() {
    console.log('Connect to pushbullet stream');
  });
  
  stream.on('close', function() {
     console.log('Pushbullet stream closed');
     console.log('Try to reconnect...');
     
  });  
  
  stream.on('error', function(error) {
    console.log('Pushbullet stream error:', error);//stream.connect();
  });
  
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

  stream.on('push', function(push,temp) {

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('receiveSMS');    
    console.log('Pushbullet stream push:', push);
    
    try{
  
      if ((push.type == "sms_changed") && (push.notifications[0].body != undefined)){
        
          var contenureceivesms=push.notifications[0].body

              if((contenureceivesms.search(nommathilde+" "+codesms)==0)||(contenureceivesms.search(nommathilde+ codesms)==0)){
            
                    contenureceivesms=contenureceivesms.replace(nommathilde+" "+codesms,"")
                    contenureceivesms=contenureceivesms.split(";")
                  
                    var temporisation=-5000
                    var count=0
                        
                        for(var a=1;a<contenureceivesms.length;a++){
                    
                               console.log(contenureceivesms[a].trim())
                    
                                temporisation=temporisation+5000
                    
                                var contenureceivesmstrim=contenureceivesms[a].trim()
                    

                                    setTimeout(function(){
                                            
                                            count=count+1
                                            actionsms(nommathilde,contenureceivesms,count)
                      
                                    }, temporisation);
                  

                        }//fin for a


              var actionsms=function(nommathilde,contenureceivesms,count){
                SARAH.run('scribe', { 'reco' : contenureceivesms[count].trim() , 'lastReco' : contenureceivesms[count].trim()});
                  
              }//fin fnct actionsms
               

            callback();return false      
          }//fin if conenu nom+code
          

          else{console.log(itemsurveillancearret+timersmsdebut+timersmsfin+"********************")
                if((itemsurveillancearret=="off")&&(new Date().getHours()>=timersmsdebut)&&(new Date().getHours()<timersmsfin)){
                  if(push.notifications[0].title=="xx"){push.notifications[0].title="voiture xxxxx "}
                  ScribeSpeak("Tu as reçu un message sms de : "+push.notifications[0].title+" : disant : "+push.notifications[0].body);//stream.close();
                  //SCRIBE = SARAH.context.scribe;
                  //SCRIBE.texteplugin("receivesms"+"Tu as reçu un message sms de : "+push.notifications[0].title+" : disant : "+push.notifications[0].body);
                  SCRIBE.icone("icones/receivesms.png");
                  SCRIBE.activePlugin('RECEIVE NOTIFICATION');


                  callback();return false
                }//fin if
          }//fin else
  }//fin if sms
     
     
/////////////////////////////////
////////////////////////////////

for(var c=0;c<itemsurveillance.length;c++){

  if ((push.application_name == itemsurveillance[c])&&(itemsurveillancearret=="off")&&(new Date().getHours()>timersmsdebut)&&(new Date().getHours()<timersmsfin)){
        
                    var textepush=push.body;textepush.split(":");
                    console.log(textepush,'********************************')
        console.log("Tu as reçu un "+itemsurveillance[c]+" de : "+push.title+" : disant : "+textepush);
        ScribeSpeak("Tu as reçu un "+itemsurveillance[c]+" de : "+push.title+" : disant : "+textepush)
                  SCRIBE = SARAH.context.scribe;
                  //SCRIBE.texteplugin("receivesms"+"Tu as reçu un "+itemsurveillance[c]+" de : "+push.title+" : disant : "+textepush);
                  SCRIBE.icone("icones/receivesms.png");
                  SCRIBE.activePlugin('RECEIVE NOTIFICATION');
                  callback();return false
  }//fin if

}//fin for

}//fin try
catch(err){}
});

  
  stream.connect();
  //stream.close()
  callback()
  return false
}

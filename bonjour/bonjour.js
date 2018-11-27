exports.action = function(data, callback, config, SARAH){

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe;  ScribeSpeak = SARAH.ScribeSpeak;

if(data.reponsebonjour!==undefined){

  ScribeSpeak(data.reponsebonjour)
  callback();return false
}

if(data.bonjour=="0"){
  var phrasebonjour=JSON.stringify(SARAH.context.scribe.lastReco);//console.log(phrasebonjour)
  var phrasebonjour=JSON.parse(phrasebonjour).toLowerCase();//console.log(phrasebonjour)
  
      try{
      var rgxp = /dis bonjour à (.+)/i  
      var phrasebonjourtext= phrasebonjour.match(rgxp);//console.log(phrasebonjourtext)
      ScribeSpeak("bonjour "+phrasebonjourtext[1]+" : "+data.bonjourplus)
      callback();return false
     }
     catch(err){
      try{
          var rgxp = /dit bonjour (.+)/i 
          var phrasebonjourtext= phrasebonjour.match(rgxp)
          ScribeSpeak("bonjour "+phrasebonjourtext[1]+" :"+data.bonjourplus)
          callback();return false
      }catch(err){ScribeSpeak('bonjour');callback();return false}
     }
}

if(data.bonjour=="1"){

ScribeSpeak("Bonjour à toi")
callback();return false
}

callback();return false

}
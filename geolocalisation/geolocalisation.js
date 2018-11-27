exports.action = function(data, callback, config,SARAH){//données venant de Sarah

var request = require('request');//on appel un librairie qui est dans Sarah pour nous aider à lire les url
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe;  ScribeSpeak = SARAH.ScribeSpeak;
//var geo=data.geolocalisation
//var geo1=geo
//console.log(geo+"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
try{clearInterval(tempooooo)}
catch(err){}

  tempooooo = setInterval(function () {console.log(data.geolocalisation)
              //  console.log(speechSynthesis.speaking+"888888888888888888888");
                if (data.geolocalisation!==undefined) {clearInterval(tempooooo);callback();return false}
                else {console.log("rien");clearInterval(tempooooo);ScribeSpeak('introuvable') ;callback();return false//speechSynthesis.resume();//document.getElementById("myImgvisage").src ="icones/Images/0.png"
              }
            }, 5000);

if(data.RecherchePersonne!==undefined){



SCRIBE.geolocalisation(data.RecherchePersonne,myIPretour)
callback();return false
}

console.log(data.geolocalisation+"ddddddddd")

var geolocalisation=data.geolocalisation.split(':')
//data.geolocalisation=undefined

console.log(geolocalisation[7]+geolocalisation[8])

ScribeSpeak(geolocalisation[7]+geolocalisation[8])


callback();return false
}
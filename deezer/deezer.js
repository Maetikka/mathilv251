exports.action = function (data, callback, config, SARAH) {

   console.log(data.deezertag)
SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
//SCRIBE.activePlugin('calcul');
SCRIBE.icone("icones/deezer.gif",myIPretour)
if((data.deezertag==0)&&(data.deezerPhrase!==undefined)){

var PhraseDeezer=SARAH.context.scribe.lastReco


var rgxpPhraseDeezer = /lance Deezer avec (.+)/i;


//{"data":[{"id":27,"name":"Daft Punk","li


var Artiste = PhraseDeezer.match(rgxpPhraseDeezer);


var ArtisteFinal = Artiste[1] ;


    var urldeezer='https://api.deezer.com/search/?q='+ArtisteFinal
    request({ url : urldeezer }, function (err, response, body){
 var objet = JSON.parse(body);
var listedeezer=[]


for(var r=0 ; r<objet.data.length ; r++){
  //console.log(objet.data[r]['album']['id']+"id Artiste   "+objet.data[r]['album']['title']+"  title")
if(listedeezer.indexOf(objet.data[r]['album']['id'])<0){
  listedeezer.push(objet.data[r]['album']['id'])
  //listedeezer.push(objet.data[r]['album']['title'])
  console.log(objet.data[r]['album']['title'])
}
}
console.log(listedeezer)
var maxdeezer=listedeezer.length;var mindezzer=0
    var rnddeezer= Math.floor(Math.random() * (maxdeezer - mindezzer) + mindezzer)
var numeroalbumdeezer=listedeezer[rnddeezer]

//console.log(objet.data.length+"9999")
        console.log(numeroalbumdeezer+"dd"+rnddeezer)
var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id='+numeroalbumdeezer
SCRIBE.Deezer(urldeezer,myIPretour);

        callback()
        return false

    //    deezerPhrase
    })
}
//SCRIBE.radio(url1,myIPretour)
if((data.deezertag==0)&&(data.deezerPhrase==undefined)){
  var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=1'
SCRIBE.Deezer(urldeezer,myIPretour);
  callback()
        return false
}
var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id='+data.deezertag

SCRIBE.Deezer(urldeezer,myIPretour);

callback()
return false
}
exports.action = function(data, callback, config,SARAH){//données venant de Sarah

maConfig = config.modules.askmeTest_scribe;
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe;  ScribeSpeak = SARAH.ScribeSpeak;





function texte() {



///////////

ScribeAskMe("quelle est ton message", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
     			console.log(data.myIPretour,' IP Appelant !!!!!!!!!!!!!!!!');

PiecesInterphone=data.PiecesInterphone
console.log('ip retour'+PiecesInterphone+phrase)

ScribeSpeak(phrase)
PiecesInterphone="" 
callback();return false

      }
    
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    }, {'timeout':10000, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris", 'essais': 2}
  );





///////////

}
texte()
}
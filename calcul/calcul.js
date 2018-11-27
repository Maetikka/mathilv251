var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/asin

exports.action = function(data, callback, config,SARAH){


SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
//SCRIBE.activePlugin('calcul');
SCRIBE.icone("icones/calculatrice.png",myIPretour);
SCRIBE.activePlugin('CALCUL');

var PhraseNombre=JSON.stringify(SARAH.context.scribe.lastReco)
console.log("recu dans calcul "+PhraseNombre)

try{
var rgxpPhraseNombre = /combien font (.+)/i;
var PhraseCalcul = PhraseNombre.match(rgxpPhraseNombre);
var PhraseCalculFinal = PhraseCalcul[1] ;
}
catch(err){}

try{
var rgxpPhraseNombre = /peux-tu me calculer (.+)/i;
var PhraseCalcul = PhraseNombre.match(rgxpPhraseNombre);
var PhraseCalculFinal = PhraseCalcul[1] ;
}
catch(err){}

try{
var rgxpPhraseNombre = /calcule-moi (.+)/i;
var PhraseCalcul = PhraseNombre.match(rgxpPhraseNombre);
var PhraseCalculFinal = PhraseCalcul[1] ;
}
catch(err){}

try{

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('au carré',"gi"),"e 2")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('au cube',"gi"),"e 3")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('puissance',"gi"),"e")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('exposant',"gi"),"e")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('racine carrée de',"gi"),"Math.sqrt(")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('zéro',"gi"),"0")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('plus',"gi"),"+")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('moins',"gi"),"-")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp(',',"gi"),".")

var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('"',"gi"),"")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('  ',"gi")," +")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('x',"gi"),"*")
var PhraseCalculFinal=PhraseCalculFinal.replace(new RegExp('par',"gi"),"*")


//Math.sqrt(x) racine carré

console.log("on calcul : " +PhraseCalculFinal)
//console.log(Math.sqrt(16))




//+-*/
if( (PhraseCalculFinal.search("e")==-1)&&(PhraseCalculFinal.search("Math.sqrt")==-1) ){
        
        var calcul=eval(PhraseCalculFinal)
        var factor = Math.pow(1000, 1); var calcul= Math.round(calcul * factor) / factor

        console.log(calcul+" : résultat")

        var calcul=""+calcul+""
        var calcul=calcul.replace("."," virgule")
        ScribeSpeak(calcul)
        //SCRIBE = SARAH.context.scribe;
        //SCRIBE.texteplugin(calcul);
        //SCRIBE.icone("icones/calculatrice.png");
        //SCRIBE.activePlugin('CALCUL');
        callback();return false

}
//racine carré
if(PhraseCalculFinal.search("Math.sqrt")>-1){
        //var PhraseCalculFinal=PhraseCalculFinal.replace("de","")
        var PhraseCalculFinal=PhraseCalculFinal+')'
        var calcul=eval(PhraseCalculFinal)
        var factor = Math.pow(1000, 1); var calcul= Math.round(calcul * factor) / factor

        console.log(calcul+" : résultat")

        var calcul=""+calcul+""
        var calcul=calcul.replace("."," virgule")
        ScribeSpeak(calcul)
        //SCRIBE = SARAH.context.scribe;
        //SCRIBE.texteplugin(calcul);
        //SCRIBE.icone("icones/calculatrice.png");
        //SCRIBE.activePlugin('CALCUL');
        callback();return false

}

// exposant 2 3 ....
else{
        var SplitCalcul=PhraseCalculFinal.split(" ")
        console.log(SplitCalcul)
  
              if(SplitCalcul.length==3){//pas de moins

                  var calcul=Math.pow(SplitCalcul[0], SplitCalcul[2])
                  var factor = Math.pow(1000, 1); var calcul= Math.round(calcul * factor) / factor

                  console.log(calcul+" : résultat")

                  var calcul=""+calcul+""
                  var calcul=calcul.replace("."," virgule")    
                  ScribeSpeak(calcul)
                  //SCRIBE = SARAH.context.scribe;
                  //SCRIBE.texteplugin(calcul);
                  //SCRIBE.icone("icones/calculatrice.png");
                  //SCRIBE.activePlugin('CALCUL');
                  callback();return false

              }
              else{ScribeSpeak('impossible désolez')}
callback();return false
}

}//fin try
catch(err){
    console.log(err+"rien")
    ScribeSpeak("trop complexe")
    SCRIBE = SARAH.context.scribe;
    //SCRIBE.texteplugin("trop complexe");
    //SCRIBE.icone("icones/calculatrice.png");
    //SCRIBE.activePlugin('CALCUL');
    callback();return false
}//fin catch

}
// Definition des variables globales
var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;
var fs = require('fs');
var jsonstorage = __dirname + '\\storage\\storage.json';
var tempstorage = __dirname + '\\storage\\tempstorage.json';



var path = require('path');
var xmlfiles = path.resolve('%CD%', './plugins/questionsreponses/questionsreponses.xml').replace('\\%CD%', '');


// Export Action
exports.action = function(data, callback, config, SARAH){
 nommathilde = configcortana.nommathilde
/////////SARAH.run('Learning', { 'phrasedepart' : phrasedepart , 'phrasesmotscles' : queryrecherche});
 var phrasedepart=data.phrasedepart ; var phrasesmotscles=data.phrasesmotscles
SCRIBE = SARAH.context.scribe ; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak ;
 nommathilde =config.modules.cortana.nommathilde
  var path = require('path'); var xmlfiles = path.resolve('%CD%', './plugins/questionsreponses/questionsreponses.xml').replace('\\%CD%', '');
console.log(SARAH.context.scribe.lastReco+"écccccccccccccccccccccccc"+nommathilde);
if(phrasedepart=="éfffffffffffffffff"){//si cela ne viens paa de wiki on crée une question réponse

// data.dictation returne toute la phrase dite par l'utilisateur
  var voiceAnalysis = SARAH.context.scribe.lastReco;


  console.log(voiceAnalysis,' phrase recue en learning')
  voiceAnalysis=voiceAnalysis.replace(nommathilde,'')

 voiceAnalysis=voiceAnalysis.replace(data.phrasedactivationleraning,'')

 console.log(voiceAnalysis+" phrase après traitement")


callback();return false

//le regex

if( (voiceAnalysis.search('si je te demande ')==-1)||(voiceAnalysis.search('tu dois répondre')==-1) ){ScribeSpeak('erreur dans la phrase'); callback();return false}
  
 
//var resultats=testphrase(jsoncontent[x])
ScribeSpeak("ok")
//console.log(resultats)
callback() ;return false

}//fin if phrase undefined


////////////////////////////////////
///////////////////////////////////


else{//on test si c'est une question et on y réponds
 synonymefinal=[]

  //RECOdeWIKI = RECOdeWIKI.replace(nommathilde,'')
  console.log(" on test ce qui viens de cortana : "+phrasedepart+ " : "+phrasesmotscles)

//if(RECOdeWIKI.search())

var question=0

//on traite la phrase

var testphrase = require(path.resolve('%CD%', './plugins/modules/testphrase').replace('\\%CD%', '')) ;
var resultats=testphrase(phrasedepart)

console.log("le résultat : "+resultats)

//on test les synonymes

var interogatif = ['laquelle','lesquels','Lequel','à laquelle','de laquelle','lesquelles','duquel','desquels','desquelles','auquel']
var interogatif1=['auxquels','auxquelles','qui','que','où','quoi','quel','quelle','quelles','quels',"qu'y"]//interogatif // relatif
var interogatif2=['combien','combien de','comment','pourquoi','quand']
var temporaire = interogatif.concat(interogatif1,interogatif2); //fusion des deux tableaux
var interogatif=temporaire
//var relatif = []
//console.log(c+"fffffffffffffffff")
var jsoncontent =[]
//console.log(interogatif+" !!!!!")


////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////

function intero(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,synonymefinal){//on commence le test
   
    for(var y=0 ; y<resultats.length ; y++){
      
      for(var x=0 ; x<interogatif.length ; x++){
    
          if(resultats[y].search(interogatif[x])==0){//console.log(interogatif[x]+ ' ' + resultats[y]+"rrrrrrrrrrr"+x)
            console.log('interogatif / relatif donc question, on doit vérifier le fichier');
            var question=1
            triage(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,synonymefinal)
            return false
          }//fin if
      
      }//fin for x
      
    }//fin for y

    if(y==resultats.length){//pas une question alors on mémorise

        verify_storage_json(tempstorage);
        var jsoncontent = read_json(tempstorage);
        jsoncontent.push(phrasedepart)
        //console.log(jsoncontent+"sssssssssssssssssssssssssssssssss")
        
        //fs.writeFile(tempstorage,JSON.stringify(jsoncontent));
var on='on'
        console.log("oooooooooooooooooooooooooooooooooooooooooo"+phrasedepart+phrasesmotscles)
       // SARAH.run('wiki', { 'phrase' : query});
       //RECOdeWIKI="ffffffffffffffffffff"
SARAH.run('wiki', { 'phrasedepart' : phrasedepart , 'phrasesmotscles' : phrasesmotscles , 'action' : on});
callback()
 return false
    }//fin if y==
 return false
}//fin fnct intero


////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////

function triage(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,synonymefinal){

var nom=[]
//resultats=resultats.split(',')
console.log(resultats+" : le resultats du tri")
  for(var a=0;a<resultats.length;a++){
    //console.log(resultats[a]+resultats[a+1])
      if(resultats[a+1].search(' nom ')>-1){
        nom.push(resultats[a])
      }
    a++
  }//fin for a
testmemoire(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,nom,synonymefinal)
//console.log(nom+'33333333333333333333333333')
 return false
}//fin fnct triage

////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////

function testmemoire(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,nom,synonymefinal){
 
verify_storage_json(tempstorage);
var jsoncontent = read_json(tempstorage);
//console.log(jsoncontent+' jsoncontent222222222222222222222222222111111111111111111111111111111111')

/////test synonynes
var synonyme = require(path.resolve('%CD%','./plugins/modules/testsynonyme/testsynonyme.js').replace('\\%CD%', ''));
var synonymefinal=[]
console.log(nom,' on as le nom')


sertarein=function(){  
  for (var i = 0  ; i < nom.length ; i++) {
   //   var nomchercher=nomcherchersplit[i]
        synonyme(nom[i],function(callback1){ 
         // if(callback1!==" "){
          //  synonymefinal.push(callback1)
            console.log("réponse : "+nom[i]+" : "+callback1)
          //synonymefinal.push(callback1)
         // synonymefinal=callback1
          // }//fin if
        }) //fin fnct syno  
        console.log('ttttttttttttttttttttttttt')
  }//fin for
//synonymefinal=synonymefinal1.replace(',',";")
}
try{
synonymefinal1=synonymefinal[0].split(',') 
synonymefinal=synonymefinal1
console.log(synonymefinal+" : synonyme : "+synonymefinal.length)
}//fin try
catch(err){console.log('pas de synonymes')}




var jsoncontentdepart=jsoncontent
var jsoncontentreplace=jsoncontent
var removed=[];
for(var i=0;i<jsoncontent.length;i++){//les phrases de tempstorage
//console.log(i+" dd "+jsoncontent.length+"       "+nom.length)

  for(var j=0;j<nom.length;j++){//les noms de la phrase recue
//console.log('           '+j+'           '+nom.length)

      if(jsoncontent[i].search(nom[j])>-1){//test phrase1 et mots 1 .....
  
        
          //console.log(jsoncontent[i]+'666666666dddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666aaaa'+i+nom[j])
           jsoncontentreplace[i]=jsoncontentreplace[i].replace('je','tu')
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("j'ai","tu as")
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("vais","vas")
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("suis","est")
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("mes","tes") 
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("ma","ta")
           jsoncontentreplace[i]=jsoncontentreplace[i].replace("mon","ton")
       
              if(removed.indexOf(jsoncontentdepart[i])<0){//mise en mémoire
                  removed.push(jsoncontentdepart[i])
                  var textefianle=jsoncontentdepart[i]
             }//fin if
     
             
         //console.log(synonymefinal+"*****")
         var trouvé=1 
          //callback({'tts' : ""});
          //return false
      }//fin if 
      

  }//fin for j

    for(var k=0;k<synonymefinal.length-1;k++){//les synonymes de la phrase recue
      
      if(jsoncontent[i].search(synonymefinal[k])>-1){

         if(removed.indexOf(jsoncontentdepart[i])<0){//mise en mémoire
                  removed.push(jsoncontentdepart[i])
        //      ScribeSpeak(jsoncontent[i]);
              


        console.log(jsoncontent[i]+"   en 6 de learning  "+synonymefinal[k])
        

        //ScribeSpeak("tu m'as dis "+jsoncontent[i])
        var trouvé=1 
       }//fin if removed

       } //fin if content
    }//fin for k
}//fin for i

//rien trouvé
//console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"+i+" "+nom.length)
      if(((i==jsoncontent.length)||(nom.length==0))&&trouvé!==1){

verify_storage_json(tempstorage);
        var jsoncontent = read_json(tempstorage);
        jsoncontent.push(phrasedepart)
       // console.log(jsoncontent+"oooooooooooooooooooooooooooooooooooooooooooooooooooosssssssssssssssssssssssssssssssss")
        
        //fs.writeFile(tempstorage,JSON.stringify(jsoncontent));
  var on='on'
       // console.log("oooooooooooooooooooooooooooooooooooooooooo")
       // SARAH.run('wiki', { 'phrase' : query});
       //RECOdeWIKI="jjjjjjjjjjjjjjjjjjjj"


       ///on sauvegarderas dans wiki !!!!!!!!!!!!!!!!!
SARAH.run('wiki', { 'phrasedepart' : phrasedepart , 'phrasesmotscles' : phrasesmotscles, 'action' : on});

 callback();return false      



      }//fin if i non trouvé
  
  console.log('on enlève : '+removed+' : de :'+jsoncontentdepart)
     
     



// else{//on efface puisque l'on à trouvés
        //var removedfinal=jsoncontentdepart;console.log(removedfinal)
        var removedlength=removed.length;console.log(removedlength,"***********")
             
console.log(removed+"rrrrrrrrrrrrr")
              for (var i=0;i<removedlength;i++){
                          
                         var index=jsoncontentdepart.indexOf(removed[i]);//console.log(index+'éssssssssssssss')
                        jsoncontentdepart.splice(index ,1);//console.log(removed+" Sa                 uvegarde")
//
          }//fin for i
  

  console.log(jsoncontentdepart+" : on sauvegarde ?") 

function asklearning(questionlerarning,reponselearning) { ScribeAskMe(questionlerarning, [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
     
    if(phrase.search(reponselearning)>-1){
      ScribeSpeak("j'efface la réponse");
      fs.writeFile(tempstorage,JSON.stringify(jsoncontentdepart));
      callback();return false}
    else{
      ScribeSpeak("je n'efface pas");callback();return false
    }
            
    }//fin fnct answer
  );//ask(question,motdepasse)
}//fin fnct ask

var questionlerarning=textefianle+" : dois je effacer , oui ou non ?"
var reponselearning="oui"
asklearning(questionlerarning,reponselearning)

 //callback({'tts' : " "});return false    

 return false
}//fin fnct test memoire





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////c'est partie
 intero(testphrase,resultats,question,phrasedepart,interogatif,tempstorage,jsoncontent,synonymefinal)

 //if(question==1){
 
//}
 return false

}//fin else définitif



  
  verify_storage_json(jsonstorage);
  var jsoncontent = read_json(jsonstorage);


// Envoi d'un callback au serveur
callback();
}


///////////////////////////////////////
//// Functions
///////////////////////////////////////


// Fonction de verification et creation le cas echeant du fichier de stockage JSON
function verify_storage_json(jsonfile) {
  if (! fs.existsSync(jsonfile) || ! fs.statSync(jsonfile).isFile()) {
    fs.writeFileSync(jsonfile,'[]',"UTF-8"); // Generation du fichier de base
  }
}

// Fonction pour lire le contenu du JSON
function read_json(jsonfile) {
  var contents = fs.readFileSync(jsonfile);
  return JSON.parse(contents);
}

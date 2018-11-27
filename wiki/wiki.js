var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {

 maConfig = config.modules.scribe
 SCRIBE = SARAH.context.scribe ; ScribeAskMe = SARAH.ScribeAskMe;
 ScribeSpeak = SARAH.ScribeSpeak ; SCRIBE.activePlugin('Wikipédia');
 var alerte="" ; path = require('path');
 request = require('request') ; cheerio = require('cheerio') ; exec = require('child_process').exec
 fs = require('fs')
 var count=''
//console.log("yesssssssssssssssssssssss")
//console.log(data.phrase)

var phrasedepart=data.phrasedepart ; var phrasesmotscles=data.phrasesmotscles

 console.log('test des encarts                  :      ' + phrasedepart + " : " + phrasesmotscles)



try {
 var phrase1=data.phrase; var phrase=data.phrase;
    //if(phrase==undefined){
      var alerte=1;
      //console.log("recu de cortana "+phrase)
      var phrase=JSON.stringify(SARAH.context.scribe.lastReco);
      nommathilde = configcortana.nommathilde
var phrase=phrase.replace(nommathilde,'')
      console.log("recu de scribe "+phrase)
      phrase=phrasesmotscles
   //// }// fin if phrase
}//fin try
 //console.log(data.query+"gggggggggggggggggggggggggggggggggggggg")
catch(err){var phrase=JSON.stringify(SARAH.context.scribe.lastReco);console.log("recu de scribe en 2 "+phrase)}

if (alerte!==1){
 var phrase='recherche '+phrase+' sur Wikipédia'
nommathilde = configcortana.nommathilde
var phrase=phrase.replace(nommathilde,''); //console.log('on doit rechercher : '+phrase)
}

 var phrase=phrase.replace(new RegExp("[^0-9a-zA-Zéâœèî,ôûë.àçù]", 'ig')," ")
 var search=phrase
 //console.log('on doit recherche '+phrase)

////////////////////////////////////////////////////
//var rgxp = /recherche (.+) sur Wikipédia/i; var match = phrase.match(rgxp);// ce qui se cache entre "recherche" et "sur wikipedia"
//var search = match[1]; var url = '';
datamatche='{"datamatch":[]}'

//console.log('au depart de wiki on a : '+search)


///////////////////////////
//////////////////////////fonction



function wikiurl(search,phrasedepart,phrasesmotscles){

                                            //if(xx==urllength-1){
                                            encart(search,phrasedepart,phrasesmotscles);return false
                                          // }
   
}

function encart(search,phrasedepart,phrasesmotscles){

 
  var searchencart=search.replace(new RegExp(' ', 'ig'),"+")
   console.log('test encart '+ search+phrasedepart+"55555555555555555555555555555555555555555555555")
  //var url = "https://www.google.fr/search?hl=fr&q="+searchencart+"&gws_rd=ssl"
    var url="https://www.google.fr/search?q="+searchencart
               // https://www.google.fr/search?q=substantif
//console.log(url+" : url recherchée")
    

  request({'uri':url, 'headers':{'Accept-Charset': 'windows-1252'},'encoding':'binary' }, function (error, response, html) {
                            $ = cheerio.load(html);
                           // var rechercheencart= $('.Z0LcW > span:nth-child(1) > span:nth-child(1)').text();console.log("trouvé en encart : "+rechercheencart);
console.log($('.g .e').text(),"trouvé en -2")
if($('.g .e').text().length>0){
var meteo=$('.g .e').text()
var matchmeto=(meteo.search(new RegExp('%',"gi")))
  var resultmeteo=""    
                    if (matchmeto>-1){
                      
                      for (var i=0 ; i<matchmeto+1; i++){resultmeteo=resultmeteo+meteo[i]}//fin for

                      var leresultmeteo = resultmeteo.replace(/°C/g,'degré , ');
                      var leresultmeteo = leresultmeteo.replace(/lun/g,'')
                      var leresultmeteo = leresultmeteo.replace(/mar/g,'')
                      var leresultmeteo = leresultmeteo.replace(/mer/g,'')
                      var leresultmeteo = leresultmeteo.replace(/jeu/g,'')
                      var leresultmeteo = leresultmeteo.replace(/ven/g,'')
                      var leresultmeteo = leresultmeteo.replace(/sam/g,'')
                      var leresultmeteo = leresultmeteo.replace(/dim/g,'')
                      var leresultmeteo = leresultmeteo.replace(/:/g,'')
                      var leresultmeteo = leresultmeteo.replace(/\./g,'')
                      var leresultmeteo = leresultmeteo.replace(/°F/g,'')
                      var leresultmeteo = leresultmeteo.replace(/\|/g,'')
                      var leresultmeteo = leresultmeteo.replace(/\%/g,' pour cent')
                      var leresultmeteo = leresultmeteo.replace(/km\/h/g,' kilomètre heure ,')
                      var leresultmeteo = leresultmeteo.replace(/N à/g,' ,NORD , à')
                      var leresultmeteo = leresultmeteo.replace(/NE à/g,' ,NORD ESTE , à')
                      var leresultmeteo = leresultmeteo.replace(/NO à/g,', NORD OUEST, à')
                      var leresultmeteo = leresultmeteo.replace(/S à/g,' ,SUD , à')
                      var leresultmeteo = leresultmeteo.replace(/SE à/g,' ,SUD ESTE , à')
                      var leresultmeteo = leresultmeteo.replace(/SO à/g,' ,SUD OUEST , à')
                      var leresultmeteo = leresultmeteo.replace(/E à/g,' ,ESTE , à')
                      var leresultmeteo = leresultmeteo.replace(/O à/g,' ,OUEST , à')
                      var leresultmeteo = leresultmeteo.replace(/Vent/g,' ,Vent')
                      var nomduplugin="meteomathilde"//ou autre nom....
                      var valeurduspeak=leresultmeteo
                      SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                   
                        SCRIBE = SARAH.context.scribe;
                        SCRIBE.texteplugin(valeurduspeak);
                        //console.log(valeurduspeak,'eeeeeeeeee',valeurduspeak.search("Pluie"))
                        if(valeurduspeak.search(/Ora/ig)>-1){var icone="icones/Orages.png"}
                        if(valeurduspeak.search(/Pluie/ig)>-1){var icone="icones/Pluie.png"}
                        if(valeurduspeak.search(/Nuageux/ig)>-1){var icone="icones/Variable.png"}
                        if(valeurduspeak.search(/Soleil/ig)>-1){var icone="icones/Soleil.png"}
                        if(valeurduspeak.search(/couvert/ig)>-1){var icone="icones/Variable.png"} 
                        SCRIBE.icone(icone);
                        SCRIBE.activePlugin('MéTéo Mondiale');



                       //ScribeSpeak(leresultmeteo)
                        callback();return false
                      }
console.log('pas de météo');
//ScribeSpeak('pas de météo connus');callback();return false
}//fin if
var textemoirewiki="voici ta réponse : ; "
var rechercheencart=$('.FSP1Dd').text(); console.log('trouver en -4 : ', $('.FSP1Dd').text(),' !!!!')
 if(rechercheencart.length>0){
                            //ScribeSpeak();SCRIBE.texteplugin($('.FSP1Dd').text());
                        var textemoirewiki=textemoirewiki+ $('.FSP1Dd').text()+";"
                             //callback()
                           // return false
                           }


var rechercheencart=$('.F7uZG').text(); console.log('trouver en -3: ', $('.F7uZG').text(),' !!!!')
 if(rechercheencart.length>0){
                            //;SCRIBE.texteplugin($('.F7uZG').text());
                        textemoirewiki=textemoirewiki+$('.F7uZG').text()+";"
                             
console.log("textemoirewiki"+" réponse")
                        ScribeSpeak(textemoirewiki)
                             callback()
                            return false
                           }

var rechercheencart=$('.V7Q8V').text(); console.log('trouver en -2 : ', $('.V7Q8V').text(),' !!!!')
 if(rechercheencart.length>0){
                            //ScribeSpeak();SCRIBE.texteplugin($('.V7Q8V').text());
                        textemoirewiki=textemoirewiki+$('.V7Q8V').text()
                        console.log("textemoirewiki"+" réponse")
                        ScribeSpeak(textemoirewiki)
                             callback()
                            return false
                           }









var rechercheencart=$('.KpMaL').text(); console.log('trouver en -1 : ', $('.KpMaL').text(),' !!!!')
 if(rechercheencart.length>0){
                            ScribeSpeak($('.KpMaL').text());SCRIBE.texteplugin($('.KpMaL').text());
                        
                             callback()
                            return false
                           }


//console.log($('.mraOPb > span').text(),"1111111111111111110000000000001111111")
var rechercheencart=$('.SFt5jb').text(); console.log('trouver en 0 : ', $('.SFt5jb').text(),' !!!!')
    if(rechercheencart.length>0){
                            ScribeSpeak($('.SFt5jb').text());SCRIBE.texteplugin($('.SFt5jb').text());
                     
                             callback()
                            return false
    }

                           var rechercheencart= $('.TBdoubleColTD6 > div:nth-child(1)').text();console.log("trouvé en encart 1 : "+rechercheencart);

                           
                           if(rechercheencart.length>0){
                            ScribeSpeak($('.TBdoubleColTD6 > div:nth-child(1)').text());SCRIBE.texteplugin($('.TBdoubleColTD6 > div:nth-child(1)').text());
                            
                          
                             callback()
                            return false
                           }
                          
                           else{
                            console.log('trouvé en encart 2 : '+$('span').eq(30).text())
                            var rechercheencart= $('span').eq(30).text()
                            if( $('span').eq(30).text().search(/Résultats pour/gi)>-1){ var rechercheencart= ""}
                            if( $('span').eq(30).text().search(/Essayez avec cette orthographe/gi)>-1){ var rechercheencart= ""}
                                var rechercheencart1=""
                                for(var i=61;i<85;i++){
                                 if( $('span').eq(i).text().search(/Résultats pour/gi)<0){ 
                                  if( $('span').eq(i).text().search(/avis/gi)==-1){
                                    if ($('span').eq(i).text().search(/suivant/gi)==-1){
                                      if($('span').eq(i).text().length>4){
                                      rechercheencart1=rechercheencart1+$('span').eq(i).text()+" : "
                                      console.log(rechercheencart1.length)
                                      }
                                    }
                                  }
                                }
                                    console.log(i+" "+$('span').eq(i).text())
                                    //console.log($('span').eq(i).text().search(/avis/gi))
                                }
                            //var rechercheencart1= $('a._axi div').eq(5).text();console.log("en 3 :    "+rechercheencart1); 
                              
                              if((rechercheencart.length>0)||(rechercheencart1.length>0)){
                              ScribeSpeak(rechercheencart+" : "+rechercheencart1);SCRIBE.texteplugin(rechercheencart+" : "+rechercheencart1);
                              callback(); return false
                              }
                            
                              else{
 
//////////////wiki
  //console.log('test url wiki : '+search)
  request({'uri':'https://www.google.fr/search?q='+search+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei','headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {
                            $ = cheerio.load(html);
                           // var url = $('.g .s cite').first().text().trim();
                             var url=$('.g .s cite')
                             var urllength=url.length
                                          
                                   for(var xx=0 ; xx<1 ; xx++){                          
                                 
                                      var url1=$('.g .s cite').eq(xx).text();//console.log(url1)
var url1=url1.replace('...','wiki')
                                        if(url1.search('wikipedia.org')>-1){
                                              console.log("trouvé sur wikipédia : "+url1+" : emplacement sur google : "+xx)
                                              lecturewikiurl(search,url1)
                                              return false
                                        }//fin if url
                                      
                                        else{
                                           //if(xx==urllength-1){
                                            //encart(search,phrasedepart);
                                           
path = require('path');

var tempstorage = path.resolve('%CD%', './plugins/Learning/storage/tempstorage.json').replace('\\%CD%', '');
var contents = JSON.parse(fs.readFileSync(tempstorage));
console.log(contents+"11111111111111111111111111111111111111111111111"+phrasedepart)
contents.push(phrasedepart)
console.log(contents+"11111111111111111111111111111111111111111111111")
//console.log('on sauvegarde ? : '+contents)
if((phrasedepart!==null)&&(silencedefinitif!=="on")){

///ask ??

var inutil=function(){
ScribeAskMe("dois je oui ou non sauvegarder ceci ?", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase.search('oui')>-1) {
        ScribeSpeak('je mémorise')
        //msg = phrase.trim();
      fs.writeFile(tempstorage,JSON.stringify(contents));
      callback(); return false
        //Match(query,msg)
      }//fin if oui
      
      else ScribeSpeak("je ne connais pas, je ne sauvegarde pas.");callback(); return false
    }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? ", 'essais': 2}
  );
}


ScribeSpeak("je n'ai pas trouvé mais je mémorise")
console.log(tempstorage)
        //msg = phrase.trim();
      if(tempstorage!=="null"){fs.writeFile(tempstorage,JSON.stringify(contents))};
      callback(); return false

}












                                            return false
                                          // }
                                        }

                                }
                             
                            
                    });//fin request

  //console.log('rien')
  return false




















                                 console.log('rien trouvé')
                                 ScribeSpeak('je ne connais pas')



                                 //}
                                   return false
                             }
                          }//fin else 0
                                
                             
                            
                    });//fin request
  
  //console.log('rien on sauvegarde')
  return false
}



function lecturewikiurl(search,url1){//test wikipedia
var url=url1
  var request = require('request');
 
    request({ 'uri' : url }, function (err, response, body){
       
          var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });

          //var paragraphe1=$('.mw-parser-output > p:nth-child(2)').text()
            
          //var paragraphe2=paragraphe1+$('.mw-parser-output > p:nth-child(3)').text()
            
          //var paragraphe3=paragraphe2+$('.mw-parser-output > p:nth-child(4)').text()
           
          //var paragraphe4=paragraphe3+$('.mw-parser-output > p:nth-child(5)').text()
          
         // var paragraphe5=paragraphe4+$('.mw-parser-output > p:nth-child(6)').text()
         var paragraphe5=$('.mw-parser-output > p').text()
          var paragraphe5=paragraphe5.replace(new RegExp("[^0-9a-zA-Zéëœâô.èî,àçù]", 'ig')," ")
            

                WikiMemoire(search,url,paragraphe5)
      var paragraphe6=""
                    zz=function(){
                              var indices = [] ; var array = paragraphe5;

                              var element = '.' ; var idx = array.indexOf(element);
                              while (idx != -1) {
                                indices.push(idx);
                                idx = array.indexOf(element, idx + 1);
                              }
                              //console.log(indices);
                              for (var j=0;j<indices[3]+1;j++){
                                paragraphe6=paragraphe6+paragraphe5[j]
                              }
                    }
    paragraphe6=paragraphe5.split(".")
//console.log('trouvé ! : '+paragraphe6)

             ScribeSpeak("voici ta réponse :; "+paragraphe6[0])//+paragraphe6[1]+paragraphe6[2]+paragraphe6[3])
            //on regarde les noms, adverbe....
var testphrase = require(path.resolve('%CD%', './plugins/modules/testphrase').replace('\\%CD%', '')) ;// console.log("resultats : "+testphrase(nomchercherreg))

            // SCRIBE.texteplugin(paragraphe6[0]+paragraphe6[1]+paragraphe6[2]+paragraphe6[3]);
            callback(); return false 
    })

return false
}











function WikiMemoire(search,url,paragraphe5){//console.log(search+"*****"+url)
	
    var clés=search
    	var search=url
    var search=search.replace(new RegExp('\\+','ig')," ")
    var search=search.replace("%27"," ")
    var search=search.trim()
    var search=search.replace(new RegExp('https://fr.wikipedia.org/wiki/','ig')," ");
    var search=search.replace(new RegExp("[^0-9a-zA-Zé.ôëœî,èâàçù]", 'ig')," ")
    //var search=search.replace(new RegExp("\'", 'ig')," ")
    //var search=search.replace(new RegExp("\'", 'ig')," ")
    var search=search.toLowerCase()
    var paragraphe5=paragraphe5.replace(new RegExp("[^0-9a-zA-Zéôœâëî,è.àçù]", 'ig')," ").toLowerCase()
    //var //console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+search)
      var dir = path.resolve('%CD%', './plugins/mémoiredemathilde/wikimemoire/'+search+'.json').replace('\\%CD%', '');
     var pathname = dir; var data1='{"wiki":[]}';  fs = require('fs');
     var objet1 = JSON.parse(data1); var jsonStr1 = JSON.stringify(objet1);
     objet1.wiki.push(paragraphe5); var data2 = JSON.stringify(objet1); 
if(paragraphe5.length>10){
       // fs.writeFile(pathname, data2, function (err) {if (err) throw err;}) // ecrit dans le fichier l'objet + la nouvelle valeur
}


//////////////test synonyme
var synonyme = require(path.resolve('%CD%','./plugins/modules/synonyme').replace('\\%CD%', ''))
  









var nomcherchersplit=paragraphe5.split(' ')
 //synonyme(nomcherchersplit)
//nomcherchersplit=paragraphe5
 //function attente(){
  //for (var i = 0  ; i < nomcherchersplit.length ; i++) {
    //  var nomchercher=nomcherchersplit[i]
        //synonyme(nomcherchersplit)
        //,function(callback1){ 
          //if(callback1!==" "){
        //console.log("réponse* : *"+nomchercher+" "+callback1+"*")
         //}//fin if
        //}) //fin fnct syno  
  //}//fin for
//}//


//synonyme(nomcherchersplit)




//envoi au dico
//var dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', '')) ; dico(paragraphe5)

    // on ajout à phrase clés:
    var clés=clés.replace(search," ")
    var clés=clés.trim()
    //console.log("la clés"+clés+"**")
     filePathrea = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '');
        if(clés==!""){                        
                                         fs.readFile(filePathrea, function(err,data){
                                   
                                             var objet = JSON.parse(data);jsonStr = JSON.stringify(objet);
    var clés=clés.trim()
                                                      objet.phrasescles.push(clés); var new_jsonStr = JSON.stringify(objet);
                                                      //console.log("valeur rajoutée au json phrasescles & fini pour wiki "+clés)
                                                      var filePathphrasescles1 = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '')
                                                    //  fs.writeFile(filePathphrasescles1,new_jsonStr)

                                          })
    }//fin if
    console.log("rien de plus")
    callback() ; return false

    //fin
}//fin wikimemoire











function TestPhrase(phrasesmotscles,search,phrasedepart){
//console.log("testphrase "+search)
var longueurdir=0
var query=search
read(query,longueurdir,phrasedepart,search,phrasesmotscles)
return false
      
        path1 = path.resolve('%CD%', './plugins/mémoiredemathilde/wikimemoire/').replace('\\%CD%', '');

        fs.readdir(path1, function (err, files) {
            //console.log(files)
            var longueurdir=files.length;  //console.log(longueurdir)
            read(files,path1,query,longueurdir,phrasedepart)
        })//fin fs read

}//fin fnst testphrase



function read(query,longueurdir,phrasedepart,search,phrasesmotscles){
// function read(files,path1,query,longueurdir,phrasedepart){
         
          if(longueurdir==0){wikiurl(search,phrasesmotscles,phrasedepart);console.log('rien en mémoire');return false}//rien en mémoire alors on courcircuite
          
          var vocalise='';var compte=0; var datascrap='{"information":[]}'
           var objetscrap = JSON.parse(datascrap); var longueurscrap = objetscrap.information.length

                    for(var i=0;i<longueurdir;i++){
                           var data1=fs.readFileSync(path1+'/'+files[i]).toString();var objet = JSON.parse(data1)
                            var jsonStr = JSON.stringify(objet);var query=query.trim()
        //console.log("*"+query+"*")//on connais
query1=query
query1=query1.toLowerCase()
jsonStr=jsonStr.replace(new RegExp("'", 'ig')," ")
jsonStr=jsonStr.toLowerCase()
//console.log(query1)
//console.log(jsonStr)
                                  if (jsonStr.search(new RegExp(query1,"gi"))>-1){
                                            console.log('cela fait rapport à '+query1);
                                            var objetmatch = JSON.parse(datamatche);var jsonStrmatch = JSON.stringify(objetmatch);
                                                objetmatch.datamatch.push(files[i]);


                                                  function ask(question, texte,url) {
                                                     ScribeAskMe(question, [
                                                        {'answer':'age' }
                                                        ], function(answer,phrase,match,wholeMatch) {
                                                          
                                                            if (phrase=='oui') {console.log("oui");//console.log(texte)
                                                              
 var paragraphe6=""
      var indices = [] ; var array = texte;

      var element = '.' ; var idx = array.indexOf(element);
      while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
      }
      //console.log(indices);
      for (var j=0;j<indices[3]+1;j++){
        paragraphe6=paragraphe6+texte[j]
      }

console.log(" trouvé et traitement : "+paragraphe6)


                                                              ScribeSpeak(paragraphe6);
                                                              callback();return false
                                                            }
                                                            if (phrase=='non') {wikiurl(search);callback();return false}
                                                       
                                                     
                                                        }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. ", 'essais': 2}
                                                      );
                                                    }//fin fnct ask

                                          var compte=compte+1
                                              objetscrap.information.push(objet.wiki[0]); var vocalise=vocalise+' , '+ files[i].replace(/.json/gi,' ');
                                          var texte=objet.wiki[0]; var question='cela fait rapport à '+vocalise+' veux tu que je lise  oui ou non'
ask(question,texte)
return false
                                  }// fin if on connais le data.q

                    }//fin for i
//console.log(i)
        if ((compte==0)&&(i==longueurdir)){console.log('rien ne correspond');wikiurl(search,phrasedepart);callback() ; return false}
 return false
}//finc fnct read

function ask1(question, texte,url) {
                 ScribeAskMe(question, [
                    {'answer':'age' }
                    ], function(answer,phrase,match,wholeMatch) {
                      
                        if (phrase.search('aucun')>-1) { wikiurl(search); callback() ; return false}

                        if (phrase!=='undefined') {
                              try{
                                  var parle= fs.readFileSync(path1+'/'+phrase+'.json').toString();var objetparle = JSON.parse(parle);
                                  ScribeSpeak(objetparle.wiki[0],true);console.log('en memoire')
                                  callback();return false
                              }
                              catch (Exception) {console.log(Exception)
                                       exec = require('child_process').exec;
                                     var  search=search.replace(new RegExp(' ', 'ig'),"+")
                                       var proc = 'start firefox -new-window http://www.google.fr/search?q='+search ;
                                      console.log("erreur : "+proc)
                                       child = exec(proc);
                                       var search=search.replace(new RegExp('/+', 'ig')," ")

                              }
                         }    
                       }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
                  );



        var texte=objet.wiki[0]
        var question='cela fait rapport à '+vocalise+', le quel veux tu'
        //      ask1(question,texte,url)
       // console.log(vocalise)
 }//fin fnct ask                
//}//fin fnct read

//}//fin funct test phrase

//try{
 
//}
//catch (Exception) {console.log("erreur dans la recherche");callback({'tts' : " "})  ;return false}
//if(data.action=='on'){console.log(data.phrasesmotscles+'1111111111')

var phrasedepart=data.phrasedepart ; var phrasesmotscles=data.phrasesmotscles

 console.log('test des                **********************          encarts' + phrasedepart + " : " + phrasesmotscles)
 TestPhrase(phrasesmotscles,phrasedepart)

//}
//else{ 
//  console.log('on test dans                           Learning'+data.phrase)
  //SARAH.run('Learning', { 'RECOdeWIKI' : search})
 // SARAH.run('Learning', { 'RECOdeWIKI' : data.phrase ,'phrasesmotscles' : data.phrasesmotscles});
 // callback({'tts': ""});return false
//}
}// fin exports action
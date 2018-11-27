var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;

exports.action = function(data, callback, config,SARAH){
//console.log(SARAH.ConfigManager)
reponse=""; fs = require('fs');exec = require('child_process').exec; path = require('path');
filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/memoire/memoire.json').replace('\\%CD%', '');
maConfig = config.modules.scribe; util = require('util');
configcortana = config.modules.cortana; debug = configcortana.debug
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe;  ScribeSpeak = SARAH.ScribeSpeak;//SCRIBE.activePlugin('cortana');

nommathilde = configcortana.nommathilde ; nomchercher=data.reco ; console.log("mathilde s'appel dans cortana : "+nommathilde)
//nommathilde=nommathilde.toLowerCase()
SARAH.context.scribe.lastReco=data.reco

nomchercherreg=nomchercher.replace(new RegExp("-","gi")," ") ; 
// on envoie au dico
var dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', '')) ; //dico(nomchercherreg)

//on regarde les noms, adverbe....
var testphrase = require(path.resolve('%CD%', './plugins/modules/testphrase').replace('\\%CD%', '')) ;// console.log("resultats : "+testphrase(nomchercherreg))

//on ajoute les synonymes
var synonyme = require(path.resolve('%CD%','./plugins/modules/synonyme').replace('\\%CD%', ''))
  //var a=require("./Deezer-Server\\server.js")
var nomcherchersplit=nomchercherreg.split(' ')
synonyme(nomcherchersplit)
	//for (var i = 0  ; i < nomcherchersplit.length ; i++) {
			//var nomchercher=nomcherchersplit[i]
		 		//synonyme(nomchercher,function(callback1){ 
			 		//if(callback1!==" "){
			 			//console.log("réponse* : *"+nomchercher+" "+callback1+"*")
					// }//fin if
				//}) //fin fnct syno 	
	//}//fin for
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

console.log( networkInterfaces );


test=function(){
 exec('ipconfig', function(error, stdout, stderr) {
 	stdout=stdout.trim()
 	stdout=stdout.split(':')
 	for(var i=0;i<stdout.length;i++){
 		if(stdout[i].search('Adresse IPv4')>-1){
 			stdout[i+1]=stdout[i+1].replace(new RegExp('[^0-9.]', 'ig'),"")
 			stdout[i+1]=stdout[i+1].replace(".........","")
 			console.log("adresse ip : "+stdout[i+1])
 		}
 	}
	//console.log("!!",stdout,"??")

})
}

try{console.log(data.myIPretour,' IP Appelant dans cortana!');myIPretour=data.myIPretour}
catch(err){console.log("")}
//if(data.silence=="silenceon"){console.log("fffffffffffffffffé")}
//SCRIBE.icone("icones/Images/11.png");
data.dictation==data.reco
console.log(data,' Data recus')
try{
if ( (data.reco.search(nommathilde) >-1)||(data.reco.search(nommathilde.toLowerCase())>-1) ){

reco=data.reco.replace(new RegExp(nommathilde,"gi"),"") ; 
//reco=reco.replace(new RegExp("-","gi")," ") ;

if(reco==""){//protection vide
	var nomduplugin="cortana"//ou autre nom....
	var valeurduspeak=''//phrase à dire
	//SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
	callback() ; return false
}//fin vide

 query=reco
query=query.toLowerCase() ; query=query.trim()
query=query.replace(new RegExp('œuf dur',"gi"),"oeuf dure")
console.log('phrase recu  : '+query);
var phrasedepart=query


 
//on test la phrase entière au cas ou
 function xmlinconnu(query,reco){

 	emulate0(query,reco)

return false
                      //le nom de sarah en vrai
                      try{
                          filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
                          content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                          nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;//console.log('le nom : '+nomappel)
                     	 }
                          catch (Exception) {
                            filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
                            content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                           nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;//console.log('le nom : '+nomappel)
                          }
						
						 //on prends la date
						var date = new Date();
						heures=date.getHours();minutes=date.getMinutes();secondes=date.getSeconds();year=date.getFullYear();month=(date.getMonth())+1;day=date.getDate()
						if((month)<10){month='0'+month};if((day)<10){day='0'+day};if((heures)<10){heures='0'+heures}
						if((minutes)<10){minutes='0'+minutes};secondes=(secondes);if((secondes)<10){secondes='0'+secondes}
						ladate=year+'-'+month+'-'+day;letemps='['+heures+':'+minutes+':'+secondes;//console.log(ladate);console.log(letemps)
						filePathfichier = path.resolve('%CD%', './bin/'+ladate+'.log').replace('\\%CD%', '');//fs.writeFileSync(filePathfichier,'')
						// on emul pour voir
						url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+query;console.log('on test pour vérifier si sarah a répondu à la phrae complète : '+url1)
						data.dictation=query
						request = require('request');

      function emulation(ladate,letemps,query,reco) {console.log('on verifie dans le log')
          request({ url : url1 }, function (err, response, body){
			//on attends l'ecriture du log
              fs=require('fs')
                    try{
                        filePathfichier = path.resolve('%CD%', './bin/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                    }
                        catch (Exception) {
                          filePathfichier = path.resolve('%CD%', './client/AddOns/debug/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                        }
              longuerstring=fichier.length;//console.log(longuerstring);
              str = fichier;toSearch=letemps;
              lo='';pos=str.indexOf(toSearch)
 				//console.log(letemps+"rrrrrrrrrrrr")
                   //if(pos==-1){emulate0(query,reco); return false}
                   	//emulatephrase(query,reco);return false}
              	   lon=str.length
    
                  for( i = pos; i < lon ; i++) {
                      lo=lo+str[i]
                  };//fin for i
   //console.log(pos);console.log(lo);console.log('rrrrrrrrr');console.log(toSearch)
              if(fichier.indexOf('RECOGNIZED Speech:')>-1){console.log("émulation trouvée donc plugin actif on s'arrete la, bref fini en 1");callback();return false}; 
              console.log('pas d émulation trouvée')
                 // match3(query,queryrecherche)
                  emulate0(query,reco)
                  return false
        
            });//fin request
        
        }//fin emulation
//emulation(ladate,letemps,query,reco)
emulate0(query,reco)

return false
}//fin fnct xmlinconnu

//xmlinconnu(query,reco)//appel fnct xmlinconnu























//on connais la phrase qui est dans un plugin si non => on questionne
function emulate0(query,reco){
envoie="";restant="";garbage="";nomplug	=""
	
	function finemul(envoie,restant,garbage,nomplug){//fin car on connais
		
		 try{  //nom de sarah pour l'emul en v3
	        var filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
	        var content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
	        var nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;//console.log('le nom : '+nomappel)
	    }//fin try
	    catch (Exception) {  //nom de sarah pour l'emul en v4
	        var filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
	        var content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
	        var nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;//console.log('le nom : '+nomappel)
	    }//fin catch
		
		if(garbage==1){console.log("!!!!!!!! dication !!!!!!!!!!!")
			SARAH.run(nomplug, { 'dictation' : envoie});
            callback(); return false
		}
		else{
			var url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+envoie;
			console.log('on connais donc ont appel depuis cortana : '+url1)
		    var request = require('request') ; request({ url : url1 })
			//restant=restant[0]
			if(restant==undefined){restant=""}
			//console.log(restant[0]+"phrase de départ : "+phrasedepart	)   
var emplacement=phrasedepart.search(restant[0])///protection si inconnus apres la phrases connu ex: ajoute à liste des courses :: du beurre
//test les phrases clés et ajoute
//for(var d=0;d<restant.length;d++){
				if(restant.length>0){
					d=0
		           restant[d]=restant[d].trim()
		           		
		           		for (var f=0;f<objet.phrasescles.length ; f++) {
		          	           		
		           			if(objet.phrasescles[f].search(restant[d])>-1){//console.log("ceci est connus : "+restant[d])
		           				f=objet.phrasescles.length;restant[d]="";//break
		           			}
		      		             
						}//fin for f	
				
					for(var x=0;x<longueurdataitemtotal;x++){
						if(objetdataitemtotal.nompluguine[x].search(restant[d])>-1){
							x=longueurdataitemtotal;f=objet.phrasescles.length;//console.log("ceci est connus aussi : "+restant[d]);restant[d]="";//break
						}
											
					}
					if((restant[d]!=="")&&(emplacement==0)){
					//console.log("l'on ne connais pas : "+restant[d])
								            objet.phrasescles.push(restant[d]); var new_jsonStr = JSON.stringify(objet);
								            console.log("valeur rajoutée au json phrasescles & fini pour cortana, le plugin est actif : "+restant[d])
								           	x=longueurdataitemtotal
								           	f=objet.phrasescles.length
								           //	break
					}//fin for
				}//fin if

				//}//fin for d

				//objet123 = JSON.parse(data66) ;  jsonStr123 = JSON.stringify(objet123);
				//var data7=[],i=-1
				var triFn = function(a, b){
				  if (a.length > b.length) return -1;
				  if (a.length  < b.length) return 1;
				  if (a.length == b.length) return 0;
				}//fin var fnct
				objet.phrasescles.sort(triFn); // tri le tableau

				var new_jsonStr = JSON.stringify(objet) ; //data66=new_jsonStr123
				var filePathphrasescles1 = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', '')
	            fs.writeFile(filePathphrasescles1,new_jsonStr)
			    callback(); return false
			
		}//fin else
		callback(); return false	//on as finis
}//fin fnct emul

/////////debut

	levenshtein=require(path.resolve('%CD%', './plugins/modules/levenshtein').replace('\\%CD%', ''))
  	
    urlnomplugins = path.resolve('%CD%', './plugins/demarrage/item/plugins.json').replace('\\%CD%', '');//lis le nom des plugins
    datanomplugins=fs.readFileSync(urlnomplugins,'utf8').toString() ;
    objetnomplugins = JSON.parse(datanomplugins) ;  longueurnomplugins = objetnomplugins.nompluguine.length 


	var filePathrea = path.resolve('%CD%', './plugins/mémoiredemathilde/phrasescles/phrasescles.json').replace('\\%CD%', ''); 
	var data = fs.readFileSync(filePathrea)
	var objet = JSON.parse(data) ; var jsonStr = JSON.stringify(objet); 
//test la liste des items

//list les items totaux
function  test(objet) {
	
//lis les phrases clés
    var queryrecherche=query             
		                        
		for(var ii=0;ii<objet.phrasescles.length;ii++){
		       	if (query.search(new RegExp(objet.phrasescles[ii],"gi"))>-1){			            
		            //console.log('phrasescles connus : '+objet.phrasescles[ii])
		            queryrecherche=queryrecherche.replace(objet.phrasescles[ii],"")
		        }//fin if 
		}//fin for ii

		queryrecherche=queryrecherche.trim()
		console.log("phrase apres mots clés* "+queryrecherche+" *") 

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//debut du test

 pathname = './plugins/demarrage/item/itemtotal.json';//on lis les plusingstotaux
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
        dataitemtotal= fs.readFileSync(pathname,'utf8',toString) ; objetdataitemtotal = JSON.parse(dataitemtotal) ;
          longueurdataitemtotal = objetdataitemtotal.nompluguine.length 
         	query=query.toLowerCase()
console.log("******** "+query+" ***********************")
tableau="";tableaulevi=100
conteur=0

//debut boucle
for(var i=0;i<longueurdataitemtotal;i++){
         		objetdataitemtotal.nompluguine[i]=objetdataitemtotal.nompluguine[i].toLowerCase().trim()
         		        	
         		      //////////////////////
                    levi=levenshtein(objetdataitemtotal.nompluguine[i],query)   
                    querylengthlevi=query.length
                    concordancelevi=(levi*100)/objetdataitemtotal.nompluguine[i].length
                    
                    levi1=levenshtein(query,objetdataitemtotal.nompluguine[i])   
                    querylengthlevi1=objetdataitemtotal.nompluguine[i].length
                    concordancelevi1=(levi1*100)/query.length

                    levi2=levenshtein(queryrecherche,objetdataitemtotal.nompluguine[i])   
                    querylengthlevi2=objetdataitemtotal.nompluguine[i].length
                    concordancelevi2=(levi2*100)/queryrecherche.length

									if ( (concordancelevi==0) ){
										console.log("trouvé en 1 : "+concordancelevi+" "+objetdataitemtotal.nompluguine[i]);
										
										//itemtableau.push({'objetdataitemtotal.nompluguine[i]' : concordancelevi1})
										envoie=objetdataitemtotal.nompluguine[i]
										finemul(envoie,restant,garbage,nomplug)
										return false
									}

									if ( (concordancelevi2==0) ){
										console.log("trouvé en 2 : "+concordancelevi2+" "+objetdataitemtotal.nompluguine[i]);
										//itemtableau.push(objetdataitemtotal.nompluguine[i]+":"+concordancelevi2)
										envoie=objetdataitemtotal.nompluguine[i]
										finemul(envoie,restant,garbage,nomplug)
										return false
									};envoie=objetdataitemtotal.nompluguine[i]


if(tableaulevi>concordancelevi){tableaulevi=concordancelevi;tableau=envoie}
if(tableaulevi>concordancelevi1){tableaulevi=concordancelevi1;tableau=envoie}
if(tableaulevi>concordancelevi2){tableaulevi=concordancelevi2;tableau=envoie}
}//fin for
console.log("-------------- "+tableaulevi+" -------------------- "+tableau);
if(tableaulevi<=20){finemul(tableau,restant,garbage,nomplug);return false}
//retest query==motscles
									for(var i=0;i<longueurdataitemtotal;i++){
										if(query.search(objetdataitemtotal.nompluguine[i])>-1){
											console.log("trouvé en 4 : "+query+"* *"+objetdataitemtotal.nompluguine[i])
											restant=query.replace(objetdataitemtotal.nompluguine[i],'')
												
												envoie=objetdataitemtotal.nompluguine[i]
											restant=restant.split("  ");//restant=restant.replace(new RegExp("/","gi"),"")
											console.log(restant.length+" : valeur restant")
											//console.log("eee "+restant);
											finemul(envoie,restant,garbage,nomplug)
											return false 	
										}

										if(objetdataitemtotal.nompluguine[i].search(query)>-1){
											console.log("trouvé en 5 : "+objetdataitemtotal.nompluguine[i]+"* *"+query)
											restant=objetdataitemtotal.nompluguine[i];restant.replace(query,'');
											restant=restant.split("  ");//restant=restant.replace(new RegExp("/","gi"),"")
											console.log(restant.length+" : valeur restant en 2")
											//console.log(restant);
											envoie=objetdataitemtotal.nompluguine[i]
										finemul(envoie,restant,garbage,nomplug)
										return false 
										}

									}//fin for i

////test garbage
for(k=0;k<longueurnomplugins;k++){
 	if ( (objetnomplugins.nompluguine[k].search("garbage","gi")>-1) ){

		var urlgarbage = path.resolve('%CD%', './plugins/demarrage/item/'+objetnomplugins.nompluguine[k]+'item.json').replace('\\%CD%', '');//lis le nom des plugins
	    
	    dataurlgarbage=fs.readFileSync(urlgarbage,'utf8').toString() ;
	    objeturlgarbage = JSON.parse(dataurlgarbage) ;  longueururlgarbage = objeturlgarbage.nompluguine.length 

			for(var g=0;g<longueururlgarbage;g++){
				if((query.search(objeturlgarbage.nompluguine[g])>-1)){
					console.log("trouvé dans garbage "+query+" "+objeturlgarbage.nompluguine[g])
					garbage=1
					nomplug=objetnomplugins.nompluguine[k]
					nomplug=nomplug.replace('garbage','')
					envoie=query
					finemul(envoie,restant,garbage,nomplug)
					callback(); return false
				}//fin if
			}//fin for g

	}//if garbage

}//fin for k
//fin test  garbage

//emulate(query,queryrecherche )
emulatephrase(query,queryrecherche)
callback(); return false
}//fin fnct test objet

test(objet)

}// fin fnct emulate0




//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



function emulate(query,queryrecherche){//on emul si rien ==>match 3

// on test si un plug s'active au cas ou probleme xml si non match3


callback()
return false
}//fin fnct emulate

/////////////////////:
/////////////////////test avec phrase entière
function emulatephrase(query,queryrecherche){//on emul si rien ==>match 3
 //console.log(query)
//console.log(queryrecherche)
  
//console.log('pas de reco dans mes xml je test en direct avec emul si one-of ou xml bizard')

// on test si un plug s'active au cas ou probleme xml si non match3
            function xmlinconnuphrase(query,queryrecherche){
                      //le nom de sarah en vrai
                      try{
                          filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
                          content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                          nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;//console.log('le nom : '+nomappel)
                      }
                          catch (Exception) {
                            filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
                            content = fs.readFileSync(filePathcontent1,'utf8');ini = require('./ini/ini');fs = require('fs')
                           nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;//console.log('le nom : '+nomappel)
                          }
 //on prends la date
var date = new Date();
heures=date.getHours();minutes=date.getMinutes();secondes=date.getSeconds();year=date.getFullYear();month=(date.getMonth())+1;day=date.getDate()
if((month)<10){month='0'+month};if((day)<10){day='0'+day};if((heures)<10){heures='0'+heures}
if((minutes)<10){minutes='0'+minutes};secondes=(secondes);if((secondes)<10){secondes='0'+secondes}
ladate=year+'-'+month+'-'+day;letemps='['+heures+':'+minutes+':'+secondes;//console.log(ladate);console.log(letemps)
// on emul pour voir
url1 = 'http://127.0.0.1:8888/?emulate='+nomappel+' '+queryrecherche;console.log('on test pour vérifier si sarah a répondu à : '+url1)
request = require('request');

      function emulationphrase(ladate,letemps,queryrecherche,query) {console.log('on verifie dans le log')
          request({ url : url1 }, function (err, response, body){
			//on attends l'ecriture du log
              fs=require('fs')
                    try{
                        filePathfichier = path.resolve('%CD%', './bin/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                    }
                        catch (Exception) {
                          filePathfichier = path.resolve('%CD%', './client/AddOns/debug/'+ladate+'.log').replace('\\%CD%', '');fichier=fs.readFileSync(filePathfichier,'utf-8')
                        }
              longuerstring=fichier.length;//console.log(longuerstring);
              str = fichier;toSearch=letemps;
              lo='';pos=str.indexOf(toSearch)
 //console.log(letemps+"rrrrrrrrrrrr")
                   if(pos==-1){match3(query,queryrecherche);return false}
              	   lon=str.length
    
                  for( i = pos; i < lon ; i++) {
                      lo=lo+str[i]
                  };//fin for i
  //  console.log(pos);console.log(lon);console.log('rrrrrrrrr')
              if(lo.indexOf('RECOGNIZED Speech:')>-1){console.log("émulation trouvée donc plugin actif on s'arrete la");callback();return false}; 
              console.log('pas d émulation trouvée')
                  match3(query,queryrecherche)
                  return false
        
            });//fin request
        
        }//fin emulation
emulationphrase(ladate,letemps,queryrecherche,query)
}//fin fnct xmlinconnu

xmlinconnuphrase(query,queryrecherche)//appel fnct xmlinconnu
//fin screakspeak

callback()
return false
}//fin fnct emulate
/////////////////////////////////:
////////////////:fin test phrase entière





///////////////////////////////////////////////////////////////////////////////////////////////////////
//on connais la phrase recu==phrase d'un plug

//////////////////////////////////////////////////////////////////////////////////

// on traite la phrase recu

function ask(query) {
 ScribeAskMe("Que recherche tu", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
      if (phrase!=='undefined') {
        
        msg = phrase.trim();
      
        Match(query,msg)
      }
      else if (answer==false) {
        ScribeSpeak("Je ne suis pas sûr que tu aies répondu à ma question !", function () {
          ask(query);
        });
      }
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    }, {'timeout':maConfig.timeout_msec, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );
}//fin fnct ask


//////////////////////////////////////////////////////////////////








function Match(query,msg){
reponse=msg;reponse2=''; reponse3=''; match=query.search(new RegExp("\\b" + reponse + "\\b","gi"))

	if(match<0){
	    reponse=reponse.toLowerCase(); query=query.toLowerCase();
	    match=query.search(new RegExp("\\b" + reponse + "\\b","gi"));
	}

	if(match<0){
	    reponse=reponse.toUpperCase();
	    match=query.search(new RegExp("\\b" + reponse + "\\b","gi")); 
	}

	if(match>-1){
	    //console.log('on a matché en 1')
	    reponselength=(reponse.length)
	    querylength=(query.length)

	        for (i=0;i<match;i++){reponse2=reponse2+query[i]}
	            
	        for (i=match;i<querylength;i++){reponse3=reponse3+query[i]}

	        ScribeSpeak(msg, function() {Match1(query,msg,reponse2);callback();return false});
	       
	}//fin if

	else{ScribeSpeak('la phrase ne correspond pas, je sort') ; callback() ; return false }

return false
}//fin fnct Match1

///////////////////////////////////////////////////



function match3(query,queryrecherche){// on va tester le pourcentage
	//console.log(queryrecherche+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"+query+",,,,,,,,"+phrasedepart)
SARAH.run('Learning', { 'phrasedepart' : phrasedepart , 'phrasesmotscles' : queryrecherche});
callback();return false
}//fin match3

////////////////////////////////////////////////////

//SARAH.play(path.resolve('%CD%', './plugins/cortana/r2d2.wav').replace('\\%CD%', ''),function() {
xmlinconnu(query,reco)
//c'est la que l'on commence


 
}//fin if

    if ( data.reco.search("Siri") >-1){ScribeSpeak("tu ma appelé siri, et puis quoi encore, pourquoi pas cortana")}
callback();return false
}//fin try

  catch (err) {console.log(err)}
callback();return false

}//fin export
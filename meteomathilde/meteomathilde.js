var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){

/////variable
var configcortana = config.modules.cortana ; var nommathilde = configcortana.nommathilde;  

var maConfig = config.modules.scribe; SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak ; SCRIBE.activePlugin('meteomathilde');
var ask=JSON.stringify(SARAH.context.scribe.lastReco).replace(new RegExp(nommathilde,"gi"),"");var ask=JSON.parse(ask);//console.log("recu de scribe en 1 "+ask)
request = require('request');cheerio = require('../modules/cheerio');
SCRIBE.activePlugin('MéTéo Mondiale');
try{
var rgxp = /météo (.+)/i; var match1 = ask.match(rgxp);
var ask="météo "+match1[1]
}

catch(err){ScribeSpeak('pas de météo connus');console.log("pas de météo");callback();return false}

var DateRecherché=0
var url='https://www.google.fr/search?q='+ask
//console.log("on recherche l'url : "+url)
	


if(url.search('demain')>-1){var DateRecherché=2;TempératureRecherché=2}
if(url.search('après-demain')>-1){var DateRecherché=3;TempératureRecherché=4}



if(DateRecherché!==0){//pour demain ou après demain
var request = require('request');

   request({ 'uri' : url ,'headers':{'Accept-Charset': 'utf-8'}, 'encoding':'binary'}, function (err, response, body){
   
    var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });

	var leresultmeteo=($('.g span.wob_t').eq(TempératureRecherché).text())+","
	var leresultmeteo=leresultmeteo+($('img').eq(DateRecherché).attr('title'))+",,,,"
	//console.log($('img').eq(i).attr('title'))//nuage...
	console.log(leresultmeteo)
	
	var nomduplugin="meteomathilde"//ou autre nom....
	var valeurduspeak=leresultmeteo
	SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
												//SCRIBE = SARAH.context.scribe;
												//SCRIBE.texteplugin(valeurduspeak);
												//console.log(valeurduspeak,'eeeeeeeeee',valeurduspeak.search("Pluie"))
												if(valeurduspeak.search(/Ora/gi)>-1){var icone="icones/Orages.gif",myIPretour}
												if(valeurduspeak.search(/Pluie/gi)>-1){var icone="icones/Pluie.gif",myIPretour}
												if(valeurduspeak.search(/Nuageux/gi)>-1){var icone="icones/Variable.gif",myIPretour}
												if(valeurduspeak.search(/Soleil/gi)>-1){var icone="icones/Soleil.gif",myIPretour}	
												if(valeurduspeak.search(/couvert/ig)>-1){var icone="icones/Couvert.gif",myIPretour}
												if(valeurduspeak.search(/clair/ig)>-1){var icone="icones/Clair.gif",myIPretour}
												if(valeurduspeak.search(/neige/ig)>-1){var icone="icones/Neige.gif",myIPretour}	
												if(icone==undefined){var icone="Undefined.gif",myIPretour}	
												SCRIBE.icone(icone,myIPretour);console.log(icone+"icone envoyé"+myIPretour+"dd")
												


})
callback();return false
}



///////////////////////////////////////////////////////////////////alerte météo
request = require('request');cheerio = require('cheerio');

var urlchercher=ask
 request({'uri':'https://www.google.fr/search?q='+urlchercher+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei', 'headers':{'Accept-Charset': 'windows-1252'},'encoding':'binary' }, function (error, response, html) {
             var $ = cheerio.load(html);
             var urlchercher = $('.g .r a').text().trim();//.g .s cite
             var urlchercher=urlchercher.replace(new RegExp('[^0-9(]', 'ig'),";").split(';')
//console.log(urlchercher)

                  for(var x=0;x<urlchercher.length;x++){//console.log(urlchercher[x])
                    if(urlchercher[x].length==6){
                    	var urlchercherx=urlchercher[x]
                    	var urlchercherx=urlchercherx.replace('(',"")
                    	console.log("code postal : "+urlchercherx);
                    	alerte(urlchercherx,url);
                    	return false
                    }//fin if
                  }//fin for
                  
                  if(x==urlchercher.length){
                  	urlchercherx='00000' ;alerte(urlchercherx,url);
                  	return false
                  }
                  return false
  });//fin request



function alerte(ville,url){
   request({ 'uri' : 'http://alerte.vigilance-meteo.fr/getwarning_fr.php?plz='+ville+'&uwz=UWZ-FR&lang=fr', 'headers':{'Accept-Charset': 'windows-1252'} }, function(error, response, html){

       var $ = cheerio.load(html);

var scrapinfo0=$("#content > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").text() ; //console.log(scrapinfo0)

  var scrapinfo=$("#content > div:nth-child(5)").text() ; //console.log(scrapinfo)
  scrapinfo0=scrapinfo0+"."+scrapinfo
  console.log(scrapinfo0)
if(scrapinfo0=="."){scrapinfo0="pas d'alerte"; console.log("pas d'alerte météo")}

meteodujour(url,scrapinfo0)
callback(); return false
    })//fin request  
}//fin fnct alerte ville
////////////////////////////////////////////////////////////////////////fin alerte météo























function meteodujour(url,scrapinfo0){

	request({ 'uri' : url, 'headers':{'Accept-Charset': 'utf-8'}, 'encoding':'binary' }, function(error, response, html){
			 var $ = cheerio.load(html); var resultmeteo=''
//var url1 =$('div.g.tpo.knavi.obcontainer.mod').text();console.log("eeeeeeeee "+url1)

 					$('div:nth-child(1)').each(function(i, element){var meteo = $(this);
//console.log(meteo.text())
  						if (i==20){
    						var meteo=meteo.text()
    						var matchmeto=(meteo.search(new RegExp("\\b" + '%' + "\\b","gi")))
      
      							if (matchmeto==-1){console.log('pas de météo');ScribeSpeak('pas de météo connus');callback();return false}//fin if
        							
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
										
//ScribeSpeak(scrapinfo0)
											var nomduplugin="meteomathilde"//ou autre nom....
											var valeurduspeak=leresultmeteo+","+scrapinfo0
											SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
										//ScribeSpeak(leresultmeteo)
										//SARAH.run('mathildedico', { 'phrase' : leresultmeteo})
												console.log(leresultmeteo)
												SCRIBE = SARAH.context.scribe;
												SCRIBE.texteplugin(valeurduspeak);
												//console.log(valeurduspeak,'eeeeeeeeee',valeurduspeak.search("Pluie"))
												if(valeurduspeak.search(/Ora/ig)>-1){var icone="icones/Orages.gif",myIPretour}
												if(valeurduspeak.search(/Pluie/ig)>-1){var icone="icones/Pluie.gif",myIPretour}
												if(valeurduspeak.search(/Nuageux/ig)>-1){var icone="icones/Variable.gif",myIPretour}
												if(valeurduspeak.search(/Soleil/ig)>-1){var icone="icones/Soleil.gif",myIPretour}
												if(valeurduspeak.search(/couvert/ig)>-1){var icone="icones/Couvert.gif",myIPretour}
												if(valeurduspeak.search(/clair/ig)>-1){var icone="icones/Clair.gif",myIPretour}
												if(valeurduspeak.search(/neige/ig)>-1){var icone="icones/Neige.gif",myIPretour}	
												if(icone==undefined){var icone="Undefined.gif",myIPretour}	
													console.log('icone : '+icone)
												SCRIBE.icone(icone,myIPretour);
												SCRIBE.activePlugin('MéTéo Mondiale');




										callback();return false
  						}//fin if i==20
					})//fin each $
	})//fin request
}//fin fnt meteodujour

}//fin export
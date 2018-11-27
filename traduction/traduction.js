var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){

 SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak;
 SCRIBE.activePlugin('traduction');

var nomchercher=JSON.stringify(SARAH.context.scribe.lastReco) ; var nomchercher=JSON.parse(nomchercher)

var rgxp = /traduction de (.+)/i;var  nomchercher = nomchercher.match(rgxp);
var  nomchercher=nomchercher[1]
 //console.log(match[1])
 //nomchercher=data.chercher;
console.log('traduire : *'+nomchercher+'*')
fs = require('fs') ; exec = require('child_process').exec; 
var maConfig = config.modules.scribe; util = require('util'); path = require('path');cheerio = require('../modules/cheerio');



anglaisfrancais= function(nomchercher){
	
	var nomchercher=nomchercher.replace(" ","+")
	var nomchercher = nomchercher.trim();var  nomchercher =nomchercher.toLowerCase()
	var nomcherchercomplet='https://translate.google.com/?q='+nomchercher+'&sl=auto&tl=fr#en/fr/'+nomchercher
	//nomcherchercomplet='https://translate.google.com/?q='+nomchercher+'&sl=en&tl=fr#en/fr/'+nomchercher
	//console.log(nomcherchercomplet)

	var url=nomcherchercomplet
		//#result_box > span <div class="goog-menuitem-content" unselectable="">merci</div>#result_box > span:nth-child(1)
		request({ 'uri' : url, 'headers':{'Accept-Charset': 'utf-8'}, 'encoding':'binary' }, function(error, response, html){//ma fonction...});﻿

			    var $ = cheerio.load(html, { xmlMode: false, ignoreWhitespace: false, lowerCaseTags: false });
						var traduction=$('#result_box > span:nth-child(1)').text()
						// var traduction1=$('div.goog-menuitem-content > span:nth-child(1)').text();console.log("rrrrrrrrrrrrrrrrr"+traduction1)

						var traduction=traduction.toLowerCase()
						nomchercher=nomchercher.toLowerCase()
						nomchercher=nomchercher.replace("+"," ")
							//console.log("***"+traduction)
							//console.log("***"+nomchercher)
							if( (traduction==nomchercher) || (traduction=="") ){
								
											//console.log('alerte  francais anglais');
													francaisanglais(nomchercher)
											callback();return false
							} 
										//}
							
							//console.log('anglais francais') ;
							ScribeSpeak(traduction)
								callback();return false


									//	}//fin if
							//})//fin each

         });//fin request
 
} //fin fnct anglaisfrancais

francaisanglais= function(nomchercher){

 var nomchercher = nomchercher.trim(); 
 var nomcherchercomplet='https://translate.google.com/?q='+nomchercher+'&sl=fr&tl=en#fr/en/'+nomchercher

 //console.log(nomcherchercomplet);

		request(nomcherchercomplet, function (error, response, html) {
    		var $ = cheerio.load(html, { xmlMode: false, ignoreWhitespace: false, lowerCaseTags: false });
					var traduction=$('#result_box > span:nth-child(1)').text()
					//console.log("***"+traduction)
					ScribeSpeak(traduction)
					callback();return false
         });//fin $

} //fin fnct anglaisfrancais

anglaisfrancais(nomchercher)
}
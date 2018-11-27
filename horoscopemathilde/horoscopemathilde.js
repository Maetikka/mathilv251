var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config,SARAH){

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak; 
SCRIBE.activePlugin('horoscope mathilde');SCRIBE.icone("icones/horoscope.png",myIPretour);
var phrasehoroscope=JSON.stringify(SARAH.context.scribe.lastReco);
var phrasehoroscope=JSON.parse(phrasehoroscope).toLowerCase()

//phrasehoroscope=data.phrasehoroscope.toLowerCase();
 //console.log('on a recu horoscope'+phrasehoroscope)
var config = config.modules.horoscopemathilde; var signe = config.signe.toLowerCase();//default

function signes(phrasehoroscope,signe){
if (phrasehoroscope.search('cancer')>-1){signe='cancer'}
if (phrasehoroscope.search('lion')>-1){signe='lion'}
if (phrasehoroscope.search('scorpion')>-1){signe='scorpion'}
if (phrasehoroscope.search('balance')>-1){signe='balance'}
if (phrasehoroscope.search('poisson')>-1){signe='poissons'}
if (phrasehoroscope.search('vierge')>-1){signe='vierge'}
if (phrasehoroscope.search('bélier')>-1){signe='belier'}
if (phrasehoroscope.search('taureau')>-1){signe='taureau'}
if (phrasehoroscope.search('gémeaux')>-1){signe='gemeaux'}
if (phrasehoroscope.search('sagittaire')>-1){signe='sagittaire'}
if (phrasehoroscope.search('capricorne')>-1){signe='capricorne'}
if (phrasehoroscope.search('verseau')>-1){signe='verseau'}

scrap(signe)
}//fin fnct


function scrap(signe){

//console.log(signe);
 request = require('request'); cheerio = require('cheerio');

//var url = 'http://www.horoscope-gratuit.org/horoscope-'+signe+'.php';
 var url='https://www.horoscope.fr/horoscopes/horoscope_'+signe+'.html'
   request({ 'uri' : url , 'headers':{'Accept-Charset': 'utf-8'} }, function (err, response, body){
    		
    		var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });
   			//var a= $('div:nth-child(1)').text();
   			var a= $('div.text-wrapper:nth-child(1) > p:nth-child(3)').text()
   			console.log(a)
			var b=''

				for(var i=a.search(':')+1;i<a.length;i++){var b=b+a[i]} 
			//	holo=path.resolve('%CD%','./plugins/holo').replace('\\%CD%', '')
//var exec = require('child_process').exec;
//SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --repeat --no-audio --no-osd --no-video-title-show '+holo+'/holoparle.mp4"')

				var nomduplugin="horoscopemathilde"//ou autre nom....
				var valeurduspeak='pour les '+signe+' ; '+b//phrase à dire
				SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});

//SCRIBE = SARAH.context.scribe;
//SCRIBE.texteplugin(valeurduspeak);
//SCRIBE.icone("icones/horoscope.png");
//SCRIBE.activePlugin('HOROSCOPE');
				//ScribeSpeak('pour les '+signe+' ; '+b) 
				callback() ; return false
	})//fin request

}//fin fnct scrap

signes(phrasehoroscope,signe)

}    

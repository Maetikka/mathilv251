var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;


exports.action = function(data, callback, config, SARAH){
	
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; SCRIBE.activePlugin('sms');ScribeSpeak = SARAH.ScribeSpeak;
textemathilde=JSON.stringify(SARAH.context.scribe.lastReco) ; texte=JSON.parse(textemathilde).toLowerCase()
configcortana = config.modules.cortana ; nommathilde = configcortana.nommathilde;//default

//texte=texte.replace(new RegExp('envoie un texto à '+data.destinataire, 'ig'),"") ; texte=texte.replace(new RegExp('disant', 'ig'),""); texte=texte.replace(new RegExp(nommathilde, 'ig'),"")
//		console.log("11111"+data.destinataire+"22222222222"+data.numero+"333333333333333333"+texte)
	//Mettre debug à true si le plugin ne fonctionne pas
//	texte=texte.trim()
var prenom = data.destinataire;
var confige = config.modules.smsmathilde;
  
// Fonction qui envoie le message       

function send(texte,prenom,numero,confige){

		// On structure la requête à envoyer
		var request = require('request');
		var body = 	{
			push : {
				'conversation_iden'	: numero,
				'message'			: texte,
				'package_name'		: 'com.pushbullet.android',
				'type'				: 'messaging_extension_reply',
				'target_device_iden': confige.target_device_iden,
				'source_user_iden'	: confige.source_user_iden
			},
			type : 'push'
		}
			
				var options = {
					method: 'POST',
					url: 'https://api.pushbullet.com/v2/ephemerals',
					headers: {
						'Content-Type':  'application/json',
						'Access-Token': confige.access_token
						},
					json: true,
					body: body
				};
			
		
			// On envoi la requête
			request(options, function (err, response, body){
				if ( (typeof err=='null') || (typeof response == 'undefined') ) {
					console.log('No Communication!');
					console.log('answer error!');ScribeSpeak("un problème est survenu")
					callback()
					return false;
				}
				else if  (response.statusCode != 200) {
					console.log('answer error!');ScribeSpeak("un problème est survenu")
					callback()
					return false;
				}
				else if  (response.statusCode == 200) {
						console.log("Message à " + data.destinataire + " envoyé.");
						
						var nomduplugin="smsmathilde"//ou autre nom....
						var valeurduspeak="Message à " + data.destinataire + " envoyé."//phrase à dire
						
//if(alarmeaudiospeak=='off'){
						SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
//}


						//ScribeSpeak("Message à envoyé à " + data.destinataire)
						callback() ;return false;
				}
			});
	callback()		
	return false;
}	// fin fnct send



function ask(prenom,confige) {
 ScribeAskMe("je t'écoute", [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {
		     // console.log(phrase+question)
    		 // if ( (phrase!=='undefined')&&(question=="je t'écoute") ){
			  var texte=phrase
			 // var question="dois je envoyer ?"
			 // ask(prenom,confige,question,texte)
			 
			 // }
		      if (phrase!=='undefined') {
		      // var texte=phrase
		       send(texte,prenom,numero,confige)
		       
		      }

		      else if (answer==false) {
				        ScribeSpeak("Je ne suis pas sûr que tu aies répondu à ma question !", function () { ask(prenom,confige); });
      		  }
      
      else ScribeSpeak("Tu n'as rien répondu. Tant pis.");//console.log(answer+phrase+match+wholeMatch);
    
    }, {'timeout':10000, 'retryIfNoMatch': "Je ne suis pas sûr d'avoir compris. Peux-tu répéter ? quel est ton âge ?", 'essais': 2}
  );
}//fin fnct ask



function test(prenom,confige){
				

				// On vérifie si toutes les informations ont été renseignées dans le fichier .prop
				if (!confige.access_token || !confige.target_device_iden || !confige.source_user_iden){
					console.log("Manque des informations");
					ScribeSpeak("remplissez le fichier point prop sans le dossier")
						callback()		
						return false;
				}
				else {
					ask(prenom,confige);
					return false
				}
}//fin fnct test
//console	.log("44444444444444444444"+data.push)//on arrive de la liste de course
if ((data.texte!=="undefined")&&(data.push=="liste")){data.destinataire=data.qui
	//console.log('recue de course');console.log("***"+data.texte+data.qui+data.numero)
	 send(data.texte,data.qui,data.numero,confige) ;
	  callback();  return false
	}

var numero=data.numero
test(prenom,confige)// c'est parti


}
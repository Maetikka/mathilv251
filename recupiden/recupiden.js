
exports.init = function(SARAH,config) {
try{
var XMLHttpRequest = require("./XMLHttpRequest").XMLHttpRequest;
//ar xhr = new XMLHttpRequest();


    var requete1 = new XMLHttpRequest(); // creer un objet de requete
    var url1 = "https://api.pushbullet.com/v2/users/me";
    var requete = new XMLHttpRequest(); // creer un objet de requete
    var url = "https://api.pushbullet.com/v2/devices";
 




    requete1.open("GET", url1, true); // On construit la requete
    requete1.setRequestHeader("Access-Token",'o.xxx');
    requete1.send(null); // On envoie !
    requete1.onreadystatechange = function() { // on attend le retour
        if (requete1.readyState == 4) { // Revenu !
            if (requete1.status == 200) {// Retour s'est bien passe !
            	//console.log('*'+requete1+'*')
                 var jsonUser = JSON.parse(requete1.responseText)
                //console.log(jsonUser)
                source_user_iden = jsonUser.iden;
				console.log("source_user_iden "+source_user_iden)
            } else { // Retour s'est mal passe :(
                //alert(requete1.status, requete1.statusText);
                // messages.innerHTML += requete1.statusText;
            }
        }
    };
    
     /////////////// 
    //return false
//ujveuvAYMyO
//ujveuvAYMyOsjAsoeMFET6

    requete.open("GET", url, true); // On construit la requete
    requete.setRequestHeader("Access-Token",'o.xxx');
    requete.send(null); // On envoie !
    requete.onreadystatechange = function() { // on attend le retour
        if (requete.readyState == 4) { // Revenu !
            if (requete.status == 200) {// Retour s'est bien passe !
                 var jsonDevice = JSON.parse(requete.responseText)
                 //devices.innerHTML = "";
                 //console.log(jsonDevice)
               

//devices.innerHTML = "";
                 for (var i=0;i<jsonDevice.devices.length;i++){
                 	if ((jsonDevice.devices[i].nickname != undefined)&&(jsonDevice.devices[i].active!= 'false')){
                  	//var tr = document.createElement("tr");
                    console.log("nom ou est instal : " +jsonDevice.devices[i].nickname)
                    console.log("target_device_iden : "+jsonDevice.devices[i].iden)
                    //var tdNick = document.createElement("td");
                    //tdNick.textContent = jsonDevice.devices[i].nickname;
                    //tr.appendChild( tdNick );
                    
                   // var tdIden = document.createElement("td");
                   // tdIden.textContent = jsonDevice.devices[i].iden;
                    //tr.appendChild( tdIden );
                    
                   // devices.appendChild(tr);
                  }
                 }








                 //var json = JSON.parse(requete.responseText);
                 //user_iden.innerHTML = json.iden;
            } else { // Retour s'est mal passe :(
                //alert(requete.status, requete.statusText);
                // messages.innerHTML += requete.statusText;
                console.log("erreur dans le Access-Token")
            }
        }
    };
//}

}
catch(err){}
callback()
return false


}







var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH){

var exec = require('child_process').exec;
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak ; SCRIBE.activePlugin('reveil1');

//on arrete le reveil si demandé
var finreveil = data.finreveil
var proces = '%CD%/plugins/reveil1/bin/finreveil.bat'

  if (finreveil==1){
                var child = exec(proces,
                        function (error, stdout, stderr) {

                          var nomduplugin="reveil"//ou autre nom....
                          var valeurduspeak=''//phrase à dire
                          SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
                            //ScribeSpeak("bonne journée");
                            //console.log(process);
                            callback(); return false
                        }
                );
  }//fin reveil==1

else{

    reponse=JSON.stringify(SARAH.context.scribe.lastReco);
    heurereveil=reponse.replace(new RegExp('[^0-9]', 'ig')," ").trim()
     
    reponse=reponse.replace(new RegExp('[^0-9]', 'ig'),"")
                  

                 if(reponse==""){
                    ScribeSpeak("précise un horaire, merci");
                    callback(); return false
                 }
                  
 
                      var date = new Date();
                      var heure =date.getHours();
                      var minute =date.getMinutes();
                      query=heure+''+minute
                     //query=heure+' '+minute
                      console.log('il est : '+ query)
                  
                if(reponse.length==1){tempsreveil=reponse*3600000}// que heure//8h
                if(reponse.length==2){tempsreveil=reponse*3600000}  //que heure//18h
               
                if(reponse.length==3){temp=reponse[0]*3600000;
                  tempsreveil=temp;//console.log(temp)
                  temp=reponse-reponse[0]*100;//console.log(temp)
                  temp=temp*60000;//console.log(temp)
                  tempsreveil=tempsreveil+temp
                } // 1 heure + 2 minutes//1h18
               
                if(reponse.length==4){temp=reponse[0]*36000000+reponse[1]*3600000
                  tempsreveil=temp;//console.log(temp)
                  temp=reponse-reponse[0]*1000;//console.log(temp)
                  temp1=reponse[1]*100;//console.log('rr'+temp1)
                  temp=temp-temp1;//console.log('r'+temp)
                  temp=temp*60000;//console.log(temp)
                  tempsreveil=tempsreveil+temp
                }// 2 heure + 2 minutes  

                reponse1=query
                reponse1=(reponse1.replace(new RegExp('[^0-9]', 'ig')," ")).trim()
 
                console.log('reveil à : '+ heurereveil)
             
                    ScribeSpeak("réveil programmé à "+heurereveil.replace(" "," heure "))

    //on recupere les data du xml
    var temps = tempsreveil; var tempsname = reponse1

    //heure actuell ::si <24 ou >24v 
    // si <24h alors(24-heure actuel)+heure reveil
    // si >24h alors heure reveil-heure actuel

    // on récupére le temps en ms
    var date = new Date(); var heure =date.getHours(); var minute =date.getMinutes();

    ////heure et minute en ms
    //si heures>0 alors heures*3600000ms  
       if (heure > 0){ heure = heure*3600000}
    //si minutes>0 alors minutes*60000ms
       if (minute > 0){ minute = minute*60000}
        //heure+minute en ms
      var heureminute = heure+minute
    //si reveil < heure actuel alors (24h-heure actuel)+heure reveil else >24 alors reveil-heure actuel
      var tempsfinale=86400000-heureminute

      if (temps < heureminute) {tempsfinal = parseInt(tempsfinale) + parseInt(temps)}
      else {tempsfinal = temps-heureminute} 

    //on reset le timeout
         // clearTimeout(function() {var child = exec(process); }, tempsfinal);

lieuxreveil=function(frg,tempsfinal){

      setTimeout(function() {//PiecesInterphone=lieuxreveil
              
            console.log(myIPretour+frg+"éssssssssssssssssssss")  

            
PiecesInterphone=frg 

ScribeSpeak("reveil demandé")
console.log("Action reveil")
var dd=[]
dd.push('C:\\Users\\famille\\Music\\pop-rock\\Elmer Food Beat\\cd1\\05  Daniela.mp3')
dd.push("C:\\Users\\famille\\Music\\pop-rock\\Elmer Food Beat\\cd1\\06  Le plastique c'est fantastique.mp3")
            //  var child = exec(process); 
SCRIBE.musique(dd,frg);
//PiecesInterphone=""
  console.log(myIPretour+PiecesInterphone+frg+"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
 PiecesInterphone="" 
  callback()
  return false

}, tempsfinal);
}
    // on fait appel à la fonction minuteur // on créer la fonction  pour le mp3
          //var process = '%CD%/plugins/reveil1/bin/reveil.bat';
//lieuxreveil=myIPretour
//console.log(lieuxreveil)

var frg=myIPretour
lieuxreveil(frg,tempsfinal)
      
    callback();return false 

}//fin else finreveil==1

}
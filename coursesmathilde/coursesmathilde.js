var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(xml, callback, config, SARAH) {

  var config = config.modules.coursesmathilde; path = require('path');
  var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
  var filePath_liste = path.resolve('%CD%', './plugins/coursesmathilde/coursesmathilde_liste.txt').replace('\\%CD%', ''); // Chemin vers courses_liste.txt
  var filePathe = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', ''); 
  var filePathe1 = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathildememoire.json').replace('\\%CD%', '');
 
  var fs = require('fs');

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('LISTE DE COURSES');
SCRIBE.icone("icones/course.png",myIPretour);
//SCRIBE.activePlugin('LISTE COURSE');
if (xml.item != null) {//console.log("recu : "+xml.item)
          
    var query=JSON.stringify(SARAH.context.scribe.lastReco) ; var query=JSON.parse(query)
   
    var rgxp = /courses (.+)/i; var query = query.match(rgxp);
   //console.log(query+" : recus de scribe")
   var query=query[1]

        if(query==""){callback(); return false}

    fs.readFile(filePathe, function(err, data) { // read file to memory 
          var objet = JSON.parse(data);var longueur = objet.courses.length;var jsonStr = JSON.stringify(objet);var cd=(objet.courses[1]);

    // lis jsoncourses memoire
              fs.readFile(filePathe1, function(err, data) { // read file to memory 
                    var objet1 = JSON.parse(data);var longueur1 = objet1.courses.length;var jsonStr1 = JSON.stringify(objet1);var cd1=(objet1.courses[1]);
         // on ecris le xml
                          if (jsonStr.indexOf(query) > -1  ){ScribeSpeak (query + ", est déja present dans les courses");}

                          else {
     
                              objet.courses.push({item: query}); var new_jsonStr = JSON.stringify(objet);
          
                                  fs.writeFile(filePathe,new_jsonStr , function (err) {
                                    //console.log("valeur rajoutée json coursesmathilde: " + query);
                                    ScribeSpeak ("j'ai rajouté "+query+" à la liste des courses")
                                  });//fin fs write
 var tempcourse=""
    for(var i=0; i < objet.courses.length ;i++){var tempcourse=tempcourse+objet.courses[i].item+","}
    //SCRIBE = SARAH.context.scribe;
    SCRIBE.texteplugin("course"+tempcourse);//SCRIBE.icone("icones/course.png");
    //SCRIBE.activePlugin('LISTE COURSE');
                              if (jsonStr1.indexOf(query) > -1  ){callback()}

                              else {
                                objet1.courses.push({item: query}); var new_jsonStr = JSON.stringify(objet1);
                               // fs.writeFile(filePathe1,new_jsonStr , function (err) {
                                 // console.log("valeur rajoutée json coursesmathildememoire: " + query);
                                //});
                                callback(); return false
                              }//fin else
                          }//fin else
      
                })//fin read memoire
    });//fin fs read 
   
    callback(); return false
}//fin if xml.item!!
 
 ////////////enleve

  if(xml.item_out != null) {

      var query=JSON.stringify(SARAH.context.scribe.lastReco) ; var query=JSON.parse(query)
      var rgxp = /enlève de la liste des courses (.+)/i ; var query = query.match(rgxp) ; var query=query[1]
 
      if(query==""){callback(); return false}

      var query=query.trim() 
      var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
 
          fs.readFile(filePath, function(err, data) { // read file to memory
              if (err) throw err;
                  var objet = JSON.parse(data);var jsonStr = JSON.stringify(objet);  
                      if (jsonStr.indexOf(query) > -1  ){
   
                            var removed =  objet.courses.splice(jsonStr.indexOf(query) ,1);

                                 for (var i = 0; i < objet.courses.length ;i++){  // look for the entry with a matching `code` value
 
                                    if (objet.courses[i].item == query){

                                        objet.courses.delete({item: query});var new_jsonStr = JSON.stringify(objet);
                                        fs.writeFile(filePath, new_jsonStr, function (err) { // ecrit dans le fichier courses l'objet + enleve la valeur
                                         if (err) throw err;
   
                                           ScribeSpeak("j'enlève : " + query+" de la liste des courses");//callback(); return false
    
                                        }); //fin fs write
                                    }//fin if     
                                  }//fin for
                                  var tempcourse=""
                                  for(var i=0; i < objet.courses.length ;i++){var tempcourse=tempcourse+objet.courses[i].item+","}
                                            //SCRIBE = SARAH.context.scribe;
                                            SCRIBE.texteplugin("course"+tempcourse);//SCRIBE.icone("icones/course.png");
                                            //SCRIBE.activePlugin('LISTE COURSE');
                      }//fin if

                      else {ScribeSpeak("objet inexistant");callback(); return false}
   
 
	         });//fin fs read
	 
      callback(); return false
  }//fin if 
    
 ////////////////////////////////////////
 
 
// Envoie en notification push

if (xml.push != null){
  
  //console.log("Destinataire = "+ xml.qui);
  fs.writeFile(filePath_liste,"","UTF-8");  //met le fichier courses_liste.txt a zéro 

    fs.readFile(filePath,"UTF-8", function(err, data) { // read file to memory
      
      if (err) throw err;
      var objet = JSON.parse(data);
      var longueur = objet.courses.length; // le nombre de valeurs dans le fichier courses.json
      var jsonStr = JSON.stringify(objet); // transforme l'objet en texte
      var utilisateur = xml.qui
      //console.log("Nombre de valeurs :"+longueur);
          
          if ( longueur > 0){
   
              for (var i = 0; i < objet.courses.length ;i++){  
   
                    fs.appendFileSync(filePath_liste, objet.courses[i].item+"\n","UTF-8", function (err) { // ecrit dans le fichier courses l'objet + la nouvelle valeur
                    if (err) throw err;         
                    });//fin appendfile
              }//fin for
          
              fs.readFile(filePath_liste,"UTF-8", function(err, data2) { // Données à envoyer
                 if (err) throw err;
      
                      SARAH.run('smsmathilde', { 'qui' : xml.qui , 'numero' : xml.numero , 'texte' : "Liste des courses : "+data2 , 'push' : xml.push})

              });//fin fsread

              return false
          }//fin if

        else { ScribeSpeak( "Il n'y a pas de liste de courses");}

     });//fin fsread
  
callback(); return false

}//fin if

//////////////////////////////////////////////////////////////////////

//Donne la liste des courses 
if (xml.dismoi != null){
  var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
    
    fs.readFile(filePath, function(err, data) { // read file to memory
    if (err) throw err;
   
      var objet = JSON.parse(data);
      var longueur = objet.courses.length; // le nombre de valeurs dans le fichier courses.json
      var jsonStr = JSON.stringify(objet); // transforme l'objet en texte

          if ( longueur > 0){
   var tempcourse=""
              for (var i = 0; i < objet.courses.length ;i++){  // look for the entry with a matching `code` value
                    //ScribeSpeak(objet.courses[i].item+",");//SCRIBE.activePlugin('coursesmathilde')
                    //callback();
                    var tempcourse=tempcourse+objet.courses[i].item+","
              }//fin for
//SCRIBE = SARAH.context.scribe;
ScribeSpeak(tempcourse)
SCRIBE.texteplugin("course"+tempcourse);//SCRIBE.icone("icones/course.png");
//SCRIBE.activePlugin('LISTE COURSE');
          }//fin if
 
          else { ScribeSpeak('La liste des courses est vide');
          //SCRIBE = SARAH.context.scribe;
          SCRIBE.texteplugin("courseliste vide");//SCRIBE.icone("icones/course.png");
          //SCRIBE.activePlugin('LISTE COURSE');
            callback();return false
           }
    });//fin fsread
    callback(); return false

}//fin if
//////////////////////////////////////////////////////////////

// vide la liste des courses
	
	if (xml.vide != null){
     var filePath = path.resolve('%CD%', './plugins/mémoiredemathilde/coursesmathilde.json').replace('\\%CD%', '');
		 fs.writeFileSync(filePath,'{"courses":[]}',"UTF-8"); // Remet le fichier courses.json a zéro pour une utilisation future
	   ScribeSpeak('suppression de la liste de course');
          //SCRIBE = SARAH.context.scribe;
          //SCRIBE.texteplugin("courseliste vide");
          //SCRIBE.icone("icones/course.png");
          //SCRIBE.activePlugin('LISTE COURSE');
     callback(); return false
	}//fin if

callback(); return false

}
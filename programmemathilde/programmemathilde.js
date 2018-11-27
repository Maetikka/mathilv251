var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE; 


exports.init = function(data, callback, config,SARAH) {



var files="" ; fs = require('fs') ; path = require('path') ; var chemin="C:/program files" ; var chemin1="c:/program files (x86)"////changer si cela beug
recursiveReadSync = require(path.resolve('%CD%', './plugins/modules/recursiveprogramme').replace('\\%CD%', '')), files  ;

var colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))
console.log("le chemin des logiciels est : "+chemin+" changer dans le :   programmemathilde.js    :si cela beug".red)

try {
 var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
  var content = fs.readFileSync(filePathphrasescles1,'utf8') 
  console.log("fichier programme existe")
}//fin try

catch(err){
  console.log("mise à jour des fichiers, peut etre long (3 à 4 minutes), seulement cette fois ci")
     
      try { 
        var files = recursiveReadSync(chemin);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err
     try { 
        var files1 = recursiveReadSync(chemin1);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err

//on concatene
var temporaire = files.concat(files1); //fusion des deux tableaux
var files=temporaire

         var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
          fs.writeFileSync(filePathphrasescles1,files)

}//fin catch (err)
}//fin export


exports.action = function(data, callback, config, SARAH) {

SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('programme mathilde');


////////////////////////////////////
if(data.listprog==1){
  console.log("mise à jour des logiciels")

    var colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))
    var files="" ; fs = require('fs') ; path = require('path') ; var chemin="C:/program files" ; var chemin1="c:/program files (x86)"////changer si cela beug

    recursiveReadSync = require(path.resolve('%CD%', './plugins/modules/recursiveprogramme').replace('\\%CD%', '')), files  ;
    
    console.log("le chemin des logiciels est : "+chemin+" changer dans le :   programmemathilde.js    :si cela beug".red)

    try {
        var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
        var content = fs.readFileSync(filePathphrasescles1,'utf8') 
        console.log("fichier programme existe, je le mets à jour")
        fs.writeFileSync(filePathphrasescles1,"")
 
  console.log("mise à jour des fichiers, peut etre long (3 à 4 minutes)")
     
      try { 
        var files = recursiveReadSync(chemin);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err
     try { 
        var files1 = recursiveReadSync(chemin1);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err

//on concatene
var temporaire = files.concat(files1); //fusion des deux tableaux
var files=temporaire

         var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')
          fs.writeFileSync(filePathphrasescles1,files)
console.log("Fichier mis à jour")
ScribeSpeak("fichier mis à jour")
 callback();return false  
   }//fin try

catch(err){console.log("une ereur s'est produite : "+err)}

  callback();return false
}//fin mise à jour


///////////////////////////////////////////////////////////////

var recherche=SARAH.context.scribe.lastReco
//var recherche =data.dictation;
console.log(recherche+" recu ")
if (recherche.indexOf("ferme")>-1){var on=0}else{var on=1};

var rgxp = /logiciel (.+)/i; var match1 = recherche.match(rgxp);

var recherche=match1[1]
var recherche=recherche.toLowerCase()
var recherche1=recherche.replace(new RegExp(" ","gi"),"");
var recherche1=recherche1.replace(new RegExp("-","gi"),"");
var recherche1=recherche1.replace(new RegExp("_","gi"),"");
var recherche1=recherche1.replace("à" ,"a");//console.log('********'+recherche1)

//console.log("en attente de : "+recherche + " ou : " + recherche1)
fs = require('fs') ; p = require('path') ; exec = require('child_process').exec ; path = require('path') ;var  list1=[]
var filePathphrasescles1 = path.resolve('%CD%', './plugins/programmemathilde/memoireprogrammemathilde/listprogramme.json').replace('\\%CD%', '')

var content = fs.readFileSync(filePathphrasescles1,'utf8')
var contentsplit=content.split(",")

for(var i=0;i<contentsplit.length;i++){
  
  var contentsplit1=contentsplit[i].replace(new RegExp(" ","gi"),"");
  var contentsplit1=contentsplit1.replace(new RegExp("-","gi"),"");
  var contentsplit1=contentsplit1.replace(new RegExp("_","gi"),"");
  var contentsplit1=contentsplit1.toLowerCase();
var contentsplit1=contentsplit1+" "
        if ( ( contentsplit1.search(recherche+".exe ","gi")>-1 ) || ( contentsplit1.search(recherche1+".exe ","gi")>-1 ) ){
  
                   var substring=recherche.toLowerCase();
                   var  string=contentsplit[i].toLowerCase()

                    var a=[],x=-1;
                    while((x=string.indexOf(substring,x+1)) >= 0) a.push(i);

                    console.log("lancement de : "+contentsplit[i]+ a.length)
    
                        //if(a.length>1){
                            
                            if(on==0){

                                //console.log('on ferme')
                                
                                var exec = require('child_process').exec;
                                var nircmd =path.resolve('./plugins/infomathilde/nircmd/nircmd.exe').replace('\\%CD%', '')
                                var nircmd=nircmd+' closeprocess '+'" '+contentsplit[i]+'"'
                                var child2 = exec(nircmd);//console.log(nircmd)
                                
                                var nomduplugin="programmemathilde"//ou autre nom....
                                var valeurduspeak='je ferme'//phrase à dire
                                SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});

                                callback() ; return false
                            }//fin if on
                            
                            else{

                                //console.log('on ouvre')
                                
                                SARAH.runApp(contentsplit[i])
                                var nomduplugin="programmemathilde"//ou autre nom....
                                var valeurduspeak="j'ouvre"//phrase à dire
                                SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});


                                callback() ; return false
                        
                            }//fin else on
                        
                       // }//fin if
        }

}//fin for  

console.log("pas trouvé !!!") ;
var nomduplugin="programmemathilde"//ou autre nom....
var valeurduspeak=''//phrase à dire
SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
//ScribeSpeak('rien trouvé')
callback() ; return false

}
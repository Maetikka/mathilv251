var ScribeAskMe; var ScribeSpeak; var maConfig; var SCRIBE;

exports.action = function(data, callback, config, SARAH) {
SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak  
path = require('path') ; fs = require('fs') ; plug=data.plugduxml;console.log("plug demandé : "+plug)

 
  try{ plug1 = path.resolve('%CD%', './plugins/demarrage/item/'+plug+'item.json').replace('\\%CD%', '');

var textplug=""
data1= fs.readFileSync(plug1)
objet5 = JSON.parse(data1) ;  longueur5 = objet5.nompluguine.length ; console.log("trouvé :"+objet5.nompluguine);

          if (longueur5<15){  
              for( var i=0;i<longueur5;i++){
                
var textplug=textplug+objet5.nompluguine[i]+" ; "
            }
            ScribeSpeak(textplug);
             //SCRIBE.texteplugin(textplug);
          }
          else{
           ScribeSpeak('trop long, je les affiches :') ;
            console.log(objet5.nompluguine)
SCRIBE.texteplugin('trop long, je les affiches : '+JSON.stringify(objet5.nompluguine))
             }     
          if(longueur5==0){
            ScribeSpeak('pas de xml à lire désolez')
          }

  }//fin try

  catch(err) {
            
            try{
                plug1 = path.resolve('%CD%', './plugins/demarrage/item/'+plug+'garbageitem.json').replace('\\%CD%', '');
                  data1= fs.readFileSync(plug1)
                     objet5 = JSON.parse(data1) ;  longueur5 = objet5.nompluguine.length 
                      
                      if (longueur5<15){
                       for( var i=0;i<longueur5;i++){
                            //  ScribeSpeak(objet5.nompluguine[i]+" ; ")
                            var textplug=textplug+objet5.nompluguine[i]+" ; "
                       }
                           ScribeSpeak(textplug);
                            //SCRIBE.texteplugin(textplug);

                      }
                      else { ScribeSpeak('trop long, je les affiches :') ; 
                      console.log(objet5.nompluguine) ;
                      SCRIBE.texteplugin('trop long, je les affiches :'+JSON.stringify(objet5.nompluguine))
                    }
                  //})// fin fs read2
            
            
            }//fin try2          
            
            catch(err){console.log('erreur : '+err)}
 
  }//fin catch 2

//})// fin fs read

callback() ; return false
} //fin export

////////////////////////////////////////////////////////////////////////

exports.init = function(SARAH,config) {

SCRIBE = SARAH.context.scribe; ScribeAskMe = SARAH.ScribeAskMe; ScribeSpeak = SARAH.ScribeSpeak;// SCRIBE.activePlugin('adismoi');
config=SARAH.ConfigManager.getConfig() ; fs = require('fs');
path = require('path') ; nomplugin="" ; nombreplugin=0

//le nom des plugins
  
data1='{"nompluguine":[]}'
              
            file=Object.keys(config.modules).forEach(function(plugin) {
                   nombreplugin=nombreplugin+1 ; nomplugin=nomplugin+", "+plugin
                   //dans un json nom pluguine
                   objet = JSON.parse(data1);   jsonStr = JSON.stringify(objet); jsonStr1 = JSON.stringify(plugin)// la valeur de l'item. // transforme l'objet en texte

                       try { jsonStr1=jsonStr1.replace(/"/g,'');//on met au bon format
                       }
                       catch (Exception) {console.log("    erreur      ");}

                           //on pousse en memoire
                           objet.nompluguine.push(jsonStr1); new_jsonStr = JSON.stringify(objet); data1=new_jsonStr
            });// fin for each file


datas_xml='<grammar version="1.0" xml:lang="fr-FR" mode="voice" root="adismoi" xmlns="http://www.w3.org/2001/06/grammar" tag-format="semantics/1.0">\n'
datas_xml+='<rule id="adismoi" scope="public"><example>Sarah lance google</example><tag>out.action=new Object(); </tag>\n'
datas_xml+='<item>Sarah</item>\n'
datas_xml+='<one-of>\n'
datas_xml+='<item>dis-moi les phrases de</item>\n'
datas_xml+='</one-of>\n'

datas_xml+='<one-of>\n'

for ( var i = 0; i < nombreplugin; i++) {  
    cd2=(objet.nompluguine[i]);
    datas_xml+='<item>'+cd2+'<tag>out.action.plugduxml="' + objet.nompluguine[i] +'"</tag></item>\n';   
}

datas_xml+='</one-of>\n'
datas_xml+='<tag>out.action._attributes.uri="http://127.0.0.1:8080/sarah/adismoi";</tag></rule> </grammar>\n'
fs.writeFile("./plugins/adismoi/adismoi.xml", datas_xml)

}
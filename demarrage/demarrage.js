exports.init = function(SARAH,config) {
 var os = require('os');a=os.hostname() ;var exec = require('child_process').exec; var Request = require('Request').exec;

request = require('request'); cheerio = require('cheerio'); fs   = require('fs'); var path = require('path'); ini = require('./ini/ini')
//dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', ''))
 colour = require(path.resolve('%CD%', './plugins/modules/colour').replace('\\%CD%', ''))

function nomappeldesarah(){ 
      try{  
          filePathcontent1 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
          content = fs.readFileSync(filePathcontent1,'utf8');
           nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).common.name;
            console.log('enfin le nom : '+nomappel);console.log('vvvvvvvvvv3')
            console.log('la voix : '+ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).speech.voice)
                custome()
      }//fin try
 
      catch (Exception) {
          filePathcontent1 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
          content = fs.readFileSync(filePathcontent1,'utf8');
           nomappel = ini.parse(fs.readFileSync(filePathcontent1, 'utf-8')).bot.name;
            console.log('enfin le nom : '+nomappel);console.log('vvvvvvvvvv4')
                custome()
      } //fin catch
}//fin fnct nomappeldesarah

nomappeldesarah()

function custome(){
    try{
        filePathcontent2 = path.resolve('%CD%', './custom.ini').replace('\\%CD%', '');
        content = fs.readFileSync(filePathcontent2,'utf8');

          if(content.search('debug=true')>-1){
              content=content.replace('debug=true','debug=false');
              console.log('sauvegarde debug=false');
                  fs.writeFileSync(filePathcontent2,content,'utf8')
                  console.log('!!!!!!!!!!!!!!!!!!!! RE DEMARRAGE NECESSAIRE MERCI!!!!!!!!!!!!!!!')
          }// fin if

          else (console.log('pas de chagement debug=false'))
          miseà0()
    }//fin try  

    catch (Exception) {
          filePathcontent2 = path.resolve('%CD%', './client/custom.ini').replace('\\%CD%', '');
          content = fs.readFileSync(filePathcontent2,'utf8');
          console.log(content)
          console.log('pensez à modifier [debug] enable=true par [debug] enable=false dans client custom.ini')
          console.log('!!!!!!!!!!!!!!!!!!!! PUIS RE DEMARRAGE NECESSAIRE MERCI !!!!!!!!!!!!!!!')
              miseà0() 
    }//fin catch
}//fin fnct custome



//on met à zero pour enlever les anciens plugs
function miseà0(){
    
  var nircmd ='%CD%/plugins/infomathilde/nircmd/nircmd.exe'
  var dir = path.resolve('%CD%', './plugins/').replace('\\%CD%', '');
  var process=nircmd + ' filldelete "' + dir + '\\demarrage\\item\\*.*"'﻿                    
  exec(process)

      setTimeout(function(){ console.log("mise en memoire des xml, peut etre long".red);console.log(' fin de mise à 0 du systeme');
          memoire();
      }, 2000);//fin timeout

}// fin fnct miseà0


function memoire(){data66='{"nompluguine":[]}'
 var newTab = new Array();


////mise en memoire du nom des plug
 nomplugin="" ;   nombreplugin=0
//le nom des plugins
  config=SARAH.ConfigManager.getConfig();data1='{"nompluguine":[]}'
    
        file=Object.keys(config.modules).forEach(function(plugin) {
               nombreplugin=nombreplugin+1 ; nomplugin=nomplugin+", "+plugin
               //dans un json nom pluguine
               objet = JSON.parse(data1);   jsonStr = JSON.stringify(objet); // transforme l'objet en texte
               jsonStr1 = JSON.stringify(plugin)// la valeur de l'item.

                   try { jsonStr1=jsonStr1.replace(/"/g,'');}//fin try et on met au bon format
                   catch (Exception) {console.log("   erreur       ");}

                //on pousse en memoire
                objet.nompluguine.push(jsonStr1); new_jsonStr = JSON.stringify(objet); data1=new_jsonStr
        });//fin for each file


  for ( j = 0; j<nombreplugin; j++){
      ///mise en fichier des items
      data2='{"nompluguine":[]}'; var fs = require('fs'); //var parse = require('../modules/xml-parser');

      pathname = './plugins/'+objet.nompluguine[j]+'/'+objet.nompluguine[j]+'.xml'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
      xml = fs. readFileSync(pathname,'utf8').toString('utf8');
           
      first="" ; fichier1="" ; alerte="2" ; data2=[""] ; data21=[""] ; data3=[""]
      //xml = fs.readFileSync(pathname,'utf8').toString() ;

//protection <!--  ...... -->

last2=xml.lastIndexOf("</grammar>") ; xmllength=xml.length

for(i=last2+10;i<xmllength;i++){
  xml[i]=""
}

fichier=xml ; garbage=""

  if ( (fichier.search(new RegExp("Sarah</item>","gi"))>-1) && (fichier.search(new RegExp("ruleref uri","gi"))<0) ){

        if(fichier.search(new RegExp('"GARBAGE"',"gi"))>-1){garbage="garbage"}
fichier=fichier.replace(new RegExp('item weight="2">',"gi"),"<item>")
        if(garbage=="garbage"){
         objet.nompluguine[j]=objet.nompluguine[j]+"garbage"
         new_jsonStr = JSON.stringify(objet); data1=new_jsonStr    
        }
/////NB one of
substring="<one-of>" ; substring0="</one-of>" ; substring1="<item" ; substring2="<" ; string=fichier

locations=function (substring,substring0,substring1,substring2,string){

        var oneof=[],i=-1
        while( (i=string.indexOf(substring,i+1) ) >= 0){ oneof.push(i) }

        var antioneof=[],i=-1;
        while( (i=string.indexOf(substring0,i+1) ) >= 0){ antioneof.push(i) }

        var item=[],i=-1;//console.log(antioneof)
        while( (i=string.indexOf(substring1,i+1) ) >= 0){ item.push(i) }

        var slash=[],i=-1;//console.log(item)
        while( (i=string.indexOf(substring2,i+1) ) >= 0){ slash.push(i) }
        //console.log(slash)

        var repeat=[],i=-1;//console.log(item)
        while( (i=string.indexOf('<item repeat="0-1">',i+1) ) >= 0){ repeat.push(i) }
 
    //c'est parti
    item1(fichier,data2,data21,data3,alerte,item,oneof,antioneof,slash,repeat)
    return false
}//fin locations

item1=function(fichier,data2,data21,data3,alerte,item,oneof,antioneof,slash,antislash,repeat){
      temp="" ; temp1="" 
      ess=[""];ess1=[""];essone=0;ea=0;dt="";ess2=[""]
        for(i=0;i<slash.length;i++){oneof.push(slash[i])}
        for(i=0;i<item.length;i++){oneof.push(item[i])}
        for(i=0;i<antioneof.length;i++){oneof.push(antioneof[i])}
            
            if(oneof.length%2 == 0){
              b=oneof[oneof.length-1]
            }
            oneof=oneof.sort(function(a, b) {return a - b;})
            item=oneof;
      
     


for (a=0;a<item.length;a++){ itema=item[a]        
    for (b=0;b<slash.length;b++){ slashb=slash[b]
                   
        if (slashb>itema){dt=""
                  //console.log(alerte0)    
                      for(i=itema;i<slashb;i++){ temp=temp+fichier[i] }//fin for i
                 
                        temp=temp.trim();
                      
                      if(temp.search(new RegExp("<one-of>","gi"))>-1){
                        dt="<one-of>"
                          essone=1                             
                      }//fin if temp
                    
                      if(temp.search(new RegExp("</one-of>","gi"))>-1){
                          essone=0;dt="</one-of>"                          
                      }//fin if temp

                      if(temp.search(new RegExp("<item>","gi"))>-1){                  
                          for(i=itema+6;i<slashb;i++){ temp1=temp1+fichier[i];dt=dt+fichier[i] }//fin for i
                          temp1=temp1.trim(); dt="<item>"+dt
                          
                      }//fin if temp
                       if(temp.search(new RegExp('<item repeat="0-1">',"gi"))>-1){
                          //essone=0;
                          dt='<item repeat="0-1">'    ;//console.log("tttttttttttttttttttttttttt")                      
                      }//fin if temp 
                     
                a=a+1

//////////////////////////////////////////////////c'est parti
                //  temp1=" "+temp1+" "
                      //if(temp!==""){  
                      if (temp.length>0){
//console.log("dddd"+dt)

if ( (dt.search("<item>","gi")>-1) && (essone==0) && (temp1.length>0) ){
  esslength=ess.length ;//console.log("*"+esslength+"555"+temp1+"6666")
  for(i=0;i<esslength;i++){
    
    ess[i]=ess[i]+" "+temp1
  }// fin for i
}

if ( (dt.search("<item>","gi")>-1)&&(essone==1)&& (temp1.length>0)){
  esslength=ess.length;//console.log(esslength)
  for(i=0;i<esslength;i++){
    
    ess1.push(ess[i]+" "+temp1)
  }// fin for i

}

if  (dt.search("</one-of>","gi")>-1){
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//ess1=ess;essone=0;dt=""
//temp=""
ess=ess1;ess1=[""]
}

if  (dt.search('<item repeat="0-1">',"gi")>-1){
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//ess1=ess;essone=0;dt=""
//temp=""
Array.prototype.push.apply(ess2, ess);
Array.prototype.push.apply(ess1, ess);
ee2legth=ess.length
  for(i=0;i<ee2legth;i++){
//    ess2.push(ess[i])
  }
  for(i=0;i<ee2legth;i++){
 //   ess1.push(ess[i])
  }
 // ess=ess2
}

                     }  //fin temp=!""                               
         b=slash.length;temp="";temp1=""              
      }//fin if >  
    }//fin for b
  }//fin for a


Array.prototype.push.apply(ess, ess1);
for (var i=0 ; i<ess1.length ; i++){
 // ess.push(ess1[i])
}
Array.prototype.push.apply(ess, ess2);
for (var i=0 ; i<ess2.length ; i++){
 // ess.push(ess2[i])
}

var esslength=ess.length
for(var i=0; i<esslength ; i++){
  if( (ess[i].search(new RegExp("sarah","gi"))<0) ){ess[i]=""}  
  ess[i]=ess[i].replace(new RegExp("sarah","gi"),"")
  ess[i]=ess[i].trim()
  ess[i]=ess[i].toLowerCase()

}



data5='{"nompluguine":[]}'

            for(var i=0 ; i<ess.length  ;i++){
              var txt=ess[i]
                   if (txt!==""){
                        //console.log(txt)
                        //txt=txt.replace(new RegExp("sarah","gi"),"")
                        txt=txt.replace(new RegExp("\"","gi"),"").trim()
                        txt=txt.replace(new RegExp("  ","gi")," ")
                            var objet1 = JSON.parse(data5) ; var jsonStr1 = txt ;
                            //jsonStr1=jsonStr1.replace(new RegExp("garbage","gi"),"");
                            //jsonStr1=jsonStr1.replace(" ","")
                            jsonStr1=jsonStr1.trim()
                            objet1.nompluguine.push(jsonStr1) ;
                            var new_jsonStr1 = JSON.stringify(objet1) ; var data5=new_jsonStr1
                            
                            if(garbage!=="garbage"){
                            objet66 = JSON.parse(data66) ; objet66.nompluguine.push(txt) ;
                            new_jsonStr66 = JSON.stringify(objet66) ; data66=new_jsonStr66
                            }
                    }
            }// fin for i









                           // var new_jsonStr1 = JSON.stringify(objet1) ; var data5=new_jsonStr1
 //data66
      pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');

      fs.writeFileSync(pathname, data5)

}//fin function item1

locations(substring,substring0,substring1,substring2,string)

}///fin if sarah

else{
  data4='{"nompluguine":[]}' ;// console.log("rule ou lazy")
    pathname = './plugins/demarrage/item/'+objet.nompluguine[j]+'item.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
          fs.writeFileSync(pathname, data4)
}

}//fin for j

/////////////////////////////////
/////////////////////////////////
      pathname='./plugins/demarrage/item/plugins.json'
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
     // pathname1='%CD%/plugins/demarrage/item/plugins.json'
                console.log(pathname+' créé')
                          fs.writeFileSync(pathname, data1)// ecrit dans le fichier 
            


                            
objet123 = JSON.parse(data66) ;  jsonStr123 = JSON.stringify(objet123);
//var data7=[],i=-1
var triFn = function(a, b){
  if (a.length > b.length) return -1;
  if (a.length  < b.length) return 1;
  if (a.length == b.length) return 0;
}
objet123.nompluguine.sort(triFn); // tri le tableau qui deviendra 
//monTableau = ["Air","Eau","Feu"]
//objet123.sort(triFn); // tri le tableau qui deviendra 
//console.log("eeeeeee"+objet123.nompluguine)
new_jsonStr123 = JSON.stringify(objet123) ; data66=new_jsonStr123




 pathname = './plugins/demarrage/item/'+'itemtotal.json';
      pathname = path.resolve('%CD%', pathname).replace('\\%CD%', '');
          fs.writeFileSync(pathname, data66)

//holo=path.resolve('%CD%','./plugins/holo').replace('\\%CD%', '')
//var exec = require('child_process').exec;
//SARAH.runApp('C:/Program Files/VideoLAN/VLC/vlc.exe ', '--fullscreen --one-instance --no-audio --no-osd --no-video-title-show '+holo+'/holodemarrage.mp4"')



//monTableau = ["Air","Eau","Feu"]   



      // while( (i=string.indexOf(data66,i+1).length ) >= 0){ data7.push(i) };console.log(data7)
            //console.log(data66[10]+data66.length)
//          objet123.nompluguine.sort();             
        // console.log(objet123)       
////////////////////////////////////////

////////////////////////////////:

      return false
}//fin fnct memoire					  

}                        
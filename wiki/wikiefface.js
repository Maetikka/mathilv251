req = function(url,count){ 
	 
request({ 'uri' : url,rejectUnauthorized: false, encoding: 'utf-8'}, function (err, response, body){
  
    //console.log('urllllllll'+url)
       
       if (err || response.statusCode != 200) {
        
        //console.log(err)
    
/////////// recherche sur wiki et dans url

							      request({'uri':'https://www.google.fr/search?q='+phrase1+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei','headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {
							              $ = cheerio.load(html);
							              url = $('.g .s cite').first().text().trim();
							               
							                if(count!=="stop"){
							                   
							                    //console.log("ghjghjghghghjg111"+url)
							                   
							                          if(url.search('wikipedia.org')>-1){
							                            console.log("toruvé sur wikipédia : "+url)
							                            count="stop"
							                            req(url,count)
							                          }//fin if url
							                
							                }//fin if count!==stop
							              
							      });//fin request

//////////

function encart(phrase1){
 request({'uri':'https://www.google.fr/search?hl=fr&q='+phrase1+'&gws_rd=ssl', 'headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {

     $ = cheerio.load(html) ; a=$('div.g span._tA')
        
        //console.log('trounvé !!!'+a.text())
              
             if (a.text()==""){
                search=search.replace(new RegExp("\\b" + " " + "\\b","gi"),"+");
                search=search.replace(" à ","+à+");
                search=search.replace(new RegExp(' ', 'ig'),"+")
                // proc = 'start firefox -new-window http://www.google.fr/search?q='+search ;
                proc = 'start firefox -new-window http://www.google.fr/search?q='+search ;
                console.log("la rpoc "+proc)
                child=exec(proc);
                callback({'tts' : " "}) ; return false          
             }//fin if
              




                ScribeSpeak(a.text(),function(){
                    console.log(phrase1)
                    phrase1=phrase1.replace(new RegExp("\\b" + " " + "\\b","gi"),"+");
                    phrase1=phrase1.replace(" à ","+à+");
                    phrase1=phrase1.replace(new RegExp(' ', 'ig'),"+")
                    console.log("-----"+phrase1)
                     proc = 'start firefox -new-window http://www.google.fr/search?q='+phrase1 ;
                    console.log(proc)
                    child=exec(proc);
                    callback({'tts' : " "}) ; return false
               })//fin speak
     
 })//fin request
}//fin funct encart

encart(phrase1)

callback({'tts' : " "}) ; return false 
 
} // fin if err
//si on a ni en memoire ni en encart ni sur internet.....
  $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: true }); 
  	
  	//  SCRAPING
requeste=function(url){

  try {paragaphe1=$('.mw-parser-output > p:nth-child(2)').text()}
    catch (Exception) {}
  try {paragaphe2=$('.mw-parser-output > p:nth-child(3)').text()}
    catch (Exception) {}
  try {paragaphe3=$('.mw-parser-output > p:nth-child(4)').text()}
    catch (Exception) {}
  try {paragaphe4=$('.mw-parser-output > p:nth-child(5)').text()}
    catch (Exception) {}
  try {paragaphe6=$('.mw-parser-output > p:nth-child(6)').text()}
    catch (Exception) {}

mafonction1(url);

 tempestString = paragaphe4;espace = " ";

}//fin fnct requeste

requeste(url);

callback({'tts' : " "}) ; return false 

})//fin request url

}// fin function req



mafonction1=function(url){paragaphe5=paragaphe1.length+paragaphe2.length+paragaphe3.length+paragaphe4.length+paragaphe6.length
  
  if (paragaphe5==0){

 /////////// recherche sur wiki est dans url

      request({'uri':'https://www.google.fr/search?q='+phrase1+'&ie=utf-8&oe=utf-8&gws_rd=cr&ei', 'headers':{'Accept-Charset': 'utf-8'}}, function (error, response, html) {
             
              $ = cheerio.load(html);
              url = $('.g .s cite').first().text().trim();
             //console.log("ghjghjghghghjg22222222222"+url)

      });//fin request

//////////

      process1 = '%CD%/plugins/cortana/bin/search.vbs ' + search ; exec(process1) ; callback() ; return false
 
  }//fin if 0

  else{ lewiki=""
    
    if(paragaphe1!==""){ScribeSpeak(paragaphe1)}
      else{
        if(paragaphe2!==""){ScribeSpeak(paragaphe2)}
          else{
            if(paragaphe3!==""){ScribeSpeak(paragaphe3)}
               else{
                 if(paragaphe4!==""){ScribeSpeak(paragaphe4)}
                    else{
                      if(paragaphe6!==""){ScribeSpeak(paragaphe6)}
                        else{ScribeSpeak("")}
                    }
               }       
          }
      } //fin if             
   
//console.log('on envoie:::::::::::::::::'+"111111111"+paragaphe1+"2222222222222"+paragaphe2+"333333333"+paragaphe3+"44444444444"+paragaphe4+"55555555555"+paragaphe6)

 dico=require(path.resolve('%CD%', './plugins/modules/mathildedico').replace('\\%CD%', ''))
dico(paragaphe1+paragaphe2+paragaphe3+paragaphe4+paragaphe6)

synonyme = require(path.resolve('%CD%','./plugins/modules/synonyme').replace('\\%CD%', ''))
nomcherchersplit=(paragaphe1+paragaphe2+paragaphe3+paragaphe4+paragaphe6).split(' ')
for (var i = 0  ; i < nomcherchersplit.length ; i++) {
  nomchercher=nomcherchersplit[i]
       synonyme(nomchercher,function(callback1){//console.log("réponse : "+callback1)
        })
}


 WikiMemoire(search,url);
 callback({'tts' : " "}) ; return false
  
  }//fin else le wiki

} //fin mafnct1

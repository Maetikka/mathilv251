exports.action = function(data, callback, config,SARAH){


SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('radio web');
SCRIBE.icone("icones/radio.png",myIPretour);

var request = require('request'); var cheerio = require('cheerio'); var exec = require('child_process').exec;
        
          // exec("taskkill /f /im VLC.exe")
SCRIBE.radio("",myIPretour)
//console.log(myIPretour+"//////////////////////////")
//setTimeout(function(){

//radio=SARAH.context.scribe.FULL_RECO;
      try{
      var radio=data.radio.toLowerCase()
            }
      catch(err){var radio=JSON.stringify(SARAH.context.scribe.lastReco)}
      var radio=radio.replace(new RegExp("\\b" + " " + "\\b","gi"),"")
      //radio=radio.replace(new RegExp("france","gi"),"");
      
     // console.log('on recois de cortana dans radio js '+radio)
     
          request('http://fluxradios.blogspot.fr/p/flux-radios-francaise.html', function (error, response, html) {
          var $ = cheerio.load(html);
            
          countradio=0
       
              $('li a').each(function(i, element){
                    var a = $(this);
                 countradio=countradio+1
                    var url = a.attr('href'); 
                    var a1=a.text().toLowerCase()

                    var a1=a1.replace(new RegExp("\\b" + " & " + "\\b","gi")," et ");
                    var a1=a1.replace(new RegExp("\\b" + " " + "\\b","gi"),"");
                    var a1=a1.replace(new RegExp("france","gi"),"");
                    //if ( ((a.text().toLowerCase()).search 'radio france' >-1) && (countradio==0) ){
                    //console.log(a1)
                    //console.log(countradio)
                            if ( (radio.search(new RegExp(a1,"gi"))>-1) && (countradio!==3) ){
                               
                                //console.log("on aaaa"+a1)
                                countradio++
                                console.log('recherche la radio '+a.text())
                                //console.log(url)

                                                request(url, function (error, response, html1) {
                                                var $ = cheerio.load(html1);
                                               // var url1 = $('table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2) > span:nth-child(1) > span:nth-child(1)').text();
                                                var url1 = $( 'table > tbody > tr:nth-child(5) > td:nth-child(2) > span').text()//;console.log("eeeeeee "+u)

                                                //console.log('on va '+url1)
                                                //SCRIBE = SARAH.context.scribe;
                                                //SCRIBE.texteplugin(url1);SCRIBE.icone("icones/radio.png");
                                                //SCRIBE.activePlugin('RADIO');     
                                                //var exec = require('child_process').exec;
                                              
                                                //var proc = '"C:/Program Files/VideoLAN/VLC/vlc.exe"'
                                                  var url1=url1.trim()      
                                                //console.log(proc+" "+url1+" --qt-start-minimized")
                                                //var child = exec(proc+" "+url1+" --qt-start-minimized");
                                                  SCRIBE.radio(url1,myIPretour)
                                                    var nomduplugin="radio"//ou autre nom....
                                                    var valeurduspeak=''//phrase à dire
                                                    SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});



                                                })//fin request
                                callback() ; return false
                            }//fin if     
               });// fin each
              
callback() ; return false
      })//fin resquest
          
//}, 2000);//fin timeout

}
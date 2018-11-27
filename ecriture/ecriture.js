var ScribeAskMe;
var ScribeSpeak;
var maConfig;
var SCRIBE;



exports.action = function(data, callback, config,SARAH){


SCRIBE = SARAH.context.scribe;
  ScribeAskMe = SARAH.ScribeAskMe;
  ScribeSpeak = SARAH.ScribeSpeak;
SCRIBE.activePlugin('écriture');

var request = require('request');
var cheerio = require('cheerio');
var question="dicte ton text";var text="";var phrasearret="fin"
var exec = require('child_process').exec
//if (query.search(new RegExp(objet.phrasescles[ii],"gi"))>-1){


function ask(question,text,phrasearret) {

 ScribeAskMe(question, [
    {'answer':'age' }
    ], function(answer,phrase,match,wholeMatch) {

		if (phrase!=='undefined') {
			
					ScribeSpeak("j'écris dans la case");
	var nircmd = path.resolve('%CD%', './plugins/navigation/nircmd/nircmd.exe').replace('\\%CD%', '');
var proc112=nircmd + ' win min ititle "Google Chrome"'
//exec(proc112)				
						setTimeout(function(){ 
							var nircmd = path.resolve('%CD%', './plugins/navigation/nircmd/nircmd.exe').replace('\\%CD%', '');//console.log(phrase.length+"mmmmmfffffff")
								var procclick1=nircmd + ' sendmouse left click'//focus fenetre
								//exec(procclick1) ; 
							//console.log(phrase)	

							 phrase=phrase.replace(/rire/gi,' :=) ')
							 phrase=phrase.replace(/énervé/gi,' X( ')
							 phrase=phrase.replace(/heureux/gi,' :) ')
							 phrase=phrase.replace(/triste/gi,' :( ')
							 //phrase=phrase.replace(new RegExp("clin d'oil","gi"),';)');
							 phrase=phrase.replace(/langue/gi,' ;P ')
							 phrase=phrase.replace(/surprise/gi,' :=O ')
							 phrase=phrase.replace(/énervé/gi,' X( ')
							 phrase=phrase.replace(/clown/gi,' :O) ')
							 phrase=phrase.replace(/énervé/gi,' X( ')

							 console.log(phrase)	
								for(var z=0;z<phrase.length;z++){
									var add=0
										var tape=phrase[z]

										//var dt = new Date();
										//dt.setTime(dt.getTime() + 150);
										//while (new Date().getTime() < dt.getTime())

										//if(tape	=="0"){var tape	="0x30"}
										


										if((tape=="0")||(tape=="1")||(tape=="2")||(tape=="3")||(tape=="4")||
										   (tape=="5")||(tape=="6")||(tape=="7")||(tape=="8")||(tape=="9")||
										   (tape=="X")||(tape=="O")||(tape=="P")){
											//if(tape==":"){var tape="/"}	
										if(tape=="X"){var tape="x"}
if(tape=="O"){var tape="o"}
	if(tape=="P"){var tape="p"}
		
													//console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
													var tape1=tape
													var add=1
													ecriture(tape1,nircmd,z,add)
										}
       
										else{
										
											if(tape==" "){var tape="spc"}
											if(tape=="é"){var tape="2"}
											if(tape=="è"){var tape="7"}
											if(tape=="ç"){var tape="9"}	
											if(tape=="à"){var tape="0"}
											if(tape=="'"){var tape="4"}	
											if(tape=="-"){var tape="6"}
											if(tape=="ê"){var tape="e"}
											if(tape=="ë"){var tape="e"}
											if(tape=="û"){var tape="u"}
											if(tape=="Ù"){var tape="u"}
											if(tape=="Ú"){var tape="u"}
										
										if(tape=="="){var tape="187"}
										if(tape==":"){var tape="191"}
										if(tape==")"){var tape="219"}
										if(tape=="("){var tape="53"}
									if(tape==";"){var tape="190"}	
									if(tape=="."){var tape="110"}
										if(tape=="-"){var tape="109"}
											if(tape=="+"){var tape="107"}
											//
								
											//if(tape==")"){var tape="°"}

											var proc=nircmd+' sendkey shift down'
											var proc1=nircmd+' sendkey '+tape+' press'
											var proc11=nircmd+' sendkey '+tape+' up'
											var proc2=nircmd+' sendkey shift up'
												//exec(proc,function(){var child1=exec(proc1,function(){var child2=exec(proc2)})})
											//exec (proc1)		
											var tape1=tape
											var add=0
											ecriture(tape1,nircmd,z,add)
										}	//fin esle									//console.log(proc1)
								
								}//fin for z

							callback();return false
						; }, 3000);
		}//fin if undefined

		else{ask(question,text,phrasearret)}
   
    },{ 'timeout':40000}  );
}//fin fnct ask
        

function ecriture(tape1,nircmd,z,add){
	setTimeout(function(){ 
			//console.log(tape1)
			if(add==0){
			
			var proc1=nircmd+' sendkey '+tape1+' press'
			exec (proc1);//console.log("*"+proc1)
			}
			else{
			exec(nircmd+' sendkey shift down',function(){
			exec(nircmd+' sendkey '+tape1+' press',function(){exec(nircmd+' sendkey shift up')})})

			//console.log("+"+proc1)			
			
			}
	; }, z*150);

}

ask(question,text,phrasearret)
callback();return false
        
}
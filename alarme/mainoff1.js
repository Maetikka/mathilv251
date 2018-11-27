
var audioContext = null;
var meter = null;
var canvasContext = null;
var WIDTH=500;
var HEIGHT=50;
var rafID = null;
var alarme="off"

window.onload = function() {

    // grab our canvas
	canvasContext = document.getElementById( "meter" ).getContext("2d");
	
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "true", 
                    "googAutoGainControl": "true",
                    "googNoiseSuppression": "true",
                    "googHighpassFilter": "true"
                },
                "optional": []
            },
        }, gotStream, didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

}


function didntGetStream() {
    alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a new volume meter and connect it.
    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);

    // kick off the visual updating
    drawLoop();
}

function drawLoop( time ) {
    // clear the background
    canvasContext.clearRect(0,0,WIDTH,HEIGHT);

    // check if we're currently clipping
    if (meter.checkClipping()){
            canvasContext.fillStyle = "red";
    

 
}
    else{
        canvasContext.fillStyle = "green";
    }

  // draw a bar based on the current volume
    canvasContext.fillRect(0, 0, meter.volume*WIDTH*1.4, HEIGHT);
  /////////////////////////////////////////à partir d'ici soit activer un plug soit écrire la valeur dans un fichier récupéré par un plug cron
 

if(meter.volume>0.3){
    
   if (alarme=="on"){
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    var url = "http://127.0.0.1:8888/?emulate=Sarah activationnepastouchersouspeinedeplantage12345";
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    return false
    }
}
   // set up the next visual callback
    rafID = window.requestAnimationFrame( drawLoop );  
 

}


//var xmlhttp;
  //      xmlhttp=new XMLHttpRequest();
    //    var emu = rms;
        //emu = emu.replace(/-/g,' ');




//http://127.0.0.1:8080/sarah/cortana?q=synonyme de manger




        
        //emu = emu.replace(/Sarah/g,'Abracadabra Sarah');
    //      var url = "https://127.0.0.1:4300/sarah?emulate=" + emu;//http://127.0.0.1:8080/sarah/mon_plugin?volume=xxx
            //var url = " http://127.0.0.1:4300/sarah/cortana?q=" + emu;
      //  xmlhttp.open("GET",url,true);
       // xmlhttp.send();
        
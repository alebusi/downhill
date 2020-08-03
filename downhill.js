var caselle = ["uno","due","tre","quattro"];
var colori = ["#FF3300","orange","#4285F4","#0F9D58"];
var pos = 50;
var dir = 1;
var ind = 0;
var indSave = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 37) {
      dir=-2;
  } else if (e.keyCode == 39) {
      dir=2;
  }
  muoviPallaT(dir);
}

function muoviPallaT(direction) {
		  pos+=direction;
      if (pos > 90) pos=90;
      if (pos < 10) pos=10;
      document.getElementById("elemento").style.left=pos+"%";
}

function muoviPalla(direction) {
    muoviPallaT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
		  pos+=direction;
      if (pos > 90) pos=90;
      if (pos < 10) pos=10;
      document.getElementById("elemento").style.left=pos+"%";
	  }, 36);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function disegnaMattoni() {
    coloraMattoni();
    myTimerBlack = setInterval(coloraMattoni, 4000);
}
  
  
function coloraMattoni() {
      while (ind == indSave) {
          ind=randomIntFromInterval(0,caselle.length - 1);
      }
      for (step = 0; step < caselle.length; step++) { 
          document.getElementById(caselle[step]).style.backgroundColor=colori[ind];
      }
      document.getElementById(caselle[ind]).style.backgroundColor="black";
      document.getElementById("elemento").style.backgroundColor=colori[ind];
      indSave=ind;
}

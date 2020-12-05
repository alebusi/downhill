var caselle = ["uno","due","tre","quattro"];
var colori = ["#FF3300","orange","#4285F4","#0F9D58"];
var pos = 50;
var dir = 1;
var ind = 0;
var rot= 0;
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
      if (direction > 0) {rot+=30;} else {rot-=30;}
      document.getElementById("elemento").style.transform = "translate(-50%, -50%) rotate("+rot+"deg)";  
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
      if (direction > 0) {rot+=30;} else {rot-=30;}
      document.getElementById("elemento").style.transform = "translate(-50%, -50%) rotate("+rot+"deg)";  
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
    myTimerBlack = setInterval(coloraMattoni, 3500);
}
  
  
function coloraMattoni() {
      while (ind == indSave) {
          ind=randomIntFromInterval(0,caselle.length - 1);
      }
      for (step = 0; step < caselle.length; step++) { 
          document.getElementById(caselle[step]).style.backgroundColor=colori[ind];
      }
      document.getElementById(caselle[ind]).style.backgroundColor="black";
      document.getElementById("elemento").style.backgroundColor="white"; //colori[ind];
      indSave=ind;
}

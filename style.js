
function GetClock(){
var refresh=1000;
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),nmil=d.getMilliseconds();

     if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;
if(nmil<=9) nmil="0"+nmil;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+":"+nsec+":"+nmil+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
<<<<<<< HEAD

function GetClock(){
	var str="clockbox";
	var result=str.fontcolor("green")
	if(nmin<=)
}
=======
>>>>>>> 7699450797c3f2cd737c38a94b84040dd8a35e59

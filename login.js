var speed = prompt('enter spped game (frames per seconds)',60);
if (speed == null){
    location.reload();
    }
if (!speed.match(/\d/g) || (speed < 10) || (speed > 100)){
    alert('input value must be betwen 10 and 100');
    location.reload();
}
var nick = prompt('Enter your nick name','player');
if ((nick == null)||(nick == 'player')){
    location.reload();
    }
    else if (!nick.match(/\w+/g)){
        alert('English muther fucker');
        location.reload();
    }

else{
  function getXmlHttp(){
      var xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
  }
    var gamersfile;
    var get = getXmlHttp();
    var req = getXmlHttp();
    var namesstring;
    var score = 0;
    var tmp = 0;
    var Nname;
    var read_score;
    var body = "nickname=" + encodeURIComponent(nick) + "&score=" + encodeURIComponent(score);
    
    get.open('GET', 'gamers/gamers.txt', true); 
    get.onreadystatechange = function() {
    if (get.readyState == 4) {
     if(get.status == 200) {
         gamersfile = get.responseText;
         namesstring = gamersfile.split('\n');
         for (i = 0; i < namesstring.length; i++){
                document.getElementById("list").innerHTML ="<p>" + document.getElementById("list").innerHTML + namesstring[i] + "</p>";
	     }
         for (i = 0; i < namesstring.length; i++){
           Nname = namesstring[i].split(' = ');
           for (j=0; j < Nname.length; j++){
               if (Nname[j].localeCompare(nick) == 0){
                document.getElementById("name").innerHTML = Nname[j];
                score = Nname[j+1];
                   read_score = score;
                document.getElementById("score").innerHTML = score;
			     tmp = 1;
		      }
           }
	   }
         if (tmp == 0){
            document.getElementById("name").innerHTML = nick;
            document.getElementById("score").innerHTML = score;
             read_score = 0;
         }
	 }
  }
};
get.send(null);
    
    
   
}

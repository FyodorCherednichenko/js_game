var W=800;
var H=500;
var game = new Game(W, H, '#3D3D3D');

var hero = new game.Rect({
    x : 400, y : 455,
    width : 24,
    height : 45,
    posx : 0,
    posy : 0,
    wtex : 102,
    htex : 87,
    //color : 'red'
    texture : 'pers3.png'
});

var gameOV = new game.Rect({
    x : 200, y : 100,
    width : 400,
    height : 200,
    posx : 0,
    posy : 0,
    wtex : 400,
    htex : 190,
    //color : 'red'
    texture : 'Game_Over.png'
});
//========================================================COINS=============================
var coin1 = new game.Rect({
    x : 5, y : 400,
    width : 30,
    height : 30,
    posx : 0,
    posy : 0,
    wtex : 200,
    htex : 200,
    //color : 'red'
    texture : 'coin.png'
});

var coin2 = new game.Rect({
    x : 445, y : 140,
    width : 30,
    height : 30,
    posx : 0,
    posy : 0,
    wtex : 200,
    htex : 200,
    //color : 'red'
    texture : 'coin.png'
});

var coin3 = new game.Rect({
    x : 650, y : 360,
    width : 30,
    height : 30,
    posx : 0,
    posy : 0,
    wtex : 200,
    htex : 200,
    //color : 'red'
    texture : 'coin.png'
});
var coin4 = new game.Rect({
    x : 0, y : 180,
    width : 30,
    height : 30,
    posx : 0,
    posy : 0,
    wtex : 200,
    htex : 200,
    //color : 'red'
    texture : 'coin.png'
});
var coin5 = new game.Rect({
    x : 5, y : 65,
    width : 30,
    height : 30,
    posx : 0,
    posy : 0,
    wtex : 200,
    htex : 200,
    //color : 'red'
    texture : 'coin.png'
});
//===============================================HERO-BULLET==============================
var bullet = new game.Rect({
    x : 100, y : 100,
    width : 30,
    height : 20,
    //color : 'red'
    posx : 0,
    posy : 0,
    wtex : 150,
    htex : 30,
    texture : 'fire.png'
});

//===============================================PLATFORMS===============================
var platform1 = new game.Rect({
    x : 0, y : 440,
    width : 130,
    height : 10,
    color : 'blue'
});

var platform2 = new game.Rect({
    x : 190, y : 390,
    width : 50,
    height : 10,
    color : 'blue'
});

var platform3 = new game.Rect({
    x : 290, y : 350,
    width : 150,
    height : 10,
    color : 'blue'
});

var platform4 = new game.Rect({
    x : 0, y : 330,
    width : 100,
    height : 10,
    color : 'blue'
});

var platform5 = new game.Rect({
    x : 0, y : 220,
    width : 130,
    height : 10,
    color : 'blue'
});

var platform6 = new game.Rect({
    x : 0, y : 100,
    width : 130,
    height : 10,
    color : 'blue'
});

var platform7 = new game.Rect({
    x : 490, y : 290,
    width : 70,
    height : 10,
    color : 'blue'
});

var platform8 = new game.Rect({
    x : 600, y : 390,
    width : 130,
    height : 10,
    color : 'blue'
});

var platform9 = new game.Rect({
    x : 600, y : 230,
    width : 130,
    height : 10,
    color : 'blue'
});

var platform10 = new game.Rect({
    x : 410, y : 170,
    width : 140,
    height : 10,
    color : 'blue'
});

var platform11 = new game.Rect({
    x : 230, y : 120,
    width : 130,
    height : 10,
    color : 'blue'
});
//======================================================ENEMYES==============================
var enemy1 = new game.Rect({
    x : 230, y : 90,
    width : 20,
    height : 30,
    color : 'white'
});
var enemy2 = new game.Rect({
    x : 780, y : 470,
    width : 20,
    height : 30,
    color : 'white'
});
var enemy3 = new game.Rect({
    x : 0, y : 190,
    width : 20,
    height : 30,
    color : 'white'
});
var enemy4 = new game.Rect({
    x : 290, y : 320,
    width : 20,
    height : 30,
    color : 'white'
});

var enemy5 = new game.Rect({
    x : 490, y : 260,
    width : 20,
    height : 30,
    color : 'white'
});

var getcoin1 = false; 
var getcoin2 = false; 
var getcoin3 = false; 
var getcoin4 = false; 
var getcoin5 = false; 
var JumpKey = false;
var Rightkey = false;
var Leftkey = false;
var Fire = false;
var diarect = false;
var gameover = false;
var enemylife1 = false;
var enemylife2 = false;
var enemylife3 = false;
var enemylife4 = false;
var enemylife5 = false;
var J=0;
var dy =105;
var yt =H-hero.height;
var dx = 5;
var ddx = [];
var enemystep = 1;
 var K_pr = true;



//=============================================================================================
/*
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
/*
var gamersfile;
var req = getXmlHttp();
var namesstring;
var score;
var tmp;
var i;

var score = document.getElementById("score").textContent;
score = score.trim();

var e_nickname = document.getElementById("name").textContent;
var nickname = e_nickname.trim() + ' = ' + score + decodeURIComponent('%0D');
e_nickname = e_nickname.trim();
/*req.open('GET', 'gamers/gamers.txt', true); 
req.onreadystatechange = function() {
  if (req.readyState == 4) {
     if(req.status == 200) {
       gamersfile = req.responseText;
	   namesstring = gamersfile.split('\n');
	   for (i = 0; i < namesstring.length; i++){
		   if (namesstring[i].localeCompare(nickname) == 0){
			   tmp = i;
		   }
	   }
	 }
  }
};
req.send(null);*/
//=============================================================================================


game.update = function () {

     if ((gameover)&&(!(getcoin1 && getcoin2 && getcoin3 && getcoin4 && getcoin5 && enemylife1 && enemylife2 && enemylife3 && enemylife4 && enemylife5))){
        gameOV.posy = 200;
		console.log('lose');
            gameOV.draw();    
    }
    
    if ((getcoin1 && getcoin2 && getcoin3 && getcoin4 && getcoin5 && enemylife1 && enemylife2 && enemylife3 && enemylife4 && enemylife5)){
        gameOV.draw();
        gameover = true;
		//console.log('win');
        if ((read_score + 10) <= score  ){
            score = read_score + 10;
        }
		var xhr = getXmlHttp();
		var body = "nickname=" + encodeURIComponent(nick) + "&score=" + encodeURIComponent(score);
		xhr.open("POST", 'http://saturn.phys.petrsu.ru/~cheredn/Ssave.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(body);
		/*xhr.onreadystatechange = function() {
			console.log(xhr.responseText);
		}*/
    }
   
    if (!gameover){
    platform1.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platform6.draw();
    platform7.draw();
    platform8.draw();
    platform9.draw();
    platform10.draw();
    platform11.draw();
    hero.draw();  
    bullet.Clear();
    enemy1.Clear();
    enemy2.Clear();
    enemy3.Clear();
    enemy4.Clear();
    enemy5.Clear();
      if ((Fire)){
                bullet.y=hero.y+6;
                if(diarect == false){
                    bullet.posy = 0;
                    bullet.draw();  
                    bullet.x=hero.x+hero.width;
                }
                if(diarect == true){
                    bullet.posy =30;
                    bullet.draw();  
                    bullet.x=hero.x-bullet.width;
                    
                }
                
            }
        if(!Fire){
            bullet.Clear();
            bullet.x = -300;
        }
        
    
    if (!enemylife1) {
        enemy1.draw();
        if (enemy1.x == 230) ddx[0]=enemystep;
        if (enemy1.x == 340) ddx[0]=-enemystep;   
        enemy1.x+=ddx[0];
    }
        
    if (!enemylife2) {
        enemy2.draw();
        if (enemy2.x == 0) ddx[1]=enemystep+5;
        if (enemy2.x == 780) ddx[1]=-enemystep-5;
            enemy2.x+=ddx[1];   
    }
     
    if (!enemylife3) {
        enemy3.draw();
        if (enemy3.x == 0) ddx[2]=enemystep+1;
        if (enemy3.x == 110) ddx[2]=-enemystep-1;
            enemy3.x+=ddx[2];  
    }
    
        
    if (!enemylife4) {
        enemy4.draw();
        if (enemy4.x == 290) ddx[3]=enemystep+1;
        if (enemy4.x == 420) ddx[3]=-enemystep-1;
        enemy4.x+=ddx[3];
    }
    
    
    if (!enemylife5) {
        enemy5.draw();
        if (enemy5.x == 490) ddx[4]=enemystep+1;
        if (enemy5.x == 540) ddx[4]=-enemystep-1;
        enemy5.x+=ddx[4];
    }
    
     
    if (!getcoin1) coin1.draw();  
    if (!getcoin2) coin2.draw();  
    if (!getcoin3) coin3.draw();  
    if (!getcoin4) coin4.draw();  
    if (!getcoin5) coin5.draw();     
    
   //console.log('left   '+hero.intersecrleft(platform2));
  // console.log('right  '+hero.intersecrright(platform8));
   // console.log('down '+hero.intersecrdown(platform2));
    //console.log('downemp '+hero.intersecrdownempty(platform1));
    //console.log('left '+hero.intersecrleft(platform1));
    //console.log('enemy' +gameover);

          
       
            if ((Rightkey && hero.x < 800-hero.width))
            if ((hero.intersecrright(platform1)!=false)&&(hero.intersecrright(platform2)!=false)&&(hero.intersecrright(platform3)!=false)&&(hero.intersecrright(platform4)!=false)&&(hero.intersecrright(platform5)!=false)&&(hero.intersecrright(platform6)!=false)&&(hero.intersecrright(platform7)!=false)&&(hero.intersecrright(platform8)!=false)&&(hero.intersecrright(platform9)!=false)&&(hero.intersecrright(platform10)!=false)&&(hero.intersecrright(platform11)!=false))
            {
                hero.x += dx;
                hero.posx = 0;
                hero.posy += 87;
                diarect = false;
                if (hero.posy == 696) hero.posy = 0;
                
            }
    
            if ((Leftkey && hero.x > 0))
            if ((hero.intersecrleft(platform1)!=false)&&(hero.intersecrleft(platform2)!=false)&&(hero.intersecrleft(platform3)!=false)&&(hero.intersecrleft(platform4)!=false)&&(hero.intersecrleft(platform5)!=false)&&(hero.intersecrleft(platform6)!=false)&&(hero.intersecrleft(platform7)!=false)&&(hero.intersecrleft(platform8)!=false)&&(hero.intersecrleft(platform9)!=false)&&(hero.intersecrleft(platform10)!=false)&&(hero.intersecrleft(platform11)!=false))
            {
                hero.x -= dx;
                hero.posx = 102;
                diarect = true;
                hero.posy += 87;
                if (hero.posy == 696) hero.posy = 0;;
            }
            
            /*if ((JumpKey && hero.y > 0)&&(J==true))
                if ((hero.intersecrup(platform1)!=true)&&(hero.intersecrup(platform2)!=true)&&(hero.intersecrup(platform3)!=true)&&(hero.intersecrup(platform4)!=true)&&(hero.intersecrup(platform5)!=true)&&(hero.intersecrup(platform6)!=true)&&(hero.intersecrup(platform7)!=true)&&(hero.intersecrup(platform8)!=true)&&(hero.intersecrup(platform9)!=true)&&(hero.intersecrup(platform10)!=true)&&(hero.intersecrup(platform11)!=true)){
                    J = false;
                    yt=hero.y;
                    if ((J == false)){
                        while(dy){
                            if((hero.intersecrup(platform1)!=true)&&(hero.intersecrup(platform2)!=true)&&(hero.intersecrup(platform3)!=true)&&(hero.intersecrup(platform4)!=true)&&(hero.intersecrup(platform5)!=true)&&(hero.intersecrup(platform6)!=true)&&(hero.intersecrup(platform7)!=true)&&(hero.intersecrup(platform8)!=true)&&(hero.intersecrup(platform9)!=true)&&(hero.intersecrup(platform10)!=true)&&(hero.intersecrup(platform11)!=true))
                                hero.y-=1;
                                dy-=1;
                            
                        }    
                        dy = 115;
                    }
                        
            }
        */
                   
        if ((JumpKey && hero.y > 0) && (K_pr == true))
            if ((hero.intersecrup(platform1)!=true)&&(hero.intersecrup(platform2)!=true)&&(hero.intersecrup(platform3)!=true)&&(hero.intersecrup(platform4)!=true)&&(hero.intersecrup(platform5)!=true)&&(hero.intersecrup(platform6)!=true)&&(hero.intersecrup(platform7)!=true)&&(hero.intersecrup(platform8)!=true)&&(hero.intersecrup(platform9)!=true)&&(hero.intersecrup(platform10)!=true)&&(hero.intersecrup(platform11)!=true)) {J=1; yt=hero.y; K_pr = false}
               
        if (J == 1){
                hero.y-=15;
                dy-=15;
                    if (dy == 0){
                        dy = 105;
                        J=2;
                    }
                }
        
        
          //  if (JumpKey == false)
        //        J=true;
            if (((hero.y != yt) && (J==2)) || hero.y < 455)
                if ((hero.intersecrdown(platform1)==false)&&(hero.intersecrdown(platform2)==false)&&(hero.intersecrdown(platform3)==false)&&(hero.intersecrdown(platform4)==false)&&(hero.intersecrdown(platform5)==false)&&(hero.intersecrdown(platform6)==false)&&(hero.intersecrdown(platform7)==false)&&(hero.intersecrdown(platform8)==false)&&(hero.intersecrdown(platform9)==false)&&(hero.intersecrdown(platform10)==false)&&(hero.intersecrdown(platform11)==false)){
                hero.y +=5;
                }
                else {
                    yt = hero.y;
                }
                if (hero.y == yt){
                J=0;
                K_pr = true;  
                }
            
    
                
        
            if ((hero.intersecrdownempty(platform1)==false)||(hero.intersecrdownempty(platform2)==false)||(hero.intersecrdownempty(platform3)==false)||(hero.intersecrdownempty(platform4)==false)||(hero.intersecrdownempty(platform5)==false)||(hero.intersecrdownempty(platform6)==false)||(hero.intersecrdownempty(platform7)==false)||(hero.intersecrdownempty(platform8)==false)||(hero.intersecrdownempty(platform9)==false)||(hero.intersecrdownempty(platform10)==false)||(hero.intersecrdownempty(platform11)==false))
              yt = H-hero.height;
            
                   
            if (!Rightkey&&!Leftkey&&!JumpKey){
                hero.posy = 0;
                hero.wtex = 102;
                hero.htex = 87;
                if (!diarect) hero.posx = 0;
            }   
    
    
            if (!hero.intersecrenemy(coin1)) {getcoin1 = true; score++; coin1.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!hero.intersecrenemy(coin2)) {getcoin2 = true; score++; coin2.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!hero.intersecrenemy(coin3)) {getcoin3 = true; score++; coin3.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!hero.intersecrenemy(coin4)) {getcoin4 = true; score++; coin4.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!hero.intersecrenemy(coin5)) {getcoin5 = true; score++; coin5.x = -100;
				document.getElementById("score").innerHTML = score;}
    
            if ((!hero.intersecrenemy(enemy1))||(!hero.intersecrenemy(enemy2))||(!hero.intersecrenemy(enemy3))||(!hero.intersecrenemy(enemy4))||(!hero.intersecrenemy(enemy5))) gameover = true;
           
    
            if (!bullet.intersecrenemy(enemy1)) {enemylife1 = true; score++; enemy1.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!bullet.intersecrenemy(enemy2)) {enemylife2 = true; score++; enemy2.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!bullet.intersecrenemy(enemy3)) {enemylife3 = true; score++; enemy3.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!bullet.intersecrenemy(enemy4)) {enemylife4 = true; score++; enemy4.x = -100;
				document.getElementById("score").innerHTML = score;}
            if (!bullet.intersecrenemy(enemy5)) {enemylife5 = true; score++; enemy5.x = -100;
				document.getElementById("score").innerHTML = score;}
 
            
//==================================================================================================
	
}
};
game.start();
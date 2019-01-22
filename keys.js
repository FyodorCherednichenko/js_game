document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e){
    if(e.keyCode == 39){
        Rightkey = true;
    }
    else if(e.keyCode == 37){
        Leftkey = true;
    }
    else if(e.keyCode == 38){
        JumpKey = true;
    }
    if(e.keyCode == 32){
        Fire = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        Rightkey = false;
    }
    else if(e.keyCode == 37){
        Leftkey = false;
    }
    else if(e.keyCode == 38){
        JumpKey = false;
    }   
     if(e.keyCode == 32){
        Fire = false;
    }
}

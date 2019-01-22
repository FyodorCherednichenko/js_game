function Game (WIDTH, HEIGHT, BCLR) {
'use strict';
    var D = document;
    var cnv = D.createElement('canvas');
    cnv.style.position = 'fixed';
    cnv.style.left = 0;
    cnv.style.top = 0;
    cnv.width = WIDTH ;
    cnv.height = HEIGHT;
    cnv.style.backgroundColor = BCLR;
    D.body.appendChild(cnv);
    
    var ctx = cnv.getContext('2d');
    
    var imgList = {};
    var loadImage = function(file){
        if (imgList[file]) return;
        var image = D.createElement('img');
        imgList[file] = {
            loaded : false,
            image : image
        };
        var _image = imgList[file];
      
        image.onload = function () {
            _image.loaded = true;      
        };
        image.src = file;
    };
    
    
    var _Game = this;
    

    this.update = function () {
        console.log('Update не определена');
    };
    
    var engine = function () {
        ctx.clearRect(0,0,WIDTH,HEIGHT);
        _Game.update();
        window.setTimeout(engine,1000/speed);
    }
    
    this.start = function () {
        engine();
        
    };
    
    
    var drawRect = function(x,y,w,h,c){
        ctx.fillStyle = c;
        ctx.fillRect(x,y,w,h);  
    };
    var clearRect = function(x,y,w,h){
      ctx.clearRect(x,y,w,h);  
    };
    
    var drawImage = function(x, y, w, h,posx,posy,wtex,htex, file){
        if (!imgList[file]) return;
        if (!imgList[file].loaded) return;
        
        ctx.drawImage(imgList[file].image,posx,posy,wtex,htex,x,y,w,h);
        
    };
    
    
    this.Rect = function (param) {
      
        this.x = param.x;
        this.y = param.y;
        this.width = param.width;
        this.height = param.height;
        this.color = param.color;
        this.texture = false;
        
        if (param.texture) {
            this.texture = param.texture;
            loadImage(param.texture);
            this.posx = param.posx;
        this.posy = param.posy;
        this.wtex = param.wtex;
        this.htex = param.htex;
        }
    };
    
    this.Rect.prototype = {
        
        draw : function () {
            if(this.color)
                drawRect(this.x,this.y,this.width,this.height,this.color);
            if(this.texture)
                drawImage(this.x,this.y,this.width,this.height,this.posx,this.posy,this.wtex,this.htex,this.texture);
             
            
        },
        
        Clear : function (){
          clearRect(this.x,this.y,this.width,this.height);  
        },
        
        intersecrenemy : function (obj){
            
             if (this.x+this.width < obj.x || this.y+this.height < obj.y || this.x > obj.x+obj.width || this.y > obj.y+obj.height) 
                 return (true);
            else
                return (false);
        },
        intersecrleft : function (obj){
            
            return (this.x != obj.x+obj.width || this.y+this.height <= obj.y || this.y >= obj.y+obj.height)            
        },
        intersecrright : function (obj){
                        
          return ((this.x != obj.x-30) || (this.y+this.height <= obj.y)|| (this.y >= obj.y+obj.height))            
        },
        intersecrup : function (obj){
            
            if (this.x+this.width >= obj.x && this.x <= obj.x+obj.width && this.y == obj.y+obj.height ) 
                 return (true);
            else
                return (false);          
        },
        intersecrdown : function (obj){
            
             if (this.x+this.width >= obj.x && this.x <= obj.x+obj.width && this.y+this.height == obj.y ) 
                 return (true);
            else
                return (false);            
        },
        intersecrdownempty : function (obj){
            
             if (this.x+this.width < obj.x || this.y+this.height < obj.y || this.x > obj.x+obj.width || this.y > obj.y+obj.height){ 
                if (this.x+this.width >= obj.x && this.x <= obj.x+obj.width)
                    return (false);
                  return (true);
             }
            else
                return (false);
        }
    };
    
    
}
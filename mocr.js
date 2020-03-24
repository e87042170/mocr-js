var pic="lisence.png"

function loadImage(src){
    var canvas=document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext("2d");
    var img = new Image();   // Create new img element
    img.src = src; // Set source path
    img.onload = function(){
        var iw=img.width;
        var ih=img.height;
        canvas.width=iw;//要用width不要用style.width，大小會有差異
        canvas.height=ih;
        ctx.drawImage(img,0,0,iw,ih);
    };
}

loadImage(pic);
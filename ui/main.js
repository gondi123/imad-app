console.log('Loaded!');
var img=document.getElementById("mad");
img.onClick=function(){
    
    var interval=setInterval(moveRight,50);
};
function moveRight(){
    var s=0;
    s=s+5;
    img.style.marginLeft=s+'px';
}
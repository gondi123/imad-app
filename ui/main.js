console.log('Loaded!');
var img=document.getElementById("mad");
img.onClick=function(){
    
    var time=setInterval(moveRight,50);
};
function moveRight(){
    var s=0;
    s=img+5;
    img.style.marginright=s+px;
}
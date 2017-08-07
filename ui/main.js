console.log('Loaded!');

var img=document.getElementById("mad");

img.onclick=function(){
    
  var interval=setInterval(func,50);
};
function func(){
    var s=0;
    s=s+5;
    img.style.marginLeft=s+"px";
    
}
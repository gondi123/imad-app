console.log('Loaded!');

var img=document.getElementById("mad");
var s=0;
img.onclick=function(){
    
  var interval=setInterval(func,50);
};
function func(){
    
    s=s+5;
    img.style.marginLeft=s+"px";
    
}
var count=0;
var counter=document.getElementById("counter");
counter.onclick=function(){
  
  var span=document.getElementById("count");
  span.innerHTML=count+1;
    
};
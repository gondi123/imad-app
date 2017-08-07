/*console.log('Loaded!');

var img=document.getElementById("mad");
var s=0;
img.onclick=function(){
    
  var interval=setInterval(func,50);
};
function func(){
    
    s=s+5;
    img.style.marginLeft=s+"px";
    
}*/
var button=document.getElementById("counter");
var count=0;
 
 button.onclick=function()
 {
   count=count+1;
   var span=document.getElementById("count");
   span.innerHTML=count.toString();
    
};
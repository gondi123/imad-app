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
 
 button.onclick=function()
 {
     var request=new XMLHttpRequest();
     
     request.onreadystatechange=function(){
         
         if(request.readyState===XMLHttpRequest.DONE){
             if(request.status===200){
             var counter=request.response;
             var span=document.getElementById("count");
             span.innerHTML=counter.toString();
             }
         }
         
    };
    request.open('GET',"http://ngondireddy.imad.hasura-app.io/counter",true);
    request.send(null);
     
  
   
    
};
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
/*var button=document.getElementById("counter");
 
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
     
  };*/
  
  
  var button=document.getElementById("submit");
  
  button.onClick=function(){
    var request=new XMLHttpRequest();
     
     request.onreadystatechange=function(){
         
         if(request.readyState===XMLHttpRequest.DONE){
             if(request.status===200){
               var names=request.responseText;
               names=JSON.parse(names);
               var list='';
               for(var i=0;i<names.length;i++){
                   list="<li>"+names[i]+"</li>";
               }
               var ul=document.getElementById('list');
               ul.innerHTML=list;
             }
         }
         
    };
    var input=document.getElementById("input");
    var name=input.value;
    request.open('GET',"http://ngondireddy.imad.hasura-app.io/submit-name?name="+name,true);
    request.send(null);  
      
      
  };
  
  
  
  
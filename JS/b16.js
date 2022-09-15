var f=0;
function demo(){
    var pau = document.getElementById("abc");
    pau.style.transform = 'rotate('+f+'deg)';
   if(f==0){
       clearInterval(X);
   }
}
function pause(){
   setInterval(demo,100)
}
var s=0;
function demo1(){
    var s1 = document.getElementById("abc");
    s1.style.transform = 'rotate('+s+'deg)';
       s+=10;
}
function nut1(){
  A= setInterval(demo1,100)
}
var SS=0;
function demo2(){
    var s2 = document.getElementById("abc");
    s2.style.transform = 'rotate('+SS+'deg)';
    SS+=20;
}
function nut2(){
   setInterval(demo2,100);
}
var SSS=0;
function demo3(){
    var s3 = document.getElementById("abc");
    s3.style.transform ='rotate('+SSS+'deg)';
    SSS+=30;
}
function nut3(){
   setInterval(demo3,100);
}
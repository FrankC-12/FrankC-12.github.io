window.addEventListener('load',function(){
    var img=[]
    img[0]="img/Uno.jpg";
    img[1]="img/Dos.jpg";
    img[2]="img/Tres.jpg"
    img[3]="img/Cuatro.jpg"
    img[4]="img/Cinco.jpg"
 
    var n=0;
 
    function Slide(){
        document.slide.src = img[n];
 
        if(n<4){
            n++;
        }
        else{
            n=0;
        }
    }
    setInterval(Slide,1600);
 });


const formulario =document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("se pulso el boton")

});
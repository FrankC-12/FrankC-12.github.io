const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedroLight = document.querySelector(".imagen-light")

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"));
    })
})

contenedroLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedroLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedroLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
}
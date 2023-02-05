const menuicon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu-navegacion")
const boton = document.querySelector(".boton")



menuicon.addEventListener("click" , ()=>{
    menu.classList.toggle("spread") /*Cada vez que toque el menu lo quito o lo pongo*/
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != menuicon){
        menu.classList.toggle("spread")
    }
})

boton.addEventListener("click", () =>{
    if(document.getElementById("nombre").value == "" || document.getElementById("email").value=="" || document.getElementById("mensaje").value =="" ){
        alert("Por favor rellene todos los campos.")
    }
    else{
        alert("Mensaje enviado.")
    }
})

ExtraerDatos()
function ExtraerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('Get','skills.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let data = JSON.parse(this.responseText)
            let rec = document.querySelector('#habilidades');
            rec.innerHTML = "";
            for(let x of data){
                rec.innerHTML += `
                        <div>
                            <p>${x.habilidad}</p>
                            <p>${x.nivel}</p>
                        </div>
                `
            }
        }
        
    }
}
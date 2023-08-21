document.addEventListener("DOMContentLoaded",()=>{
const BotonGuardar=document.getElementById("buttonText");
BotonGuardar.addEventListener('click',Guardar)
});
function Guardar(){
    const Input=document.getElementById("inputText");
    localStorage.setItem("Dato", Input.value);
}
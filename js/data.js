document.addEventListener("DOMContentLoaded",()=>{
    const display=document.getElementById("data");
    display.innerHTML=localStorage.getItem("Dato");
    });
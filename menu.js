const hamburguer = document.querySelector(".hamburguer");
const textBox = document.getElementById("text-box");

function clickMenu(){
        hamburguer.classList.toggle("on")
        textBox.classList.toggle("on")
   }
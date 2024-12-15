const inputs = document.querySelectorAll(".categorias");
const msgs = document.querySelectorAll(".msgs");
const alertResultado = document.querySelector(".alert-error-resultado");
const alertError = document.querySelector(".alert-error");
const alertOk = document.querySelector(".alert-ok");
const bntEnviar = document.querySelector("#form-button");
const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const resultado = document.querySelector("#resultado");

let num1 = Math.floor(Math.random() * (999 - 1) + 1)
let num2 = Math.floor(Math.random() * (999 - 1) + 1)
let soma = num1 + num2
numero1.innerHTML = num1
numero2.innerHTML = num2

//Função para validação do formulário
bntEnviar.addEventListener("click", () => {
    inputs.forEach(valorInput => {
        if(!valorInput.value){
            let msg = ""
            msgs.forEach(valorMsg => {
                let nameInput = valorInput.className.replace('categorias', '')
                if(valorMsg.className.match(nameInput)) {
                        msg = valorMsg
                    }
                }) 
                msg.classList.add("show")
            }

        else{
            let msg = ""
            msgs.forEach(valorMsg => {
                let nameInput = valorInput.className.replace('categorias', '')
                if(valorMsg.className.match(nameInput)){
                        msg = valorMsg
                    }
                }) 
                msg.classList.remove("show")
            }
        
        })
    //Função para mostrar e remover mesagem de erro no final.
        let val = true
        msgs.forEach(valorMsg => {
            if(valorMsg.className.match(/show/)) {
                    val = false
                    alertOk.classList.remove("show")
                    alertError.classList.add("show")
                    return
                }
            }) 
        if(val){
            console.log("true")
            alertError.classList.remove("show")
            if(soma != resultado.value){
            alertResultado.classList.add("show")
            alertOk.classList.remove("show")
            }
            else{
                alertResultado.classList.remove("show")
                alertOk.classList.add("show")
            } 
        }
      
})





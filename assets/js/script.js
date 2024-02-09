var nome = document.getElementById("nome")
var email = document.querySelector("#email")
var assunto = document.querySelector("#assunto")

nome.style.width = "32.9%"
email.style.width = "32.9%"

function validarNome() {
    let txt = document.querySelector("#txtNome")
    
    if (nome.value.length < 3) {    
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    }
    else {
        txt.innetHTML = "Nome Válido"
        txt.style.color = "green"
    }
}

function validarEmail() {
    let txt = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
}

function validarAssunto() {
    let txt = document.querySelector("#txtAssunto")

    if (assunto.value.length < 10 || assunto.value.length > 1000) {
        txtAssunto.innerHTML = "A mensagem deve possuir no mínimo 10 caracteres e no máximo 1000"
        txtAssunto.style.color = "red"
    }
    else {
        txtAssunto.innerHTML = "Mensagem Válida"
        txtAssunto.style.color = "green"
    }
}
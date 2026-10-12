const campoSenha = document.getElementById("senha");

console.log(campoSenha.type);

const Formulario = document.getElementById("form-login");
Formulario.addEventListener("submit",function(event){
    event.preventDefault()
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    if(email.trim()==""||senha.trim()==""){
    const mensagemErro = document.getElementById("mensagem-erro")
    mensagemErro.textContent="Preencha adequadamente os campos acima!!"
    }
    else{
    const mensagemErro = document.getElementById("mensagem-erro")
    mensagemErro.textContent=""
    console.log(email);
    console.log(senha);
    }
});




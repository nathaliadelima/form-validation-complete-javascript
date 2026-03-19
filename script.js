document.getElementById("formulario").addEventListener("submit", function(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const senha = document.getElementById("senha").value;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(nome === "" || email === "" || telefone === "" || senha === ""){
    alert("Todos os campos são obrigatórios");
    return;
}

if(nome.length < 3){
    alert("O nome deve ter pelo menos 3 caracteres");
    return;
}

if(!emailRegex.test(email)){
    alert("Email inválido");
    return;
}

if(!telefoneRegex.test(telefone)){
    alert("Telefone inválido");
    return;
}

if(!senhaRegex.test(senha)){
    alert("Senha precisa ter no mínimo 8 caracteres, uma letra maiúscula e um número");
    return;
}

alert("Formulário enviado com sucesso!");

});
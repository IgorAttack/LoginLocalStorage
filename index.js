function salvarUsuario(){
    let nome = document.getElementById('usuario').value;
    localStorage.setItem('nomeUsuario', nome);
}

function exibirMsg(mensagem){
    let pMsg = document.getElementById('mensagem');
    pMsg.textContent = mensagem;
}

window.onload = function () {
    let nomeArmazenado = localStorage.getItem('nomeUsuario');
    if (nomeArmazenado){
        exibirMsg(`Olá, ${nomeArmazenado}! Seu nome está salvo.`);
    } else {
        exibirMsg('Digite seu nome e senha acima e clique em Entrar');
    }
}

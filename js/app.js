let listaAmigos = []
nomeAmigo = document.getElementById('nome-amigo')

function adicionar(){
    let amigo = nomeAmigo.value
    listaAmigos.push(amigo)
    nomeAmigo.value = ''
    let amigosIncluidos = document.getElementById('lista-amigos')
    amigosIncluidos.textContent = listaAmigos
}

function sortear(){

}

function reiniciar(){

}
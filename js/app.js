let sorteioRealizado = false
let listaAmigos = []
let nomeAmigo = document.getElementById('nome-amigo')
let amigosIncluidos = document.getElementById('lista-amigos')
let listaSorteio = document.getElementById('lista-sorteio')

function adicionar(){
    let amigo = nomeAmigo.value

    if(amigo == ''){
        alert('Por favor, insira um nome de uma pessoa para adicionar')
        return
    }

    if(listaAmigos.includes(amigo)){
        alert('Este amigo já foi adicionado')
        return
    }

    listaAmigos.push(amigo)
    nomeAmigo.value = ''    
    
    let paragrafo = document.createElement('p')
    paragrafo.textContent = amigo

    paragrafo.addEventListener('click', function (){
        if(sorteioRealizado){
            alert('Não é possível excluir o nome, o sorteio já foi realizado')
            return
        }
        
        let texto = 'Tem certeza que deseja excluir o nome da lista?'
        if(confirm(texto) == true){ 
            excluirNome(amigo, paragrafo)            
        }
        else{
            return
        }
    })

    amigosIncluidos.appendChild(paragrafo)
}

function sortear(){
    if(sorteioRealizado){
        alert('O sorteio já foi realizado, por favor, limpe a seleção antes de sortear novamente')
        return
    }

    if(listaAmigos.length < 2){
        alert('É necessário ao menos duas pessoas para realizar o sorteio do amigo oculto')
        return
    }    

    let amigosParaSortear = [...listaAmigos]
    amigosParaSortear.sort(() => Math.random() - 0.5)
    let resultado = []

    for (let i = 0; i < listaAmigos.length; i++){
        if(listaAmigos[i] === amigosParaSortear[i]){
            amigosParaSortear.sort(() => Math.random() - 0.5)
            i = -1
        }else{
        resultado.push(`${listaAmigos[i]} vai presentear ${amigosParaSortear[i]}`)
        }
    }
    
    listaSorteio.innerHTML = resultado.join('<br>')
    sorteioRealizado = true
}

function reiniciar(){
    if(amigosIncluidos.textContent == '' && listaSorteio.innerHTML == '' && nomeAmigo.value == ''){
        alert('Não existem dados para serem apagados')
        return
    }

    let texto = 'Tem certeza que deseja limpar os dados da tela?'
    if(confirm(texto) == true){
        listaAmigos = []    
        sorteioRealizado = false
        amigosIncluidos.textContent = ''
        listaSorteio.innerHTML = ''
        nomeAmigo.value = ''
    }
    else{
        return
    }
}

function excluirNome(nome, elementoParagrafo){
    listaAmigos = listaAmigos.filter(amigo => amigo !== nome)
    amigosIncluidos.removeChild(elementoParagrafo)
}
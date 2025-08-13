// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do campo de entrada
    const campoAmigo = document.getElementById('amigo');
    const nomeAmigo = campoAmigo.value.trim();
    
    // Validação: verifica se o campo não está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    
    // Verificar se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado à lista!');
        return;
    }
    
    // Adiciona o nome ao array
    amigos.push(nomeAmigo);
    
    // Limpa o campo de entrada
    campoAmigo.value = '';
    
    // Atualiza a visualização da lista
    atualizarListaAmigos();
    
    // Limpa o resultado anterior se existir
    limparResultado();
}

// Função para atualizar a lista visual de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    // Cria um item de lista para cada amigo
    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        itemLista.classList.add('friend-item');
        
        // Adiciona botão de remoção (opcional)
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = ' ✕';
        botaoRemover.style.marginLeft = '10px';
        botaoRemover.style.background = 'none';
        botaoRemover.style.border = 'none';
        botaoRemover.style.color = '#ff4444';
        botaoRemover.style.cursor = 'pointer';
        botaoRemover.style.fontSize = '16px';
        botaoRemover.onclick = () => removerAmigo(index);
        
        itemLista.appendChild(botaoRemover);
        listaAmigos.appendChild(itemLista);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    limparResultado();
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo à lista antes de sortear!');
        return;
    }
    
    if (amigos.length === 1) {
        alert('Adicione pelo menos dois amigos para fazer um sorteio!');
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibe o resultado
    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong> 🎉`;
}

// Função para limpar o resultado
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Adiciona funcionalidade de pressionar Enter no campo de entrada
document.addEventListener('DOMContentLoaded', function() {
    const campoAmigo = document.getElementById('amigo');
    
    campoAmigo.addEventListener('keypress', function(evento) {
        if (evento.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do input
    const nomeAmigo = document.getElementById('amigo').value.trim();
    
    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);
    
    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";
    
    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Seleciona a lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista existente
    listaAmigos.innerHTML = "";
    
    // Percorre o array de amigos e adiciona um <li> para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos antes de sortear.");
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibe o nome do amigo sorteado na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}

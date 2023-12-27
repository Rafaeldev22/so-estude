// Array para armazenar as pessoas cadastradas
let pessoas = [];

// Função para cadastrar uma pessoa
function cadastrarPessoa() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    // Validar se todos os campos foram preenchidos
    if (nome && email && idade) {
        // Criar objeto pessoa
        const pessoa = {
            nome: nome,
            email: email,
            idade: idade
        };

        // Adicionar pessoa ao array
        pessoas.push(pessoa);

        // Atualizar a lista de pessoas na página
        atualizarListaPessoas();

        // Limpar os campos do formulário
        document.getElementById('cadastroForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para atualizar a lista de pessoas na página
function atualizarListaPessoas() {
    const listaPessoas = document.getElementById('listaPessoas');
    listaPessoas.innerHTML = '';

    // Iterar sobre o array de pessoas e criar elementos de lista
    pessoas.forEach((pessoa, index) => {
        const itemLista = document.createElement('div');
        itemLista.classList.add('item-lista');
        itemLista.innerHTML = `<strong>${pessoa.nome}</strong> (${pessoa.idade} anos) - ${pessoa.email}`;
        listaPessoas.appendChild(itemLista);
    });
}

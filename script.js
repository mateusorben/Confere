let idCounter = 0; 

const containerModal = document.querySelector('.container-modal');
const modal = document.querySelector('.modal');

const modalEditar = document.querySelector('.modal-editar');

function adicionarItem() {
    const divConfirmadosItens = document.querySelector('.confirmados');
    const descricaoItemModal = document.querySelector('#item-descricao-modal').value;

    idCounter++;

    console.log(idCounter)

    divConfirmadosItens.innerHTML += `
            <div class="item" id="item-${idCounter}">
                <div class="check-text-item">
                    <input type="checkbox">
                    <p>${descricaoItemModal}</p>
                </div>
                <div class="btns-item">
                    <button type="button" onclick="editarItem(${idCounter})">
                        <img src="imagens/botao-editar.png" alt="botao-editar" id="btn-editar">
                    </button>
                    <button type="button" onclick="apagarItem(${idCounter})">
                        <img src="imagens/botao-excluir.png" alt="botao-editar" id="btn-excluir">
                    </button>
                </div>
            </div>
    `
    containerModal.style.display = "none";
    modal.style.display = "none";
}

function abrirModal() {
    containerModal.style.display = "flex";
    modal.style.display = "flex";
} 

function fecharModal() {
    containerModal.style.display = "none";
    modal.style.display = "none";
    modalEditar.style.display = "none"
}

function apagarItem(id) {
    const item = document.querySelector(`#item-${id}`);
    if (item) {
        item.remove();
    }
}

function editarItem(id) {
    const item = document.querySelector(`#item-${id}`);
    if (item) {
        const descricao = item.querySelector('p').textContent;
        const descricaoModal = document.querySelector('#item-descricao-modal-editar');

        descricaoModal.value = descricao;
        containerModal.style.display = "flex";
        modalEditar.style.display = "flex";
        modalEditar.dataset.id = id;
    }
}

function confirmarEdicaoItem() {
    const modalEditar = document.querySelector('.modal-editar');
    const id = modalEditar.dataset.id;

    const descricaoModal = document.querySelector('#item-descricao-modal-editar');
    const item = document.querySelector(`#item-${id}`);

    if (item) {
        const descricaoP = item.querySelector('p');
        descricaoP.textContent = descricaoModal.value;
    }

    fecharModal();
}
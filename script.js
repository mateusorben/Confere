let idCounter = 0; 

const containerModal = document.querySelector('.container-modal');
const modal = document.querySelector('.modal');

function adicionarItem() {
    const divConfirmadosItens = document.querySelector('.confirmados');
    const descricaoItemModal = document.querySelector('#item-descricao-modal').value;

    idCounter++;

    console.log(idCounter)

    divConfirmadosItens.innerHTML += `
            <div class="item" id="item-${idCounter}">
                <p>${descricaoItemModal}</p>
                <input type="checkbox">
                <button type="button" onclick="apagarItem(${idCounter})">x</button>
                <button type="button" onclick="editarItem(${idCounter})">o</button>
            </div>
    `
    containerModal.style.display = "none";
    modal.style.display = "none";
}

function abrirModal() {
    containerModal.style.display = "flex";
    modal.style.display = "block";
} 

function fecharModal() {
    containerModal.style.display = "none";
    modal.style.display = "none";
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
    }
}
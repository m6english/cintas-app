const roomBtn = document.getElementById('btn-room');
const modalAdd = document.getElementById('modal-submit');
const product = document.getElementById('product');
const qty = document.getElementById('qty');
const modal = document.getElementById('modal');
const productList = document.getElementById('product-list');
const qtyList = document.getElementById('qty-list');
const modalSave = document.getElementById('modal-save');
const mainProduct = document.getElementById('main-product-list');
const mainQty = document.getElementById('main-qty-list');
const room = document.getElementById('room');
const listContainer = document.getElementById('list-container');
const account = document.getElementById('account');
const accountBtn = document.getElementById('account-submit');
const main = document.querySelector('main');
const editBtns = document.getElementById('edit-button');
const listModal = document.getElementById('list-container-modal');
const modalHeader = document.getElementById('modal-header');


let modalHTML = '';
let editHTML = '';
let productHTML = '';
let qtyHTML = '';
let header = '';

let mainArr = [];

let roomArr = [];



accountBtn.addEventListener('click', () => {
    let accountHTML = `<h1>${account.value}</h1>`;
    main.insertAdjacentHTML('afterbegin', accountHTML);
    account.style.display = 'none';
    accountBtn.style.display = 'none';
    room.style.display = 'block';
    roomBtn.style.display = 'block';
})

roomBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    header = `<h1>${room.value}</h1>`;
    modalHeader.innerHTML = header;
    listModal.innerHTML = '';
    modalHTML = '';
})

modalAdd.addEventListener('click', () => {
    let object = new Object();
    object.product = product.value;
    object.qty = qty.value;
    roomArr.push(object);
    mainArr.push(object);
    modalHTML = '';
    for ( let i = 0; i < roomArr.length; i++ ) {
        modalHTML += `
        <div>
        <button>-</button>
        <div>
        <span>${roomArr[i].product}</span>
        <span>${roomArr[i].qty}</span>
        </div>
        </div>    
        `;
    }
    listModal.innerHTML = modalHTML;
    product.value = '';
    qty.value = '';
})

modalSave.addEventListener('click', () => {
    modal.style.display = 'none';
    roomArr.length = 0;
    listContainer.innerHTML += `
        <hr>
        <h2>${room.value}</h2>
        ${modalHTML}`;
    room.value = '';
    modalHeader = '';
    modalHTML = '';
})
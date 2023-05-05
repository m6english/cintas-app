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
let productHTML = '';
let qtyHTML = '';

let mainArr = [];

let roomArr = [];



roomBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    let modalHeader = document.getElementById('modal-header');
    modalHeader.innerHTML = room.value;
})

modalAdd.addEventListener('click', () => {
    let object = new Object();
    object.product = product.value;
    object.qty = qty.value;
    roomArr.push(object);
    mainArr.push(object);
    productHTML = '';
    qtyHTML = '';
    for ( let i = 0; i < roomArr.length; i++ ) {
        productHTML += `
            <li>${roomArr[i].product}</li>
        `;
        qtyHTML += `
            <li>${roomArr[i].qty}</li>
        `;
    }
    productList.innerHTML = productHTML;
    qtyList.innerHTML = qtyHTML;
    product.value = '';
    qty.value = '';
})

modalSave.addEventListener('click', () => {
    modal.style.display = 'none';
    roomArr.length = 0;
    listContainer.innerHTML += `
        <h2>${room.value}</h2>
        <div>
        <ul>
        ${productHTML}
        </ul>
        <ul>
        ${qtyHTML}
        </ul>
        </div>
        <hr>
    `;
    room.value = '';
    productList.innerHTML = '';
    qtyList.innerHTML = '';
})
const roomBtn = document.getElementById('btn-room');
const room = document.getElementById('room');
const main = document.querySelector('main');
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-submit');
const modalSave = document.getElementById('modal-save');
const product = document.getElementById('product');
const qty = document.getElementById('qty');
const productList = document.getElementById('product-list');
const qtyList = document.getElementById('qty-list');
const homeProductList = document.getElementById('main-product-list');
const homeqtyList = document.getElementById('main-qty-list');


let roomsArr = [];
let productsArr = [];
let qtyArr = [];

function createListItems(arr) {
    let items = '';
    for ( let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    } return items;
}

function createHeader(arr) {
    let header = '';
    for ( let i =0; i < arr.length; i++ ){
        header = `<h2>${arr[i]}</h2>`;
    } return header;
}

roomBtn.addEventListener('click', () => {
    roomsArr.push(room.value);
    room.value = '';
    modal.style.display = 'block';
    modal.insertAdjacentHTML('afterbegin', createHeader(roomsArr));
})

modalBtn.addEventListener('click', () => {
    productsArr.push(product.value);
    qtyArr.push(qty.value);
    for ( let i = 0; i < productsArr.length; i++ ) {
        productList.innerHTML = createListItems(productsArr);
    }
    for ( let i = 0; i < qtyArr.length; i++ ) {
        qtyList.innerHTML = createListItems(qtyArr);
    }
    product.value = '';
    qty.value = '';
})

modalSave.addEventListener('click', () => {
    homeProductList.innerHTML = createListItems(productsArr);
    homeqtyList.innerHTML = createListItems(qtyArr);
    modal.style.display = 'none';
    productsArr.length = 0;
    qtyArr.length = 0;
    roomsArr.length = 0;
})
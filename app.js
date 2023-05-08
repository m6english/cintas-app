const roomBtn = document.getElementById('btn-room');
const modalAdd = document.getElementById('modal-submit');
const modal = document.getElementById('modal');
const modalSave = document.getElementById('modal-save');
const room = document.getElementById('room');
const accountBtn = document.getElementById('account-submit');
const listModal = document.getElementById('list-container-modal');
const modalHeader = document.getElementById('modal-header');


let modalHTML = '';
let header = '';

let mainArr = [];

let roomArr = [];

// Adds business name to home page, initiates the room input field
accountBtn.addEventListener('click', () => {
    const main = document.querySelector('main');
    const account = document.getElementById('account');
    if (!account.value) {
        alert('Please Enter the Business Name');
    } else {
        let accountHTML = `<h1>${account.value}</h1>`;
        main.insertAdjacentHTML('afterbegin', accountHTML);
        account.style.display = 'none';
        accountBtn.style.display = 'none';
        room.style.display = 'block';
        roomBtn.style.display = 'block';
    }
})

// Adds room name to header of modal, initiates modal & clears existing modal data
roomBtn.addEventListener('click', () => {
    if (!room.value) {
        alert('Please Enter the Room Name');
    } else {
        modal.style.display = 'block';
        header = `<h1>${room.value}</h1>`;
        modalHeader.innerHTML = header;
        listModal.innerHTML = '';
        modalHTML = '';
    }
})

// Pushes user input to main & room arrays as an object. Displays content in modal list
modalAdd.addEventListener('click', () => {
    const product = document.getElementById('product');
    const qty = document.getElementById('qty');
    if (!product.value || !qty.value) {
        alert('Please Enter Product Information');
    } else {
        let object = new Object();
        object.product = product.value;
        object.qty = qty.value;
        roomArr.push(object);
        mainArr.push(object);
        modalHTML = '';
        for (let i = 0; i < roomArr.length; i++) {
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
    }
})

// Closes modal and resets modal data. Adds modal data to home page. Resets room array
modalSave.addEventListener('click', () => {
    const listContainer = document.getElementById('list-container');
    modal.style.display = 'none';
    roomArr.length = 0;
    listContainer.innerHTML += `
        <hr>
        <h2>${room.value}</h2>
        ${modalHTML}
        `;
    room.value = '';
    modalHeader.innerHTML = '';
    modalHTML = '';
})
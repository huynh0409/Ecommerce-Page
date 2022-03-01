const modalCart = document.querySelector('.header__cart i');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.icon-close');

const popupModal = () => {
    modal.classList.toggle('active-modal');
}
closeModal.addEventListener('click', () => {
    modal.classList.remove('active-modal');
})

modalCart.addEventListener('click', () => {
    popupModal();
});


const bigImg = document.querySelector('.main__img>img');
const listImg = document.querySelectorAll('.img-item');

listImg.forEach((e, index) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveImg();
        e.currentTarget.classList.add('active-img');
        bigImg.src = `./images/image-product-${index+1}.jpg`;
    });
});

const removeActiveImg = () => {
    listImg.forEach(e => {
        e.classList.remove('active-img');
    })
} 

const valueItem = document.querySelector('#valueItem');
const minusItem = document.querySelector('.fa-minus');
const plusItem = document.querySelector('.fa-plus');

let value = 0;

minusItem.addEventListener('click', () => {
    value--;
    if (value < 0) {
        value = 0;
    }
    valueItem.textContent = value;
});
plusItem.addEventListener('click', () => {
    value++;
    valueItem.textContent = value;
});

 value = +valueItem.textContent;

const addItemCart = document.querySelector('.btn-container button');
const contentBox = document.querySelector('.modal-item__text p:last-child');
const emptyItem = document.querySelector('.empty-item');
const modalItem = document.querySelector('.modal-item');

addItemCart.addEventListener('click', () => {
        modal.classList.add('active-modal');
     if(value != 0){
        const oldItem =  document.querySelector('.price');
        emptyItem.classList.add('hide');
        modalItem.classList.remove('hide');
        // console.log(value);
        if(!oldItem) {
            let createContent =  `<p class="price">$125.00 x ${value} = $${(value * 125).toFixed(2)}</p>`;
            contentBox.insertAdjacentHTML('afterend', createContent);
        } else {
            let createContent =  `<p class="price">$125.00 x ${value} = $${(value * 125).toFixed(2)}</p>`;
            oldItem.innerHTML = createContent;
        }
        modal.classList.add('active-modal')
    }
});

document.querySelector('.trash').addEventListener('click', () => {
    modalItem.classList.add('hide');
    emptyItem.classList.remove('hide');
    modal.classList.add('active-modal');
});

const subMenu = document.querySelector('.sub-menu');
const subMenuBtn = document.querySelector('.header__icon');
const closeSubMenuBtn = document.querySelector('.sub-menu__close');

subMenuBtn.addEventListener('click', () => {
    subMenu.classList.toggle('active-sub-menu');
});

closeSubMenuBtn.addEventListener('click', ()=> {
    subMenu.classList.remove('active-sub-menu');
});


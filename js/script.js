let modalBtn = document.querySelector('.btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.fas');

modalBtn.addEventListener('click',()=>{
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',()=>{
    modalBg.classList.remove('bg-active');
});
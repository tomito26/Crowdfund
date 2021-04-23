let modalBtn = document.querySelector('.btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.fas');
let noReward = document.querySelector('.no-reward');
let burger = document.querySelector('.burger');
let navLinks = document.querySelector('.nav-links');


burger.addEventListener('click',()=>{
    navLinks.classList.toggle('nav-active'); 
    burger.classList.toggle('toggle')
});

modalBtn.addEventListener('click',()=>{
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',()=>{
    modalBg.classList.remove('bg-active');
});


noReward.addEventListener('click',()=>{
    let firstPledge = document.querySelector('.pledge1');
    if(!noReward.checked){
        firstPledge.style.border = '2px solid hsl(0, 0%, 90%)';
        console.log('its checked');
    }else{
        firstPledge.style.border = '2px solid hsl(176, 50%, 47%)';
    };
   
});




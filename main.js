const ham = document.querySelector('.ham-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close');

ham.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none';
        ham.style.display='flex';
    }
    else{   
        mobileNav.classList.add('showMenu');  
        closeIcon.style.display='flex';
        ham.style.display='none';
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu');
        closeIcon.style.display='none';
        ham.style.display='flex';
    }
    else{
            mobileNav.classList.add('showMenu');
            closeIcon.style.display='flex';
            ham.style.display='none';
    } 
})
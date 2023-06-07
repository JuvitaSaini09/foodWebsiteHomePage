const toggleButton=document.querySelector('.navbar-toggle');
const navbarLinks=document.querySelector('.navbar-links1');

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})
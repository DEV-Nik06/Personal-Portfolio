
let active = document.querySelectorAll('.value');
active.forEach(navLinks=>{
    navLinks.addEventListener('click',function(e){
        document.querySelector('.active').classList.remove('active');
        navLinks.classList.add('active');
    })
})

let hamburger = document.getElementById('btn-ham');
let navbar = document.getElementById('nav');
hamburger.addEventListener('click',onHamClick);

function onHamClick(e) {
    if (!navbar.classList.contains('open')) {
        
        navbar.classList.add('open');
    }else{
        navbar.classList.remove('open');
    }
}
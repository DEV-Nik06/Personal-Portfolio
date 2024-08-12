//text animation
var typed = new Typed("#Name", {
    strings: ['Nikhil',' And a WEB DEVLOPER', 'And a WEB DESIGNER', 'And a VIDEO EIDTOR'],
    typeSpeed: 150,loop: true
  });
  //
let active = document.querySelectorAll('.value');
active.forEach(navLinks=>{
    navLinks.addEventListener('click',function(e){
        document.querySelector('.active').classList.remove('active');
        navLinks.classList.add('active');
        document.querySelector('.open').classList.remove('open');
    })
})
//
let hamburger = document.getElementById('btn-ham');
let navbar = document.getElementById('nav');
hamburger.addEventListener('click',onHamClick);
let logo = document.querySelector('.left-nav');
function onHamClick(e) {
    if (!navbar.classList.contains('open')) {
        
        navbar.classList.toggle('open');
        logo.classList.add('img')
    }else{
        navbar.classList.remove('open');
    }
}



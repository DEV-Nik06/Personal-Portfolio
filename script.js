//text animation
var typed = new Typed("#Name", {
    strings: ['A WEB DEVLOPER', 'A WEB DESIGNER', 'And a VIDEO EIDTOR'],
    typeSpeed: 120,loop: true
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
const hamburgerBtn = document.getElementById('btn-ham');
const navbar = document.getElementById('nav');

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('open'); // Toggle open/close class on the navbar
});


let themeIcon = document.querySelector('#themeIcon');

themeIcon.addEventListener('click', function(e){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        themeIcon.innerHTML = '<i class="fas fa-lg fa-sun"></i>';
        themeIcon.title = "Light-Mode"
    }
    else{
        themeIcon.innerHTML = '<i class="fas fa-lg fa-moon"></i>';

    }

})

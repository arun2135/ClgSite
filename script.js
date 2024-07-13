let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Scroll Sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //Active Navabr Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        }
    })


    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100)

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}




// Image Slide Controls
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');

let currentSlide = 1;

// for image slider manual navigation
var manualNav = function(manual){

    slides.forEach((slide) => {

        slide.classList.remove('active');

        btns.forEach((btn) =>{
            btn.classList.remove('active');
        })

    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


// javascript for imageslider navigation autoplay  

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');

    let i = 1;

    var repeater =() =>{
        setTimeout(function(){

            [...active].forEach((activeSlide) =>{

                activeSlide.classList.remove('active');

            })


            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }

            if(i >= slides.length){
                return
            }

            repeater();
        },12000)
    }

    repeater();
}

repeat();
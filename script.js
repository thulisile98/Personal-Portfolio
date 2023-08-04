let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// var typingEffect = new Typed(".multiText",{
//     strings:["DEVELOPER","DESIGNER"],
//     loop:true,
//     typeSpeed:100,
//     backSpeed:80,
//     backDelay:1500
// })


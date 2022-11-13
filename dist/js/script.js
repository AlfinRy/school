// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// window.addEventListener("scroll", function () {
//     const header = document.querySelector("nav");
//     header.classList.toggle("sticky", window.scrollY > 0);
//   });

//   function toggleMenu() {
//     const menuToggle = document.querySelector(".menuToggle");
//     const navigation = document.querySelector(".navigation");
//     menuToggle.classList.toggle("active");
//     navigation.classList.toggle("active");
// }
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navList = document.querySelector(".right-side")
mobile_nav.addEventListener('click',()=>toggleNavbar())

const toggleNavbar=()=>{
navList.classList.toggle('active')
}
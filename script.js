//loader
window.addEventListener('load',()=>{
    document.querySelector('.loader').classList.add("loader__hidden");
})



// const navLinks = document.qyerySelectorAll('.nav-link');
const navLinks = document.querySelectorAll('.nav-link')

for(const element of navLinks){
    element.addEventListener('click',()=>{
        navLinks.forEach(navLink => {
            navLink.classList.remove('cs-active');
          });
          element.classList.add('cs-active');
    })
}


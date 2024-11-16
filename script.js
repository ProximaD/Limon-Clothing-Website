/*========== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*Show menu*/
if(navToggle){
      navToggle.addEventListener('click'), () => {
            navMenu.classList.add('show-menu')
      })
}

/*Hide menu*/

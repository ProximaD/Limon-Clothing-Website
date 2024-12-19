/*========================================= SHOW MENU ============================================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)
  
  
    if(toggle && nav){
      toggle.addEventListener('click', () =>{
        nav.classList.toggle('show')
      })
    }
  }
  
  showMenu('nav-toggle', 'nav-menu')

/*========================================= REMOVE MOBILE MENU ============================================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){

  //Activate link
  navLink.forEach(n=> n.classList.remove('active'))
  this.classList.add('active')

  //Remove mobile menu
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

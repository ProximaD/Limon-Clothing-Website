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



/*========================================= CONTACT US ============================================*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form fields
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Show success message (simulate successful submission)
    alert("Thank you for contacting us! We will get back to you soon.");
    form.reset(); // Clear the form
  });

  // Email Validation Function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

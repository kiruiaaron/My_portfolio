//Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//TYping effect

let typed = new Typed(".auto-input", {
  strings: [
    "Software Engineer",
    "Business Central Developer",
    "ERP Integration Specialist",
    "Full-Stack Developer",
    "Technical Consultant",
  ],
  typedspeed: 100,
  backspeed: 100,
  backDelay: 2000,
  loop: true,
});

//Active link state on scroll

//get all the links

let navLinks = document.querySelectorAll("nav ul li a");
//onsole.log(navLinks)

let sections = document.querySelectorAll("section");

// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
emailjs.init("e-6yfoFB9o28BBFq0");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_2xp36k3", "template_n2w451k", this).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Try again.");
        console.log(error);
      },
    );
  });

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section =>{
        if (scrollPos > section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
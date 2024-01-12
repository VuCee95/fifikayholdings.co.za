window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  var navLinks = document.getElementById("navLinks");

  function showMenu(){
    navLinks.style.right = "0";
    } 
    function hideMenu(){
      navLinks.style.right = "-200px";
      }


const NAV = document.getElementById("navigation");

//check links for click and smooth scroll to
Array.from(NAV.querySelectorAll(".smooth-nav-link")).forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({
        behavior: "smooth",
        // calculate where section starts
        top:
          window.pageYOffset +
          document
            .getElementById(link.getAttribute("href").slice(1))
            .getBoundingClientRect().top,
        left: 0
      });
  
      window.history.pushState({}, null, link.getAttribute("href"));
    });
  });
  
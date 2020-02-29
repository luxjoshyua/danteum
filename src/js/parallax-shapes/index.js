const sections = document.querySelectorAll("section")

document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset  
    const midViewport = topViewport + (window.innerHeight / 2)

    sections.forEach(section => {
      const topSection = section.offsetTop
      const midSection = topSection + (section.offsetHeight / 2)
      const distanceToSection = midViewport - midSection
  
      // [] finds the attribute
      const parallaxTags = section.querySelectorAll(`[data-parallax]`)
      // loop over each parallaxed tag
      parallaxTags.forEach(tag => {
        // parseFloat turns it into a decimal number
        const speed = parseFloat(tag.getAttribute("data-parallax"))
        // would log "0.15"
        tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
      })
    })
  })
const artworkShow = document.querySelectorAll('.artwork-show');
const artworkPreview = document.querySelectorAll('.artwork-preview');
const accordionWrapper = document.querySelector('.accordions-wrapper');
const accordions = document.querySelectorAll('.accordion');


artworkShow.forEach(link => {
    link.addEventListener('mouseover', e => {
        
        const accordionNode = e.target.parentNode.parentNode.parentNode;
        accordionNode.classList.add("show");
    })
    link.addEventListener('mouseout', e => {
        const accordionNode = e.target.parentNode.parentNode.parentNode;
        accordionNode.classList.remove("show");
    })
    link.addEventListener('click', e => {
        e.preventDefault();

        const accordionNode = e.target.parentNode.parentNode.parentNode;

        // check if the accordion you clicked on DOES NOT contain active
        if ( !accordionNode.classList.contains('active') ){
            // if it doesn't contain active then cycle through ALL accordions and turn off their active state.
            accordions.forEach(accordion => {
                accordion.classList.remove('active');
            });
        }
        // toggle the 'active' state of the accordion you clicked on
        accordionNode.classList.toggle("active");

        // animate the page so the accordion is at top, move smoothly
        accordionNode.scrollIntoView({behavior: "smooth"})

    })
})
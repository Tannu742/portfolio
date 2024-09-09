
export const handleScroll = (links = []) => {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.banner');
        const navLinks = document.querySelectorAll('.head_links');
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
    
            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                section.classList.add('active');
                navLinks[index].classList.add('active');
            } else {
                section.classList.remove('active');
                navLinks[index].classList.remove('active');
            }
        });
    })
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            links.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            const sectionId = e.target.getAttribute('href').replace('/', '');
            const offsetTop = document.querySelector(sectionId).offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        })
    });
};


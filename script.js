document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.experience');

    items.forEach((item) => {
        const content = item.querySelector('.experience-content');
        
        item.addEventListener('click', () => {
            if (item.classList.contains('expanded')) {
                gsap.to(content, { maxHeight: 0, duration: 0.5, ease: "power2.out" });
                item.classList.remove('expanded');
            } else {
                items.forEach((it) => {
                    const innerContent = it.querySelector('.experience-content');
                    gsap.to(innerContent, { maxHeight: 0, duration: 0.5, ease: "power2.out" });
                    it.classList.remove('expanded');
                });
                
                gsap.to(content, { maxHeight: content.scrollHeight, duration: 0.5, ease: "power2.out" });
                item.classList.add('expanded');
            }
        });
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
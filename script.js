//CLICK UN BOTTONE SU NAV E CI PORTA ALLA SEZIONE SCELTA
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const sectionPosition = section.offsetTop - navHeight;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

// Anima la nav
gsap.from("nav", { duration: 2, y: -200, opacity: 0 });

// Anima il titolo con un effetto di rimbalzo
gsap.from("h1", { duration: 2, x: -200, opacity: 0, ease: "bounce" });

// Anima il testo con un effetto di rotazione
gsap.from("p", { duration: 2, y: 200,  opacity: 0, delay: 1 });

// Anima le immagini con un effetto di rimbalzo e ritardo
gsap.from("img", { duration: 2, scale: 0, opacity: 0, stagger: 0.5, ease: "bounce" });










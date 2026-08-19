// ===== Smooth Scrolling =====

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===== Scroll Animation =====

const cards = document.querySelectorAll(".skill-card, .project-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


// Initial card state
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});


// ===== Current Year in Footer =====

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${year} Saman Liaqat. All Rights Reserved.`;
}
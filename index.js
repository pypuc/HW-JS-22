document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute("data-src");
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});

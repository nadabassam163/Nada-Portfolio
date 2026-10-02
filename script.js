document.addEventListener("DOMContentLoaded", () => {

    // Update the footer year automatically
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Nada Bassam. All rights reserved.`;
    }


    // Highlight the navigation link for the section currently being viewed
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });


    // Add styling to the active navigation link
    const style = document.createElement("style");

    style.textContent = `
        .nav-links a.active {
            color: var(--primary);
        }
    `;

    document.head.appendChild(style);

});
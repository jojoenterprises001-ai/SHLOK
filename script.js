/* =========================================
   SHLOK CHOUDHARY — PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       FOOTER YEAR
    ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================================
       SKILL BAR ANIMATION
    ========================================= */

    const skillBars = document.querySelectorAll(".skill-progress");

    const skillObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const bar = entry.target;
                    const percentage = bar.getAttribute("data-width");

                    if (percentage) {
                        bar.style.width = percentage + "%";
                    }

                    skillObserver.unobserve(bar);
                }

            });

        },
        {
            threshold: 0.4
        }
    );

    skillBars.forEach((bar) => {
        skillObserver.observe(bar);
    });


    /* =========================================
       SMOOTH NAVIGATION
    ========================================= */

    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    /* =========================================
       BUTTON CLICK EFFECT
    ========================================= */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {
                button.style.transform = "";
            }, 120);

        });

    });


    /* =========================================
       PAGE LOAD ANIMATION
    ========================================= */

    document.body.classList.add("page-loaded");

});

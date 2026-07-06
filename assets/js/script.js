// const navMenu = document.getElementById("nav_menu");
// const navToggle = document.getElementById("nav_toggle");
// const navClose = document.getElementById("nav_close");
// const navlinks = document.querySelectorAll(".nav_list a");

// // open menu
// navToggle.addEventListener("click", () => {
//   navMenu.classList.add("show-menu");

//   navClose.classList.add("show-close");
//   navToggle.classList.add("hide-toggle");
// });
// // cancel button
// navClose.addEventListener("click", () => {
//   navMenu.classList.remove("show-menu");

//     navClose.classList.remove("show-close");
//   navToggle.classList.remove("hide-toggle");
// });
// navlinks.forEach(links=>{
// links.addEventListener("click",()=>{
//    navMenu.classList.remove("show-menu");
//     navClose.classList.remove("show-close");
//   navToggle.classList.remove("hide-toggle");
// })
// });
// window.onscroll = function () {
//   let sections = document.querySelectorAll(".section");
//   let scroll = window.scrollY;

//   sections.forEach(sec => {
//     if (scroll >= sec.offsetTop - 200 && scroll < sec.offsetTop + sec.offsetHeight) {

//       document.querySelectorAll(".nav-links ul li a").forEach(a => a.classList.remove("active"));

//       document.querySelector('.nav-links ul li a[href="#' + sec.id + '"]').classList.add("active");
//     }
//   });
// };
// if(typeof Typed !== "undefined"){
// let typed = new Typed("#typing", {
//     strings: ["Web Developer", "Web Designer", "Frontend Developer"],
//     typeSpeed: 100,
//     backSpeed: 50,
//     loop: true
// });
// }

function updateActiveLink() {
    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(".nav-links a");

    sections.forEach(sec => {
        if (
            window.scrollY >= sec.offsetTop - 200 &&
            window.scrollY < sec.offsetTop + sec.offsetHeight
        ) {
            links.forEach(link => link.classList.remove("active"));

            const activeLink = document.querySelector(
                `.nav-links a[href="#${sec.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// Call on page load
updateActiveLink();

// Call on scroll
window.addEventListener("scroll", updateActiveLink);

const reveals = document.querySelectorAll(".reveal");
if (reveals) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(section => {
        observer.observe(section);
    });
}
if (document.querySelector("#typing")) {
    let typed = new Typed("#typing", {
        strings: ["Web Developer", "Web Designer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    })
}

// Dark Mode
const darkModeBtn = document.getElementById("darkMode");
const body = document.body;
const icon = darkModeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
}
darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        localStorage.setItem("theme", "light");
    }

});
function startCounter(id, target, speed) {
    const element = document.getElementById(id);
    let started = false;
    if (!element) {
        return;
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;

                let count = 0;

                const interval = setInterval(() => {
                    count++;
                    element.textContent = count;

                    if (count >= target) {
                        clearInterval(interval);
                    }
                }, speed);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(element);
}

startCounter("projects-value", 16, 100);
startCounter("clients-value", 40, 50);
startCounter("experience-value", 2, 300);
startCounter("dedication-value", 100, 20);
startCounter("satification-value", 100, 20);
startCounter("html", 90, 20);
startCounter("css", 85, 20);
startCounter("javascript", 60, 20);
startCounter("bootstrap", 90, 20);

// accordion button
const accordionButtons = document.querySelectorAll(".accordion-btn button");
accordionButtons.forEach(button => {
    const downArrow = button.querySelector(".down-arrow i");
    button.addEventListener("click", () => {
        const accordionContent = button.parentElement.nextElementSibling;
        const isOpen = accordionContent.style.display === "block";

        accordionButtons.forEach(btn => {
            const content = btn.parentElement.nextElementSibling;
            const arrow = btn.querySelector(".down-arrow i");
            content.style.display = "none";
            arrow.classList.remove("bi-caret-up-fill");
            arrow.classList.add("bi-caret-down-fill");
        });
        if (!isOpen) {
            accordionContent.style.display = "block";
            downArrow.classList.remove("bi-caret-down-fill");
            downArrow.classList.add("bi-caret-up-fill");
        }

    })
});

// 
const toast = document.getElementById("toast");

if (typeof emailjs !== "undefined") {
    emailjs.init("UJb-VdvnbrbEsOb59");
}

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        emailjs.send(
            "service_70n0uxe",
            "template_j8ajxuf",
            {
                name: name,
                email: email,
                message: message
            }
        )
            .then(function () {
                toast.hidden = false;
                toast.innerHTML = "Form submitted successfully ✅";
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                    toast.hidden = true;
                }, 5000);

                form.reset();

            })
            .catch(function (error) {

                console.log(error);
                toast.hidden = false;
                toast.innerHTML = "Failed To Send Email ❌";
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                    toast.hidden = true;
                }, 5000);

            });

    });

}

const sidebar = document.querySelector(".side-bar");
const home = document.getElementById("home");

window.addEventListener("scroll", () => {
    const homeBottom = home.offsetTop + home.offsetHeight - 100;

    if (window.scrollY >= homeBottom) {
        sidebar.classList.add("show");
    } else {
        sidebar.classList.remove("show");
    }
});

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}


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

// Theme toggle
const darkModeBtn = document.getElementById("darkMode");
const body = document.body;
const icon = darkModeBtn.querySelector("i");

// Load saved theme; default is dark
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light");
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
} else {
    body.classList.remove("light");
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
    localStorage.setItem("theme", "dark");
}

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        localStorage.setItem("theme", "dark");
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
startCounter("user-research", 90 , 20)
startCounter("information-architecture", 70 , 20);
startCounter("wireframing", 65 , 20);
startCounter("prototyping", 75 , 20);
startCounter("usability-testing", 85 , 20);
startCounter("visual-design", 80 , 20);
startCounter("interaction-design", 90 , 20);
startCounter("layout-design", 90 , 20);
startCounter("design-systems", 90 , 20);
startCounter("responsive-design", 85 , 20);
startCounter("team-collaboration", 70 , 20);
startCounter("workshop-facilitation", 60 , 20);
startCounter("design-handoff", 70 , 20);
startCounter("client-communication", 50 , 20);
startCounter("agile-workflow", 60 , 20);

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
                toast.innerHTML = "Form submitted successfully";
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
                toast.innerHTML = "Failed To Send Email âŒ";
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                    toast.hidden = true;
                }, 5000);

            });

    });

}

const MainSidebar = document.querySelector(".main-side-bar");
const sidebar = document.querySelector(".side-bar");
const home = document.getElementById("home");
const sideBarClose = document.querySelector(".side-arrow-close");
// const sideBarOpen = document.querySelector(".side-arrow-open");


window.addEventListener("scroll", () => {
    const homeBottom = home.offsetTop + home.offsetHeight - 100;

    if (window.scrollY >= homeBottom) {
        MainSidebar.classList.add("main-side-bar-show");

    } else {
        MainSidebar.classList.remove("main-side-bar-show");
    }
});
 sideBarClose.addEventListener("click", function(){
        sidebar.classList.toggle("side-bar-close");
        })

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}
// if(document.querySelector("header nav")){
// const navHeight = document.querySelector("header nav").offsetHeight;

// function scrollToHash() {
//     const hash = window.location.hash;
//     if (hash) {
//         const target = document.querySelector(hash);
//         if (target) {
//             setTimeout(() => {
//                 window.scrollTo({
//                     top: target.offsetTop - navHeight,
//                     behavior: "smooth"
//                 });
//             }, 100);
//         }
//     }
// }

const header = document.querySelector("header nav");

if (header) {

    const navHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            // sirf page ke internal links
            if (href === "#") return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: "smooth"
            });

            // URL se # hata do
            history.replaceState(null, "", window.location.pathname);

        });

    });

// }

// Scroll to hash on page load
window.addEventListener("load", () => {
    const navigation =
        performance.getEntriesByType("navigation")[0];

    if (navigation.type !== "reload") {
        scrollToHash();
    }
});
window.addEventListener("load", () => {

    const navigation =
        performance.getEntriesByType("navigation")[0];

    if (navigation.type !== "reload") {
        scrollToHash();
    }

});
// Scroll to hash when hash changes
// window.addEventListener("hashchange", scrollToHash);

document.querySelectorAll('.nav-links a, .logo a').forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: "smooth"
                });
            }
        }
    });
});
}

// const section = document.querySelectorAll("section");
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener("click", function () {
//         section.classList.add(".remove");
//     })
// });

const sections = document.querySelectorAll(
"#home,#about,#services,#skills,#education,#contact"
);
const links = document.querySelectorAll(".nav-links a");

let clickCount = 0;

links.forEach(link => {
    link.addEventListener("click", () => {

        clickCount++;

        if (clickCount >= 2) {
            sections.forEach(section => {
                section.classList.add("remove");
            });
        }

    });
});

if(document.querySelector(".tool-main")){

const track = document.querySelector(".tool-main");

// Duplicate all tools once
track.innerHTML += track.innerHTML;

}


const btns = document.querySelectorAll(".pro-on-btn");

btns.forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".project");
        const img = card.querySelector(".project-img img");

        const move = img.offsetHeight - card.querySelector(".project-img").offsetHeight;

        img.style.transform = `translateY(-${move}px)`;

        // 5 second baad wapas upar
        setTimeout(() => {
            img.style.transform = "translateY(0)";
        }, 5000);

    });

});

const progressBars = document.querySelectorAll(".skill-progress");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const progress = entry.target;

            progress.style.width = progress.dataset.width;
            progress.classList.add("activeProgress");

            progressObserver.unobserve(progress);
        }

    });

}, {
    threshold: 0.4
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// nav toggle
const navMenu = document.querySelector(".nav");
 const navToggle = document.getElementById("toggle");
 const navClose = document.getElementById("close");
if(navMenu){
 navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("navshow");

 })
 navClose.addEventListener("click", function(){
    navMenu.classList.remove("navshow");

 })
 links.forEach((link)=>{
     link.addEventListener("click", function(){
        navMenu.classList.remove("navshow");
    
     })
 })

 }

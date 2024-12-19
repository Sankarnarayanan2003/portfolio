// /-----------------Dark mode-------------------/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch")

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

// /------------Typing Effect------------------/

var typingEffect = new Typed(".typedText", {
    strings: ["Fresher","Developer" , "Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay:2000,

})

// /----------------Scroll Animation---------------------/

const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
});

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".social_icons", { delay: 200});
sr.reveal(".text-info", { delay: 320});

sr.reveal(".project-box", { interval: 200})

sr.reveal(".top-header",{})

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info",{delay:100});
srLeft.reveal(".contact-info",{delay:100})

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100})

// /-----------------Active link-----------------/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach ((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");

        } else  {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");

        }

    });
}

window.addEventListener("scroll", scrollActive);
// /---------Download Cv----------/
document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Sankarnarayanan.k.docx"; // Path to your CV file
    link.download = "Sankarnarayanan.k.docx"; // Desired download name
    link.click();
});




function opentab(evt, tabName) {

    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach((tab) => {
        tab.classList.remove('active-tab');
    });


    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach((tab) => {
        tab.classList.remove('active-link');
    });

 
    document.getElementById(tabName).classList.add('active-tab');
    evt.currentTarget.classList.add('active-link');
}


// function opentab(evt, tabName) {
//     // Hide all tab contents
//     let contents = document.querySelectorAll('.tab-contents');
//     contents.forEach(content => content.classList.remove('active-tab'));

//     // Remove active class from all tab links
//     let links = document.querySelectorAll('.tab-links');
//     links.forEach(link => link.classList.remove('active-link'));

//     // Show the clicked tab's content
//     document.getElementById(tabName).classList.add('active-tab');

//     // Add active class to the clicked tab link
//     evt.currentTarget.classList.add('active-link');
// }

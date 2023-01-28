const btnClose = document.getElementById("nav-btn-close");
const btnBars = document.getElementById("nav-btn-bars");
const navDropDown = document.getElementById("nav-dropdown");
const sidebarProgress = document.getElementById("sidebar-progress");
const mapsDiv = document.getElementById("maps-div");

const sections = [
    "hero",
    "design-methodology",
    "app-services",
    "app-name",
    "web-services",
    "web-name",
    "book-appointment"
];

let currentSection = "hero";

function ToggleNav()
{
    if (btnClose.classList.contains("hidden"))
    {
        btnClose.classList.remove("hidden");
        btnBars.classList.add("hidden");
        navDropDown.classList.remove("hidden");
    }
    else
    {
        btnBars.classList.remove("hidden");
        btnClose.classList.add("hidden");
        navDropDown.classList.add("hidden");

    }
}

function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            callback(element);
        }
        });
    }).observe(element);
}

sections.forEach((section, index) => {
    onVisible(document.getElementById(`${section}-ctx`), () => {
        if (currentSection != section)
        {
            console.log(currentSection);
            sidebarProgress.children[sections.indexOf(currentSection)].classList.remove("opacity-100");
            sidebarProgress.children[sections.indexOf(currentSection)].classList.add("opacity-50");
            currentSection = section;
        }
        sidebarProgress.children[index].classList.remove("opacity-50");
        sidebarProgress.children[index].classList.add("opacity-100");
    });
});
const btnClose = document.getElementById("nav-btn-close");
const btnBars = document.getElementById("nav-btn-bars");
const navDropDown = document.getElementById("nav-dropdown");
const sidebarProgress = document.getElementById("sidebar-progress");
const sidebar = document.getElementById("sidebar");
const mapsDiv = document.getElementById("maps-div");
const goBottomAnchor = document.getElementById("go-bottom-anchor");
const goUpAnchor = document.getElementById("go-up-anchor");

const sections = [
    "hero",
    "design-methodology",
    "app-services",
    "app-name",
    "web-services",
    "web-name",
    "book-appointment",
    "our-team"
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

onVisible(document.getElementById("footer-section"), () => {
    sidebar.classList.add("opacity-0");
    sidebar.classList.remove("opacity-100");
    goBottomAnchor.classList.add("opacity-0");
    goBottomAnchor.classList.remove("opacity-100");
});

onVisible(document.getElementById("hero-ctx"), () => {
    goUpAnchor.classList.add("opacity-0");
    goUpAnchor.classList.remove("opacity-100");
});
onVisible(document.getElementById("design-methodology-ctx"), () => {
    goUpAnchor.classList.add("opacity-100");
    goUpAnchor.classList.remove("opacity-0");
});

sections.forEach((section, index) => {
    const ctxElem = document.getElementById(`${section}-ctx`);
    onVisible(ctxElem, () => {

        if (ctxElem.classList.contains("opacity-0"))
        {
            ctxElem.classList.add("opacity-100");
            ctxElem.classList.remove("opacity-0");
            ctxElem.classList.add("translate-y-0");
            ctxElem.classList.remove("translate-y-10");
        }

        if (sidebar.classList.contains("opacity-0"))
        {
            sidebar.classList.add("opacity-100");
            sidebar.classList.remove("opacity-0");
            goBottomAnchor.classList.add("opacity-100");
            goBottomAnchor.classList.remove("opacity-0");
        }

        if (currentSection != section)
        {
            sidebarProgress.children[sections.indexOf(currentSection)].classList.remove("opacity-100");
            sidebarProgress.children[sections.indexOf(currentSection)].classList.add("opacity-25");
            currentSection = section;
            goBottomAnchor.setAttribute("href", `#${sections[sections.indexOf(currentSection) + 1]}`);
        }
        sidebarProgress.children[index].classList.remove("opacity-25");
        sidebarProgress.children[index].classList.add("opacity-100");
    });
});

$("#go-bottom-anchor,#go-up-anchor").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 400);
});

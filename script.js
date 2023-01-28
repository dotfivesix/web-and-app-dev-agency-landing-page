const btnClose = document.getElementById("nav-btn-close");
const btnBars = document.getElementById("nav-btn-bars");
const navDropDown = document.getElementById("nav-dropdown");

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
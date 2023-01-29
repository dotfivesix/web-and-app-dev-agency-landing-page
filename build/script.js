const btnClose=document.getElementById("nav-btn-close"),btnBars=document.getElementById("nav-btn-bars"),navDropDown=document.getElementById("nav-dropdown"),sidebarProgress=document.getElementById("sidebar-progress"),sidebar=document.getElementById("sidebar"),mapsDiv=document.getElementById("maps-div"),goBottomAnchor=document.getElementById("go-bottom-anchor"),goUpAnchor=document.getElementById("go-up-anchor"),sections=["hero","design-methodology","app-services","app-name","web-services","web-name","book-appointment","our-team"];let currentSection="hero";function ToggleNav(){btnClose.classList.contains("hidden")?(btnClose.classList.remove("hidden"),btnBars.classList.add("hidden"),navDropDown.classList.remove("hidden")):(btnBars.classList.remove("hidden"),btnClose.classList.add("hidden"),navDropDown.classList.add("hidden"))}function onVisible(e,s){new IntersectionObserver((t,o)=>{t.forEach(t=>{t.intersectionRatio>0&&s(e)})}).observe(e)}onVisible(document.getElementById("footer-section"),()=>{sidebar.classList.add("opacity-0"),sidebar.classList.remove("opacity-100"),goBottomAnchor.classList.add("opacity-0"),goBottomAnchor.classList.remove("opacity-100")}),onVisible(document.getElementById("hero-ctx"),()=>{goUpAnchor.classList.add("opacity-0"),goUpAnchor.classList.remove("opacity-100")}),onVisible(document.getElementById("design-methodology-ctx"),()=>{goUpAnchor.classList.add("opacity-100"),goUpAnchor.classList.remove("opacity-0")}),sections.forEach((e,s)=>{let t=document.getElementById(`${e}-ctx`);onVisible(t,()=>{t.classList.contains("opacity-0")&&(t.classList.add("opacity-100"),t.classList.remove("opacity-0"),t.classList.add("translate-y-0"),t.classList.remove("translate-y-10")),sidebar.classList.contains("opacity-0")&&(sidebar.classList.add("opacity-100"),sidebar.classList.remove("opacity-0"),goBottomAnchor.classList.add("opacity-100"),goBottomAnchor.classList.remove("opacity-0")),currentSection!=e&&(sidebarProgress.children[sections.indexOf(currentSection)].classList.remove("opacity-100"),sidebarProgress.children[sections.indexOf(currentSection)].classList.add("opacity-25"),currentSection=e,goBottomAnchor.setAttribute("href",`#${sections[sections.indexOf(currentSection)+1]}`)),sidebarProgress.children[s].classList.remove("opacity-25"),sidebarProgress.children[s].classList.add("opacity-100")})}),$("#go-bottom-anchor,#go-up-anchor").on("click",function(e){e.preventDefault();let s=$(this).attr("href");$("html, body").animate({scrollTop:$(s).offset().top},400)});
var tecnoCaja = document.getElementById("tecno");
var projectsMenu = document.getElementById("proye");
var aboutMenu = document.getElementById("about");
var expMenu = document.getElementById("exp");
var contMenu = document.getElementById("contact");
var studyMenu = document.getElementById("study");

function showProjects(event){
    event.preventDefault();
    tecnoCaja.style.display = "none";
    aboutMenu.style.display = "none";
    expMenu.style.display = "none";
    contMenu.style.display ="none";
    studyMenu.style.display ="none";
    projectsMenu.style.display = "block";
}

function showAbout(event){
    event.preventDefault();
    tecnoCaja.style.display = "none";
    projectsMenu.style.display = "none"
    expMenu.style.display = "none";
    contMenu.style.display ="none";
    studyMenu.style.display ="none";
    aboutMenu.style.display = "block";
}

function showExp(event){
    event.preventDefault();
    tecnoCaja.style.display = "none";
    projectsMenu.style.display = "none"
    aboutMenu.style.display = "none";
    contMenu.style.display ="none";
    studyMenu.style.display ="none";
    expMenu.style.display = "block";
}

function showContact(event){
    event.preventDefault();
    tecnoCaja.style.display = "none";
    projectsMenu.style.display = "none"
    aboutMenu.style.display = "none";
    expMenu.style.display = "none";
    studyMenu.style.display ="none";
    contMenu.style.display ="block";
}

function showStudy(event){
    event.preventDefault();
    tecnoCaja.style.display = "none";
    projectsMenu.style.display = "none"
    aboutMenu.style.display = "none";
    expMenu.style.display = "none";
    contMenu.style.display ="none";
    studyMenu.style.display ="block";
}


document.getElementById('toggle').addEventListener('change', function() {
    var icon=document.getElementById("on");
    var video=document.getElementById("fondoA");
    if (this.checked) {
        video.style.display = "block";

        icon.innerHTML='<i class="fa-solid fa-toggle-off"></i>';
    } else {
        video.style.display = "none";

        icon.innerHTML='<i class="fa-solid fa-toggle-on"></i>';
    }
});


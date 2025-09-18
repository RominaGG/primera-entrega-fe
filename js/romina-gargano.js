

const btnUp = document.getElementById("btnUp");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100){
        btnUp.style.display = "flex";

    }
    else{
        btnUp.style.display = "none";
    }
});

btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btnDarkMode = document.getElementById("btnDarkMode");
    btnDarkMode.addEventListener("click", ()=>{
        document.body.classList.toggle("dark-mode");
    });
});
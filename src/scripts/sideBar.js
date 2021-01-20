const closeBtn = document.querySelector("#close-sidebar");
const openBtn = document.querySelector("#open-sidebar");

closeBtn.addEventListener("click", (e) => {
    document.querySelector("[data-sidebar]").style.width = "0";
})

openBtn.addEventListener("click", (e) => {
    document.querySelector("[data-sidebar]").style.width = "60%";
})
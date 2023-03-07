const toggleBtn = document.querySelector("#toggle-btn");
const sideBar = document.querySelector("#side-bar");

const show = (e) => {
    console.log(e);
    sideBar.classList.toggle("active");
}

toggleBtn.addEventListener("click", show)




// side-menu
document.addEventListener("DOMContentLoaded", () => {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sideMenu = document.getElementById("sideMenu");

    sidebarToggle.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });
});

// toggle in side-menu
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".side-menu .toggle");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parentLi = button.parentElement;
            const subMenu = parentLi.querySelector("ul");

            // 子要素の表示・非表示を切り替え
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === "none" || subMenu.style.display === "" ? "block" : "none";
                parentLi.classList.toggle("open"); // クラスの切り替えでアイコン調整
            }
        });
    });
});

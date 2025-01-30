// aside.html を非同期で読み込む
document.addEventListener("DOMContentLoaded", () => {
    const repoName = "DevMemo-by-YM"
    const asidePath = `${window.location.origin}/${repoName}/aside.html`
    fetch(asidePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("aside-container").innerHTML = data;
            setupSideMenu(); // サイドメニューのスクリプトを適用
        })
        .catch(error => console.error("Error loading aside:", error));
});

// サイドメニューのイベントリスナーを設定する関数
function setupSideMenu() {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sideMenu = document.getElementById("sideMenu");

    if (sidebarToggle && sideMenu) {
        sidebarToggle.addEventListener("click", () => {
            sideMenu.classList.toggle("open");
        });
    }

    const toggleButtons = document.querySelectorAll(".side-menu .toggle");
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parentLi = button.parentElement;
            const subMenu = parentLi.querySelector("ul");

            if (subMenu) {
                subMenu.style.display = subMenu.style.display === "none" || subMenu.style.display === "" ? "block" : "none";
                parentLi.classList.toggle("open");
            }
        });
    });
}


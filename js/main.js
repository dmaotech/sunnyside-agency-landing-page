const mobileMenu = document.querySelector(".header-menu--mobile");
const hambugerBtn = document.querySelector(".hamburger-btn");

hambugerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");

    (mobileMenu.classList.contains("visible"))
        ? hambugerBtn.style.fill = "var(--very-dark-desaturated-blue)"
        : hambugerBtn.style.fill = "var(--white)";
});

if (screen.width >= "900") {
    hambugerBtn.classList.toggle("hidden");
    mobileMenu.classList.remove("header-menu--mobile");
    mobileMenu.classList.toggle("header-menu");
}

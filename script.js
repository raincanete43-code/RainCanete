

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});


navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});


window.addEventListener("resize", () => {
  if (window.innerWidth > 560) {
    closeMenu();
  }
});



const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

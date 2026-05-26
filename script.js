const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const themeToggle = document.querySelector("#themeToggle");
const backToTop = document.querySelector("#backToTop");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const copyEmail = document.querySelector("#copyEmail");
const copyMessage = document.querySelector("#copyMessage");
const revealElements = document.querySelectorAll(".reveal");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const categories = card.dataset.category;

      if (filter === "all" || categories.includes(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 80) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyEmail.dataset.email);
    copyMessage.textContent = "Email copié.";
  } catch (error) {
    copyMessage.textContent = "Copie impossible sur ce navigateur.";
  }

  setTimeout(() => {
    copyMessage.textContent = "";
  }, 2200);
});

revealOnScroll();
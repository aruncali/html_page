// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("open"))
);

// Dark / light theme
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || "light");
themeBtn.addEventListener("click", () =>
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark")
);

// Skill bars fill when they scroll into view
const bars = document.querySelectorAll(".bar i");
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level + "%";
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(bar => barObserver.observe(bar));

// Project filter
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    projects.forEach(p =>
      p.classList.toggle("hidden", filter !== "all" && p.dataset.type !== filter)
    );
  });
});

// Contact form validation
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", e => {
  e.preventDefault();
  const fields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("message")
  ];
  let valid = true;
  fields.forEach(f => {
    const empty = f.value.trim() === "";
    const badEmail = f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value);
    const bad = empty || badEmail;
    f.classList.toggle("error", bad);
    if (bad) valid = false;
  });
  if (!valid) {
    status.textContent = "Please fill in all fields with a valid email.";
    status.className = "bad";
    return;
  }
  status.textContent = "Thanks! Your message was sent.";
  status.className = "ok";
  form.reset();
});

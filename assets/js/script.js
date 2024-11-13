//aos animation sections
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".course_enrollementSection");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInLeft"); // Trigger the animation
          observer.unobserve(entry.target); // Run only once
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(section);
});

//faqs
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));

// coursepreviewsection
function toggleModule(element) {
  // First, close all other active modules
  const allModules = document.querySelectorAll(".module-content");
  const allArrows = document.querySelectorAll(".module-header span");

  allModules.forEach((module, index) => {
    if (module !== element.nextElementSibling) {
      module.classList.remove("active");
      allArrows[index].textContent = "▼";
    }
  });

  // Then toggle the clicked module
  const content = element.nextElementSibling;
  const arrow = element.querySelector("span");

  if (content.classList.contains("active")) {
    content.classList.remove("active");
    arrow.textContent = "▼";
  } else {
    content.classList.add("active");
    arrow.textContent = "▲";
  }
}

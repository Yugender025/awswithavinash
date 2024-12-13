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

//scrolling part
document.querySelector(".about_us").addEventListener("click", function (e) {
  e.preventDefault();

  const whyawsavinash = document.querySelector(".whyawsavinash");

  if (whyawsavinash) {
    // Use scrollY instead of pageYOffset
    const offsetTop =
      whyawsavinash.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});

// document
//   .getElementById("btn_enrollingClass")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const bootcampcontact_form = document.querySelector(
//       ".bootcampcontact_form"
//     );

//     if (bootcampcontact_form) {
//       // Calculate the offset taking into account the current scroll position
//       const offsetTop =
//         bootcampcontact_form.getBoundingClientRect().top + window.scrollY;

//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }
//   });

document.querySelectorAll(".form_linkup").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    const bootcampcontact_form = document.querySelector(
      ".bootcampcontact_form"
    );

    if (bootcampcontact_form) {
      // Calculate the offset taking into account the current scroll position
      const offsetTop =
        bootcampcontact_form.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

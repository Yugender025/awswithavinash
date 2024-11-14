const testimonials = [
  {
    id: 1,
    name: "Avinash",
    image: "assets/images/avatar_1.jpg",
    text: "This AWS DevOps course is fantastic! It simplified complex concepts, making me confident in managing infrastructure like a pro.",
  },
  {
    id: 2,
    name: "Anudeep",
    image:
      "https://s3.ap-south-1.amazonaws.com/awswithavinash.com/awswithavinash/assets/images/avatar_2.jpg",
    text: "Highly recommended! The practical projects and real-world scenarios helped me master AWS tools quickly.",
  },
  {
    id: 3,
    name: "Yugender Reddy",
    image: "assets/images/avatar_3.jpg",
    text: "This course transformed my career. The insights and techniques I learned are directly applicable to my job.",
  },
  {
    id: 4,
    name: "Aravind",
    image: "assets/images/avatar_4.jpg",
    text: "With Avinash’s expertise, I gained deep knowledge of DevOps and AWS in a structured, easy-to-follow format.",
  },
  {
    id: 5,
    name: "Pavan",
    image: "assets/images/avatar_5.jpg",
    text: "I went from beginner to confident AWS user, thanks to this hands-on course and clear guidance.",
  },
  {
    id: 6,
    name: "Neha",
    image: "assets/images/avatar_6.jpg",
    text: "Avinash’s AWS course was engaging and comprehensive. It’s a must for anyone wanting to excel in DevOps.",
  },
  {
    id: 7,
    name: "Yuktha",
    image: "assets/images/avatar_7.jpg",
    text: "Perfect blend of theory and practice. I now feel equipped to tackle AWS challenges at work effectively.",
  },
];

class TestimonialCarousel {
  constructor(testimonials) {
    this.testimonials = testimonials;
    this.currentIndex = 3; // Start with middle testimonial
    this.wrapper = document.querySelector(".testimonials-wrapper");
    this.dotsContainer = document.querySelector(".dots");
    this.init();
  }

  init() {
    this.createTestimonials();
    this.createDots();
    this.updateCarousel();
    this.startAutoplay();
  }

  createTestimonials() {
    this.testimonials.forEach((testimonial, index) => {
      const element = document.createElement("div");
      element.className = "testimonial";
      element.innerHTML = `
                        <div class="avatar">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="content">
                            <div class="name">${testimonial.name}</div>
                            <div class="text">${testimonial.text}</div>
                        </div>
                    `;
      this.wrapper.appendChild(element);
    });
  }

  createDots() {
    this.testimonials.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => this.setCurrentIndex(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  updateCarousel() {
    const testimonialElements = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");

    testimonialElements.forEach((element, index) => {
      let position = index - this.currentIndex;
      if (position < -3) position += this.testimonials.length;
      if (position > 3) position -= this.testimonials.length;

      element.className = "testimonial";
      if (Math.abs(position) <= 2) element.classList.add("visible");
      if (position === 0) element.classList.add("active");

      element.style.transform = `
                        translateX(${position * 120}px)
                        scale(${position === 0 ? 1.2 : 0.8})
                    `;
      element.style.zIndex = 3 - Math.abs(position);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  setCurrentIndex(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  startAutoplay() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.updateCarousel();
    }, 5000);
  }
}

// Initialize the carousel
new TestimonialCarousel(testimonials);

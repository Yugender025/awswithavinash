const blogPosts = [
  {
    title: "Amazon EC2 Instances",
    category: "aws",
    link: "blog1.html",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
  {
    title: "Introduction to Generative AI",
    category: "ai",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
  {
    title: "Introduction to Generative AI",
    category: "ai",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
  {
    title: "Introduction to Generative AI",
    category: "ai",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
  {
    title: "Introduction to Generative AI",
    category: "ai",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
  {
    title: "Introduction to Generative AI",
    category: "ai",
    image: "assets/images/featureblog.WEBP",
    content:
      "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
    date: "Jun 11, 2024",
  },
];

function createBlogCard(post) {
  return `
        <div class="blog-card">
            <div class="card-image">
               
                    <img src="${post.image}" alt="icon" style="width: 100%; height: 100%; object-fit: cover;">
             
               
            </div>
            <div class="card-content">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.content}</p>
                <div class="card-footer">
                    <span class="card-date">${post.date}</span>
                    <a href="${post.link}" class="read-more">
                        Read more
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to filter blog posts
function filterPosts(category) {
  const blogGrid = document.getElementById("blogGrid");
  blogGrid.innerHTML = "";

  const filteredPosts =
    category === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === category);

  filteredPosts.forEach((post) => {
    blogGrid.innerHTML += createBlogCard(post);
  });
}

// Initialize the blog grid
filterPosts("all");

// Add click event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    // Filter posts
    filterPosts(button.dataset.category);
  });
});

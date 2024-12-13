const blogPosts = [
  {
    title: "Introduction to Cloud Computing",
    category: "aws",
    link: "blog2.html",
    image: "assets/images/cloudcomputing.png",
    content:
      "In today's digital era, cloud computing has transformed the way businesses and individuals access, manage, and store data. By enabling on-demand availability of computing resources...",
    date: "Jun 11, 2024",
  },
  {
    title: "AWS Services Overview",
    category: "services",
    link: "blog2.html",
    image: "assets/images/awsservices.webp",
    content:
      "Amazon Web Services (AWS) is a comprehensive and evolving cloud platform providing over 200 fully featured services from data centers globally. It serves millions of customers, inc...",
    date: "Jun 11, 2024",
  },
  {
    title: "How to Create an AWS Account: A Step-by-Step Guide",
    category: "create",
    link: "blog3.html",
    image: "assets/images/accountaws.png",
    content:
      "Creating an AWS account is the first step toward accessing Amazon's powerful suite of cloud services, which enables..",
    date: "Jun 11, 2024",
  },
  {
    title: "How to Create an IAM user",
    category: "create",
    link: "blog5.html",
    image: "assets/images/iamuser.png",
    content:
      "AWS Identity and Access Management (IAM) is an essential service that allows you to manage user access and control permissions for resources in your AWS environment. Creating individual IAM users for each person or application accessing..",
    date: "Jun 11, 2024",
  },
  {
    title: "Create an S3 bucket",
    category: "services",
    link: "blog8.html",
    image: "assets/images/s3bucket.png",
    content:
      "Amazon S3 (Simple Storage Service) is one of AWS's core services, providing scalable, secure, and durable storage for a wide range of data. From backups and data archives to hosting static websites, S3’s versatility makes it..",
    date: "Jun 11, 2024",
  },
  {
    title: "Networking & Content Delivery",
    category: "services",
    link: "blog4.html",
    image: "assets/images/network_cdn.png",
    content:
      "Amazon Web Services (AWS) offers a robust selection of networking and content delivery services to help businesses build scalable, secure, and highly available applications. These services...",
    date: "Jun 11, 2024",
  },

  // {
  //   title: "Introduction to Generative AI",
  //   category: "ai",
  //   link: "blog6.html",
  //   image: "assets/images/featureblog.WEBP",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur. Fermentum nec gravida rhoncus orci feugiat faucibus mattis mollis. Ipsum in eget nibh dui sit venenatis sit amet tellus. Diam at ut velit eget..",
  //   date: "Jun 11, 2024",
  // },
  {
    title: "AWS Services in Industry",
    category: "ai",
    link: "blog7.html",
    image: "assets/images/awsindustry.png",
    content:
      "Amazon Web Services (AWS) has become a go-to solution for businesses across various industries due to its flexibility, scalability, and wide array of services Companies worldwide leverage AWS to manage infrastructure...",
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

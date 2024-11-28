// Define routes and their corresponding file paths
const routes = {
  homepage: "index.html",
  course: "course.html",
  blog: "blog.html",
  contact: "contact.html",
  interview: "interviewprep.html",
};

// Function to load the appropriate page content
async function loadContent() {
  const hash = window.location.hash.slice(1); // Get the route without the '#' symbol
  const route = routes[hash];

  if (route) {
    try {
      const response = await fetch(route);
      if (response.ok) {
        const content = await response.text();
        document.getElementById("content").innerHTML = content;
      } else {
        document.getElementById("content").innerHTML =
          "<h1>404 - Page Not Found</h1>";
      }
    } catch (error) {
      document.getElementById("content").innerHTML =
        "<h1>Error Loading Page</h1>";
    }
  } else {
    document.getElementById("content").innerHTML =
      "<h1>404 - Page Not Found</h1>";
  }
}

// Listen for hash changes in the URL
window.addEventListener("hashchange", loadContent);

// Load content for the initial route
window.addEventListener("load", loadContent);

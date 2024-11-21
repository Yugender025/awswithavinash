document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation
  if (!firstName || !mobile || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Mobile validation (basic)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile.replace(/\D/g, ""))) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  // If validation passes, you can submit the form data
  console.log("Form submitted:", { firstName, mobile, email, message });
  alert("Form submitted successfully!");
  this.reset();
});

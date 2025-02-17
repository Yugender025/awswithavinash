document
  .getElementById("enrollmentForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = document.forms["google-sheet"];
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    // Get form elements
    const formElements = {
      name: document.getElementById("name"),
      mobile: document.getElementById("mobile"),
      email: document.getElementById("email"),
      message: document.getElementById("message"),
    };

    // Reset previous error states
    Object.keys(formElements).forEach((key) => {
      resetErrorState(formElements[key], `${key}Label`);
    });

    // Validate form
    let isValid = true;
    Object.entries(formElements).forEach(([key, element]) => {
      if (!element.value.trim()) {
        setErrorState(element, `${key}Label`);
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="spinner"></span> Submitting...';

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxGbwNn_iCHLjtWxFQ8v-HOI7EsdkVUUMoRfi8UPIyenOXz2Jj61EHnB3vMfiTUrNqc2g/exec";

      // Add timeout to ensure minimum loading time for better UX
      const [response] = await Promise.all([
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(form),
        }),
        new Promise((resolve) => setTimeout(resolve, 800)), // Minimum 800ms loading time
      ]);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Success
      alert("Thanks for contacting us! We will get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });

function setErrorState(element, labelId) {
  element.classList.add("error-input");
  document.getElementById(labelId).classList.add("error-label");
}

function resetErrorState(element, labelId) {
  element.classList.remove("error-input");
  document.getElementById(labelId).classList.remove("error-label");
}

// Add this CSS to your stylesheet
const style = document.createElement("style");
style.textContent = `
  .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
      margin-right: 8px;
  }

  @keyframes spin {
      to { transform: rotate(360deg); }
  }

  .error-input {
      border-color: #dc3545;
  }

  .error-label {
      color: #dc3545;
  }
`;
document.head.appendChild(style);

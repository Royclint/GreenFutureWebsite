window.addEventListener("load", () => {
  const form = document.getElementById("enquiryForm");
  const messageBox = document.getElementById("formMessage");

  if (!form) {
    console.error("Form not found. Check the form ID.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !interest || !message) {
      showMessage("⚠ Please fill in all required fields before submitting.", "error");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
      showMessage("⚠ Please enter a valid email address.", "error");
      return;
    }

    // Success message
    showMessage(`✅ Thank you, ${name}! Your enquiry has been submitted successfully. We will contact you soon.`, "success");
    form.reset();
  });

  // Function to display styled messages
  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `message-box ${type}`;
  }
});

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.backgroundColor = "#2e7d32";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

// Show button when scrolling
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

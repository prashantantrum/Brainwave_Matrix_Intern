//Scroll to Newsletter Section
function scrollToNewsletter() {
  document.getElementById("newsletter").scrollIntoView({ behavior: "smooth" });
}

// 📬 Subscribe Form Handler
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email validation

  if (emailRegex.test(emailInput.value)) {
    message.textContent = `🎉 Thanks for subscribing, ${emailInput.value}!`;
    message.style.color = "green"; 
    emailInput.value = ""; // Clear input field

    // Optional: Clear message after 5 seconds
    setTimeout(() => {
      message.textContent = '';
    }, 5000);
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  }
});


// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// 🙋‍♂️ Dynamic Time-Based Greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Morning 🌞";
} else if (hour < 18) {
  greeting.textContent = "Afternoon ☀️";
} else {
  greeting.textContent = "Evening 🌙";
}

// FAQ Accordion Logic
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-button");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isVisible = content.style.display === "block";

      // Optional: Close all other FAQs
      document.querySelectorAll(".faq-content").forEach(c => c.style.display = "none");

      // Toggle current FAQ
      content.style.display = isVisible ? "none" : "block";
    });
  });
});
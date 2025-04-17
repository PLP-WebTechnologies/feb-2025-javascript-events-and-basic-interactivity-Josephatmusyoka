document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Simple validation
      if (!name || !email || !message) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please fill in all fields.";
        return;
      }
  
      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please enter a valid email.";
        return;
      }
  
      // Simulate successful submission
      responseMessage.style.color = "green";
      responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
  
      // Reset form
      form.reset();
    });
  });
  
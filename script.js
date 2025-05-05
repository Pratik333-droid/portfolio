document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate form submission
    setTimeout(() => {
      formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
      contactForm.reset();
    }, 1000);
  });
});

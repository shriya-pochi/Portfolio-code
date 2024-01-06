function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validate form fields (you can add more complex validation as needed)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    // Simulate sending the form data (replace this with actual AJAX request)
    // For now, we'll just display a success message
    displaySuccessMessage();
}

function displaySuccessMessage() {
    // Hide the form
    var form = document.getElementById("contactForm");
    form.style.display = "none";

    // Display success message
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = "<p>Thank you for your message! We'll get back to you soon.</p>";
}

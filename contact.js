// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Display success message in DOM
            showSuccessMessage(formData.name);

            // Reset form
            contactForm.reset();

            // Log form data to console (for demonstration purposes)
            console.log('Form submitted with data:', formData);
        });
    }
});

// Function to show success message
function showSuccessMessage(name) {
    // Sanitize the name by creating text node to prevent XSS
    const sanitizedName = document.createTextNode(name);
    
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    
    // Create message structure safely
    const thankYouPara = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = 'Thank you, ';
    strong.appendChild(sanitizedName);
    strong.appendChild(document.createTextNode('!'));
    thankYouPara.appendChild(strong);
    
    const messagePara = document.createElement('p');
    messagePara.textContent = "We've received your message and will get back to you soon.";
    
    successDiv.appendChild(thankYouPara);
    successDiv.appendChild(messagePara);
    
    // Insert message at the beginning of the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form);
    
    // Scroll to message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

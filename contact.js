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
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
        <p><strong>Thank you, ${name}!</strong></p>
        <p>We've received your message and will get back to you soon.</p>
    `;
    
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

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

            // Display success message (in a real application, this would send data to a server)
            alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);

            // Reset form
            contactForm.reset();

            // Log form data to console (for demonstration purposes)
            console.log('Form submitted with data:', formData);
        });
    }
});

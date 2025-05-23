(function () {
    'use strict';

    // Initialize EmailJS
    emailjs.init('-ztaRgKkFhIHrONhd'); // Replace with your EmailJS public key

    // Handle form submission
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.querySelector('.ebook-download-form');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('ebook-form-name').value;
            const email = document.getElementById('ebook-email').value;

            // Update button state
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
            };

            // Send email using EmailJS
            const serviceID = 'service_nel80ch'; // Replace with your EmailJS service ID
            const templateID = 'template_rqx9o99'; // Replace with your EmailJS template ID

            emailjs
                .send(serviceID, templateID, templateParams)
                .then(function () {
                    // Success - update button text
                    submitBtn.textContent = 'Sent';
                    setTimeout(() => {
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    }, 2000);

                    console.log('Email sent successfully!');
                })
                .catch(function (error) {
                    // Error handling
                    console.error('Error sending email:', error);
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    });
})();
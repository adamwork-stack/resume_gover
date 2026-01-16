// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Intake Form Handling
    const intakeForm = document.getElementById('intakeForm');
    if (intakeForm) {
        intakeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(intakeForm);
            
            // Basic validation
            const requiredFields = intakeForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '';
                }
            });

            // Check file size (10MB limit)
            const fileInputs = intakeForm.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                if (input.files.length > 0) {
                    const file = input.files[0];
                    const maxSize = 10 * 1024 * 1024; // 10MB
                    if (file.size > maxSize) {
                        isValid = false;
                        alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
                        input.style.borderColor = '#dc3545';
                    } else {
                        input.style.borderColor = '';
                    }
                }
            });

            if (!isValid) {
                alert('Please fill in all required fields and ensure files are under 10MB.');
                return;
            }

            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            console.log('Form data:', Object.fromEntries(formData));
            
            // Hide form and show success message
            intakeForm.style.display = 'none';
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // In production, you would send the form data to your backend:
            // fetch('/api/submit-intake', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Handle success
            // })
            // .catch(error => {
            //     // Handle error
            // });
        });

        // File input validation feedback
        const fileInputs = intakeForm.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (this.files.length > 0) {
                    const file = this.files[0];
                    const maxSize = 10 * 1024 * 1024; // 10MB
                    
                    if (file.size > maxSize) {
                        this.style.borderColor = '#dc3545';
                        alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
                        this.value = ''; // Clear the input
                    } else {
                        this.style.borderColor = '#28a745';
                        // Reset border color after a moment
                        setTimeout(() => {
                            this.style.borderColor = '';
                        }, 2000);
                    }
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    document.querySelectorAll('.service-card, .pricing-card, .feature-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

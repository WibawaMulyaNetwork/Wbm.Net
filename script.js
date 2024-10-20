// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value);
    const alamat = encodeURIComponent(document.getElementById('alamat').value);
    const phone = encodeURIComponent(document.getElementById('phone').value)
    const adminPhone = encodeURIComponent(document.getElementById('adminPhone').value)
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const whatsappMessage = `Nama: ${name}%0APhone: ${phone}%0AAlamat: ${alamat}%0APesan: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${whatsappMessage}`;
        
        // Buka tautan WhatsApp
    window.open(whatsappURL, '_blank');

    // Clear form fields
    document.getElementById('contactForm').reset();
    });

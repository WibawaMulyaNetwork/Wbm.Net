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
    const phone = encodeURIComponent(document.getElementById('phone').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    // Ganti dengan nomor WhatsApp Anda
    const whatsappNumber = '6285817230536'; // Format: 1234567890 tanpa +
    const whatsappMessage = `Nama: ${name}%0APhone: ${phone}%0AAlamat: ${alamat}%0APesan: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    
    // Buka tautan WhatsApp
    window.open(whatsappURL, '_blank');

    // Clear form fields
    document.getElementById('contactForm').reset();
});

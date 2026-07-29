// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to handle the purchase button click
function buyProduct() {
    // Since you don't have a backend yet, this alerts the user and can be linked to your WhatsApp or a Google Form later.
    const message = "Thank you for choosing Zendravi!\n\nTo complete your order for Zendravi 1.0 (Rs. 1499), click OK to be redirected to our order form.";
    
    if (confirm(message)) {
        // You can replace this URL with a Google Form link, a WhatsApp API link, or your payment gateway (eSewa/Khalti) later.
        window.location.href = "mailto:sales@zendravi.com?subject=Pre-Order%20Zendravi%201.0&body=Hi,%20I%20would%20like%20to%20order%20Zendravi%201.0%20for%20Rs.%201499.";
    }
}
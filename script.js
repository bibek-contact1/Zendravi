// Set your WhatsApp number here (in international format without '+' sign)
// Example: "9779800000000" for Nepal, or "919800000000" for India
const YOUR_WHATSAPP_NUMBER = "977980000000"; 

// Modal Controls
function openCheckout() {
    document.getElementById('checkout-modal').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeCheckout();
    }
}

// Handle Order Submission
function processOrder(event) {
    event.preventDefault();

    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    // Construct the WhatsApp Order Message
    const message = `*NEW ORDER - ZENDRAVI 1.0*%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Address:* ${encodeURIComponent(address)}%0A` +
        `*Payment Method:* ${encodeURIComponent(payment)}%0A%0A` +
        `*Item:* Zendravi 1.0 (100ml)%0A` +
        `*Total Price:* Rs. 1499`;

    // Direct to WhatsApp
    const whatsappURL = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${message}`;
    
    alert("Thank you! Clicking OK will redirect you to WhatsApp to confirm your order.");
    window.location.href = whatsappURL;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

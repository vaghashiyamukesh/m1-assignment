// contact-method.js
// Handles showing/hiding email/phone input based on select menu

document.addEventListener('DOMContentLoaded', function() {
    var contactSelect = document.getElementById('contactMethod');
    var emailDiv = document.getElementById('emailInput');
    var phoneDiv = document.getElementById('phoneInput');

    contactSelect.addEventListener('change', function() {
        if (contactSelect.value === 'email') {
            emailDiv.style.display = 'block';
            phoneDiv.style.display = 'none';
        } else if (contactSelect.value === 'phone') {
            emailDiv.style.display = 'none';
            phoneDiv.style.display = 'block';
        } else {
            emailDiv.style.display = 'none';
            phoneDiv.style.display = 'none';
        }
    });
});

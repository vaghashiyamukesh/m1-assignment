// Gallery info box functionality
const infoTexts = [
    "This dog found a loving home and enjoys daily walks.",
    "This cat loves cuddles and has a new family.",
    "A family celebrating their new furry friend.",
    "A playful puppy enjoying its new life.",
    "A curious kitten exploring its surroundings.",
    "Two adopted pets bonding together.",
    "A pet with its happy new owner.",
    "A joyful pet family together.",
    "A dog playing in its new backyard.",
    "A cat resting peacefully in its new home."
];

const captions = [
    "Happy adopted dog", "Happy adopted pet", "Family with adopted pet", 
    "Playful puppy", "Curious bunney", "Adopted pets", "Adopted pets", 
    "Happy pet", "Adopted pet together", "Adopted cat resting"
];

document.addEventListener('DOMContentLoaded', function() {
    const infoBox = document.getElementById('infoBox');
    const infoHeading = document.getElementById('infoHeading');
    const infoText = document.getElementById('infoText');
    const closeInfoBox = document.getElementById('closeInfoBox');

    // Show info box
    function showInfoBox(index) {
        infoHeading.textContent = captions[index];
        infoText.textContent = infoTexts[index];
        infoBox.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    // Hide info box
    function hideInfoBox() {
        infoBox.classList.remove('visible');
        document.body.style.overflow = '';
    }

    // Add click listeners to gallery descriptions
    document.querySelectorAll('.gallery-desc').forEach(function(desc) {
        desc.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const idx = parseInt(desc.getAttribute('data-index'));
            showInfoBox(idx);
        });
    });

    // Close info box events
    closeInfoBox.addEventListener('click', function(e) {
        e.preventDefault();
        hideInfoBox();
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && infoBox.classList.contains('visible')) {
            hideInfoBox();
        }
    });
});

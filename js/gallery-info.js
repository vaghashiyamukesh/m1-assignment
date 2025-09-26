// Info Box variables and arrays
// Removed dynamic info box creation. Use static HTML info box only.
var closeText = 'Close';
var infoTexts = [
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
var captions = [
    "Happy adopted dog", "Happy adopted pet", "Family with adopted pet", "Playful puppy", "Curious bunney", "Adopted pets", "Adopted pets", "Happy pet", "Adopted pet together", "Adopted cat resting"
];

// Show info box function
function showInfoBox(index) {
    var infoBox = document.getElementById('infoBox');
    document.getElementById('infoHeading').innerHTML = captions[index];
    document.getElementById('infoText').innerHTML = infoTexts[index];
    infoBox.style.visibility = 'visible';
}

// Hide info box function
function hideInfoBox() {
    document.getElementById('infoBox').style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to gallery descriptions
    var descItems = document.querySelectorAll('.gallery-desc');
    descItems.forEach(function(desc) {
        desc.addEventListener('click', function() {
            var idx = parseInt(desc.getAttribute('data-index'));
            showInfoBox(idx);
        });
    });
    // Close link event
    document.getElementById('closeInfoBox').addEventListener('click', function(e) {
    e.preventDefault();
    hideInfoBox();
    });
});

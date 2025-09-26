// Info Box variables and arrays
var infoBoxOpenTag = '<div id="infoBox" style="position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); min-width: 300px; max-width: 400px; background: #fff; border: 2px solid #888; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 1000; padding: 2em; visibility: visible;">';
var infoBoxCloseTag = '</div>';
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
    // Add click listeners to gallery images
    var galleryItems = document.querySelectorAll('.gallery-img');
    galleryItems.forEach(function(img, idx) {
        img.addEventListener('click', function() {
            showInfoBox(idx);
        });
    });
    // Close link event
    document.getElementById('closeInfoBox').addEventListener('click', function(e) {
        e.preventDefault();
        hideInfoBox();
    });
});

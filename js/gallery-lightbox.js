$(document).ready(function() {
    const $lightbox = $('.lightbox');
    const $lightboxImg = $('#lightbox-img');
    const $lightboxTitle = $('#lightbox-title');
    const $lightboxDescription = $('#lightbox-description');
    const $closeLightbox = $('.close-lightbox');

    /* Open lightbox on image click */
    $('.gallery-img').click(function() {
        // Get image details
        const imgSrc = $(this).attr('src');
        const title = $(this).attr('alt');
        const description = $(this).attr('title');

        // Update lightbox content
        $lightboxImg.attr('src', imgSrc);
        $lightboxTitle.text(title);
        $lightboxDescription.text(description);

        // Show lightbox with animation
        $('.lightbox').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden');
    });

    /* Add hover effects */
    $('.gallery-img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.03)',
                'transition': 'transform 0.3s ease',
                'cursor': 'pointer'
            });
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    /* Click to close lightbox */
    $('.close-lightbox, .lightbox').click(function(e) {
        if (e.target === this) {
            $('.lightbox').fadeOut(300, function() {
                $('body').css('overflow', '');
            });
        }
    });

    /* Close on escape key */
    $(document).keydown(function(e) {
        if (e.key === 'Escape' && $('.lightbox').is(':visible')) {
            $('.lightbox').fadeOut(300, function() {
                $('body').css('overflow', '');
            });
        }
    });
});

$('.filter-btn').on('click', function() {
    // Get the filter value from the clicked button
    let value = $(this).attr('data-filter');

    if (value == "all") {
        $('.product-item').fadeIn(300);
    } else {
        // Hide all items
        $('.product-item').hide();
        // Filter and show only items matching the data-category
        $('.product-item').filter('[data-category="' + value + '"]').fadeIn(300);
    }
});
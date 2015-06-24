//
// ToggleVisibility JavaScript.
//
// toggleVisibility()
// ---------------------------------------------
// Add or remove the `is-open` class upon interaction.

function toggleVisibility() {
    'use strict';

    // Define variables/
    var allFilters = document.getElementsByClassName( 'filter-toggle-bar' ),
        allShoppingDropdowns = document.getElementsByClassName( 'dropdown-value' ),
        allOtherDropdowns = document.getElementsByClassName( 'dropdown-trigger' );

    // Set up filter events
    var filterEvents = function(filter, index, filtersArray) {
        filter.onclick = function(event) {
            filterToggle(filter, event);
        };
    };

    // Add or remove `is-open` class on filter element when clicked
    var filterToggle = function(filter, event) {
        event.preventDefault();
        filter.parentNode.classList.toggle('is-open');
    };

    // Activate all filters
    Array.prototype.forEach.call(allFilters, filterEvents);

    // Set up dropdown events
    var dropdownEvents = function(dropdown, index, dropdownsArray) {
        dropdown.onclick = function(event) {
            dropdownToggle(dropdown, event);
        };
    };

    // Add or remove `is-open` class on dropdown element when clicked
    var dropdownToggle = function(dropdown, event) {
        event.preventDefault();
        dropdown.parentNode.classList.toggle('is-open');
    };

    // Activate all dropdowns
    Array.prototype.forEach.call(allShoppingDropdowns, dropdownEvents);
    Array.prototype.forEach.call(allOtherDropdowns, dropdownEvents);
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    toggleVisibility();
});

/*
 * Testimonials JavaScript.
 */


/*
 * testimonials()
 * ---------------------------------------------
 * Manipulate the `is-active` class on testimonials upon
 * interaction.
 */
function testimonials() {
    'use strict';

    /*
     * Define variables.
     */
    var allTestimonials = document.getElementsByClassName( 'testimonial' );

    /*
     * Set up testimonial events
     */
    var testimonialEvents = function(testimonial, index, testimonialsArray) {
        testimonial.onclick = function(event) {
            testimonialActivate(testimonial, event);
        };

        testimonial.onmouseenter = function(event) {
            testimonialActivate(testimonial, event);
        };

        testimonial.onfocusin = function(event) {
            testimonialActivate(testimonial, event);
        };

        testimonial.ontouchenter = function(event) {
            testimonialActivate(testimonial, event);
        };

    };

    /*
     * Add `is-active` class to testimonial element when mouseover/click
     */
    var testimonialActivate = function(testimonial, event) {
        event.preventDefault();
        testimonial.classList.add('is-active');

        var inactiveTestimonials = Array.prototype.filter.call(testimonial.parentNode.children, function(child){
          return child !== testimonial;
        });

        Array.prototype.forEach.call(inactiveTestimonials, testimonialDeactivate);
    };

    /*
     * Remove `is-active` class from testimonial element
     */
    var testimonialDeactivate = function(testimonial, index, testimonialsArray) {
        testimonial.classList.remove('is-active');
    };

    // Activate all testimonials
    Array.prototype.forEach.call(allTestimonials, testimonialEvents);
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    testimonials();
});

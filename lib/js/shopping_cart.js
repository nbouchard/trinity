// Shopping Cart JavaScript.
//
// shoppingCart()
// ---------------------------------------------
// Show and hide cart by maniplating the
// "cart-active" body class.
function shoppingCart() {
    'use strict';

    // Define variables.
    var body = document.body;
    var open = document.getElementById( 'cart-open' );
    var close = document.getElementById( 'cart-close' );
    var mask = document.getElementById( 'cart-mask' );


    // Add "cart-active" class to body tag when "Menu" nav item is clicked.
    open.onclick = function( event ) {
        event.preventDefault();
        body.classList.add( 'cart-active' );
    };


    // Remove "sidebar-active" class from body tag when clicking anywhere outside of open cart.
    mask.onclick = function() {
        body.classList.remove( 'cart-active' );
    };


    // Remove "sidebar-active" class from body tag when "Close" link is clicked.
    close.onclick = function( event ) {
        event.preventDefault();
        body.classList.remove( 'cart-active' );
    };
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    shoppingCart();
});

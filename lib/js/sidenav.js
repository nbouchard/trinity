// Sidenav JavaScript.
//
// sideNav()
// ---------------------------------------------
// Show and hide sidenav by maniplating the
// "sidenav-active" body class.
function sideNav() {
    'use strict';

    // Define variables.
    var body = document.body;
    var open = document.getElementById( 'sidenav-open' );
    var close = document.getElementById( 'sidenav-close' );
    var mask = document.getElementById( 'sidenav-mask' );


    // Add "sidenav-active" class to body tag when "Menu" nav item is clicked.
    open.onclick = function( event ) {
        event.preventDefault();
        body.classList.add( 'sidenav-active' );
    };


    // Remove "sidebar-active" class from body tag when clicking anywhere outside of open sidenav.
    mask.onclick = function() {
        body.classList.remove( 'sidenav-active' );
    };


    // Remove "sidebar-active" class from body tag when "Close" link is clicked.
    close.onclick = function( event ) {
        event.preventDefault();
        body.classList.remove( 'sidenav-active' );
    };
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    sideNav();
});

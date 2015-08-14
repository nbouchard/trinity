// Nav Menu JavaScript.
//
// navMenu()
// ---------------------------------------------
// Show and hide the primary navigation menu by maniplating the
// "menu-active" body class.
function navMenu() {
    'use strict';

    // Define variables.
    var body = document.body;
    var site = document.getElementById( 'site' );
    var open = document.getElementById( 'menu-open' );
    var menu = document.getElementById( 'primary-menu' );

    function isChildOf(p,c) {
        var n = c.parentNode;

        if (p === c) {
            return true;
        }
        else {
            while (n !== null) {
                if (n === p) {
                    return true;
                }
                n = n.parentNode;
            }

            return false;
        }
    }


    // Toggle "menu-active" class to body tag when "Menu" nav item is clicked.
    open.onclick = function( event ) {
        event.preventDefault();
        body.classList.toggle( 'menu-active' );
    };


    // Remove "menu-active" class from body tag when clicking anywhere outside of open menu or menu nav item.
    site.onclick = function( event ) {
        if(!isChildOf(menu, event.target) && !isChildOf(open, event.target)){
            body.classList.remove( 'menu-active' );
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    navMenu();
});

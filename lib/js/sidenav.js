document.addEventListener('DOMContentLoaded', function() {

  // Make every sidenav link close the sidenav (but not prevent the default action)
  var sidenavLinks = document.querySelectorAll('.sidenav .nav-link');
  for (var i = 0; i < sidenavLinks.length; i++) {
    sidenavLinks[i].addEventListener( 'click', function(e) {
      classie.remove( document.body, 'sidenav-active' );
    });
  }

  // Add sidenav opening event listener
  var sidenavOpen = document.getElementById('sidenav-open');
  sidenavOpen.addEventListener( 'click', function(e){
    e.preventDefault();
    classie.add( document.body, 'sidenav-active' );
    return false;
  });

  // Add sidenav close event listener
  var sidenavClose = document.getElementById('sidenav-close');
  sidenavClose.addEventListener( 'click', function(e) {
    e.preventDefault();
    classie.remove( document.body, 'sidenav-active' );
    return false;
  });

  // Add sidenav close event listener to the mask that covers pushed to the side page
  var maskClose = document.getElementById('sidenav-mask');
  maskClose.addEventListener( 'click', function(e) {
    e.preventDefault();
    classie.remove( document.body, 'sidenav-active' );
    return false;
  });

});

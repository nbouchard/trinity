var ceuxPartials = angular.module('ceux.partials', []);

ceuxPartials.directive('ceuxSidenavPrimary', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/sidenav-primary.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxSidenavSecondary', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/sidenav-secondary.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryAbout', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-about.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryAcademy', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-academy.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryChoices', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-choices.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryLocations', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-locations.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimarySearches', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-searches.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondaryAddress', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-address.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondaryLegal', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-legal.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondarySocial', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-social.html',
        replace: true
    };
});

angular.module('ChooseUX', [
    'ce.components',
    'ceux.partials'
]);

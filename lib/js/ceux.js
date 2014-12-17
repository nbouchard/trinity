var ceuxPartials = angular.module('ceux.partials', []);

ceuxPartials.directive('ceuxSidenavPrimary', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/sidenav-primary.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxSidenavSecondary', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/sidenav-secondary.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryAbout', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-about.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryAcademy', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-academy.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryChoices', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-choices.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimaryLocations', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-locations.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterPrimarySearches', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-primary-searches.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondaryAddress', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-address.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondaryLegal', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-legal.html',
        replace: true
    };
});

ceuxPartials.directive('ceuxFooterSecondarySocial', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/footer-secondary-social.html',
        replace: true
    };
});
ceuxPartials.directive('heroCarousel', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/hero-carousel.html',
        replace: true
    };
});
ceuxPartials.directive('heroImage', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/hero-image.html',
        replace: true
    };
});

angular.module('ChooseUX', [
    'ce.components',
    'ceux.partials',
    'ui.bootstrap'
]).config(function ($provide) {
    $provide.decorator('carouselDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/carousel.html";
        return $delegate;
    });

    $provide.decorator('slideDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/carousel.slide.html";
        return $delegate;
    });
});

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
        transclude: true,
        templateUrl: 'partials/hero-image.html',
        replace: true
    };
});
ceuxPartials.directive('sideBar', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/side-bar.html',
        replace: true,
    };
});
ceuxPartials.directive('popularArticles', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/popular-articles.html',
        replace: true,
    };
});
ceuxPartials.directive('widePopularArticles', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/wide-popular-articles.html',
        replace: true,
    };
});
ceuxPartials.directive('blogPosts', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/blog-posts.html',
        replace: true,
    };
});
ceuxPartials.directive('featuredArticle', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/featured-article.html',
        replace: true,
    };
});
ceuxPartials.directive('stats', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/stats.html',
        replace: true,
    };
});
ceuxPartials.directive('guides', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/guides.html',
        replace: true,
    };
});
ceuxPartials.directive('tags', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/tags.html',
        replace: true,
    };
});
ceuxPartials.directive('topicSections', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/topic-sections.html',
        replace: true,
    };
});
ceuxPartials.directive('search', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/search.html',
        replace: true,
    };
});

// Side Bar Partials 
ceuxPartials.directive('sideArchive', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/archive.html',
        replace: true,
    };
});
ceuxPartials.directive('sideArticles', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/articles.html',
        replace: true,
    };
});
ceuxPartials.directive('sideTagCloud', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/tag-cloud.html',
        replace: true,
    };
});
ceuxPartials.directive('sideRecentBlog', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/recent-blog.html',
        replace: true,
    };
});
ceuxPartials.directive('sideSearch', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/search.html',
        replace: true,
    };
});
ceuxPartials.directive('sideComments', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/comments.html',
        replace: true,
    };
});
ceuxPartials.directive('sideCalendar', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/calendar.html',
        replace: true,
    };
});
ceuxPartials.directive('breadcrumbs', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/breadcrumbs.html',
        replace: true,
    };
});
ceuxPartials.directive('paginator', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/paginator.html',
        replace: true,
    };
});
ceuxPartials.directive('numberation', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/numberation.html',
        replace: true,
    };
});
ceuxPartials.directive('sideNavigation', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/side-bar/navigation.html',
        replace: true,
    };
});
ceuxPartials.directive('blogTitle', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/blog-title.html',
        replace: true,
    };
});
ceuxPartials.directive('blogByline', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/blog-byline.html',
        replace: true,
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
    $provide.decorator('paginationDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/pagination.html";
        return $delegate;
    });
    $provide.decorator('datepickerDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/calendar.html";
        return $delegate;
    });
    $provide.decorator('yearpickerDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/calendar.year.html";
        return $delegate;
    });
    $provide.decorator('monthpickerDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/calendar.month.html";
        return $delegate;
    });
    $provide.decorator('daypickerDirective', function ($delegate) {
        $delegate[0].templateUrl = "partials/calendar.day.html";
        return $delegate;
    });
});

angular.module('ChooseUX').controller('heroCarouselCtrl', function ($scope) {
    var slides = [];
    $scope.slides = slides;
    $scope.myInterval = 10000;
    $scope.addSlide = function () {
        var newWidth = document.documentElement.clientWidth + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/600',
            title: ['The Energy Powering'] + ' ' + ['The Great Pumpkin', 'The Pilgrims', 'Santa Claus', 'Cupid'][slides.length % 4],
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
});
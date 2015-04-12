angular.module('ChooseUX').controller('heroCarouselCtrl', function ($scope) {
    'use strict';

    var slides = [];
    var newWidth = document.documentElement.clientWidth;
    var newHeight = document.documentElement.clientHeight;
        newHeight = ((newHeight / 3) * 2).toFixed();
    $scope.clientHeight =  newHeight;
    $scope.slides = slides;
    $scope.myInterval = 10000;
    $scope.addSlide = function () {

        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/' + newHeight,
            title: ['The Energy Powering'] + ' ' + ['The Great Pumpkin', 'The Pilgrims', 'Santa Claus', 'Cupid'][slides.length % 4],
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4],
            width: newWidth,
            height: newHeight
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
});

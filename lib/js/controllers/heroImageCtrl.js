angular.module('ChooseUX').controller('heroImageCtrl', function ($scope) {
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = document.documentElement.clientWidth + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            title: 'View our past posts',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
});
header.controller('page2Ctrl', ['$scope', 'page2Service', function($scope, page2Service) {
    console.log(window.location.href)
    $scope.info = "this is page2"

    page2Service.getDemo().then(function(res) {
        console.log(res.demo)
        document.getElementById('content1').innerHTML = res.demo[0].a
    })
}]);

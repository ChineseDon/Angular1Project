header.controller('page1Ctrl', ['$scope', 'page1Service', function($scope, page1Service) {
    console.log(window.location.href)
    $scope.info = "this is page1"

    page1Service.getDemo().then(function(res) {
        console.log(res.demo)
        document.getElementById('content').innerHTML = res.demo[0].a
    })
}]);
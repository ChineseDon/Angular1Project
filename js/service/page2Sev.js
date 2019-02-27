header.service('page2Service', ['$http', function($http) {
    var path = 'json/demo.json';
    this.getDemo = function() {
        return $http.get(path).then(function(res) {
            return res.data;
        })
    }
    
    return this;
}]);

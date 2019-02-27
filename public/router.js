header.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // 路由
    $stateProvider
    .state('page1', {
        url: '/page1',
        templateUrl: 'pages/page1.html',
        controller: 'page1Ctrl',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['css/page1.css', 'js/controller/page1Ctrl.js', 'js/service/page1Sev.js'],
                {cache: false});
            }]
        }
    })
    .state('page2', {
        url: '/page2',
        templateUrl: 'pages/page2.html',
        controller: 'page2Ctrl',
        resolve: { /* key - value形式， key为deps*/
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['css/page2.css', 'js/controller/page2Ctrl.js', 'js/service/page2Sev.js'],
                {cache: false});
            }]
        }
    })
    .state('page2.child1', {
        url: '^/child1',
        templateUrl: 'pages/page2/child1.html',
        controller: 'page2Ctrl',
    });
})
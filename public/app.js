var header = angular.module('header', [
  'ui.router',
  'oc.lazyLoad'
])

/**
 * 非常重要，项目的配置，相关的服务注册赋值
 */
header.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", '$ocLazyLoadProvider',
    function ($provide, $compileProvider, $controllerProvider, $filterProvider, $ocLazyLoadProvider) {
        header.controller = $controllerProvider.register;
        header.directive = $compileProvider.directive;
        header.filter = $filterProvider.register;
        header.factory = $provide.factory;
        header.service = $provide.service;
        header.constant = $provide.constant;
        /**
         * 懒加载的配置
         */
        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
            modules: [{
                name: 'page1Ctrl',
                files: ['js/controller/page1Ctrl.js']
            }]
        })
    }
]);

/**
 * 数据加载，需要运行的代码
 * https://www.cnblogs.com/shawnhu/p/8462304.html
 * 是应用中最先执行的方法，类似于main方法，run方法只会在angular启动的时候运行一次，定义全局的数据或逻辑，对全局作用域起作用，$rootScope上内容在多个控制器之间可以共享。例如，注册一个全局的事件监听器。每次路由发生变化时候，都执行一个函数来验证用户的权限
 */
//header.run(function($state, $ocLazyLoad) {
//  $state.go('page1');
//})
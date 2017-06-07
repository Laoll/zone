/**
 * Created by Administrator on 2017/3/23.
 */

'use strict';
angular.module("phonecatApp")
        .config(['$locationProvider' ,'$routeProvider',
         function config($locationProvider, $routeProvider){//注入模块
             $locationProvider.hashPrefix('!'); //url的前缀

             $routeProvider
                 .when('/phones',{
                 template:"<phone-list></phone-list>"
             }).when('/phones/:phoneId',{
                 template:"<phone-detail></phone-detail>"
             }).otherwise('/phones')
         }
]);



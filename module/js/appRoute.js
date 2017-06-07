/**
 * 路由
 */
define(['app'], function(app){
  
   return app.config(['$routeProvider',function($routeProvider) {
            $routeProvider
                .when('/manage',{
                  templateUrl: 'tpl/manage.html',
                  controller: 'msgCtl'
                })
                .when('/manage:id',{
                  templateUrl: 'tpl/msgDetail.html',
                  controller: 'msgDetailCtl'
                })
                .when('/book',{
                  templateUrl: 'tpl/contactList.html',
                  controller: 'contactListCtl'
                })
                .when('/book:id',{
                  templateUrl: 'tpl/person.html',
                  controller: 'contactListCtl'
                })
                .when('/main',{
                  templateUrl: 'tpl/mian.html',
                  controller: 'mainCtl'
                })
                .when('/myself',{
                  templateUrl: 'tpl/myself.html',
                  controller: 'myselfCtl'
                })
                .when('/friends',{
                  templateUrl:'tpl/friends.html',
                  controller:'myselfCtrl'
                })
                .when('/login',{
                  templateUrl:'tpl/login.html',
                  controller:'loginCtrl'
                })
                .otherwise({redirectTo:'/login'});

   }])
   
  
})
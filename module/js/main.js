/**
 * Created by Administrator on 2017/3/16.
 */
/**
 * 入口文件
 * 2014-11-30 mon
 */
require.config({
    baseUrl: "js/",
    paths: {
        "jquery": "jquery-1.7.1.min",
        "angular": "angular",
        "angular-route": "angular-route",
        "ionic":"ionic",
        "ionic-bundle":"ionic.bundle",

        "app" : "app",
        "routes":"appRoute",
        "controller":"controller"
        //"routes":"routes"
    }
    ,
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            deps: ["jquery"],
            exports: 'angular'
        },
        'angular-route':{
            deps: ["jquery","angular"],
            exports: 'angular-route'
        },
        'ionic':{
            deps: ["jquery","angular","angular-route"],
            exports: 'ionic'
        },
        'ionic-bundle':{
            deps: ["jquery","angular","angular-route","ionic"],
            exports: 'ionic-bundle'
        },
        'routes': {
            deps:["jquery","angular","angular-route","ionic","ionic-bundle"],
            exports: 'routes'
        }
    }
});


require(['jquery','angular','angular-route','ionic','ionic-bundle','routes'],function ($,angular){
    $(function () {
        angular.bootstrap(document,["wechat"]);

    })

});

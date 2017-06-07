define(['app'], function(app){

    return app.controller('parentCtrl',function($scope, $ionicSideMenuDelegate){
        name="lili";
        $scope.toggleLeftSideMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
        .controller('msgCtl', function ($scope, $route) {
            $scope.$route = $route;
            $scope.name=loginName;
            $scope.msgList=[
                {name:'Venkman',intro:'Back off, man. I\'m a scientist.',message:0},
                {name:'Venkman',intro:'Back off, man. I\'m a scientist.',message:4},
                {name:'Venkman',intro:'Back off, man. I\'m a scientist.',message:3},
                {name:'Venkman',intro:'Back off, man. I\'m a scientist.',message:0}];
        })
        .controller('msgDetailCtl', function ($scope, $route,$routeParams) {
            $scope.$route = $route;
            $scope.id=$routeParams.id;
            $scope.showMore=function(){
                if($scope.more){
                    $scope.more=0;
                }else{
                    $scope.more=1;
                }
            }
        })
        .controller('loginCtrl',function($scope,$route,$http,$location){
            $scope.$route = $route;

            $scope.goLogin=function(){
                var uname=$scope.uname;
                var pwd= $scope.pwd;
                loginName="lili";
                $location.path("/manage");
                //$http({
                //    url:'data/2_login.php',
                //    method:'POST',
                //    data:{uname:uname,pwd:pwd}
                //}).success(function (response) {
                //    if(response.IsSuccess=='true'){
                //        loginId=response.uId;
                //        loginName=uname;
                //        $location.path("/manage");
                //    }
                //});
            }
        })
        .controller('contactListCtl', function ($scope, $route) { $scope.$route = $route;})
        .controller('mainCtl', function ($scope, $route) { $scope.$route = $route;})
        .controller('myselfCtl', function ($scope, $route) {
            $scope.$route = $route;
            $scope.name=loginName;
        })

})
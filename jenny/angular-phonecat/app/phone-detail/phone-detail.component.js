/**
 * Created by Administrator on 2017/3/23.
 */
angular.module("phoneDetail",['ngRoute','core.phone'])
        .component("phoneDetail",{
             templateUrl:"phone-detail/phone-detail.template.html",
             controller:["Phone","$routeParams",
                function PhoneDetailController(Phone,$routeParams){
                    var self=this;
                    self.phone=Phone.get({
                        phoneId:$routeParams.phoneId
                    },function(phone){
                        console.log(phone);
                        self.setImage(phone.image[0]);
                    })

                    self.setImage = function setImage(imageUrl) {
                        self.mainImageUrl = imageUrl;
                    };

                }]
    })
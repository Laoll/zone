/**
 * Created by Administrator on 2017/3/23.
 */
'use strict';
// Define the `phoneList` module
angular.module('phoneList', ['core.phone'])
    .component("phoneList",{
        templateUrl:"phone-list/phone-list.template.html",
        controller:["Phone",
            function PhoneListController(Phone){
              this.phones =Phone.query();
              this.orderProp = 'age';
        }]
    });


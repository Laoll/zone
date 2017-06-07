/**
 * Created by Administrator on 2017/3/23.
 */

'use strict';
angular.module("core.phone",["ngResource"])
       .factory("Phone",["$resource",function($resource){
          return $resource("phones/:phoneId.json",{}, {
                  query:{
                      method:"GET",
                      params: {phoneId: 'phones'},
                      isArray: true
                  }
              })
    }]);

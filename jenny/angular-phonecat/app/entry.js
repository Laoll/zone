require('!style!css!./bower_components/bootstrap/dist/css/bootstrap.css'); //加载初始化样式
require('!style!css!./app.css'); //加载组件样式
require('!style!css!./app.animations.css'); //加载组件样式
var Jquery = require('./bower_components/jquery/dist/jquery.js');
var ngl = require('./bower_components/angular/angular.js');
var ani = require('./bower_components/angular-animate/angular-animate.js');
var  resour= require('./bower_components/angular-resource/angular-resource.js');
var rout = require('./bower_components/angular-route/angular-route.js');
var appModule = require('./app.module.js');
var appHello = require('./app.config.js');
var Appani = require('./app.animations.js');
var coreModule = require('./core/core.module.js');
var cFilter = require('./core/checkmark/checkmark.filter.js');
var phoneSer= require('./core/phone/phone.service.js');
var phoneCom = require('./phone-list/phone-list.component.js');
var detailCom = require('./phone-detail/phone-detail.component.js');
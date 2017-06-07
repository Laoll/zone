/**
 * Created by Administrator on 2017/5/25.
 */
// require('./css/main.css');
require('./less/main.less')
var sub = require('./sub');
// var $ = require('jquery');
var moment = require('moment');


var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(sub.generateText);
$('body').append('<p>look at me! now is ' + moment().format('YYYY-MM-DD HH:mm:ss') + '</p>');
